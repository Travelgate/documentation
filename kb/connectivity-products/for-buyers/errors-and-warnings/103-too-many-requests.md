---
sidebar_position: 4
---

# 103 Error - Too Many Requests to the Supplier

## What Does a 103 Error Mean?
A **103 error** occurs when your account exceeds the agreed-upon request limit with the Seller.

### Example:
```xml
<applicationErrors>
    <code>219</code>
    <type>103</type>
    <description>Too many requests to the supplier.</description>
    <httpStatusCode>0</httpStatusCode>
</applicationErrors>
```

## How to Handle a 103 Error

#### 1. Contact the Seller
Reach out to the Seller directly, as they can adjust the **Queries Per Second (QPS)** limit assigned to your account.

#### 2. Use the Speed Solution
Activate [Speed](/kb/platform/app-features/smart-traffic/speed/speed-details), our intelligent caching solution, to reduce response times and minimize traffic load on the connection.

:::info
As a Buyer, you cannot check the Supplier’s **QPS (Queries Per Second) value** directly through the Travelgate API. If you need this information, please contact the Supplier.
:::
