export const priceRatesPerRoomLoadMutation = 
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
                prices {
                    pricePerRoom {
                        amount
                        additionalGuestsSupplements {
                            additionalAdults {
                                guestPosition
                                amount
                                additionalGuestType
                                type
                            }
                            additionalChildren {
                                additionalGuestType
                                guestPosition
                                amount
                                type
                            }
                            additionalInfants {
                                additionalGuestType
                                guestPosition
                                amount
                                type
                            }
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

export const priceRatesPerRoomLoadVariables = 
`{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "rates": [
      {
        "rateCode":"BAR",
        "currency":"EUR",
        "rooms": ["STD2"],
        "prices": {
          "pricePerRoom": {
            "amount": 200,
            "additionalGuestsSupplements": {
              "additionalAdults": [
                {
                  "additionalGuestType": "ADULT",
                  "guestPosition": 1,
                  "amount": 50,
                  "type": "ABSOLUTE"
                }
              ],
              "additionalChildren": [
                {
                  "additionalGuestType": "CHILD",
                  "guestPosition": 1,
                  "amount": 10,
                  "type": "ADDITIVE"
                }
              ]
            }
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

