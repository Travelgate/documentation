export const roomsSetUpQuery =
`query ($criteria: InventoryRoomsSetupFilterInput!) {
  inventory {
    roomsSetup(roomsSetupFilterInput: $criteria) {
      rooms {
        code
        master {
        id
        code
        name
        }
        active
        externalCode
        standard
        uses {
        numberOfGuests
        paxType
        }
      }
      success
      adviseMessages {
        code
        description
        level
        external {
          code
          message
        }
      }
    }
  }
}`

export const roomsSetUpVariables =
`{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "contextCode": "TGX_PUSH",
    "rateCode": "BAR"
  }
}`

export const roomsSetUpByCodesVariables =
`{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "contextCode": "TGX_PUSH",
    "rateCode": "BAR",
    "roomCodes": ["STD2"]
  }
}`