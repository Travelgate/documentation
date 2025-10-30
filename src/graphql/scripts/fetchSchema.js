const fs = require("fs");
const path = require("path");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const GRAPHQL_ENDPOINT = "https://api.travelgate.com";
const TRAVELGATE_API_KEY = process.env.TRAVELGATE_API_KEY || "test0000-0000-0000-0000-000000000000";
const OUTPUT_FILE = path.join(__dirname, "../schema-json/inventory-schema.json");

// List of types to extract including all their subtypes
const REQUIRED_TYPES = new Set([
  "InventoryAvailDerivedRatesInput",
  "AvailDerivedRatesRs",
  "InventoryAvailOffersInput",
  "AvailRetrieveRs",
  "InventoryAvailRatesInput",
  "AvailRatesRs",
  "InventoryHotelCategoriesFilterInput",
  "CategoriesRs",
  "InventoryHotelMasterFilterInput",
  "HotelsRs",
  "InventoryHotelSetupFilterInput",
  "HotelsSetupRs",
  "InventoryContextsFilterInput",
  "InventoryContextsRs",
  "InventoryLocalitiesFilterInput",
  "LocalitiesRs",
  "GetMealPlansRs",
  "InventoryOffersSetupFilterInput",
  "OffersRs",
  "InventoryPriceDerivedRatesInput",
  "PriceDerivedRatesRs",
  "InventoryPriceMealPlanSupplementsInput",
  "PriceMealPlanSupplementsRs",
  "InventoryPriceRatesInput",
  "PriceRatesRs",
  "InventoryRatesSetupFilterInput",
  "RatesRs",
  "InventoryRoomsMasterFilterInput",
  "RoomsRs",
  "InventoryRoomsSetupFilterInput",
  "RoomsSetUpRs",
  "InventoryHotelsMasterSearchFilterInput",
  "HotelsRs",
  "InventoryLocalitiesSearchFilterInput",
  "LocalitiesRs",
  "InventoryHotelMasterCreateInput",
  "HotelsRs",
  "InventoryHotelsSetupCreateInput",
  "HotelsSetupRs",
  "InventoryLocalitiesCreateInput",
  "LocalitiesRs",
  "InventoryOffersSetupCreateInput",
  "OffersRs",
  "InventoryRatesSetupCreateInput",
  "RatesRs",
  "InventoryRoomMasterCreateInput",
  "RoomsRs",
  "InventoryRoomsSetupCreateInput",
  "RoomsSetUpRs",
  "InventoryHotelSetupDeleteInput",
  "HotelsSetupRs",
  "InventoryOffersSetupDeleteInput",
  "OffersRs",
  "InventoryRateSetupDeleteInput",
  "RatesRs",
  "InventoryRoomsSetupDeleteInput",
  "RoomsSetUpRs",
  "InventoryLoadAvailDerivedRatesInput",
  "AvailDerivedRatesRs",
  "InventoryLoadAvailOffersInput",
  "AvailOffersRs",
  "InventoryAvailRatesLoadInput",
  "AvailRatesRs",
  "InventoryLoadPriceDerivedRatesInput",
  "PriceDerivedRatesRs",
  "InventoryLoadPriceMealPlanSupplementsInput",
  "PriceMealPlanSupplementsRs",
  "InventoryLoadPriceRatesInput",
  "PriceRatesRs",
  "InventoryHotelsSetupUpdateInput",
  "HotelsSetupRs",
  "InventoryOffersSetupUpdateInput",
  "OffersRs",
  "InventoryRateSetupUpdateInput",
  "RatesRs",
  "InventoryRoomsSetupUpdateInput",
  "InventoryRoomSetupDeleteInput",
  "RoomsSetUpRs",
  "HotelCriteriaSearchInput",
  "HotelSettingsInput",
  "HotelXFilterSearchInput",
  "HotelSearch",
  "HotelCriteriaQuoteInput",
  "HotelSettingsInput",
  "HotelXFilterInput",
  "HotelQuote",
  "HotelBookInput",
  "HotelSettingsInput",
  "HotelXFilterInput",
  "HotelBookPayload",
  "HotelCancelInput",
  "HotelSettingsInput",
  "HotelXFilterInput",
  "HotelCancelPayload",
  "HotelCriteriaBookingInput",
  "HotelSettingsInput",
  "HotelXFilterInput",
  "HotelBooking",
  "HotelXBoardQueryInput",
  "BoardConnection",
  "HotelXCategoryQueryInput",
  "CategoryConnection",
  "HotelXDestinationListInput",
  "token",
  "DestinationConnection",
  "HotelXHotelListInput",
  "HotelConnection",
  "HotelXMetadataQueryInput",
  "MetadataConnection",
  "HotelXRoomQueryInput",
  "HotelOneStepQuoteInput",
  "HotelSettingsInput",
  "HotelFilterInput",
  "HotelOneStepQuote",
  "HotelOneStepBookInput",
  "HotelSettingsInput",
  "HotelFilterInput",
  "HotelOneStepBook",
  "settings",
  "price",
  "master",
  "rooms",
  "categories",

  ]);

