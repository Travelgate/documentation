---
sidebar_position: 5
---

# Data Variations

### Why Do the Statistics in My System Differ from the Data Provided by Travelgate?

We often receive inquiries from our Partners regarding divergences between the data in **Stats** and the information stored in their own systems, particularly regarding variations in the number of requests per method. As you know, the Travelgate Booking Flow involves the following methods:

1. **Search**
2. **Quote**
3. **Book**

### Why Do These Variations Occur?

Some integrations at Travelgate (not all) require **multiple transactions per method** to align with the Supplier's API workflow. For example, the **Quote** method might need 2 or 3 calls to the Supplier’s system to verify availability, rates, and other details.

Even though multiple calls might be made to the Supplier’s system, **Stats** will count only **one transaction per method** (the Travelgate method transaction). This means that there may be variations between the transaction count in our Stats and the actual number of calls made to the Supplier's system.

In other cases, data variations may result from issues on the Buyer's side that occur **before their requests reach the Seller’s system**. This can lead to situations where the Buyer reports [errors](/kb/connectivity-products/for-buyers/errors-and-warnings/overview), even though no traffic is visible on the Seller’s end. Common causes include validation failures, incorrect credentials, or other client-side errors.

To investigate and resolve such discrepancies, we recommend maintaining communication with the Buyer and asking them to **audit their transactions**. You can find more information on how to do this in the articles linked below:
    - [How to Audit Search Logs](/kb/platform/app-features/monitoring-tools/logging/audit-searches-functionality)
    - [How to Audit Supplier Transactions](/kb/platform/app-features/monitoring-tools/logging/audit-supplier-transactions)