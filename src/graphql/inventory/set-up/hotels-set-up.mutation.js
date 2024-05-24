export const createHotelSetUpMutation =
`mutation($input: InventoryHotelsSetupCreateInput!) {
  inventory {
    createHotelSetup(hotelSetupCreateInput: $input) {
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
}
`

export const createHotelSetUpVariables =
`{
  "input":{
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotel": {
      "hotelCode": "2",
      "contextCode": "TGX_PUSH",
      "active": true,
      "sendNotification": true,
      "emailNotification": ["hotelpush@xmltravelgate.com"]
    }
  }
}`


export const updateHotelSetUpMutation =
`mutation($input: InventoryHotelsSetupUpdateInput!) {
  inventory {
    updateHotelSetup(hotelSetupUpdateInput: $input) {
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
}
`

export const updateHotelSetUpVariables =
`{
  "input":{
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotel": {
      "hotelCode": "2",
      "contextCode": "TGX_PUSH",
      "active": true,
      "sendNotification": true,
      "emailNotification": ["hotelpush@xmltravelgate.com"],
      "emailNotificationCc": ["hotelpushcc@xmltravelgate.com"]
    }
  }
}`

export const deleteHotelSetUpMutation =
`mutation($input: InventoryHotelSetupDeleteInput!) {
  inventory {
    deleteHotelSetup(hotelSetupDeleteInput: $input) {
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
}
`

export const deleteHotelSetUpVariables =
`{
  "input":{
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "contextCode": "TGX_PUSH"
  }
}`