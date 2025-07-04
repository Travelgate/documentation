---
sidebar_position: 3
---

# Book Status

## What Does the Status in a Book Response Indicate?

When the Book (Reservation) method is executed, the API response will include a **Book status**, which indicates the current status of the reservation. This status can have one of the following three values: **OK**, **ON_REQUEST**, or **UNKNOWN**.

## Book Status Values

1. **OK:** The reservation has been successfully completed.
2. **ON_REQUEST:** The reservation has been processed, but the product is not yet available by the Seller. The reservation is placed on a waiting list, and it is the Buyer's responsibility to verify its final status.
   
    _Important:_ The Book status can change over time. For example, you might initially receive an ON_REQUEST status, but after running a Booking Query a few moments later, the status may have updated to OK.
3. **UNKNOWN:** During the reservation process, an issue led to an unknown reservation status. The Buyer is responsible for verifying with the Seller that the booking has been confirmed.
4. **CANCELLED:** The booking attempt was unsuccessful, and due to a supplier error or timeout, the system has automatically canceled the reservation to prevent further issues.

### What should I do if I receive a reservation status other than 'OK' or no response at all in Book response?

While you can run a Booking Query to check the status of a reservation, you should always **contact the Seller** to confirm the actual status whenever you receive a booking status other than 'OK' or no response at all.

### What Should I Do if I Receive an OK Status and an Error in the Same Book Response?

If the Book response returns both an OK status and an error message, **the error takes precedence** over the reservation status. You should always check with the Booking Query and contact the Seller in order to check the actual status of the booking in those cases.

