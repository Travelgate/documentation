/*
IMPORTANT: This file was mainly generated with the help of Claude Sonnet 4. If you want to make changes
using AI, I recommend you to use Sonnet 4 or later. It took 17 versions to get to this point :)
*/
const { buildClientSchema, getIntrospectionQuery } = require('graphql');
const TRAVELGATE_API_KEY ='test0000-0000-0000-0000-000000000000';

// Helper function to safely format default values
function formatDefaultValue(value) {
    if (value === undefined || value === null) return '';

    try {
        if (typeof value === 'string') {
            return ` = "${value.replace(/"/g, '\\"')}"`;
        } else if (typeof value === 'number' || typeof value === 'boolean') {
            return ` = ${value}`;
        } else if (Array.isArray(value)) {
            return ` = [${value.map(v => typeof v === 'string' ? `"${v.replace(/"/g, '\\"')}"` : v).join(', ')}]`;
        } else if (typeof value === 'object') {
            // For object values, use JSON but be careful with quotes
            return ` = ${JSON.stringify(value).replace(/"/g, '\\"')}`;
        } else {
            return ` = ${String(value)}`;
        }
    } catch (error) {
        // If we can't format the default value safely, skip it
        console.warn(`Warning: Could not format default value for: ${value}`);
        return '';
    }
}

