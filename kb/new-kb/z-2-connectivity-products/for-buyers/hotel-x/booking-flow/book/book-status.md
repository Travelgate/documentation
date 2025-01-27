---
sidebar_position: 2
---

# Book Status

## What Does the Status in a Book Response Indicate?

When the Book (Reservation) method is executed, the API response will include a **Book status**, which indicates the current state of the reservation. This status can have one of the following three values: **OK**, **ON_REQUEST**, or **UNKNOWN**.

## Book Status Values

1. **OK:** The reservation has been successfully completed.
2. **ON_REQUEST:** The reservation has been processed, but the product is not yet confirmed by the Seller. The reservation is placed on a waiting list, and it is the Buyer's responsibility to verify its final status.
   
    _Important:_ The Book status can change over time. For example, you might initially receive an ON_REQUEST status, but after running a Booking Query a few moments later, the status may have updated to OK.
3. **UNKNOWN:** The reservation process was completed through Travelgate; however, due to a supplier error or a timeout, the final reservation status is unknown. This means our system was unable to confirm whether the booking was successful on the Seller's system. It is the Buyer's responsibility to verify the booking status.

## What Should I Do if I Receive a Reservation Status Other Than OK in the Book Response?

If the Book response returns a status other than **OK**, you should:

- Run a Booking Query to check the latest status of the reservation.
- **Contact the Seller directly** to confirm the actual status of the booking, especially in cases where the response status is ON_REQUEST or UNKNOWN, or if no response is received at all.

## What Should I Do if I Receive an OK Status and an Error in the Same Book Response?

If the Book response returns both an **OK status** and an **error message**, <ins>the reservation status takes precedence over the error</ins>.

