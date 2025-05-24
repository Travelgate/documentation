---
sidebar_position: 4
---

# FAQs

## Cancellation Process

### Can I apply any filters to my Hotel-X Cancel Mutation?
No, filters cannot be applied to the Cancel Mutation request.

### Is it possible to retrieve cancellation costs without canceling the booking?
Yes, if the Seller provides cancellation policy details, you can retrieve this information through the **Hotel-X Quote Query** or the **Hotel-X Booking Query** without initiating a cancellation.

### Can Travelgate remove cancellation fees if the hotel waives them after the booking is canceled?
As cancellation policies are returned by the Supplier via the integration, it is not possible to remove cancellation fees from a booking that already includes them.

### In a reservation with two rooms, if both have the same cancellation policy, should the penalties be summed up under the option node?  
Yes, an option represents a combination of rooms. Canceling an option results in the cancellation of all associated rooms, and consequently, the cancellation charges for all rooms will be applied collectively.

## Booking Management

### Can I cancel individual rooms within a booking?
No, **you cannot cancel individual rooms within a booking** using the Hotel-X API. Cancellations apply to the entire booking (option), which includes all rooms in that reservation. When you cancel the option, all associated rooms are canceled together.

If you need to remove or change a specific room, you can use the [Amend Rooms](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms) operation. This allows you to modify the structure of the booking rather than cancel individual rooms. Note that this is not the same as a partial cancellation—it is a booking modification and may involve amendment fees or price changes, depending on the supplier’s policies.

To determine whether a Seller supports amendments and which modifications are allowed, please review their [Metadata](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata).

### Is it possible to restore a booking that was mistakenly canceled?
No, once a booking is canceled, it cannot be reinstated. However, you can initiate a new booking flow to create a new reservation. Each booking must be treated as a separate transaction, and it is not possible to recover the original booking.

If you need further details regarding a mistakenly canceled booking, please contact the Seller directly. Keep in mind that any booking management actions conducted outside Travelgate will not be reflected in our system. Our platform only tracks bookings and cancellations made through Travelgate.

:::tip Need more information?
Explore our [Hotel-X Cancel Mutation Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel) for further insights on handling cancellations. 🚀
:::
