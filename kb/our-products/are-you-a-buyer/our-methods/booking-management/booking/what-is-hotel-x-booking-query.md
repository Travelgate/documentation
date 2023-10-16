---
sidebar_position: 1
---

# Hotel-X Development - Booking Query

The Booking Query operation enables you to obtain either the specific details of a reservation (booking details) or a list of reservations made within a specified time frame (booking list).

### What can I expect to receive in the Booking Query response?✔️

Some of the fields returned are: 

- Holder
- Hotel
- Price
- Remarks
- Status

```
image
```

### How can I find out if a Seller only accepts a specific type of Booking Query?✅
Please note that **the queryable fields available by a Seller may vary between Sellers**. You can check the restrictions and fields returned/allowed for a specific Seller via our [Metadata Query](https://knowledge.travelgate.com/hotel-x-development-metadata):

**Metadata Query request:**
```
{
  hotelX {
    metadata(criteria: {supplierCodes: ["supplierCode"]}, relay: {}) {
      adviseMessage {
        code
        level
        description
      }
      edges {
        node {
          metadataData {
            supplierCode
            booking {
              queryableBySupplierReference {
                reviewDate
                value
              }
              queryableByClientReference {
                reviewDate
                value
              }
              requiresCheckInDateInReferencesSearchType {
                reviewDate
                value
              }
              requiresCheckOutDateInReferencesSearchType {
                reviewDate
                value
              }
              requiresCheckInDateInReferencesSearchType {
                reviewDate
                value
              }
            }
          }
        }
      }
    }
  }
}
```

**Metadata Query response:**

```
{
  "data": {
    "hotelX": {
      "metadata": {
        "adviseMessage": null,
        "edges": [
          {
            "node": {
              "metadataData": {
              "supplierCode": "supplierCode",
                "booking": {
                  "queryableBySupplierReference": {
                    "reviewDate": "2018-12-27",
                    "value": true
                  },
                  "queryableByClientReference": {
                    "reviewDate": "2018-12-27",
                    "value": true
                  },
                  "requiresCheckInDateInReferences": {
                    "reviewDate": "2021-10-11",
                    "value": false
                  },
                  "requiresCheckOutDateInReferences": {
                    "reviewDate": "2021-10-11",
                    "value": false
                  },
                  "requiresReservationDateInReferences": {
                    "reviewDate": "2021-10-11",
                    "value": false
                  }
                }
              }
            }
          }
        ]
      }
    }
  }
}
```

- **"queryableBy"** indicates that the Seller allows searching through a given field.
- **"requires"** indicates whether receiving this information is mandatory on the Seller's API.
- **"value"** indicates if that Seller requires or allows that specific field.
- **"reviewDate"** indicates the last time this value was checked against the Seller.

::: info
**If you are not using Hotel-X bookingID** input, you should indicate your accessCode in the HotelCriteriaBookingInput. Language is optional, but we recommend adding this information for optimal results.
:::

_Don't forget to check our [Documentation](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/methods/reservationmanagement/booklist/) and [API Schema](https://api.travelgatex.com/) for further information!🚀_