---
sidebar_position: 1
---

# Overview

## Book

The [Book](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book) operation is used to request a booking confirmation for a specified `optionRefId` returned in the Quote response. It provides a summary of the selected option along with the reservation status.

The information returned in the Book response may vary by Seller. To ensure you receive the required details, refer to our [Hotel-X Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart) and include the necessary fields in your Book request. Additionally, check the [Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query) of your Sellers for their specific requirements.

Some key fields to include in your Book mutation request:

- **Status:** Ensure this field is added to receive the reservation status in the response.
- **Price:** The total price of the booking.
- **Client Reference:** The booking reference in your system (an alphanumeric value). It should be unique to avoid errors on the Supplier's side.
- **Supplier Reference:** The booking reference in the Supplier's system.
- **BookingID:** The unique identifier for the reservation in Hotel-X.
- **Holder:** The lead passenger information.
- **Hotel:** Hotel information.

## DeltaPrice

### What is DeltaPrice and why should I use it? 💡

The [DeltaPrice](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book) allows Buyers to define an acceptable price variation (amount or percentage) during the booking process. If the new price exceeds the specified DeltaPrice, an error is returned. If DeltaPrice is not provided and the Seller supports it, the default tolerance is 0, meaning the booking can proceed only if the price is equal to or lower than the quoted price.

This field is implemented if it is native to the Supplier or if another Search-Quote request is needed during the booking process.

:::info
**Interested in adding DeltaPrice to your requests?** Visit our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book) for more details! 🚀
:::

### What does DeltaPrice "applyBoth" mean?

- **applyBoth: false** – Either the amount or percentage condition must meet the DeltaPrice criteria.
- **applyBoth: true** – Both amount and percentage conditions must be met.

**Example:** If the Quote price is 100€ and DeltaPrice is set to 5, a price up to 105€ will still allow the booking to be confirmed.

## Defining Rooms and Passengers in Book Requests

### How do I define the total number of rooms and paxes in my Book request?

To define the number of rooms in your Book request, use the same "occupancies" data provided in your Search request. For example, if your Search was for a room with two adults, the Book request should reflect the same structure.

To specify passenger details, include the "paxes" array within the "rooms" object of your `bookInput`, ensuring it matches the Search request data. Each passenger should be represented with the following fields:

- `name`
- `surname`
- `age`
- `title` (optional)

:::note
The number of rooms and passenger distribution in your Book request **must** match the Search request. You cannot extend the "paxes" array beyond the initial Search request data.
:::

Example for a room with two adults:

```
"rooms": [
            {
                "occupancyRefId": 1,
                "paxes": [
                    {
                        "name": "John",
                        "surname": "Doe",
                        "title": "Mr",
                        "age": 30
                    },
                    {
                        "name": "Jane",
                        "surname": "Doe",
                        "title": "Ms",
                        "age": 28
                    }
                ]
            }
        ]
```

