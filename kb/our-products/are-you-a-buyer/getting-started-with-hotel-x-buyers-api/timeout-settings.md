---
sidebar_position: 7
---

# Timeout Settings

### Is it mandatory to specify a timeout in my request?
Yes, you should set a timeout value in all Booking Flow queries and mutations. If no timeout value is specified at a request level, our system will utilize the timeout configured by default.

### Which timeout should I establish in each step?
It will depend on your preferences and needs. Our recommendation is to test which timeout fits your needs better, taking into account the number of hotels requested and the Seller specifications/restrictions.

**TravelgateX Buyers API allows:**

* A maximum of 25000ms in Search.
* A maximum of 180000ms in Quote.
* A maximum of 180000ms in Book.

### What happens if I set a higher timeout than the ones allowed at TravelgateX API?
Please note that timeout values higher than those recommended will not be applied.
For example: for a timeout over 25000ms in SearchRQ, our system will apply a maximum of 25000ms.

### Timeout Settings in Hotel-X Buyers API
You can either set this information at a **request level** (in your query "settings"):
```
"settings": {
        "context": "xxx",
        "client": "xxx",
        "testMode": true,
        "auditTransactions": false,
        "timeout": 24700,
  }
```
Or you can set a **default timeout value** in your API Settings - more information [here](/kb/connections/connections-settings).

:::info 
Setting a different timeout value for each Seller is not possible when requesting multimode - the timeout value set on your side will be applied to all of your Sellers.
:::

### Why does Hotel-X add 150 milliseconds to my requests?
The 150 ms is the default operationTimeout value set in the Hotel-X layer. The operationTimeout defines the maximum time, in milliseconds, before an operation is cancelled by our system. Once this time is reached, the operation will be aborted and an error will be returned.

This timeout should be set to a higher value than the timeout for suppliers and if operationTimeout is not specified, it will default to the timeout value plus 150 milliseconds. For example, you could specify timeout as 20000 ms and operationTimeout as 22000 ms. This means that we will send a timeout of 20000 ms to the suppliers and will close the connection at 22000 ms if the operationTimeout is exceeded.

### Timeout Settings in Hotel Buyers Legacy API
If you are using our Hotel Buyers Legacy API, note that the timeout setup should be set on your side **at a request level** through the timeout tag "timeoutMilliseconds".

### My Legacy API requests contain two timeout tags, what distinguishes one from the other?

Legacy Pull Buyers API requests include 2 timeout tags: The HUB timeout and the Supplier timeout.

  1. **HUB timeout**: This value sets the timeout limit for a request at Travelgate.
  2. **Supplier timeout**: this value specifies the timeout limit for a request sent to a Seller. It's important to set the HUB timeout at least 300 ms higher than the Supplier timeout to ensure there is sufficient time to parse the Seller's response.
   
   ![timeouts_updated](https://storage.travelgate.com/kbase/timeouts_updated.jpg)


### Client discards requests after 3s but has a 25s timeout. Will results be sent back?
If the client sets a 25,000ms timeout at Travelgate but discards requests after 3,000ms on their end, our system will still process the request until the 25,000ms timeout is reached. Any responses received within this period will be returned, even if the client has discarded them on their side. To avoid discrepancies, Buyers should align the timeout values in their requests via Travelgate with their own system settings and expectations.

:::tip
Unlock the potential of our connection by including the Seller in the process of establishing the ideal timeouts!
:::