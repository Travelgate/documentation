---
sidebar_position: 3
---

# Cancel Status

### What Does the Status in a Cancellation Response Indicate?
Once a Cancel (Cancellation) method is run, our API response will provide its **Cancel status**. This status represents the current status of the cancellation and can be categorized into four possible values: CANCELLED, OK, ON_REQUEST, and UNKNOWN.

### What Are the Different Values That Can Be Assigned to the Cancel Status?
- **CANCELLED**: The booking has been successfully canceled.
- **OK**: The reservation status is OK.
- **ON_REQUEST**: The reservation has been completed, but the product is still not available by the Seller, placing it on a waiting list. It is the Buyer’s responsibility to verify the booking status.
- **UNKNOWN**: During the cancelation process, an issue led to an unknown reservation status. The Buyer is responsible for confirming with the Seller that the booking has been canceled.

### What should I do if I receive an error or no response in Cancel response?
If you receive any of the [common errors](/kb/connectivity-products/for-buyers/errors-and-warnings/overview), no response, or a **status other than 'CANCELLED**,' it is your responsibility as the Buyer to verify the final cancellation status in the Seller's system.

