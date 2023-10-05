---
sidebar_position: 10
---

# Timeout Settings
## How to set your timeout values in order to make the most of your connections

### Is it mandatory to specify a timeout in my request?⌛
Yes, you should set a timeout value in all Booking Flow queries and mutations.

### Which timeout should I establish in each step?🔢
It will depend on your preferences and needs. Our recommendation is to test which timeout fits your needs better, taking into account the number of hotels requested and the Seller specifications/restrictions.

**TravelgateX Buyers API allows:**

* A maximum of 25000ms in Search.
* A maximum of 180000ms in Quote.
* A maximum of 180000ms in Book.

>**TIP:**\
> Unlock the potential of our connection by including the Seller in the process of establishing the ideal timeouts!

## What happens if I set a higher timeout than the ones allowed at TravelgateX API?⚠️
Please note that timeout values higher than those recommended will not be applied.

For example: for a timeout over 25000ms in SearchRQ, our system will apply a maximum of 25000ms.

### Timeout Settings in Hotel-X Buyers API🚀
You can either set this information at a request level (in your query "settings"):

```
...

  "settings": {
        "context": "xxx",
        "client": "xxx",
        "testMode": true,
        "auditTransactions": false,
        "timeout": 24700,
...
```
Or you can set a **default timeout value** in your API Settings - more information here.

>**NOTE:**\
>Setting a different timeout value for each Seller is not possible when requesting multimode - the timeout value set on your side will be applied to all of your Sellers.


### Timeout Settings in Hotel Buyers Legacy API🏨
If you are using our Hotel Buyers Legacy API, note that the timeout setup should be set on your side **at a request level** through the timeout tag "timeoutMilliseconds".

***"There are 2 timeout tags in my request, what is the different between them?"***

1. **HUB timeout**: this value indicates the time limit for a given request at TravelgateX.
1. **Supplier timeout**: this value indicates the time limit for a given request to a Seller. Please note the HUB timeout value should be set at least 300 ms higher than the Supplier timeout value in order to have enough time to parse the Seller's response.


((((PTE IMAGEN))))
