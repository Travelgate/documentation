---
sidebar_position: 21
---

# PLUGIN_ERROR

## What Does a "PLUGIN_ERROR" Mean? 
A "PLUGIN_ERROR" occurs when our system cannot validate the plugin information added to a Hotel-X request.

## What Can I Do If I Receive a "PLUGIN_ERROR"? 

### **1. PLUGIN_ERROR: WRONG_FIELD**
This error typically occurs due to issues with the input or structure of the plugin. To resolve it, ensure that the Plugin format you have set up aligns with our Hotel-X API [Specifications](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview).

Another scenario where this warning appears is when the integration does not receive commission details from the Seller. You may see a warning message like:

```
"warnings":[{"external":null,"type":"PLUGIN_ERROR","code":"WRONG_FIELD","description":"commission: commission not found"}]
```

- **If this happens during a Search**, we will inform the Buyer to upload the [commission file to our SFTP](/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/wrong-field-plugin-error) for accurate results.
- **If commission details are missing in other methods**, the Buyer will receive the "commission: commission not found" warning.

### **2. PLUGIN_ERROR: BLACKLIST**
A "PLUGIN_ERROR" warning with the code "BLACKLIST" appears when hotels or accesses in your request have been [blacklisted](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist).

To **resolve** this issue:
- Verify that the information in your blacklist files is correct and matches the data in your request criteria.

:::tip
For further information on Hotel-X errors and warnings, check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/errors-and-warnings/booking-flow) ⚠️
:::
