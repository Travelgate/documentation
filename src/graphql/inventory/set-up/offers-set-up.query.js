export const offersSetUpQuery =
`query ($criteria: InventoryOffersSetupFilterInput!) {
  inventory {
    offersSetup(offersSetupFilterInput: $criteria) {
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

export const offersSetUpVariables =
`{
    "criteria": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "rateCode": "BAR"
    }
}`

export const offersSetUpByCodesVariables =
`{
    "criteria": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "rateCode": "BAR",
        "offerCodes": ["TEST_OFFER"]
    }
}`