export const roomsMasterQuery = 
`query($criteria: InventoryRoomsMasterFilterInput!) {
    inventory {
      roomsMaster(roomsMasterFilterInput: $criteria) {
        rooms {
          id
          code
          name
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


export const roomsMasterVariables = 
`{
  "criteria":{
    "clientCode": "CDOC"
  }
}`


export const roomsMasterCodesVariables = 
`{
    "criteria":{
      "clientCode": "CDOC",
      "codes": ["STD", "DBL"]
    }
  }`