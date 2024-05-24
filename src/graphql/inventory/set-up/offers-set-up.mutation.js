export const updateOffersSetUpMutation =
`mutation ($input: InventoryOffersSetupUpdateInput!) {
  inventory {
    updateOffersSetup(offersSetupUpdateInput: $input) {
      offers {
        code
        description
        isActive
        rateCode
        roomCodes
        mon
        tue
        wed
        thu
        fri
        sat
        sun
        applyFrom
        applyTo
        numberOfNights
        minLos
        maxLos
        nightsType
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

export const updateOffersSetUpVariables =
`{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "rateCode": "BAR",
        "offers": [
            {
                "code": "TEST_OFFER",
                "roomCodes": ["STD3"]
            }
        ]
    }
}`

export const createOffersSetUpMutation =
`mutation ($input: InventoryOffersSetupCreateInput!) {
  inventory {
    createOffersSetup(offersSetupCreateInput: $input) {
      offers {
        code
        description
        isActive
        rateCode
        roomCodes
        mon
        tue
        wed
        thu
        fri
        sat
        sun
        applyFrom
        applyTo
        numberOfNights
        minLos
        maxLos
        nightsType
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

export const createOffersSetUpVariables =
`{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "rateCode": "BAR",
        "offers": [
            {
                "code": "TEST_OFFER",
                "description": "Test Offer",
                "isActive": true,
                "nightsType": "CHEAPEST",
                "numberOfNights": 1,
                "minLos": 7
            }
        ]
    }
}`

export const deleteOffersSetUpMutation =
`mutation ($input: InventoryOffersSetupDeleteInput!) {
  inventory {
    deleteOffersSetup(offersSetupDeleteInput: $input) {
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

export const deleteOffersSetUpVariables =
`{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "rateCode": "BAR",
        "offerCodes": ["TEST_OFFER"] 
    }
}`