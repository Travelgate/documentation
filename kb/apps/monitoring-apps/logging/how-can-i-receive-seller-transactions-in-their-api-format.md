---
sidebar_position: 3
---

# How to retrieve Seller transactions

### How can I obtain the Seller transactions of my request?🔎
By adding the "auditTransactions" field to your queries and mutations you will be able to obtain, packed in the response, TravelgateX transactions with the Seller (both the raw request and response).

### Application and recommendations on the "auditTransactions" field💡
Even though it is a great feature to add to all your Booking Flow and Booking Management methods, make sure you follow the recommendations below:

1. **Search:** Make sure you don't set the "auditTransactions" value to "true" by default, otherwise the responses will be too heavy and it will affect the API performance.
1. **Other methods:** You can set it to "true" in order to receive the raw request and response to the Seller and, if an error is returned, know where it is coming from.

:::info
If you encounter an error, you have the option to **temporarily** set the "auditTransactions" value to "true" in Search. This will provide you with additional information regarding the Seller's response.
:::

### How can I set the "auditTransactions" field in my Hotel-X Pull Buyers API request?
In order to set the "auditTransactions" field in your Hotel-X Search request, you should configure both your Query and Query variables according to the following information:

**Hotel-X Query:**  
You should add the "auditTransactions" field to your HotelSettingsInput as follows:

![logging_audit_transactions_1](https://storage.travelgate.com/kbase/logging_audit_transactions_1.jpg)

```
query ($criteriaSearch: HotelCriteriaSearchInput, $settings: HotelSettingsInput, $filterSearch: HotelXFilterSearchInput) {
  hotelX {
    search (criteria: $criteriaSearch, settings: $settings, filterSearch: $filterSearch) {
      auditData{
        transactions{
          request
          response
        }
      },
      context
      options {

...
```

**Hotel-X Query variables:**  
You should add the "auditTransactions" field to your Query settings as follows:
```
...

    "settings": {
        "timeout": 24700,
        "context": "contextCode",
        "client": "clientName",
        "testMode": false,
        "auditTransactions": true
    },

...
```

:::note Important:
Please note that in order to receive the transactions with the Seller the auditTransactions information should be **declared both in your Query and Query variables**, otherwise, these transactions won't be returned.
:::

 
### How can I set the "registerTransactions" field in my Legacy Pull Buyers API request?🚀
In order to set the "registerTransactions" field in your Legacy methods, you should add the filterAuditData information (registerTransactions) into your main method request:

Method request:

![logging_audit_transactions_2](https://storage.travelgate.com/kbase/logging_audit_transactions_2.jpg)

Method response:  
You will receive the Seller's transactions within the "auditData" tag.

![logging_audit_transactions_3](https://storage.travelgate.com/kbase/logging_audit_transactions_3.jpg)

### Seller transactions through Stats and Logging APPs✅
You can easily download logs of past transactions using our Stats and Logging APPs, except for Search logs as they are not saved by default.
Please make sure to use the **"AuditTransactions" or "RegisterTransactions"** in Search only for testing purposes. Utilizing them in a live environment may overload the system or cause longer response times.
