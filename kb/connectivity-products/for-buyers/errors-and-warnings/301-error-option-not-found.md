---
sidebar_position: 13
---

# 301 Error - Option Not Found in Valuation

## What Does a 301 Error Mean?
A 301 error occurs when a Seller fails to return the option previously selected by the Buyer in the Search response. This means the option is no longer available. This error can appear in the Quote response and Book response (when an additional Quote request is needed for the Seller).

### What Is the Difference Between a 204 Error and a 301 Error?
- A **204 error** in a Quote response means the Seller did not provide any options for the availability request linked to that method.
- A **301 error** occurs when the Seller provides results, but none match the option previously selected by the Buyer.

:::note
**Aligning our Booking Flow with the Seller's is a priority.** In some cases, our Quote method involves multiple operations. As a result, it is common for Travelgate Quotes to include a second Search to the Seller's system to confirm the availability of the selected option.
:::

## What Can I Do If I Receive a 301 Error?
- **Restart the Booking Process**
  - Since a 301 error indicates that the selected option is no longer available, initiate a new Booking Flow starting from the Search step.
- **Reduce Time Gaps**
  - To minimize the occurrence of 301 errors, reduce the time gap between Search and Quote queries.
- **Check Availability Issues**
  - Contact the Supplier to verify if the requested properties have low availability, which may cause options to become unavailable, especially during high-demand periods.

If you notice a sudden and consistent increase in 301 errors from a Seller, please contact our [Customer Support](https://app.travelgate.com/support) team for assistance. We are here to help!
