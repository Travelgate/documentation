---
sidebar_position: 4
---

# Error Code 10 - HotelCode Not Found

## What Does an Error Code 10 Mean? 
When Channel Managers return an error code 10, **"HotelCode not found: Hotel [hotelcode] doesn't exist in [Channel Manager] or it's not mapped"**, it means that the Channel Manager has not been able to locate the hotel from the Buyer’s request in their system, or the hotel is not active in the Client's setup on the Inventory Extranet.

### Buyer Response Example:
```graphql
"errors": [
    {
        "code" : "10",
        "type" : "102",
        "description" : "HotelCode not found: Hotel [hotelcode] doesn't exist in [Channel Manager] or it's not mapped."
    }
]
```

## What Can I Do If I Receive an Error Code 10 in My Book or Cancel Response?
To resolve this issue, follow these steps:

1. **[Check Your Setup](/docs/apps/inventory/extranet/set-up/setup)**
   - Confirm whether the hotel exists and is active.
2. **Verify Channel Manager Connection**
   - If the hotel is active but the issue persists, it may be because:
     - The hotel is no longer connected to the Channel Manager.
     - The Client has been deactivated for that specific property in the Channel Manager’s system.
   - In either case, the Buyer should contact the hotelier to verify this information and take necessary actions.

:::warning Status in Book and Cancel Response
Don't forget to review the **[Book Status](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/what-status-can-be-returned-in-hotel-x-book-response)** and **[Cancel Status](/kb/our-products/are-you-a-buyer/our-methods/booking-management/cancel/cancel-status)** articles for detailed instructions on handling booking or cancellation errors.
:::
