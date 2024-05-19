export const hotelsSetUpQuery = 
`query($criteria: InventoryHotelSetupFilterInput!) {
  inventory {
    hotelsSetup(hotelsSetupFilterInput: $criteria){
      hotels {
        id
        hotelCode
        contextCode
        active
        sendNotification
        emailNotification
        emailNotificationCc
        emailNotificationSupport
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

export const hotelsSetUpVariables = 
`{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCodes": ["2"],
    "contextCode": "TGX_PUSH"
  }
}`