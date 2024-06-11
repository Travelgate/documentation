export const availRatesLoadMutation = 
`mutation($criteria: InventoryAvailRatesLoadInput!) {
  inventory {
    loadAvailRates(loadAvailRatesInput: $criteria) {
         success
            rates {
                rateCode
                dateRange {
                    start
                    end
                }
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
                    stopSales {
                        closeMaster
                        closeOnArrival
                        closeOnDeparture
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

export const availRatesLoadVariables = 
`
  {
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "rates": [
      {
        "rateCode":"BAR",
        "rooms": ["STD2"],
        "restrictions": {
            "bookingLimit": 5,
            "lengthOfStay": {
                "fullStay": {
                    "minimum": 1,
                    "maximum": 30
                },
                "arrival": {
                    "minimum": 1,
                    "maximum": 30
                }
            },
            "minRelease": 1,
            "maxRelease": 60
        },
        "dateRange":{
          "start": "2024-06-01",
          "end": "2024-06-03"
        }
      }
    ]
  }
}
`

