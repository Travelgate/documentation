const fs = require("fs");
const path = require("path");

const SCHEMA_PATH = path.join(__dirname, "../../../src/graphql/schema-json/inventory-schema.json");
const DOCS_BASE_PATH = path.join(__dirname, "../../../docs/apis");

// Import the mapping of .mdx files
const FILE_NODE_MAP = require("../node-map/fileNodeMap");

function loadSchema() {
    console.log("🔄 Loading GraphQL schema...");
    return JSON.parse(fs.readFileSync(SCHEMA_PATH, "utf8"));
}

function findMatchingNodes(schema, nodeNames) {
    return schema.types.filter(type => nodeNames.includes(type.name));
}

function formatField(field, indent = 0) {
    const indentation = "  ".repeat(indent);

    if (!field.type) {
        console.warn(`⚠️ Type not defined for field: ${field.name}`);
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
        // Display enum values as a clear list
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
        // Special support for Int SCALARs with values in the description
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

// Correct detection of Queries and Mutations
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

    // Create the folder for generated files if it doesn't exist
    if (!fs.existsSync(GENERATED_DOCS_PATH)) {
        fs.mkdirSync(GENERATED_DOCS_PATH, { recursive: true });
    }

    Object.entries(FILE_NODE_MAP).forEach(([fileName, nodeNames]) => {
        const filePath = path.join(DOCS_BASE_PATH, fileName);

        if (!fs.existsSync(filePath)) {
            console.warn(`⚠️ File not found: ${filePath}`);
            return;
        }

        console.log(`🔍 Processing file: ${filePath}`);
        const nodes = findMatchingNodes(schema, nodeNames);

        if (nodes.length === 0) {
            console.warn(`⚠️ No nodes found in schema for: ${filePath}`);
            return;
        }

        let content = fs.readFileSync(filePath, "utf8");

        // Extract current imports to avoid duplicates
        const existingImports = new Set(
            (content.match(/^import\s+.*from\s+["'][^"']+["'];/gm) || [])
        );

        let imports = new Set(); // Use a Set to avoid duplicate imports
        let queryInputs = "";
        let mutationInputs = "";
        let responseFields = "";

        nodes.forEach(node => {
            const docFileName = `${node.name}.mdx`;
            const docFilePath = path.join(GENERATED_DOCS_PATH, docFileName);

            console.log(`📄 Generating documentation in: ${docFilePath}`);
            let nodeDocumentation = generateBreakdownSection([node]);

            // Save documentation in individual files
            fs.writeFileSync(
                docFilePath,
                (nodeDocumentation.queryInputs || "") +
                (nodeDocumentation.mutationInputs || "") +
                (nodeDocumentation.responseFields || ""),
                "utf8"
            );

            // Generate import and JSX component
            const relativeImportPath = path.relative(path.dirname(filePath), docFilePath).replace(/\\/g, "/");
            const importStatement = `import ${node.name} from "${relativeImportPath}";`;

            if (!existingImports.has(importStatement)) {
                imports.add(importStatement);
            }

            // Add the node to the corresponding section
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

        // Add the "token" field if present in FILE_NODE_MAP
        if (nodeNames.includes("token")) {
            console.log(`➕ Adding \"token\" field in: ${filePath}`);
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

            // Add import and component if not present
            const tokenImport = `import Token from "../../../../../src/graphql/generated-docs/token.mdx";`;
            if (!existingImports.has(tokenImport)) {
                imports.add(tokenImport);
            }
            queryInputs += `\n<Token />`;
        }

        // Insert the imports right after the YAML block
        const yamlBlockMatch = content.match(/(---\s*\n[\s\S]*?\n---)/);
        if (yamlBlockMatch) {
            const yamlBlock = yamlBlockMatch[1]; // Extract the YAML block
            // Remove empty lines between the YAML block and the imports
            const afterYaml = content.split(yamlBlock)[1] || "";
            const cleanedAfterYaml = afterYaml.replace(/^\s*\n+/g, "");
            content = yamlBlock + "\n" + Array.from(imports).join("\n") + cleanedAfterYaml;
        } else {
            // If there is no YAML block, add the imports at the beginning (as a last resort)
            content = Array.from(imports).join("\n") + "\n" + content.replace(/^\s*\n+/g, "");
        }

        // Build the documentation, inserting each section only once
        let documentation = "";
        if (queryInputs) documentation += `## Query Inputs\n${queryInputs}\n`;
        if (mutationInputs) documentation += `## Mutation Inputs\n${mutationInputs}\n`;
        if (responseFields) documentation += `## Returned Fields\n${responseFields}\n`;

        // Insert documentation before "## Examples"
        content = insertDocumentation(content, documentation);

        // Write the updated file back to disk
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ File updated: ${filePath}`);
    });
}

(function main() {
    const schema = loadSchema();
    insertIntoMdxFiles(schema);
})();