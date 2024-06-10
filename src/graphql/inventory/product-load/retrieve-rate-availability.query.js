export const availRatesQuery = 
`query ($criteria: InventoryAvailRatesInput!) {
  inventory {
    availRates(availRatesInput: $criteria) {
         success
            rates {
                rateCode
                rooms
                restrictions {
                    bookingLimit
                    minRelease
                    maxRelease
                    freeSales
                    lengthOfStay {
                        fullStay {
                            minimum
                            maximum
                        }
                        arrival {
                            minimum
                            maximum
                        }
                    }
                }
                applicableWeekdays {
                    all
                    monday
                    tuesday
                    wednesday
                    thursday
                    friday
                    saturday
                    sunday
                }
                dateRange {
                    start
                    end
                }
            }
            adviseMessages {
                code
                description
                level
                correlationID
                external {
                    code
                    message
                }
            }
        }
    }
}
`

export const availRatesVariables = 
`{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "rates": [
      {
        "rateCode":"BAR",
        "dateRange":{
          "start": "2024-06-01",
          "end": "2024-06-03"
        }
      }
    ]
  }
}`

export const availRatesVariablesWithRooms =
`{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "rates": [
      {
        "rateCode":"BAR",
        "dateRange":{
          "start": "2024-06-01",
          "end": "2024-06-03"
        },
        "rooms": ["STD3"]
      }
    ]
  }
}`