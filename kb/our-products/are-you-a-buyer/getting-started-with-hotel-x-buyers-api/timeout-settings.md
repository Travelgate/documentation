---
sidebar_position: 9
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
Or you can set a **default timeout value** in your API Settings - more information here.

:::info 
Setting a different timeout value for each Seller is not possible when requesting multimode - the timeout value set on your side will be applied to all of your Sellers.
:::


### Timeout Settings in Hotel Buyers Legacy API
If you are using our Hotel Buyers Legacy API, note that the timeout setup should be set on your side **at a request level** through the timeout tag "timeoutMilliseconds".

### My Legacy API request contains two timeout tags, what distinguishes one from the other?

1. **HUB timeout**: This value sets the timeout limit for a request at Travelgate.
2. **Supplier timeout**: this value specifies the timeout limit for a request sent to a Seller. It's important to set the HUB timeout at least 300 ms higher than the Supplier timeout to ensure there is sufficient time to parse the Seller's response.
   
   ![timeouts_updated](https://storage.travelgate.com/kbase/timeouts_updated.jpg)

:::tip
Unlock the potential of our connection by including the Seller in the process of establishing the ideal timeouts!
:::