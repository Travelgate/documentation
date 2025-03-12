const fs = require("fs");
const path = require("path");

const SCHEMA_PATH = path.join(__dirname, "../../../src/graphql/schema-json/inventory-schema.json");
const DOCS_BASE_PATH = path.join(__dirname, "../../../docs/apis");

// Importar el mapeo de archivos `.mdx`
const FILE_NODE_MAP = require("../node-map/fileNodeMap");

function loadSchema() {
    console.log("🔄 Cargando el esquema GraphQL...");
    return JSON.parse(fs.readFileSync(SCHEMA_PATH, "utf8"));
}

function findMatchingNodes(schema, nodeNames) {
    return schema.types.filter(type => nodeNames.includes(type.name));
}

function formatField(field, indent = 0) {
    const indentation = "  ".repeat(indent);

    if (!field.type) {
        console.warn(`⚠️ Tipo no definido para el campo: ${field.name}`);
        return "";
    }
  
    const requiredMark = field.type.isRequired ? "&nbsp;<span class=\"required\"> *</span>&nbsp;" : "";
  
    if (field.type.kind === "OBJECT" || field.type.kind === "INPUT_OBJECT") {
        const subFields = (field.type.fields || field.type.inputFields) 
            ? [...(field.type.fields || []), ...(field.type.inputFields || [])]
                .map(f => formatField(f, indent + 1))
                .join("\n") 
            : "";
        return `
  ${indentation}<details>
  ${indentation}  <summary>
  ${indentation}  **${field.name}**${requiredMark} (*${field.type.name}*)  
  ${indentation}  ${field.description ? field.description + "  " : ""}
  ${indentation}  </summary>
  ${subFields}
  ${indentation}</details>`;
    } else if (field.type.kind === "ENUM") {
        // ✅ Mejora: Separar los valores del enum en una lista clara
        const enumValues = field.type.enumValues 
            ? field.type.enumValues.map(v => `${indentation}  \`${v.name}\`  `).join("\n") 
            : "";
        return `
  ${indentation}<details style={{ pointerEvents: "none" }}>
  ${indentation}  <summary>
  ${indentation}  **${field.name}**${requiredMark} (*Enum of ${field.type.name}*)  
  ${indentation}  ${field.description ? field.description + "  " : ""}
  ${indentation}  Possible values:  
  ${enumValues}
  ${indentation}  </summary>
  ${indentation}</details>`;
    } else if (field.type.kind === "SCALAR" && field.type.name === "Int" && field.description) {
        // ✅ Soporte especial para SCALAR de tipo Int con valores en la descripción
        const formattedDescription = field.description.replace(/\n/g, `\n${indentation}  `);
        return `
  ${indentation}<details style={{ pointerEvents: "none" }}>
  ${indentation}  <summary>
  ${indentation}  **${field.name}**${requiredMark} (*Int*)  
  ${indentation}  ${formattedDescription}
  ${indentation}  </summary>
  ${indentation}</details>`;
    } else {
        return `
  ${indentation}<details style={{ pointerEvents: "none" }}>
  ${indentation}  <summary>
  ${indentation}  **${field.name}**${requiredMark} (*${field.type.name}*)  
  ${indentation}  ${field.description ? field.description + "  " : ""}
  ${indentation}  </summary>
  ${indentation}</details>`;
    }
  }
  


