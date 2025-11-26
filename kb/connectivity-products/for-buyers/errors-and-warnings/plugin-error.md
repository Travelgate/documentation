---
sidebar_position: 21
---

# PLUGIN_ERROR

## What Does a "PLUGIN_ERROR" Mean? 
A **"PLUGIN_ERROR"** occurs when our system cannot validate the plugin information added to a Hotel-X request. It is classified as a [Hotel-X warning](/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/errors-and-warnings/booking-flow#warning-list).

## What Can I Do If I Receive a "PLUGIN_ERROR"? 

### **1. PLUGIN_ERROR: WRONG_FIELD**
- This warning typically appears due to issues with the input or structure of your plugin. To resolve it, ensure that the plugin format you’ve configured complies with our Hotel-X API [Specifications](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview).
- The warning may also occur if the integration does not receive commission details from the Seller—for example, during a Booking Read, Book or Cancel operation. In such cases, you might encounter a message like:

```json
"warnings":[{"external":null,"type":"PLUGIN_ERROR","code":"WRONG_FIELD","description":"commission: commission not found"}]
```

**To resolve the PLUGIN_ERROR related to a missing commission, the Buyer can either:**
- **Contact the Seller** and request that they include the commission information in their responses via the integration for the relevant method.
- **Upload the commission file to the SFTP** with the expected commission amount (or 0 if working with net prices).
If this occurs during a Search, we’ll notify the Buyer with a specific warning message. You can find more information about missing commissions in Hotel-X Search requests in this [article](/kb/connectivity-products/for-buyers/errors-and-warnings/wrong-field-plugin-error).

:::warning Important
Make sure all the changes related to commission are made in coordination with your Seller in order to avoid any potential issues.
:::

### **2. PLUGIN_ERROR: BLACKLIST**
A "PLUGIN_ERROR" warning with the code "BLACKLIST" appears when hotels or accesses in your request have been [blacklisted](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist).

To **resolve** this issue:
- Verify that the information in your blacklist files is correct and matches the data in your request criteria.

:::tip
For further information on Hotel-X errors and warnings, check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/errors-and-warnings/booking-flow) ⚠️
:::