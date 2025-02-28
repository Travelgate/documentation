---
sidebar_position: 4
---

# Data Discrepancies

### Why Do the Statistics in My System Differ from the Data Provided by Travelgate?

We often receive inquiries from our Partners about discrepancies between the data in **Stats** and the information in their own systems, particularly regarding variations in the number of requests per method. As you know, the Travelgate Booking Flow involves the following methods:

1. **Search**
2. **Quote**
3. **Book**

### Why Do These Discrepancies Occur?

Some integrations at Travelgate (not all) require **multiple transactions per method** to align with the Supplier's API workflow. For example, the **Quote** method might need 2 or 3 calls to the Supplier’s system to verify availability, rates, and other details.

Even though multiple calls might be made to the Supplier’s system, **Stats** will count only **one transaction per method** (the Travelgate method transaction). This means there may be discrepancies between the transaction count in our Stats and the actual number of calls made to the Supplier's system.