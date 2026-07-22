export const derivedRatesSetUpQuery =
`query ($criteria: InventoryDerivedRatesSetupFilterInput!) {
  inventory {
    derivedRatesSetup(derivedRatesSetupFilterInput: $criteria) {
      rates {
        code
        name
        active
        baseCode
        mealPlanIncluded {
          value
          isInherit
        }
        inheritedAgePolicies {
          maxAgeChildren
          maxAgeInfants
          freeInfants
          freeChildren
        }
        paymentPolicies {
          inheritedCurrency
          inheritedCommission
          inheritedPriceIsBinding
          acceptedPayments {
            value {
              type
              cardTypes
            }
            isInherit
          }
        }
        bookingRules {
          bookingWindow {
            value {
              start
              end
            }
            isInherit
          }
          markets {
            value {
              included
              excluded
            }
            isInherit
          }
          rateRule {
            value
            isInherit
          }
          seniorRule {
            value
            isInherit
          }
        }
        cancelPolicies {
          value {
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
          isInherit
        }
        inheritedSurcharges {
          chargeType
          taxType
          value
          applyType
          perNight
          perPax
        }
        inheritAllRoomsBaseRate
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
            minAge
            maxAge
            paxType
          }
        }
        informBaseRate
        inheritMealPlanSupplements
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

export const derivedRatesSetUpVariables =
`{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "contextCode": "TGX_PUSH"
  }
}`

export const derivedRatesSetUpByBaseCodesVariables =
`{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "contextCode": "TGX_PUSH",
    "baseRateCodes": ["BAR"]
  }
}`
