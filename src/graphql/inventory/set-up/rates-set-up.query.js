export const ratesSetUpQuery =
`query ($criteria: InventoryRatesSetupFilterInput!) {
  inventory {
    ratesSetup(ratesSetupFilterInput: $criteria) {
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

export const ratesSetUpVariables =
`{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "contextCode": "TGX_PUSH"
  }
}`

export const ratesSetUpByCodesVariables =
    `{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "contextCode": "TGX_PUSH",
    "rateCodes": ["BAR"]
  }
}`