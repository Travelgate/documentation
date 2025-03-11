---
sidebar_position: 2
---

# Status in Cancel response

### What does the status in a cancellation response indicate?
Once a Cancel (Cancellation) method is run, our API response will provide its **Cancel status**. This status represents the current status of the cancellation and can be categorized into four possible values: CANCELLED, OK, ON_REQUEST and UNKNOWN.

### What are the different values that can be assigned to the Cancel status?🔎
- **CANCELLED**: The status of the booking is cancelled.
- **OK**: The reservation status is OK.
- **ON_REQUEST**: The reservation was completed but the product is still not available by the Seller, so the reservation goes into a waiting list. It is the Buyer’s responsibility to check if the booking is OK.
- **UNKNOWN**: During the cancelation process, an issue led to an unknown reservation status. The Buyer is responsible for confirming with the Seller that the booking has been canceled.
### What should I do if I receive an error in Cancel response?
If you receive **any of the [common errors](/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/overview) or a status other than "CANCELLED"**, it will be your responsibility as a Buyer to check the final status of the cancellation in the Seller's system.