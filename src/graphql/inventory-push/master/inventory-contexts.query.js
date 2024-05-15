export const inventoryContextQuery = 
`query($criteria: InventoryContextsFilterInput!) {
    inventory {
      inventoryContexts(inventoryContextsFilterInput: $criteria) {
        contexts {
          contextId
          contextCode
          supplierCodes
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