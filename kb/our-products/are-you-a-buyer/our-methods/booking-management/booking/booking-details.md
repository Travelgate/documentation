---
sidebar_position: 2
---

# Booking Query: Booking Details


## What steps should I follow to retrieve the details of a booking?💡
To obtain the **details of a specific reservation**, you can use the Booking query by either "**BookingID**" (highly recommended) or by "**references**" (to be deprecated):

```
image
```


### How can I perform a booking query while filtering by "bookingID"?🛠️
Remember the bookingID is the **Hotel-X booking reference returned in Book response**. Below, you'll find an example of a Booking Query that makes use of the "bookingID" filter:

**Book response:**
```
{
  "data": {
    "hotelX": {
      "book": {
        "booking": {
          "reference": {
            "client": "clientReferenceTest",
            "supplier": "supplierReferenceTest",
            "bookingID": "bookindIDTest"
          },
          "price": {
            "currency": "EUR",
            "net": 800,
            "gross": 800,
            "binding": false
          },
          "status": "OK",
        },
        "errors": null,
        "warnings": null
      }
    }
  }
}
```

**Booking query request:**

```
{
    "criteriaBookingRead": {
      "bookingID": "bookindIDTest"
    },
    "settings": {
      "context": "contextCode",
      "client": "clientCode",
        "timeout": 58700,
      "auditTransactions": false,
        "testMode": false
    }
}

```

### How can I perform a Booking query while filtering by "references"?🛠️
In order to perform a Booking query by "**REFERENCES**" (supplier and/or client references) you should add the references information in the CriteriaBookingReferencesInput:

```
{
    "query" : "query ($criteriaBookingRead: HotelCriteriaBookingInput!, $settings: HotelSettingsInput!) {\n hotelX {\n booking(criteria: $criteriaBookingRead, settings: $settings) {\n auditData{\n\t\t\t\ttransactions{\n\t\t\t\t\trequest\n\t\t\t\t\trequest\n\t\t\t\t}\n\t\t\t\ttimeStamp\n\t\t\t}\n bookings {\n reference {\n client\n supplier\n bookingID\n }\n holder {\n name\n surname\n }\n hotel {\n creationDate\n checkIn\n checkOut\n hotelCode\n hotelName\n boardCode\n occupancies {\n id\n paxes {\n age\n }\n }\n rooms {\n occupancyRefId\n code\n description\n price {\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n markups {\n channel\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n }\n }\n }\n }\n price {\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n markups {\n channel\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n }\n }\n cancelPolicy {\n refundable\n cancelPenalties {\n hoursBefore\n penaltyType\n currency\n value\n }\n }\n remarks\n status\n payable\n }\n errors {\n code\n type\n description\n }\n warnings {\n code\n type\n description\n }\n }\n }\n}",
    "variables" : {
        "criteriaBookingRead" : {
            "accessCode" : "",
            "language" : "en",
            "typeSearch" : "REFERENCES",
            "bookingID" : "",
            "references" : {
                "hotelCode" : "",
                "currency" : "",
                "references" : [
                    {
                        "supplier" : "supplierReference",
                        "client" : "clientReference"
                    }
                ]
            }
        },
        "settings" : {
            "client" : "",
            "auditTransactions" : true,
            "context" : "",
            "testMode" : false
        }
    }
}
```