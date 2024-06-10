export const priceMealplanSupplementsQuery =
    `query ($criteria: InventoryPriceMealPlanSupplementsInput!) {
  inventory {
    priceMealPlanSupplements(priceMealPlanSupplementsInput: $criteria) {
       success
            mealPlanSupplements {
                rateCode
                rooms
                paxType
                mealPlan
                amountPerPax
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
                dateRange {
                    start
                    end
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

export const priceMealplanSupplementsRoomVariables =
    `{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "mealPlanSupplements": { 
        "rateCode":"BAR",
        "rooms":["STD2"],
        "dateRange":{
          "start": "2024-08-01",
          "end": "2024-08-03"    
      }
    }
  }
}`

export const priceMealplanSupplementsRoomsVariables =
    `{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
   "mealPlanSupplements": {     
        "rateCode":"BAR",
        "rooms":["STD2","STD"],
        "dateRange":{
          "start": "2024-08-01",
          "end": "2024-08-03"
      }
    }
  }
}`