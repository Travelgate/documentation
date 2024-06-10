export const priceRateQuery =
    `query ($criteria: InventoryPriceRatesInput!) {
  inventory {
    priceRates(priceRatesInput: $criteria) {
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
                    pricesPerOccupancy {
                        prices {
                            amount
                            numberOfAdults
                            numberOfChildren
                            numberOfInfants
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

export const priceOneRateVariables =
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

export const priceMultiplesRatesVariables =
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
      },
      {
        "rateCode":"BAR2",
        "dateRange":{
          "start": "2024-06-01",
          "end": "2024-06-03"
        }
      }
    ]
  }
}`