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
Since 301 errors indicate that the option you selected is no longer offered by the Seller, you should **begin a new Booking Flow** starting from Search. Additionally, and in order to minimize the occurrence of 301 errors, we suggest reducing the time gap between Search and Quote queries.

If you notice a sudden and consistent rise in the number of 301 errors from a Seller, please reach out to our [Customer Care](https://app.travelgatex.com/tickets) team for assistance, we'll be happy to help!