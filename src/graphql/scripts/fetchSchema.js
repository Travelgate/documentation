const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const GRAPHQL_ENDPOINT = "https://api.travelgatex.com";
const BEARER_TOKEN = "Add your Bearer here"; // Reemplázalo con tu token real

const OUTPUT_FILE = path.join(__dirname, "../schema-json/inventory-schema.json");

// Lista de tipos que queremos extraer con todos sus subtipos
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
    console.log("⏳ Descargando el esquema de GraphQL...");

    const QUERY_TYPES = {
      query: `
      {
        __schema {
          queryType { 
            name
            fields(includeDeprecated: false) { # 🔹 Solo incluir campos no deprecados
              ...FullField
            }
          }
          mutationType {
            name
            fields(includeDeprecated: false) { # 🔹 Solo incluir campos no deprecados
              ...FullField
            }
          }
          types {
            ...FullType
            possibleTypes { ...TypeRef } # 🔹 Incluir posibles tipos de interfaces
          }
        }
      }
    
      fragment FullField on __Field {  
        name
        description
        isDeprecated # 🔹 Ahora verificamos si está deprecado
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
        fields(includeDeprecated: false) { # 🔹 Excluir nodos deprecados
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
          isDeprecated # 🔹 También verificamos si los valores de ENUM están deprecados
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
                "Authorization": `Bearer ${BEARER_TOKEN}`
            },
            body: JSON.stringify(QUERY_TYPES)
        });

        if (!response.ok) {
            throw new Error(`❌ Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        console.log("✅ Esquema descargado correctamente. Filtrando información...");

        const filteredSchema = filterRequiredTypes(data);

        // Guardar el esquema filtrado en un archivo JSON
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(filteredSchema, null, 2), "utf-8");

        console.log(`✅ Esquema filtrado guardado en: ${OUTPUT_FILE}`);
    } catch (error) {
        console.error(`❌ Error al obtener el esquema: ${error.message}`);
    }
}

// ✅ Función corregida para filtrar y expandir ENUMs correctamente
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
          console.log(`📌 Añadiendo ENUM: ${typeName}`);
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

// ✅ Función corregida para procesar correctamente los tipos, incluyendo ENUMs
function getFullTypeInfo(typeName, typeMap, visited = new Set()) {
    if (!typeName || visited.has(typeName)) return null;
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
        console.log(`📌 ENUM procesado: ${type.name}`, result.enumValues); 
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

function getTypeRef(type, typeMap, visited) {
  if (!type) {
      console.warn("⚠️ Tipo recibido es `null` o `undefined`");
      return null;
  }

  console.log(`📌 Analizando tipo: ${type.name || "N/A"} | Kind: ${type.kind}`);

  if (type.kind === "NON_NULL") {
      const innerType = getTypeRef(type.ofType, typeMap, visited);
      console.log(`🔸 Tipo NON_NULL detectado: ${type.name} -> ${innerType?.name}`);
      return { ...innerType, isRequired: true };
  }

  if (type.kind === "ENUM") {
      const enumInfo = getFullTypeInfo(type.name, typeMap, visited);
      console.log(`📌 Procesando ENUM en getTypeRef: ${type.name}`, enumInfo);
      return enumInfo;
  }

  if (type.name && type.kind !== "SCALAR" && type.kind !== "ENUM") {
      console.log(`🔹 Buscando información para el tipo: ${type.name}`);
      return getFullTypeInfo(type.name, typeMap, visited);
  }

  if (type.ofType) {
      console.log(`🔸 Analizando ofType dentro de ${type.name || "N/A"}`);
      return getTypeRef(type.ofType, typeMap, visited);
  }

  console.warn(`⚠️ Tipo desconocido: ${JSON.stringify(type, null, 2)}`);
  return { name: type.name, kind: type.kind, isRequired: false };
}


// Ejecutar el script
if (require.main === module) {
    fetchSchema();
}
