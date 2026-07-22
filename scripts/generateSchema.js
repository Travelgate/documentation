const fs = require('fs');
const { loadFilteredSchema } = require('../utils/schemaLoader');

async function generateSchemaFile() {
    const schema = await loadFilteredSchema();
    fs.writeFileSync('./schemas/filtered-schema.graphql', schema);
    console.log('Schema file generated successfully');
}

generateSchemaFile().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
