---
sidebar_position: 12
---

# 207 error - Request XML not accepted by Supplier

### What does a 207 error mean?💡
You will encounter a 207 error in those cases your Search request does not align with the Seller's specifications.

### How can I obtain information about the Seller's limitations and minimize errors?🚫
To check the limitations set by the Seller and prevent errors and unnecessary traffic, we strongly advise utilizing our [Metadata Query](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query).

### How can I find out which fields are validated in my Search requests?🔎
- **maxNumberHotels**: Maximum number of hotels that can be requested.
- **recommendedNumberHotels**: Recommended number of hotels that can be requested.
- **release**: Minimum days required between booking date and checkIn date (days in advance). If the value is zero, then there is no limitation.
- **minimumStay**: Minimum number of days required for a booking stay. If the value is zero, then there is no limitation.
- **maxStay**: Maximum number of days allowed for a booking stay.
- **maxNumberRoomCandidates**: Maximum number of room candidates that can be requested in the same Search request.
- **paxTypeRangeInRoomCandidates**: Contains information about the age restrictions of the guests in a room.
- **ageRange**: The age range established by the Seller.
- **maxPaxInRoomCandidates**: Maximum number paxes per room/distribution that can be requested in the same Search request.
- **maxPaxInAllRooms**: Maximum number of paxes that can be requested in the same Search request.
- **requiredRoomWithSamePaxConfiguration**: It indicates whether all rooms should have the same configuration, same ages or same number of paxes.

:::tip
Don't forget to check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata) and [Hotel-X API Schema](https://api.travelgatex.com/) for further information on Metadata🚀
:::