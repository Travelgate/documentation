---
sidebar_position: 2
---

# Cancel Status

### What Does the Status in a Cancellation Response Indicate?
Once a Cancel (Cancellation) method is run, our API response will provide its **Cancel status**. This status represents the current status of the cancellation and can be categorized into four possible values: CANCELLED, OK, ON_REQUEST, and UNKNOWN.

### What Are the Different Values That Can Be Assigned to the Cancel Status?🔎
- **CANCELLED**: The booking has been successfully canceled.
- **OK**: The reservation status is confirmed as OK.
- **ON_REQUEST**: The reservation has been completed, but the product is still awaiting confirmation from the Seller, placing it on a waiting list. It is the Buyer’s responsibility to verify the booking status.
- **UNKNOWN**: The cancellation process through Travelgate was completed, but due to a supplier error or timeout, the cancellation status is unknown. It is the Buyer’s responsibility to confirm if the booking has been canceled.

### What Should I Do if I Receive an Error in the Cancel Response?
If you receive **any of the [common errors](/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/overview) or a status other than "CANCELLED"**, it will be your responsibility as a Buyer to check the final status of the cancellation in the Seller's system.

