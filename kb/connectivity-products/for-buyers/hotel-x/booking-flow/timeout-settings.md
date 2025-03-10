---
sidebar_position: 5
---

# Timeout Settings

### Is It Mandatory to Specify a Timeout in My Requests?
Yes, you must set a timeout value for all Booking Flow queries and mutations. If no timeout value is provided at the request level, our system will apply the default configured timeout.

### What Timeout Values Should I Use for Each Step?
The ideal timeout values depend on your preferences and operational needs. We recommend testing different timeout values based on the number of hotels requested and the Seller’s specifications or restrictions.

**Travelgate Buyers API allows the following maximum timeout values:**

- **Search:** 25,000 ms
- **Quote:** 180,000 ms
- **Book:** 180,000 ms

### What Happens if I Set a Timeout Higher Than the Allowed Limits?
If you specify a timeout that exceeds the recommended values, our system will automatically apply the maximum allowable limit. For example, if you set a timeout of 30,000 ms in a Search request, the system will cap it at the allowed maximum of 25,000 ms.

## Setting Timeout Values in Hotel-X Buyers API
You can configure timeout values in two ways:

1. **At the request level**, by including the timeout parameter in your query settings:

    ```json
    "settings": {
        "context": "xxx",
        "client": "xxx",
        "testMode": true,
        "auditTransactions": false,
        "timeout": 24700
    }
    ```

2. **As a default timeout value in your API Settings**, more details are available [here](/kb/web-features/connections/api-settings/).

:::info 
When making a multimode request, it is not possible to set different timeout values for each Supplier. The timeout value you set will apply uniformly to all Suppliers.
:::

### Why Does Hotel-X Add 150 Milliseconds to My Requests?
Hotel-X includes an additional **150 milliseconds** to your requests as an operation timeout value. This operation timeout represents the maximum time allowed before the system cancels the operation. Once this timeout is reached, the operation will be aborted and an error message will be returned.

- The operation timeout should always be set higher than the supplier timeout.
- If an operation timeout is not specified, the default will be the request timeout plus 150 ms.

**Example:**  
If you specify a timeout of 20,000 ms, the operation timeout will be set to 20,150 ms by default.

## Setting Timeout Values in the Hotel Buyers Legacy API
For users of the **Hotel Buyers Legacy API**, the timeout must be set at the request level using the `timeoutMilliseconds` tag.

### My Legacy API Requests Contain Two Timeout Tags. What Is the Difference?
Legacy Pull Buyers API requests include two types of timeout tags:

1. **HUB Timeout:**  
   - Sets the timeout limit for a request at Travelgate.

2. **Supplier Timeout:**  
   - Specifies the timeout limit for requests sent to the Supplier.  
   - The HUB timeout should always be at least **300 ms higher** than the Supplier timeout to allow enough time for parsing the Supplier's response.

   ![timeouts_updated](https://storage.travelgate.com/kbase/timeouts_updated.jpg)

### What Happens If My System Discards Requests Before the Travelgate Timeout Expires?
If your system discards requests earlier than the timeout set in Travelgate, our system will continue processing the request until the full timeout period is reached. Any responses received within this period will be returned, even if your system has already discarded them.

To avoid inconsistencies, **ensure that the timeout values set at Travelgate align with those configured in your own system**.

:::tip
For optimal performance, consider involving the Seller when determining the appropriate timeout values.  
:::
