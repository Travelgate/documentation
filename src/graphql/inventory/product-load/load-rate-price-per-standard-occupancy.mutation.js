export const priceRatesPerStandardOccupancyLoadMutation = 
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
                    pricePerStandardOccupancy {
                        amount
                        pricesUnderStandardOccupancy {
                            amount
                            guests
                        }
                        additionalGuestsSupplements {
                            additionalAdults {
                                additionalGuestType
                                guestPosition
                                amount
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

export const priceRatesPerStandardOccupancyLoadVariables = 
`
 {
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "rates": [
       {
        "rateCode":"BAR3",
        "currency":"EUR",
        "rooms": ["TRP"],
        "prices": {
            "pricePerStandardOccupancy": {
                "amount": 240,
                "pricesUnderStandardOccupancy": [
                     {
                     "guests": 1,
                     "amount": 130
                     },
                     {
                     "guests": 2,
                     "amount": 190
                     }
                 ],
                 "additionalGuestsSupplements": {
                    "additionalAdults": [
                        {
                        "additionalGuestType": "ADULT",
                        "guestPosition": 1,
                        "amount": 50
                        }
                    ],
                    "additionalChildren": [
                        {
                        "additionalGuestType": "CHILD",
                        "guestPosition": 1,
                        "amount": 10,
                        "type": "ADDITIVE"
                        },
                        {
                        "additionalGuestType": "CHILD",
                        "guestPosition": 2,
                        "amount": 15,
                        "type": "ABSOLUTE"
                        }
                    ],
                    "additionalInfants": [
                        {
                        "additionalGuestType": "INFANT",
                        "guestPosition": 1,
                        "amount": 20,
                        "type": "PERCENTAGE"
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

