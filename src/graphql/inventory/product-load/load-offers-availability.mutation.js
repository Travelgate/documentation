export const availOffersLoadMutation = 
`mutation($criteria: InventoryLoadAvailOffersInput!) {
  inventory {
    loadAvailOffers(loadAvailOffersInput: $criteria) {
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

export const availOffersLoadVariables = 
`
{
  "criteria": {
    "clientCode": "CDOC",
    "supplierCode": "PDOC",
    "hotelCode": "2",
    "offers": {
        "rateCode":"BAR",
        "offers":[
            {
                "code":"TEST_OFFER",
                "stopSales": {
                    "closeMaster": false,
                    "closeOnArrival": false,
                    "closeOnDeparture": false
                }
            }
        ],
        "dateRange":{
          "start": "2024-11-05",
          "end": "2024-11-08"
        }
      }
    }
}


`

