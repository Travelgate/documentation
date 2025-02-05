---
sidebar_position: 11
---

# 206 error - Dates Not Supported


### What does a 206 error mean?💡
You will encounter a 206 error in those cases the dates in your Search request don't align with the Seller's date specifications.

### How can I obtain information about the Seller's date requirements and minimize errors?🚫
To check the dates specifications set by the Seller and prevent errors and unnecessary traffic, we strongly advise utilizing our [Metadata Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata).
 
#### Some of the fields validated:

- Minimum number of days required between booking date and checkIn date (release)
- Minimum number of days/stay required for a booking (minimumStay)

:::info Date format for check-in and check-out
Please remember, the date format for check-in and check-out should be:
- In the Legacy Pull Buyers API, the format for "StartDate" and "EndDate" is: dd/mm/yyyy.
- In the Hotel-X Pull Buyers API, the format for "checkIn" and "checkOut" is: yyyy-mm-dd.
:::