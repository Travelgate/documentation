---
sidebar_position: 5
---

# Hotel-X Search: Everything You Need to Know About Rooms

## Discover All About Rooms in Hotel-X Search Query

### What is the occupancyrefID in SearchRS?💡

The OccupancyRefID serves as the unique identifier for each room. When you request a single room, the OccupancyRefID will always be "1". However, if you request two rooms, each option will specify the information that belongs to each room (either Room "1" or Room "2").

### Can I split the rooms returned within an Option and book them separately?✂️
We introduced the option node to ensure that all rooms within a specific option can be booked. If you need to book separate rooms, please send two separate Search requests, one for each room.

### What is the max. number of rooms and paxes/room allowed per reservation?🔢
This information depends on each Seller. Our Metadata Query returns the maximum number of rooms allowed per reservation under the "maxNumberRoomCandidates" node, and the maximum number of guests allowed per room under the "maxPaxInRoomCandidates" node.

### What does the "units" field indicate in the "rooms" node of the SearchRS response?🏨
The "units" field refers to the number of available rooms of the same type in the hotel. Please note that whether this information is returned or not depends on the Seller.
### How can I structure a multi-room Search request in Hotel-X?🛠️
To prevent errors when performing a Query Search for more than one room, here is a sample structure of a multi-room request:
```
{
    "criteriaSearch" : {
        "checkIn" : "2024-06-13",
        "checkOut" : "2024-06-16",
        "hotels" : [
            "XX"
        ],
        "language" : "EN",
        "currency" : "EUR",
        "market" : "XX",
        "nationality" : "XX",
        "occupancies" : [
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            },
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            },
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            }
        ]
    },
    "filterSearch" : {
        "access" : {
            "includes" : [
                "XXXX"
            ]
        }
    },
    "settings" : {
        "timeout" : 18000,
        "auditTransactions" : false,
        "client" : "XXXXXXXX",
        "context" : "XXX",
        "testMode" : false
    }
}
```
### Why do many fields in the Hotel-X Search response appear as "null"?🚫
The presence of null values in the API response depends on the information provided by the Seller. For example, if you request the following fields in your Search Query:
```
{ rooms { occupancyRefId code description refundable units roomPrice { price { currency binding net gross exchange { currency rate } } } beds { type description count shared } rateP }
```
And received the following information in SearchRS:
```
"rooms": [ { "occupancyRefId": 1, "code": "1", "description": "Standard", "refundable": false, "units": 999, "roomPrice": { "price": { "currency": "EUR", "binding": false, "net": 150, "gross": 150, "exchange": { "currency": "EUR", "rate": 1 } } }, "beds": [ { "type": "double", "description": **null**, "count": 2, "shared": false } ]
````
This indicates that the Seller has successfully provided all the requested information except for bed descriptions.
 
:::info
**You can explore additional details about Search in our [Documentation](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/methods/bookingflow/search/) and [Hotel-X Schema](https://api.travelgatex.com/).**
:::

 