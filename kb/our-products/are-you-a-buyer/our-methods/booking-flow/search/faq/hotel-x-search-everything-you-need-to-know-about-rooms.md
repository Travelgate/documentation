---
sidebar_position: 1
---

# Hotel-X Search: Everything You Need to Know About Rooms

## Discover All About Rooms in Hotel-X Search Query

### What is the occupancyrefID in SearchRS?💡

The OccupancyRefID serves as the unique identifier for each room. When you request a single room, the OccupancyRefID will always be "1". However, if you request two rooms, each option will specify the information that belongs to each room (either Room "1" or Room "2").

### Can I split the rooms returned within an Option and book them separately?✂️
No, it is not possible to split the rooms returned within an option and book them separately. We introduced the option node to ensure that all rooms within a specific option can be booked. If you need to book separate rooms, please send two separate Search requests, one for each room.

### What is the max. number of rooms and paxes/room allowed per reservation?🔢
This information depends on each Seller. Our Metadata Query returns the maximum number of rooms allowed per reservation under the "maxNumberRoomCandidates" node, and the maximum number of guests allowed per room under the "maxPaxInRoomCandidates" node.

### What does the "units" field indicate?🏨
The "units" field refers to the number of available rooms of the same type in the hotel. Please note that whether this information is returned or not depends on the Seller.
### How can I structure a multi-room Search request in Hotel-X?🛠️
To prevent errors, you can find an example of a multi-room Search request query [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search#search-query-1-hotel-2-rooms-3-adults-1-child).
 
:::info
You can explore additional details about Search in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search).
:::

 