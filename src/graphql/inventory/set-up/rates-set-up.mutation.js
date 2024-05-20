export const updateRatesSetUpMutation =
`mutation ($input: InventoryRateSetupUpdateInput!) {
  inventory {
    updateRateSetup(rateSetupUpdateInput: $input) {
      ratesUpdated {
        code
        name
        hotelCode
        active
        mealPlanIncluded
        agePolicies {
          maxAgeChildren
          maxAgeInfants
          freeInfants
          freeChildren
        }
        paymentPolicies {
          currency
          commission
          priceIsBinding
          acceptedPayments {
            type
            cardTypes
          }
        }
        bookingRules {
          bookingWindow {
            start
            end
          }
          markets {
            included
            excluded
          }
          rateRule
          seniorRule
        }
        cancelPolicies {
          baseCancelPolicy {
            refundable
            cancelPenalties {
              daysBeforeArrival
              penaltyType
              value
            }
          }
          cancelPoliciesByDate {
            start
            end
            cancelPolicy {
              refundable
              cancelPenalties {
                daysBeforeArrival
                penaltyType
                value
              }
            }
          }
        }
        surcharges {
          chargeType
          taxType
          value
          applyType
          perNight
          perPax
        }
        rooms {
          code
          master {
            id
            code
            name
          }
          active
          externalCode
          standard
          uses {
            numberOfGuests
            paxType
          }
        }
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

export const updateRatesSetUpVariables =
`{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "contextCode": "TGX_PUSH",
        "rates": [
            {
                "code": "BAR",
                "mealPlanIncluded": 14,
                "cancelPolicies": {
                    "baseCancelPolicy": {
                        "refundable": true,
                        "cancelPenalties": [
                            {
                                "daysBeforeArrival": 1,
                                "penaltyType": "PERCENTAGE",
                                "value": 100
                            }
                        ]
                    }
                }
            }
        ]
    }
}`

export const createRatesSetUpMutation =
`mutation ($input: InventoryRatesSetupCreateInput!) {
  inventory {
    createRatesSetup(rateSetupCreateInput: $input) {
      rates {
        code
        name
        hotelCode
        active
        mealPlanIncluded
        agePolicies {
          maxAgeChildren
          maxAgeInfants
          freeInfants
          freeChildren
        }
        paymentPolicies {
          currency
          commission
          priceIsBinding
          acceptedPayments {
            type
            cardTypes
          }
        }
        bookingRules {
          bookingWindow {
            start
            end
          }
          markets {
            included
            excluded
          }
          rateRule
          seniorRule
        }
        cancelPolicies {
          baseCancelPolicy {
            refundable
            cancelPenalties {
              daysBeforeArrival
              penaltyType
              value
            }
          }
          cancelPoliciesByDate {
            start
            end
            cancelPolicy {
              refundable
              cancelPenalties {
                daysBeforeArrival
                penaltyType
                value
              }
            }
          }
        }
        surcharges {
          chargeType
          taxType
          value
          applyType
          perNight
          perPax
        }
        rooms {
          code
          master {
            id
            code
            name
          }
          active
          externalCode
          standard
          uses {
            numberOfGuests
            paxType
          }
        }
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

export const createRatesSetUpVariables =
`{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "contextCode": "TGX_PUSH",
        "rates": [
            {
                "code": "BAR",
                "name": "Best Available Rate",
                "active": true,
                "agePolicies": {
                    "maxAgeChildren": 12,
                    "maxAgeInfants": 2,
                    "freeInfants": false,
                    "freeChildren": false
                },
                "mealPlanIncluded": 14,
                "paymentPolicies": {
                    "currency": "EUR",
                    "commission": 10,
                    "priceIsBinding": true,
                    "acceptedPayments": [
                        {
                            "type": "CARD_BOOKING",
                            "cardTypes": ["VI", "CA"]
                        }
                    ]
                },
                "cancelPolicies": {
                    "baseCancelPolicy": {
                        "refundable": true,
                        "cancelPenalties": [
                            {
                                "daysBeforeArrival": 7,
                                "penaltyType": "PERCENTAGE",
                                "value": 30
                            },
                            {
                                "daysBeforeArrival": 1,
                                "penaltyType": "PERCENTAGE",
                                "value": 100
                            }
                        ]
                    }
                }
            }
        ]
    }
}`

export const deleteRatesSetUpMutation =
`mutation ($input: InventoryRateSetupDeleteInput!) {
  inventory {
    deleteRatesSetup(rateSetupDeleteInput: $input) {
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

export const deleteRatesSetUpVariables =
`{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "contextCode": "TGX_PUSH",
        "rateCodes": ["BAR"]
    }
}`