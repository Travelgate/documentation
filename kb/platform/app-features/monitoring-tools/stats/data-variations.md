---
sidebar_position: 5
---

# Data Variations

## Why Do Data Variations Occur?

We often receive inquiries from Partners regarding divergences between the data shown in Travelgate Stats and the information stored in their own systems. These discrepancies—specifically in the number of requests per method—are common and usually stem from differences in how transactions are counted and processed.

Data variations typically occur due to two main factors: Travelgate’s transaction logic and Buyer-side processing issues.

### 1. Transaction Logic

To ensure a seamless experience, Travelgate standardizes the Booking Flow into three methods: **Search, Quote, and Book**. However, some Supplier integrations require multiple transactions per method. For example, a single Travelgate 'Quote' might trigger several calls to the Supplier in order to verify availability or final rates.

Therefore, these differences may lead to a variation in transaction counts: while we record one transaction per method for statistical clarity, your system may log every individual interaction.

### 2. Buyer-side Issues

In other cases, discrepancies occur before a request even reaches the Travelgate or Seller systems. This leads to situations where a Buyer reports errors, but no traffic is visible on the Seller’s end. Common causes include:

* **Validation Failures:** The request was blocked because it didn't meet the required schema.
* **Authentication Errors:** Incorrect credentials prevented the request from initiating.
* **Client-side Timeouts:** The Buyer’s system timed out before the handshake with the Seller was completed.

### How Can I Review Data Variations?

To align your statistics, we recommend the following steps:
1. **Coordinate with your Partner:** Maintain open communication with your Buyer or Seller to compare transaction logs and identify specific timeframes where data diverges.
2. **Analyze Error Responses:** Review the specific [errors received](/kb/connectivity-products/for-buyers/errors-and-warnings/overview) (if any). Often, a high volume of failed requests on one side—that never reach the other—is the root cause of the variation.
3. **Audit Your Transactions:** Perform a deep-dive [audit of your logs](/kb/platform/app-features/monitoring-tools/logging/audit-searches-functionality) to differentiate between Travelgate's standardized methods and your internal API calls.