---
sidebar_position: 3
description: Understand the four Cancel status values in HotelX — CANCELLED, OK, ON_REQUEST, and UNKNOWN — and what action to take for each.
---

# Cancel Status

### What Does the Status in a Cancellation Response Indicate?
Once a Cancel (Cancellation) method is run, our API response will provide its **Cancel status**. This status represents the current status of the cancellation and can be categorized into four possible values: CANCELLED, OK, ON_REQUEST, and UNKNOWN.

### What Are the Different Values That Can Be Assigned to the Cancel Status?
- **CANCELLED**: The booking has been successfully canceled.
- **OK**: The cancellation request was received but the booking has **not been cancelled** — the reservation remains active.
- **ON_REQUEST**: The reservation has been completed, but the product is still not available by the Seller, placing it on a waiting list. It is the Buyer’s responsibility to verify the booking status.
- **UNKNOWN**: During the cancellation process, an issue led to an unknown reservation status. The Buyer is responsible for confirming the final status with the Seller directly. To do so, use the [Booking Query](/kb/connectivity-products/for-buyers/hotel-x/booking-management/booking-query) to check the current reservation status, or contact the Seller directly.

### What should I do if I receive an error or no response in Cancel response?
If you receive any of the [common errors](/kb/connectivity-products/for-buyers/errors-and-warnings/overview), no response, or a **status other than 'CANCELLED**,' it is your responsibility as the Buyer to verify the final cancellation status in the Seller's system.

:::tip
For full technical details on the Cancel mutation, input fields, and response structure, check our [HotelX Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel). 🚀
:::