async function loadFilteredSchema() {
    try {
        console.log('Fetching GraphQL schema...');

        // Dynamic import for node-fetch v3+ or use built-in fetch
        let fetch;
        try {
            // Try to use built-in fetch (Node 18+)
            fetch = globalThis.fetch;
            if (!fetch) {
                // Fallback to node-fetch
                const nodeFetch = await import('node-fetch');
                fetch = nodeFetch.default;
            }
        } catch (error) {
            // Try requiring node-fetch v2
            fetch = require('node-fetch');
        }

        const response = await fetch('https://api.travelgatex.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Apikey ' + TRAVELGATE_API_KEY
            },
            body: JSON.stringify({
                query: getIntrospectionQuery()
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.errors) {
            throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
        }

        const schema = buildClientSchema(result.data);

        // Define which operations to include
        const allowedQueries = ['hotelX', 'inventory'];
        const allowedMutations = ['hotelX', 'inventory'];

        // Build filtered schema string
        let filteredSchema = '';

        // Add Query type with descriptions
        const queryType = schema.getQueryType();
        if (queryType) {
            // Add Query type description
            if (queryType.description) {
                filteredSchema += formatDescription(queryType.description);
            }

            filteredSchema += 'type Query {\n';

            allowedQueries.forEach(queryName => {
                const field = queryType.getFields()[queryName];
                if (field) {
                    // Add field description
                    if (field.description) {
                        filteredSchema += formatDescription(field.description, '  ');
                    }

                    const args = field.args.map(arg => {
                        let argStr = `${arg.name}: ${arg.type.toString()}`;
                        argStr += formatDefaultValue(arg.defaultValue);
                        return argStr;
                    }).join(', ');

                    filteredSchema += `  ${queryName}`;
                    if (args) {
                        filteredSchema += `(${args})`;
                    }
                    filteredSchema += `: ${field.type.toString()}`;

                    // Add deprecation info
                    if (field.isDeprecated) {
                        filteredSchema += ` @deprecated`;
                        if (field.deprecationReason) {
                            filteredSchema += `(reason: "${field.deprecationReason}")`;
                        }
                    }

                    filteredSchema += '\n';
                }
            });

            filteredSchema += '}\n\n';
        }

        // Add Mutation type with descriptions
        const mutationType = schema.getMutationType();
        if (mutationType) {
            const availableMutations = allowedMutations.filter(mutationName =>
                mutationType.getFields()[mutationName]
            );

            if (availableMutations.length > 0) {
                // Add Mutation type description
                if (mutationType.description) {
                    filteredSchema += formatDescription(mutationType.description);
                }

                filteredSchema += 'type Mutation {\n';

                availableMutations.forEach(mutationName => {
                    const field = mutationType.getFields()[mutationName];

                    // Add field description
                    if (field.description) {
                        filteredSchema += formatDescription(field.description, '  ');
                    }

                    const args = field.args.map(arg => {
                        let argStr = `${arg.name}: ${arg.type.toString()}`;
                        argStr += formatDefaultValue(arg.defaultValue);
                        return argStr;
                    }).join(', ');

                    filteredSchema += `  ${mutationName}`;
                    if (args) {
                        filteredSchema += `(${args})`;
                    }
                    filteredSchema += `: ${field.type.toString()}`;

                    // Add deprecation info
                    if (field.isDeprecated) {
                        filteredSchema += ` @deprecated`;
                        if (field.deprecationReason) {
                            filteredSchema += `(reason: "${field.deprecationReason}")`;
                        }
                    }

                    filteredSchema += '\n';
                });

                filteredSchema += '}\n\n';
            }
        }

        // Collect all types referenced in the filtered operations - ENHANCED VERSION
        const referencedTypes = new Set();

        // Helper function to collect type references
        function collectTypeReferences(type) {
            if (!type) return;

            if (type.ofType) {
                collectTypeReferences(type.ofType);
                return;
            }

            if (!['String', 'Int', 'Float', 'Boolean', 'ID'].includes(type.name) &&
                !type.name.startsWith('__')) {
                referencedTypes.add(type.name);
            }
        }

        // Collect types from queries
        if (queryType) {
            allowedQueries.forEach(queryName => {
                const field = queryType.getFields()[queryName];
                if (field) {
                    collectTypeReferences(field.type);
                    field.args.forEach(arg => collectTypeReferences(arg.type));
                }
            });
        }

        // Collect types from mutations
        if (mutationType) {
            allowedMutations.forEach(mutationName => {
                const field = mutationType.getFields()[mutationName];
                if (field) {
                    collectTypeReferences(field.type);
                    field.args.forEach(arg => collectTypeReferences(arg.type));
                }
            });
        }

        // Get all types from schema
        const typeMap = schema.getTypeMap();

        // Enhanced function to recursively collect ALL dependent types
        function collectAllDependentTypes(typeName, visited = new Set()) {
            if (visited.has(typeName) || ['String', 'Int', 'Float', 'Boolean', 'ID'].includes(typeName)) {
                return visited;
            }

            visited.add(typeName);
            const type = typeMap[typeName];

            if (!type || type.name.startsWith('__')) return visited;

            const {
                GraphQLObjectType,
                GraphQLInputObjectType,
                GraphQLInterfaceType,
                GraphQLUnionType,
                GraphQLEnumType,
                GraphQLScalarType
            } = require('graphql');

            if (type instanceof GraphQLObjectType) {
                // Get implemented interfaces
                const interfaces = type.getInterfaces();
                interfaces.forEach(interfaceType => {
                    if (!visited.has(interfaceType.name)) {
                        collectAllDependentTypes(interfaceType.name, visited);
                    }
                });

                // Get field types
                const fields = type.getFields();
                Object.values(fields).forEach(field => {
                    let fieldType = field.type;
                    while (fieldType.ofType) {
                        fieldType = fieldType.ofType;
                    }
                    if (fieldType.name && !fieldType.name.startsWith('__') && !visited.has(fieldType.name)) {
                        collectAllDependentTypes(fieldType.name, visited);
                    }

                    // Check field arguments
                    if (field.args) {
                        field.args.forEach(arg => {
                            let argType = arg.type;
                            while (argType.ofType) {
                                argType = argType.ofType;
                            }
                            if (argType.name && !argType.name.startsWith('__') && !visited.has(argType.name)) {
                                collectAllDependentTypes(argType.name, visited);
                            }
                        });
                    }
                });

            } else if (type instanceof GraphQLInputObjectType) {
                const fields = type.getFields();
                Object.values(fields).forEach(field => {
                    let fieldType = field.type;
                    while (fieldType.ofType) {
                        fieldType = fieldType.ofType;
                    }
                    if (fieldType.name && !fieldType.name.startsWith('__') && !visited.has(fieldType.name)) {
                        collectAllDependentTypes(fieldType.name, visited);
                    }
                });

            } else if (type instanceof GraphQLInterfaceType) {
                // Get fields of interface
                const fields = type.getFields();
                Object.values(fields).forEach(field => {
                    let fieldType = field.type;
                    while (fieldType.ofType) {
                        fieldType = fieldType.ofType;
                    }
                    if (fieldType.name && !fieldType.name.startsWith('__') && !visited.has(fieldType.name)) {
                        collectAllDependentTypes(fieldType.name, visited);
                    }

                    // Check field arguments
                    if (field.args) {
                        field.args.forEach(arg => {
                            let argType = arg.type;
                            while (argType.ofType) {
                                argType = argType.ofType;
                            }
                            if (argType.name && !argType.name.startsWith('__') && !visited.has(argType.name)) {
                                collectAllDependentTypes(argType.name, visited);
                            }
                        });
                    }
                });

                // Get all types that implement this interface
                const implementingTypes = Object.values(typeMap).filter(t =>
                    t instanceof GraphQLObjectType &&
                    t.getInterfaces().some(i => i.name === typeName)
                );

                implementingTypes.forEach(implType => {
                    if (!visited.has(implType.name)) {
                        collectAllDependentTypes(implType.name, visited);
                    }
                });

            } else if (type instanceof GraphQLUnionType) {
                // Get all union member types
                type.getTypes().forEach(unionMemberType => {
                    if (!visited.has(unionMemberType.name)) {
                        collectAllDependentTypes(unionMemberType.name, visited);
                    }
                });
            }

            return visited;
        }

        // Collect all dependent types starting from the initial references
        const allNeededTypes = new Set();
        referencedTypes.forEach(typeName => {
            const dependentTypes = collectAllDependentTypes(typeName);
            dependentTypes.forEach(t => allNeededTypes.add(t));
        });

        console.log(`Found ${allNeededTypes.size} types to include:`, Array.from(allNeededTypes).sort());

        // Helper function to format description with proper escaping
        function formatDescription(description, indent = '') {
            if (!description) return '';

            // Clean up the description
            const cleanDesc = description.trim();
            if (!cleanDesc) return '';

            // Escape triple quotes and backslashes in the description
            const escapedDesc = cleanDesc
                .replace(/\\/g, '\\\\')  // Escape backslashes
                .replace(/"""/g, '\\"""'); // Escape triple quotes

            // Split into lines for proper formatting
            const lines = escapedDesc.split('\n').map(line => line.trim());

            if (lines.length === 1 && lines[0].length < 70 && !lines[0].includes('\n')) {
                // Single line description - use quotes if it's short and simple
                return `${indent}"${lines[0].replace(/"/g, '\\"')}"\n`;
            } else {
                // Multi-line description - use triple quotes
                let result = `${indent}"""\n`;
                lines.forEach(line => {
                    result += `${indent}${line}\n`;
                });
                result += `${indent}"""\n`;
                return result;
            }
        }

        // Helper function to print a GraphQL type with descriptions
        function printType(type) {
            const { GraphQLObjectType, GraphQLInputObjectType, GraphQLEnumType, GraphQLScalarType, GraphQLInterfaceType, GraphQLUnionType } = require('graphql');

            if (type instanceof GraphQLObjectType) {
                let typeDef = '';

                // Add type description
                if (type.description) {
                    typeDef += formatDescription(type.description);
                }

                typeDef += `type ${type.name}`;

                // Add interfaces
                const interfaces = type.getInterfaces();
                if (interfaces.length > 0) {
                    typeDef += ` implements ${interfaces.map(i => i.name).join(' & ')}`;
                }

                typeDef += ' {\n';

                const fields = type.getFields();
                Object.values(fields).forEach(field => {
                    // Add field description
                    if (field.description) {
                        typeDef += formatDescription(field.description, '  ');
                    }

                    const args = field.args.map(arg => {
                        let argStr = `${arg.name}: ${arg.type.toString()}`;
                        argStr += formatDefaultValue(arg.defaultValue);
                        return argStr;
                    }).join(', ');

                    typeDef += `  ${field.name}`;
                    if (args) {
                        typeDef += `(${args})`;
                    }
                    typeDef += `: ${field.type.toString()}`;

                    // Add deprecation info
                    if (field.isDeprecated) {
                        typeDef += ` @deprecated`;
                        if (field.deprecationReason) {
                            typeDef += `(reason: "${field.deprecationReason}")`;
                        }
                    }

                    typeDef += '\n';
                });

                typeDef += '}';
                return typeDef;

            } else if (type instanceof GraphQLInputObjectType) {
                let typeDef = '';

                // Add type description
                if (type.description) {
                    typeDef += formatDescription(type.description);
                }

                typeDef += `input ${type.name} {\n`;

                const fields = type.getFields();
                Object.values(fields).forEach(field => {
                    // Add field description
                    if (field.description) {
                        typeDef += formatDescription(field.description, '  ');
                    }

                    typeDef += `  ${field.name}: ${field.type.toString()}`;
                    typeDef += formatDefaultValue(field.defaultValue);
                    typeDef += '\n';
                });

                typeDef += '}';
                return typeDef;

            } else if (type instanceof GraphQLEnumType) {
                let typeDef = '';

                // Add type description
                if (type.description) {
                    typeDef += formatDescription(type.description);
                }

                typeDef += `enum ${type.name} {\n`;

                const values = type.getValues();
                values.forEach(value => {
                    // Add enum value description
                    if (value.description) {
                        typeDef += formatDescription(value.description, '  ');
                    }

                    typeDef += `  ${value.name}`;

                    // Add deprecation info
                    if (value.isDeprecated) {
                        typeDef += ` @deprecated`;
                        if (value.deprecationReason) {
                            typeDef += `(reason: "${value.deprecationReason}")`;
                        }
                    }

                    typeDef += '\n';
                });

                typeDef += '}';
                return typeDef;

            } else if (type instanceof GraphQLScalarType) {
                let typeDef = '';

                // Add type description
                if (type.description) {
                    typeDef += formatDescription(type.description);
                }

                typeDef += `scalar ${type.name}`;
                return typeDef;

            } else if (type instanceof GraphQLInterfaceType) {
                let typeDef = '';

                // Add type description
                if (type.description) {
                    typeDef += formatDescription(type.description);
                }

                typeDef += `interface ${type.name} {\n`;

                const fields = type.getFields();
                Object.values(fields).forEach(field => {
                    // Add field description
                    if (field.description) {
                        typeDef += formatDescription(field.description, '  ');
                    }

                    const args = field.args.map(arg => {
                        let argStr = `${arg.name}: ${arg.type.toString()}`;
                        argStr += formatDefaultValue(arg.defaultValue);
                        return argStr;
                    }).join(', ');

                    typeDef += `  ${field.name}`;
                    if (args) {
                        typeDef += `(${args})`;
                    }
                    typeDef += `: ${field.type.toString()}`;

                    // Add deprecation info
                    if (field.isDeprecated) {
                        typeDef += ` @deprecated`;
                        if (field.deprecationReason) {
                            typeDef += `(reason: "${field.deprecationReason}")`;
                        }
                    }

                    typeDef += '\n';
                });

                typeDef += '}';
                return typeDef;

            } else if (type instanceof GraphQLUnionType) {
                let typeDef = '';

                // Add type description
                if (type.description) {
                    typeDef += formatDescription(type.description);
                }

                const types = type.getTypes().map(t => t.name).join(' | ');
                typeDef += `union ${type.name} = ${types}`;
                return typeDef;
            }

            return `# Unknown type: ${type.name}`;
        }

        // Add type definitions in the correct order with enhanced dependency handling
        const addedTypes = new Set();
        const processingTypes = new Set();

        // Sort types by dependency order: scalars, enums, interfaces, inputs, objects, unions
        function getTypePriority(type) {
            const { GraphQLObjectType, GraphQLInputObjectType, GraphQLEnumType, GraphQLScalarType, GraphQLInterfaceType, GraphQLUnionType } = require('graphql');

            if (type instanceof GraphQLScalarType) return 1;
            if (type instanceof GraphQLEnumType) return 2;
            if (type instanceof GraphQLInterfaceType) return 3;
            if (type instanceof GraphQLInputObjectType) return 4;
            if (type instanceof GraphQLObjectType) return 5;
            if (type instanceof GraphQLUnionType) return 6;
            return 7;
        }

        function addTypeDefinition(typeName) {
            // Skip if already added or is a built-in scalar
            if (addedTypes.has(typeName) || ['String', 'Int', 'Float', 'Boolean', 'ID'].includes(typeName)) {
                return;
            }

            // Skip if currently being processed (circular dependency)
            if (processingTypes.has(typeName)) {
                return;
            }

            const type = typeMap[typeName];
            if (!type || type.name.startsWith('__')) return;

            // Mark as being processed
            processingTypes.add(typeName);

            const { GraphQLObjectType, GraphQLInputObjectType, GraphQLInterfaceType } = require('graphql');

            // Add interface dependencies first (for object types that implement interfaces)
            if (type instanceof GraphQLObjectType) {
                const interfaces = type.getInterfaces();
                interfaces.forEach(interfaceType => {
                    if (allNeededTypes.has(interfaceType.name) &&
                        !addedTypes.has(interfaceType.name) &&
                        !processingTypes.has(interfaceType.name)) {
                        addTypeDefinition(interfaceType.name);
                    }
                });
            }

            // Add field type dependencies
            if (type instanceof GraphQLObjectType || type instanceof GraphQLInputObjectType || type instanceof GraphQLInterfaceType) {
                const fields = type.getFields();
                Object.values(fields).forEach(field => {
                    let fieldType = field.type;
                    while (fieldType.ofType) {
                        fieldType = fieldType.ofType;
                    }
                    if (fieldType.name &&
                        allNeededTypes.has(fieldType.name) &&
                        !addedTypes.has(fieldType.name) &&
                        !processingTypes.has(fieldType.name)) {
                        addTypeDefinition(fieldType.name);
                    }

                    // Add argument type dependencies
                    if (field.args) {
                        field.args.forEach(arg => {
                            let argType = arg.type;
                            while (argType.ofType) {
                                argType = argType.ofType;
                            }
                            if (argType.name &&
                                allNeededTypes.has(argType.name) &&
                                !addedTypes.has(argType.name) &&
                                !processingTypes.has(argType.name)) {
                                addTypeDefinition(argType.name);
                            }
                        });
                    }
                });
            }

            // Remove from processing set and add to completed set
            processingTypes.delete(typeName);
            addedTypes.add(typeName);
            filteredSchema += printType(type) + '\n\n';
        }

        // Sort types by dependency order and add them
        const sortedTypes = Array.from(allNeededTypes).sort((a, b) => {
            const typeA = typeMap[a];
            const typeB = typeMap[b];

            if (!typeA || !typeB) return 0;

            const priorityA = getTypePriority(typeA);
            const priorityB = getTypePriority(typeB);

            if (priorityA !== priorityB) {
                return priorityA - priorityB;
            }

            // Secondary sort by name for consistency
            return a.localeCompare(b);
        });

        sortedTypes.forEach(typeName => {
            if (!addedTypes.has(typeName)) {
                addTypeDefinition(typeName);
            }
        });

        console.log('Schema loaded and filtered successfully');
        return filteredSchema;

    } catch (error) {
        console.error('Error loading GraphQL schema:', error);
        throw error;
    }
}

module.exports = { loadFilteredSchema };
