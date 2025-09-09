const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch").default;

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

// ✅ Corrected function to filter and expand ENUMs properly
function filterRequiredTypes(schema) {
  const allTypes = schema.data.__schema.types;
  const typeMap = {};
  allTypes.forEach(type => typeMap[type.name] = type);

  const filteredTypes = new Set(REQUIRED_TYPES);

  function addEnumsRecursively(typeName) {
      if (!typeName || filteredTypes.has(typeName)) return;
      const type = typeMap[typeName];
      if (!type) return;

      if (type.kind === "ENUM") {
          console.log(`📌 Adding ENUM: ${typeName}`);
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

  let result = [];
  filteredTypes.forEach(typeName => {
      const typeInfo = getFullTypeInfo(typeName, typeMap);
      if (typeInfo) result.push(typeInfo);
  });

  return { types: result };
}

// ✅ Corrected function to properly process types, including ENUMs
function getFullTypeInfo(typeName, typeMap, visited = new Set()) {
    if (!typeName) return null;
    if (visited.has(typeName)) {
        // Prevent infinite recursion/cycles: just return a reference
        const t = typeMap[typeName];
        return t ? { name: t.name, kind: t.kind } : null;
    }
    visited.add(typeName);

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
            type: getTypeRef(field.type, typeMap, visited),
            args: field.args ? field.args.map(arg => ({
                name: arg.name,
                description: arg.description,
                type: getTypeRef(arg.type, typeMap, visited)
            })) : []
        }));
    }

    if (type.inputFields) {
        result.inputFields = type.inputFields.map(inputField => ({
            name: inputField.name,
            description: inputField.description,
            type: getTypeRef(inputField.type, typeMap, visited)
        }));
    }

    return result;
}

// Recursively unwrap all ofType layers and resolve full type info for complex types
function getTypeRef(type, typeMap, visited = new Set()) {
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

    // Prevent cycles: if already visited, just return a reference
    if (
        (current.kind === "OBJECT" ||
        current.kind === "INPUT_OBJECT" ||
        current.kind === "INTERFACE" ||
        current.kind === "UNION" ||
        current.kind === "ENUM") &&
        visited.has(current.name)
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
        const typeInfo = getFullTypeInfo(current.name, typeMap, visited);
        return {
            ...typeInfo,
            isRequired,
            isList,
            isItemNonNull
        };
    }

    // For scalars, just return name/kind
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
