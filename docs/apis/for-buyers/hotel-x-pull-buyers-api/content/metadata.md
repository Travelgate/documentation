---
sidebar_position: 7
---

# Metadata

The Metadata Query returns a clear and summarized view of the Seller's main characteristics, as well as the methods implemented through their integration and the limitations and restrictions associated with their connection. The returned fields include:

* `maxNumberHotels` (maximum number of hotels that can be requested)
* `recommendedNumberHotels` (recommended number of hotels that can be requested)
* `allowsCurrency`
* `release` (minimum days required in between booking date and checking date, if the value is zero then there is no limitation)
* `minimumStay` (minimum number of days required for booking, if the value is zero then there is no limitation)
* `maxStay` (maximum number of days allowed for booking)
* `maxNumberRoomCandidates` (maximum number of room candidates that can be requested in the same search request)
* `paxTypeRangeInRoomCandidates` (contains information about the age restrictions of the guests in a room)
* `maxPaxInRoomCandidates` (maximum number paxs in same room that can be requested in the same search request)
* `maxPaxInAllRooms` (maximum number of sum of paxs that can be requested in the same search request)
* `requiredRoomWithSamePaxConfiguration` (indicates whether all room must have the same configuration, same ages or same number of paxs)
* `rateRules`
* `ageRange` (the age range used by the supplier)
* `languages` 

:::note

TravelgateX API specifications will always prevail over the Seller's specifications. For instance, nationality should always be sent in SearchRQ even though it may be optional for some Sellers.

Since Metadata information may not be updated by our Sellers frequently (they update it whenever there is a major update on their APIs), we suggest you confirm directly with them whether the information is up to date.

:::

```graphql
query {
	hotelX {
    metadata(criteria: {supplierCodes: ["HOTELTEST"]}, relay: {}) {
      adviseMessage {
        code
        level
        description
      }
      edges {
        node {
          code
          adviseMessage {
            code
            level
            description
          }
          metadataData {
            supplierCode
            search {
              destinations {
                maxNumberHotels {
                  reviewDate
                  value
                }
                recommendedNumberHotels {
                  reviewDate
                  value
                }
              }
              allowsCurrency {
                reviewDate
                value
              }
              implementsCombination {
                reviewDate
                value
              }
              numMarketsAllowed {
                reviewDate
                value
              }
              release {
                reviewDate
                value
              }
              minimumStay {
                reviewDate
                value
              }
              maxStay {
                reviewDate
                value
              }
              roomCandidates {
                maxNumberRoomCandidates {
                  reviewDate
                  value
                }
                paxTypeRangeInRoomCandidates {
                  reviewDate
                  candidates {
                    min
                    max
                    type
                  }
                }
                maxPaxInRoomCandidates {
                  reviewDate
                  value
                }
                maxPaxInAllRooms {
                  reviewDate
                  value
                }
                requiredRoomWithSamePaxConfiguration {
                  samePaxAge {
                    reviewDate
                    value
                  }
                  samePaxNumber {
                    reviewDate
                    value
                  }
                }
                rateRules {
                  reviewDate
                  value
                }
                beds {
                  informNumberOfUnits {
                    reviewDate
                    value
                  }
                  informSharedBed {
                    reviewDate
                    value
                  }
                  informBedType {
                    reviewDate
                    value
                  }
                  informNumberOfBeds {
                    reviewDate
                    value
                  }
                }
                ageRange {
                  reviewDate
                  ages {
                    min
                    max
                    type
                  }
                }
              }
              informBindingPrice {
                reviewDate
                value
              }
              informCancelPolicies {
                reviewDate
                value
              }
              informRoomCancelPolicies {
                reviewDate
                value
              }
              informRemarks {
                reviewDate
                value
              }
              paymentTypes {
                reviewDate
                value
              }
              languages {
                reviewDate
                value
              }
              informDailyPrice {
                reviewDate
                value
              }
              informDailyRatePlan {
                reviewDate
                value
              }
              informPromotions {
                reviewDate
                value
              }
              informNRFRateByRoom {
                reviewDate
                value
              }
              informSurcharges {
                reviewDate
                value
              }
              informRoomSurcharges {
                reviewDate
                value
              }
              informHotelName {
                reviewDate
                value
              }
              requiredNationality {
                reviewDate
                value
              }
            }
            quote {
              informBindingPrice {
                reviewDate
                value
              }
              informNRFRate {
                reviewDate
                value
              }
              informRemarks {
                reviewDate
                value
              }
              informCancelPolicies {
                reviewDate
                value
              }
              informCancelPoliciesDescription {
                reviewDate
                value
              }
              informSurcharges {
                reviewDate
                value
              }
              requiredNationality {
                reviewDate
                value
              }
            }
            book {
              allowsDeltaPrice {
                reviewDate
                value
              }
              requiredAllPassengers {
                reviewDate
                value
              }
              allowsRemarks {
                reviewDate
                value
              }
              informBillingSupplier {
                reviewDate
                value
              }
              informHotelReference {
                reviewDate
                value
              }
              informPrice {
                reviewDate
                value
              }
              requiredNationality {
                reviewDate
                value
              }
            }
            booking {
              queryableBySupplierReference {
                reviewDate
                value
              }
              queryableByClientReference {
                reviewDate
                value
              }
              queryableByCreationDate {
                reviewDate
                value
              }
              queryableByCheckinDate {
                reviewDate
                value
              }
              informHotelReference {
                reviewDate
                value
              }
              informCancelPolicies {
                reviewDate
                value
              }
              informPriceCancel {
                reviewDate
                value
              }
            }
            cancel {
              mutableBySupplierReference {
                reviewDate
                value
              }
              mutableByClientReference {
                reviewDate
                value
              }
              informPriceCancel {
                reviewDate
                value
              }
            }
            hotels {
              languages {
                reviewDate
                value
              }
            }
            destinations {
              languages {
                reviewDate
                value
              }
            }
            rooms {
              languages {
                reviewDate
                value
              }
            }
            boards {
              languages {
                reviewDate
                value
              }
            }
            categories {
              languages {
                reviewDate
                value
              }
            }
            markets {
              languages {
                reviewDate
                value
              }
            }
            currencies {
              languages {
                reviewDate
                value
              }
            }
            amenities {
              languages {
                reviewDate
                value
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
}
```

### Criteria    

This query has a single critera, which is marked as mandatory (`supplierCodes`).

Mandatory criteria
* `supplierCodes`