async function fetchSchema() {
    console.log("⏳ Downloading GraphQL schema...");

    const QUERY_TYPES = {
      query: `
      {
        __schema {
          queryType { 
            name
            fields(includeDeprecated: false) { # 🔹 Only include non-deprecated fields
              ...FullField
            }
          }
          mutationType {
            name
            fields(includeDeprecated: false) { # 🔹 Only include non-deprecated fields
              ...FullField
            }
          }
          types {
            ...FullType
            possibleTypes { ...TypeRef } # 🔹 Include possible interface types
          }
        }
      }
    
      fragment FullField on __Field {  
        name
        description
        isDeprecated # 🔹 Check if the field is deprecated
        type {
          ...TypeRef
        }
        args {
          name
          description
          type {
            ...TypeRef
          }
        }
      }
    
      fragment FullType on __Type {
        kind
        name
        description
        fields(includeDeprecated: false) { # 🔹 Exclude deprecated fields
          ...FullField
        }
        inputFields {
          name
          description
          type {
            ...TypeRef
          }
        }
        enumValues {  
          name
          description
          isDeprecated # 🔹 Also check if ENUM values are deprecated
        }
        interfaces { 
          name
        }
        possibleTypes { 
          name
        }
      }
    
      fragment TypeRef on __Type {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
            }
          }
        }
      }
      `
    };
    

    try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Apikey " + TRAVELGATE_API_KEY,
      },
      body: JSON.stringify(QUERY_TYPES),
    });

    if (!response.ok) {
      throw new Error(
        `❌ Request failed: ${response.status} ${response.statusText}`
      );
    }

        const data = await response.json();

        console.log("✅ Schema downloaded successfully. Filtering information...");

        const filteredSchema = filterRequiredTypes(data);

        // Save the filtered schema to a JSON file
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(filteredSchema, null, 2), "utf-8");

        console.log(`✅ Filtered schema saved at: ${OUTPUT_FILE}`);
    } catch (error) {
        console.error(`❌ Failed to fetch schema: ${error.message}`);
    }
}

// Filters the schema to include only required types and their related ENUMs
function filterRequiredTypes(schema) {
  const allTypes = schema.data.__schema.types;
  const typeMap = {};
  allTypes.forEach(type => typeMap[type.name] = type);

  const filteredTypes = new Set(REQUIRED_TYPES);

  // Recursively adds ENUM types related to the required types
  function addEnumsRecursively(typeName) {
    if (!typeName || filteredTypes.has(typeName)) return;
    const type = typeMap[typeName];
    if (!type) return;

    if (type.kind === "ENUM") {
      filteredTypes.add(typeName);
    }

    if (type.fields) {
      type.fields.forEach(field => {
        if (field.type.name) addEnumsRecursively(field.type.name);
        if (field.type.ofType?.name) addEnumsRecursively(field.type.ofType.name);
      });
    }

    if (type.inputFields) {
      type.inputFields.forEach(inputField => {
        if (inputField.type.name) addEnumsRecursively(inputField.type.name);
        if (inputField.type.ofType?.name) addEnumsRecursively(inputField.type.ofType.name);
      });
    }
  }

  REQUIRED_TYPES.forEach(typeName => addEnumsRecursively(typeName));

  const MAX_DEPTH = 10; // Maximum depth for type expansion
  let result = [];
  filteredTypes.forEach(typeName => {
    const typeInfo = getFullTypeInfo(typeName, typeMap, new Set(), 0, MAX_DEPTH);
    if (typeInfo) result.push(typeInfo);
  });

  return { types: result };
}

