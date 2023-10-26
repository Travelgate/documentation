---
sidebar_position: 3
---

# Booking Query: Booking List

### How can I retrieve a list of all bookings made within a specific time frame?💡
In order to obtain a list of all the reservations made within a specific type frame you should perform the Booking query by "**typeSearch" "DATES"**, specify if your "dateType"** is either "BOOKING* (booking date) or "ARRIVAL" (check-in date) and the "start" and "end" dates of the query (yyyy-MM-dd).

![booking_query_2](https://storage.travelgate.com/kbase/booking_query_2.jpg)

### How can I perform a booking query while filtering by "DATES"?🛠️
Below, you'll find an example of a Booking Query that makes use of the "DATES" filter:

```
{
    "query" : "query ($criteriaBookingRead: HotelCriteriaBookingInput!, $settings: HotelSettingsInput!) {\n hotelX {\n booking(criteria: $criteriaBookingRead, settings: $settings) {\n auditData {\n transactions {\n request\n response\n }\n }\n bookings {\n reference {\n client\n supplier\n }\n holder {\n name\n surname\n }\n hotel {\n creationDate\n checkIn\n checkOut\n hotelCode\n hotelName\n boardCode\n occupancies {\n id\n paxes {\n age\n }\n }\n rooms {\n occupancyRefId\n code\n description\n price {\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n markups {\n channel\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n }\n }\n }\n }\n price {\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n markups {\n channel\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n }\n }\n cancelPolicy {\n refundable\n cancelPenalties {\n hoursBefore\n penaltyType\n currency\n value\n }\n }\n remarks\n status\n payable\n }\n errors {\n code\n type\n description\n }\n warnings {\n code\n type\n description\n }\n }\n }\n}",
    "variables" : {
        "criteriaBookingRead" : {
            "accessCode" : "",
            "language" : "en",
            "dates" : {
                "dateType" : "BOOKING",
                "start" : "2020-10-17",
                "end" : "2020-10-18"
            },
            "typeSearch" : "DATES"
        },
        "settings" : {
            "client" : "",
            "context" : "",
            "auditTransactions" : true
        }
    }
}
```