export const roomsMasterQuery = 
`query($criteria: InventoryRoomsMasterFilterInput!) {
    inventory {
      roomsMaster(roomsMasterFilterInput: $criteria) {
        rooms {
          id
          code
          name
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