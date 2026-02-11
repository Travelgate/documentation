---
sidebar_position: 2
---

# Book Mutation

The [Book](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book) operation is used to request a booking confirmation for a specified `optionRefId` returned in the Quote response. It provides a summary of the selected option along with the reservation status.

The information returned in the Book response may vary by Seller. To ensure you receive the required details, refer to our [Hotel-X Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart) and include the necessary fields in your Book request. Additionally, check the [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata) of your Sellers for their specific requirements.

Some key fields to include in your Book mutation request:

- **Status:** Ensure this field is added to receive the reservation status in the response.
- **Price:** The total price of the booking.
- **Client Reference:** The booking reference in your system (an alphanumeric value). It should be unique to avoid errors on the Supplier's side.
- **Supplier Reference:** The booking reference in the Supplier's system.
- **BookingID:** The unique identifier for the reservation in Hotel-X.
- **Holder:** The lead passenger information.
- **Hotel:** Hotel information.

## DeltaPrice

### What is DeltaPrice and why should I use it?

The [DeltaPrice](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book) allows Buyers to define an acceptable price variation (amount or percentage) during the booking process. If the new price exceeds the specified DeltaPrice, an error is returned. If DeltaPrice is not provided and the Seller supports it, the default tolerance is 0, meaning the booking can proceed only if the price is equal to or lower than the quoted price.

This field is implemented if it is native to the Supplier or if another Search-Quote request is needed during the booking process (Book method).

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

```json
"rooms": [
            {
                "occupancyRefId": 1,
                "paxes": [
                    {
                        "name": "John",
                        "surname": "Doe",
                        "title": "MR",
                        "age": 30
                    },
                    {
                        "name": "Jane",
                        "surname": "Doe",
                        "title": "MS",
                        "age": 30
                    }
                ]
            }
        ]
```


## Client Reference Management

### Does the `clientReference` need to be unique?
Yes, **`clientReference` should be unique** for each booking to maintain data integrity and ensure smooth communication with the Seller's system. **Reusing client references can lead to failed bookings** since some Sellers may have their own internal constraints that reject duplicate client references.

### Can I use one 'multiroom reservation reference' for two separate Travelgate bookings?
While you _can_ technically send the same `clientReference` across multiple Book requests, it is **not recommended** to treat separate Travelgate bookings as a single logical entity. In the Travelgate ecosystem, the Booking/Option is the atomic unit of a transaction. This means:
- **Cancellation is Absolute:** You cannot cancel individual rooms within a single Travelgate booking via Cancel mutation. Cancellation always applies to the entire option/booking.
- **Independent Policies:** Each booking has its own status, cancellation deadlines, and penalty calculations.
- **Reconciliation:** Travelgate and Sellers reconcile data per booking. If one internal ID maps to two Travelgate bookings, automated reconciliation may show discrepancies or partial failures that are difficult to track.

### What are the risks of using one reference for multiple Travelgate bookings?
If your system groups two separate Travelgate bookings under one internal ID, you may encounter the following issues:
- **Reservation Errors:** Sellers may reject bookings when they detect the same `clientReference` used for independent reservations.
- **Fragmented Cancellation:** If you "cancel" the reservation in your system, you must ensure both independent Travelgate bookings are cancelled. One might succeed while the other fails, leading to "ghost" bookings at the Seller side.
- **Penalty Calculation:** Penalties are calculated at the option level. You will receive two separate penalty sets which your system must then manually aggregate.
- **Status Mismatches:** If one booking is confirmed and the other is rejected by the Seller, your internal "multi-room" reservation will enter an inconsistent state.

:::warning Important  
- Travelgate does *not* process reservations or cancellations on behalf of our Partners. These actions must be handled directly by the Partner.  
- For seamless billing, **all cancellations should be processed through our API.**  

If you encounter any issues, feel free to contact our [Customer Support team](https://app.travelgate.com/support) for assistance. Additionally, please remember to cancel any test bookings with Sellers and verify their refund policies.  
:::