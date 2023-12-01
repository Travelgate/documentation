---
title: Metadata
sidebar_position: 6
---

# Hotel-X Development - Metadata Query

The Metadata query delivers a clear and summarized view of the Seller's main characteristics, as well as the methods implemented through their integration and the limitations and restrictions associated with their connection.

:::info
Note that **TravelgateX API specifications will always prevail over the Seller's specifications**. For instance, nationality should always be sent in SearchRQ even though it may be optional for some Sellers.
:::
 

**Some of the information returned is:**

- Methods implemented
- Maximum/minimum stay
- Minimum release
- Supported payment types
- Maximum pax per room
- Maximum rooms per reservation
- Cancellation policies returned in Search or Quote
- “RequiredAllPassengers” (if name details for all the paxes are required in BookRQ)

:::note
The information returned depends on the Seller and might vary between Partners.
:::
 
:::tip
Don't forget to check our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata#requests-examples) for a full example of a Hotel-X Metadata Query!🚀
:::

Since Metadata information may not be updated by our Sellers frequently (they update it whenever there is a major update on their APIs), we suggest you confirm directly with them whether the information is up to date.