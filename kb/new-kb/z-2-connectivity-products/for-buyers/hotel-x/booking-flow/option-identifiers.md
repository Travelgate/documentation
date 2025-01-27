---
sidebar_position: 6
---

# Option Identifiers

### What Is the `id` (optionRefId) of an Option?

The `id` or `optionRefId` is a unique identifier assigned to each option. It is crucial **not to modify this identifier**, as it is used throughout the entire Booking Flow.

To ensure a seamless booking experience, you must use the `id` or `optionRefId` from the previous query response in your subsequent request:

- Use the **`id` from the Search response** in your Quote request.
- Use the **`optionRefId` from the Quote response** in your Book request.


### What Is the Lifetime of an `OptionRefId`?

There are no specific time restrictions imposed by Travelgate on the lifetime of an `OptionRefId`. However, **each Seller may have different constraints.** For instance, some Sellers might impose a maximum time gap (e.g., 5 minutes) between Search and Quote requests.


### If I encounter an error in the Quote Response, can I continue using the same Search `id`?

If you encounter an error in the Quote response, you must initiate a **new Search request** and restart the Booking Flow. This ensures that a fresh `id` is generated, improving the accuracy and consistency of the booking process.


### Can I Use the `OptionRefId` for Custom Logic in My API?

No, you must **not** use or interpret the `OptionRefId` to implement any custom logic within your API. The `OptionRefId` is unique to each connection and may vary across different connections. **Relying on it for business logic may lead to unexpected errors.**


### Option identifiers in the Legacy Pull Buyers API

If you are still using the Travelgate's Legacy Pull Buyers API, follow these steps:

1. In the **Availability response**, you will receive a tag called `Parameters`. This tag and its content are crucial for the integration.
2. Copy the `Parameters` of the selected option from the Availability response, ensuring the entire tag is included.
3. Paste the copied `Parameters` tag into the body of your **Valuation request**.
4. Run the Valuation request method. If successful, the response will include the same `Parameters` tag, but with updated content.
5. Finally, paste the `Parameters` tag from the Valuation response into the body of your **Reservation request** to complete the booking process.


:::tip
For further details, please refer to our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow).
:::
