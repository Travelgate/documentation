---
sidebar_position: 13
---

# 301 error - Option Not Found In Valuation

### What does a 301 error mean?💡
This error occurs when a Seller fails to return the option previously chosen by the Buyer in Search response (the option is no longer available). This error can be encountered in Quote response and Book response (whenever the integration requires an additional Quote to the Seller).

### What is the difference between a 204 error and a 301 error?🔎
If a **204 error** is returned in Quote response, it indicates that the Seller did not provide any options for the availability request associated with that method. On the other hand, a **301 error** is returned when the Seller does provide results, but none of them match the option previously selected by the Buyer.

:::note
**Aligning our Booking Flow with the Seller's is one of our priorities**, and in some instances, our Quote method involves multiple operations. As a result, it is quite common for TravelgateX Quotes to include a second Search to the Seller's system to verify the availability of the selected option.
:::

### What can I do if I receive a 301 error in my response?✔️
- **Restart Booking Process**  
Since 301 errors indicate that the option you selected is no longer offered by the Seller, initiate a new Booking Flow starting from the Search step.
- **Reduce Time Gaps**  
To minimize the occurrence of 301 errors, reduce the time gap between Search and Quote queries.
- **Check Availability Issues**  
We also recommend contacting the Supplier to verify if the properties you are requesting have low availability, which might cause the requested options to become unavailable, especially during high occupancy dates.

If you notice a sudden and consistent increase in the number of 301 errors from a Seller, please contact our [Customer Support](https://app.travelgate.com/support) team for assistance. We are here to help!