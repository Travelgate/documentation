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
    let queryInputs = "";
    let mutationInputs = "";
    let responseFields = "";

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
                mutationInputs += section;
            } else {
                queryInputs += section;
            }
        } else {
            responseFields += section;
        }
    });

    let documentation = "";
    if (queryInputs) documentation += `## Query Inputs\n\n${queryInputs}\n`;
    if (mutationInputs) documentation += `## Mutation Inputs\n\n${mutationInputs}\n`;
    if (responseFields) documentation += `## Returned Fields\n\n${responseFields}\n`;

    return documentation;
}

function insertIntoMdxFiles(schema) {
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

        // 🔹 **Genera los inputs y separa correctamente las Queries y Mutations**
        const requestBreakdown = generateBreakdownSection(nodes.filter(n => n.kind === "INPUT_OBJECT"));

        // 🔹 **Asegurar que "Returned Fields" no tenga Query Inputs**
        const responseBreakdown = generateBreakdownSection(nodes.filter(n => n.kind !== "INPUT_OBJECT"));

        const documentation = `${requestBreakdown}\n\n${responseBreakdown}`;
        content = insertDocumentation(content, documentation);

        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ Se ha actualizado: ${filePath}`);
    });
}

(function main() {
    const schema = loadSchema();
    insertIntoMdxFiles(schema);
})();
