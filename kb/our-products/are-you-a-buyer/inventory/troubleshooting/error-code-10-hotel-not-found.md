---
sidebar_position: 4
---

# Error code 10 - HotelCode not found


### What does a 10 error code mean?💡
When Channel Managers return an error code 10, "HotelCode not found: Hotel [hotelcode] doesn't exist in [Channel Manager] or it's not mapped", it indicates that the Channel Manager hasn’t been able to find the hotel from the Buyer’s request in their system, or the hotel is not active in the Client's SetUp on the Inventory Extranet.

Buyer response example:

```graphql
"errors": [
    {
        "code" : "10",
        "type" : "102",
        "description" : "HotelCode not found: Hotel [hotelcode] doesn't exist in [Channel Manager] or it's not mapped."
    }
]
```

### What can I do if I receive a 10 error code in my Book or Cancel response?
To address this issue, please follow these steps:

1. [Check your SetUp](/docs/apps/inventory/extranet/set-up/setup) to confirm whether the hotel exists and is active.
2. If the hotel is active yet the issue persists, it may be because the hotel is no longer connected to the Channel Manager, or the Client has been deactivated for that specific property in the Channel Manager's system. In either case, the Buyer should contact the hotelier to verify this information and take necessary actions.

:::warning Status in Book and Cancel response
Don't forget to review the '[Book Status](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/what-status-can-be-returned-in-hotel-x-book-response)' and '[Cancel Status](/kb/our-products/are-you-a-buyer/our-methods/booking-management/cancel/cancel-status)' articles for detailed instructions on how to proceed in case of a booking or cancellation error.
:::