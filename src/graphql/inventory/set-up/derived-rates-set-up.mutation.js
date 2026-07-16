export const createDerivedRatesSetUpMutation =
`mutation ($input: InventoryDerivedRateSetupCreateInput!) {
  inventory {
    createDerivedRatesSetup(derivedRateSetupCreateInput: $input) {
      ratesCreated {
        code
        name
        active
        baseCode
        mealPlanIncluded {
          value
          isInherit
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
        inheritAllRoomsBaseRate
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

export const createDerivedRatesSetUpVariables =
`{
  "input": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "contextCode": "TGX_PUSH",
    "rate": {
      "code": "BAR-DERIVED",
      "name": "Best Available Rate - Derived",
      "active": true,
      "baseCode": "BAR",
      "mealPlanIncludedDetails": {
        "inheritMealPlanIncludedFromBaseRate": true
      },
      "informBaseRate": false,
      "paymentPolicies": {
        "inheritFromBaseRate": true
      },
      "bookingRules": {
        "bookingWindowDetails": {
          "inheritBookingWindowFromBaseRate": true
        },
        "marketsDetails": {
          "inheritMarketsFromBaseRate": true
        },
        "rateRulesDetails": {
          "inheritRateRuleFromBaseRate": true
        },
        "seniorRuleDetails": {
          "inheritSeniorRuleFromBaseRate": true
        }
      },
      "cancelPolicies": {
        "inheritFromBaseRate": true
      },
      "roomsDetails": {
        "inheritAllRoomsBaseRate": true
      },
      "inheritMealPlanSupplements": true
    }
  }
}`

export const updateDerivedRatesSetUpMutation =
`mutation ($input: InventoryDerivedRateSetupUpdateInput!) {
  inventory {
    updateDerivedRatesSetup(derivedRateSetupUpdateInput: $input) {
      ratesUpdated {
        code
        name
        active
        baseCode
        mealPlanIncluded {
          value
          isInherit
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

export const updateDerivedRatesSetUpVariables =
`{
  "input": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "contextCode": "TGX_PUSH",
    "rate": {
      "code": "BAR-DERIVED",
      "name": "Best Available Rate - Derived (updated)",
      "active": true,
      "mealPlanIncludedDetails": {
        "inheritMealPlanIncludedFromBaseRate": false,
        "mealPlanIncluded": 14
      },
      "paymentPolicies": {
        "inheritFromBaseRate": false,
        "acceptedPayments": [
          {
            "type": "CARD_BOOKING",
            "cardTypes": ["VI", "CA"]
          }
        ]
      },
      "inheritMealPlanSupplements": false
    }
  }
}`

export const deleteDerivedRatesSetUpMutation =
`mutation ($input: InventoryDerivedRateSetupDeleteInput!) {
  inventory {
    deleteDerivedRatesSetup(derivedRateSetupDeleteInput: $input) {
      ratesDeleted
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

export const deleteDerivedRatesSetUpVariables =
`{
  "input": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "contextCode": "TGX_PUSH",
    "derivedRateCodes": ["BAR-DERIVED"]
  }
}`
