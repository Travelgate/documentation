export const PriceMealplansSupplementsLoadMutation = 
`mutation($criteria: InventoryLoadPriceMealPlanSupplementsInput!) {
  inventory {
    loadPriceMealPlanSupplements(loadPriceMealPlanSupplementsInput: $criteria) {
         success
            mealPlanSupplements {
                rateCode
                rooms
                paxType
                mealPlan
                amountPerPax
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

export const PriceMealplansSupplementsLoadVariables = 
`
{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "mealPlanSupplements": [
      {
        "rateCode":"BAR",
        "paxType": "ADULT",
        "mealPlan": 1,
        "amountPerPax": 80,
        "rooms": ["STD"],
        "dateRange":{
          "start": "2024-08-01",
          "end": "2024-08-30"
        }
      }
    ]
  }
}
`

