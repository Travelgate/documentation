export const inventoryContextsQuery = 
`query($criteria: InventoryContextsFilterInput!) {
    inventory {
      inventoryContexts(inventoryContextsFilterInput: $criteria) {
        contexts {
          contextId
          contextCode
          supplierCodes
        }
        success
        adviseMessages {
            code
            description
            level
            external{
              code
              message
            }
        }
      }
    }
}`

export const inventoryContextsVariables = 
`{
    "criteria":{
      "supplierCodes": []
    }
}`


export const inventoryContextsSuppliersVariables = 
`{
    "criteria":{
      "supplierCodes": ["PDOC"]
    }
}`