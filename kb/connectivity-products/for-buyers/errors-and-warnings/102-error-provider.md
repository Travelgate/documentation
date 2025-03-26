---
sidebar_position: 3
---

# 102 Error - Provider Error

## What Does a 102 Error Mean?
The **102 error** is classified as a **provider error** and occurs when a supplier returns a specific error code or description, which is then relayed to you in our response.

If the Seller does not provide an error description, the system categorizes it as a 102 error without further details.

```xml
<applicationErrors>
    <code>provider_error_code</code>
    <type>102</type>
    <description>provider_error_description</description>
    <httpStatusCode>0</httpStatusCode>
</applicationErrors>
```

## How to Handle a 102 Error

#### 1. Verify Request Configurations
If you are using our **Legacy Pull Buyers API**, ensure that your request configurations match the access configurations associated with your credentials in [My Connections](/kb/app-features/connections/my-connections/managing-connections/connections-details).

#### 2. Contact the Seller
If the error description for a 102 error is unclear, we strongly recommend reaching out to the Seller directly. When doing so, provide them with complete logs, including transactions involving their system, to facilitate a detailed investigation.

### Retrieving Seller Logs in Their Format
To obtain Seller logs in their original system format, use one of the following methods:

- **Hotel-X Pull Buyers API:** Utilize the `auditData` parameter.
- **Legacy Pull Buyers API:** Use the `registerTransactions` feature.

For step-by-step guidance on retrieving these transactions, refer to this [article](/kb/app-features/monitoring-tools/logging/audit-supplier-transactions).
