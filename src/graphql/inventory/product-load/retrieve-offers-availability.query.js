export const availOffersQuery =
    `query ($criteria: InventoryAvailOffersInput!) {
  inventory {
    availOffers(availOffersInput: $criteria) {
        success
            offers {
                rateCode
                offers {
                    code
                    stopSales {
                        closeMaster
                        closeOnArrival
                        closeOnDeparture
                    }
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

export const availOffersOneRateVariables =
    `{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "offers": [
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

export const availOffersMultiplesRatesVariables =
    `{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
   "offers": [
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