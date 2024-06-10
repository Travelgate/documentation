export const priceRatesPerOccupancyLoadMutation = 
`mutation($criteria: InventoryLoadPriceRatesInput!) {
  inventory {
    loadPriceRates(loadPriceRatesInput: $criteria) {
         success
            rates {
                rateCode
                currency
                rooms
                dateRange {
                    start
                    end
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
                prices {
                    pricesPerOccupancy {
                        prices {
                            amount
                            numberOfAdults
                            numberOfChildren
                            numberOfInfants
                        }
                    }
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

export const priceRatesPerOccupancyLoadVariables = 
`
{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "rates": [
      {
        "rateCode":"BAR2",
        "currency":"EUR",
        "rooms": ["STD2"],
        "prices": {
          "pricesPerOccupancy": {
            "prices": [
              {
                "amount": 80,
                "numberOfAdults": 1,
                "numberOfChildren": 0,
                "numberOfInfants": 0
              },
              {
                "amount": 130,
                "numberOfAdults": 2,
                "numberOfChildren": 0,
                "numberOfInfants": 0
              },
              {
                "amount": 100,
                "numberOfAdults": 1,
                "numberOfChildren": 1,
                "numberOfInfants": 0
              },
              {
                "amount": 105,
                "numberOfAdults": 1,
                "numberOfChildren": 1,
                "numberOfInfants": 1
              }
            ]
          }
        },
        "dateRange":{
          "start": "2024-08-01",
          "end": "2024-08-30"
        }
      }
    ]
  }
}

`