// Returns the full type information, expanding fields and inputFields up to maxDepth
function getFullTypeInfo(typeName, typeMap, visited = new Set()) {
  // Adds maxDepth parameter to limit type expansion
  if (arguments.length < 5) {
    // Fallback to unlimited depth if not specified
    return getFullTypeInfo(typeName, typeMap, visited, 0, Infinity);
  }
  const depth = arguments[3];
  const maxDepth = arguments[4];
  if (!typeName) return null;
  if (visited.has(typeName) || depth > maxDepth) {
    // Prevent infinite recursion/cycles or excessive depth: return only a reference
    const t = typeMap[typeName];
    return t ? { name: t.name, kind: t.kind } : null;
  }
  // Create a new Set for each branch to ensure full expansion of each field
  const localVisited = new Set(visited);
  localVisited.add(typeName);

  const type = typeMap[typeName];
  if (!type) return null;

  let result = {
    name: type.name,
    kind: type.kind,
    description: type.description,
    fields: [],
    inputFields: []
  };

  if (type.kind === "ENUM") {
    result.enumValues = type.enumValues ? type.enumValues.map(ev => ({
      name: ev.name,
      description: ev.description || ""
    })) : [];
    console.log(`📌 ENUM processed: ${type.name}`, result.enumValues); 
  }

  if (type.fields) {
    result.fields = type.fields.map(field => ({
      name: field.name,
      description: field.description,
      type: getTypeRef(field.type, typeMap, localVisited, depth + 1, maxDepth),
      args: field.args ? field.args.map(arg => ({
        name: arg.name,
        description: arg.description,
        type: getTypeRef(arg.type, typeMap, localVisited, depth + 1, maxDepth)
      })) : []
    }));
  }

  if (type.inputFields) {
    result.inputFields = type.inputFields.map(inputField => ({
      name: inputField.name,
      description: inputField.description,
      type: getTypeRef(inputField.type, typeMap, localVisited, depth + 1, maxDepth)
    }));
  }

  return result;
}

// Recursively unwrap all ofType layers and resolve full type info for complex types
function getTypeRef(type, typeMap, visited = new Set()) {
  // Add maxDepth parameter to limit expansion
  // getTypeRef(type, typeMap, visited, depth, maxDepth)
  if (arguments.length < 5) {
    // Called from old code, fallback to unlimited depth
    return getTypeRef(type, typeMap, visited, 0, Infinity);
  }
  const depth = arguments[3];
  const maxDepth = arguments[4];
  if (!type) {
    return { name: undefined, kind: undefined };
  }

  let isRequired = false;
  let isList = false;
  let isItemNonNull = false;
  let current = type;

  // Recursively unwrap all NON_NULL and LIST layers
  while (current && (current.kind === "NON_NULL" || current.kind === "LIST")) {
    if (current.kind === "NON_NULL") {
      if (!isList) {
        isRequired = true;
      } else {
        isItemNonNull = true;
      }
      current = current.ofType;
    } else if (current.kind === "LIST") {
      isList = true;
      current = current.ofType;
    }
  }

  if (!current) {
    return { name: undefined, kind: undefined, isRequired, isList, isItemNonNull };
  }

  // Prevent cycles or excessive depth: if already visited or depth > maxDepth, just return a reference
  if (
    (current.kind === "OBJECT" ||
    current.kind === "INPUT_OBJECT" ||
    current.kind === "INTERFACE" ||
    current.kind === "UNION" ||
    current.kind === "ENUM") &&
    (visited.has(current.name) || depth > maxDepth)
  ) {
    return {
      name: current.name,
      kind: current.kind,
      isRequired,
      isList,
      isItemNonNull
    };
  }

  // For complex types, always resolve full info recursively
  if (
    current.kind === "OBJECT" ||
    current.kind === "INPUT_OBJECT" ||
    current.kind === "INTERFACE" ||
    current.kind === "UNION" ||
    current.kind === "ENUM"
  ) {
    const typeInfo = getFullTypeInfo(current.name, typeMap, visited, depth, maxDepth);
    return {
      ...typeInfo,
      isRequired,
      isList,
      isItemNonNull
    };
  }

  // ✅ ENUMs: include enumValues inline if available in typeMap
  if (current.kind === "ENUM" && typeMap[current.name]?.enumValues) {
    return {
      name: current.name,
      kind: current.kind,
      isRequired,
      isList,
      isItemNonNull,
      enumValues: typeMap[current.name].enumValues.map(ev => ({
        name: ev.name,
        description: ev.description || ""
      }))
    };
  }

  // SCALARS or fallback
  return {
    name: current.name,
    kind: current.kind,
    isRequired,
    isList,
    isItemNonNull
  };

}



// Run the script
if (require.main === module) {
    fetchSchema();
}