function removeOldDocumentation(content) {
    return content
        .replace(/## Query Inputs[\s\S]*?(?=## Returned Fields|## Examples|$)/, "")
        .replace(/## Mutation Inputs[\s\S]*?(?=## Returned Fields|## Examples|$)/, "")
        .replace(/## Returned Fields[\s\S]*?(?=## Examples|$)/, "");
}

function insertDocumentation(content, documentation) {
    content = removeOldDocumentation(content);
    if (/## Examples/.test(content)) {
        return content.replace(/## Examples/, `${documentation}\n\n## Examples`);
    }
    return content + `\n---\n${documentation}`;
}

// 🔹 **Detección correcta de Queries y Mutations**
function categorizeInputType(nodeName) {
    const mutationKeywords = ["Create", "Update", "Delete", "Load"];
    return mutationKeywords.some(keyword => nodeName.includes(keyword)) ? "Mutation Inputs" : "Query Inputs";
}

function generateBreakdownSection(nodes) {
    let queryInputs = [];
    let mutationInputs = [];
    let responseFields = [];

    nodes.forEach(node => {
        const isMutation = categorizeInputType(node.name) === "Mutation Inputs";
        const section = `
<details>
  <summary>
  **${node.name}** (*${node.kind}*)  
  ${node.description ? node.description + "  " : ""}
  </summary>
  ${node.inputFields ? node.inputFields.map(f => formatField(f, 1)).join("\n") : ""}
  ${node.fields ? node.fields.map(f => formatField(f, 1)).join("\n") : ""}
</details>
`;

        if (node.kind === "INPUT_OBJECT") {
            if (isMutation) {
                mutationInputs.push(section);
            } else {
                queryInputs.push(section);
            }
        } else {
            responseFields.push(section);
        }
    });

    return {
        queryInputs: queryInputs.length > 0 ? queryInputs.join("\n") : "",
        mutationInputs: mutationInputs.length > 0 ? mutationInputs.join("\n") : "",
        responseFields: responseFields.length > 0 ? responseFields.join("\n") : ""
    };
}


function insertIntoMdxFiles(schema) {
    const GENERATED_DOCS_PATH = path.join(__dirname, "../../../src/graphql/generated-docs");

    // Crear la carpeta donde se guardarán los archivos generados si no existe
    if (!fs.existsSync(GENERATED_DOCS_PATH)) {
        fs.mkdirSync(GENERATED_DOCS_PATH, { recursive: true });
    }

    Object.entries(FILE_NODE_MAP).forEach(([fileName, nodeNames]) => {
        const filePath = path.join(DOCS_BASE_PATH, fileName);

        if (!fs.existsSync(filePath)) {
            console.warn(`⚠️ Archivo no encontrado: ${filePath}`);
            return;
        }

        console.log(`🔍 Procesando archivo: ${filePath}`);
        const nodes = findMatchingNodes(schema, nodeNames);

        if (nodes.length === 0) {
            console.warn(`⚠️ No se encontraron nodos en el esquema para: ${filePath}`);
            return;
        }

        let content = fs.readFileSync(filePath, "utf8");

        // 🔹 Extraer imports actuales para evitar duplicados
        const existingImports = new Set(
            (content.match(/^import\s+.*from\s+["'][^"']+["'];/gm) || [])
        );

        let imports = new Set(); // Usamos un Set para evitar duplicados
        let queryInputs = "";
        let mutationInputs = "";
        let responseFields = "";

        nodes.forEach(node => {
            const docFileName = `${node.name}.mdx`;
            const docFilePath = path.join(GENERATED_DOCS_PATH, docFileName);

            console.log(`📄 Generando documentación en: ${docFilePath}`);
            let nodeDocumentation = generateBreakdownSection([node]);

            // Guardamos la documentación en archivos individuales
            fs.writeFileSync(
                docFilePath, 
                (nodeDocumentation.queryInputs || "") + 
                (nodeDocumentation.mutationInputs || "") + 
                (nodeDocumentation.responseFields || ""),
                "utf8"
            );

            // Generar import y componente JSX
            const relativeImportPath = path.relative(path.dirname(filePath), docFilePath).replace(/\\/g, "/");
            const importStatement = `import ${node.name} from "${relativeImportPath}";`;

            if (!existingImports.has(importStatement)) {
                imports.add(importStatement);
            }

            // Agregar el nodo a la sección correspondiente
            if (node.kind === "INPUT_OBJECT") {
                if (categorizeInputType(node.name) === "Mutation Inputs") {
                    mutationInputs += `\n<${node.name} />`;
                } else {
                    queryInputs += `\n<${node.name} />`;
                }
            } else {
                responseFields += `\n<${node.name} />`;
            }
        });

        // ✅ **Añadir el campo "token" si está en FILE_NODE_MAP**
        if (nodeNames.includes("token")) {
            console.log(`➕ Añadiendo campo "token" en: ${filePath}`);
            const tokenFileName = `token.mdx`;
            const tokenFilePath = path.join(GENERATED_DOCS_PATH, tokenFileName);

            if (!fs.existsSync(tokenFilePath)) {
                const tokenInput = `
<details style={{ pointerEvents: "none" }}>
  <summary>
  **token** (*String*)  
  A unique authentication token required for API requests.
  </summary>
</details>`;
                fs.writeFileSync(tokenFilePath, tokenInput, "utf8");
            }

            // Agregar import y componente si no existe
            const tokenImport = `import Token from "../../../../../src/graphql/generated-docs/token.mdx";`;
            if (!existingImports.has(tokenImport)) {
                imports.add(tokenImport);
            }
            queryInputs += `\n<Token />`;
        }

        // 🔹 Insertar los imports justo después del bloque `---`
        const yamlBlockMatch = content.match(/(---\s*\n[\s\S]*?\n---)/);
        if (yamlBlockMatch) {
            const yamlBlock = yamlBlockMatch[1]; // Extraer el bloque YAML
            content = content.replace(yamlBlock, yamlBlock + "\n\n" + Array.from(imports).join("\n"));
        } else {
            // Si no hay bloque YAML, añadir los imports al inicio (como último recurso)
            content = Array.from(imports).join("\n") + "\n\n" + content;
        }

        // 🔹 Construir la documentación insertando los títulos solo una vez
        let documentation = "";
        if (queryInputs) documentation += `## Query Inputs\n${queryInputs}\n`;
        if (mutationInputs) documentation += `## Mutation Inputs\n${mutationInputs}\n`;
        if (responseFields) documentation += `## Returned Fields\n${responseFields}\n`;

        // 🔹 Insertar la documentación antes de "## Examples"
        content = insertDocumentation(content, documentation);

        // 🔹 Escribir de nuevo el archivo actualizado
        const fileDir = path.dirname(filePath);
        if (!fs.existsSync(fileDir)) {
            fs.mkdirSync(fileDir, { recursive: true });
        }
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ Se ha actualizado el archivo: ${filePath}`);
    });
}



(function main() {
    const schema = loadSchema();
    insertIntoMdxFiles(schema);
})();
