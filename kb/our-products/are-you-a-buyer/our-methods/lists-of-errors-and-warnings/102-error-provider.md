---
sidebar_position: 3
---

# 102 error - Provider error

### What does a 102 error mean?💡
The 102 error is classified as **provider error** and it occurs when a Seller returns a particular code/description for an error, which is then transmitted to you in our response.

If the Seller does not provide an error description, it will be typified as a 102 error type without description.

```
<applicationErrors>
    <code>provider_error_code</code>
    <type>102</type>
    <description>provider_error_description</description>
    <httpStatusCode>0</httpStatusCode>
</applicationErrors>

```

### What can I do if I receive a 102 error in my response?✔️
1. **Align Request Configurations**  
For connections through our Legacy Pull Buyers API, confirm that the configuration in your requests aligns with the access configuration for those credentials in [My Connections](/kb/connections/my-connections/).
2. **Contact the Seller**  
We strongly recommend contacting your Seller directly if the error description 102 is unclear. Please ensure to provide them with the complete logs, including the transactions with their system, for more detailed analysis on their end.

### How can I obtain the Seller logs in their own format?✔️
To obtain Seller logs (in their own system format), use the `auditData` parameter in the Hotel-X Pull Buyers API or the `registerTransactions` feature in the Legacy Pull Buyers API. For detailed instructions on retrieving these transactions, please refer to the following [article](/kb/apps/monitoring-apps/logging/how-can-i-receive-seller-transactions-in-their-api-format).
