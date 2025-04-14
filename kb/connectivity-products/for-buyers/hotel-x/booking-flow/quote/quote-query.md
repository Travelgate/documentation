---
sidebar_position: 1
---

# Quote Query

The [Quote](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote) operation is used to evaluate and validate the rate before making an actual booking. It provides updated details of the option previously selected from the Search response, including the latest hotel rate, a detailed price breakdown, and cancellation policies (if available).

The information returned in the Quote response may vary depending on the Seller. Some Sellers may provide cancellation policies only in the Search response, while others include them exclusively in the Quote response or both.

To ensure you receive the necessary data, refer to our [Hotel-X API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart) to include the required fields (such as price, cancellation policies, rooms, status, etc.) in your request. Additionally, review the [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata) of your Sellers to understand their specifications for this method.

## Status in Quote Response

### What does the status in a Quote response indicate?

When a Quote query is successful, the returned option will include a status field indicating its current state. The status can have two possible values:

1. **OK:** The option is available.
2. **RQ:** The availability of the previously selected option is pending confirmation from the Seller.

Note that some Sellers may return an "OK" status in the Search response but an "RQ" status in the Quote response. This can occur if the Seller uses cached options on their system, which may require additional confirmation.

:::warning Status RQ in Quote response
If you receive an "RQ" status in the Quote response, it is recommended to initiate a new Search request and restart the booking flow to ensure the most accurate availability and pricing.
:::
