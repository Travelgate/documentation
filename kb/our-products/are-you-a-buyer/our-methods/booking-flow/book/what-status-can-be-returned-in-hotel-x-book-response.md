---
sidebar_position: 2
---

# Status in Book response

### What does the status in a reservation response indicate?
Once a Book (Reservation) method is run, our API response will provide its **Book status**. This status represents the current status of the reservation and can be categorized into four possible values: OK, ON_REQUEST, UNKNOWN and PENDING_COMMIT.

### What are the different values that can be assigned to the Book status?🔎
1. **OK:** The reservation was completed with no problems.
1. **ON_REQUEST:** The reservation was completed but the product is still not available by the Seller, so the reservation goes into a waiting list. It is the Buyer’s responsibility to check if the booking is OK.  
Please note that a Book status may change over time: you may receive an ON_REQUEST status in Book response, and after running a Booking Query some seconds later the status may have already changed to OK.
1. **UNKNOWN:** The reservation process through TravelgateX was completed but due to a supplier error or a timeout, the reservation status is unknown (our system was unable to confirm if the booking has been confirmed or not the on Seller's system). It is the Buyer’s responsibility to check if the booking is OK.
## What should I do if I receive an OK status and an error in the same Book response?
If you receive an error + booking status OK in BookRS (ReservationRS), <ins>**the reservation status prevails over the error**</ins>.
 
:::info
Although you may also run a Booking Query in order to check the status of a reservation, please note that you should always **contact the Seller** in order to check the actual status of a booking in those cases you receive a booking status different than OK or no response at all.
:::
