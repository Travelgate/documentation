---
sidebar_position: 4
---

# How to Audit Supplier Transactions

## How to Audit Transactions at the Request Level
By adding the `auditTransactions` field to your queries and mutations, you can retrieve Travelgate's transactions with the Supplier, including both the raw request and response, in your API response.

## Application and Recommendations for the `auditTransactions` Field
While this feature is highly useful for your Booking Flow and Booking Management methods, follow these best practices to ensure optimal performance:

1. **Search Requests:** Do not set the `auditTransactions` value to `true` by default, as it can generate large responses and negatively impact API performance.
2. **Other Methods:** You can set `auditTransactions` to `true` to receive the raw request and response from the Supplier. This is especially useful for debugging errors by identifying their origin.

:::info
If you encounter an error, you can **temporarily** set the `auditTransactions` value to `true` in Search requests. This will provide additional insights into the Supplier's response.
:::

## Setting the `auditTransactions` Field in a Hotel-X Pull Buyers API Request
To configure the `auditTransactions` field in your Hotel-X Search request, ensure that both your **Query** and **Query variables** include the necessary settings as shown below.

### Hotel-X Query
Add the `auditTransactions` field to your `HotelSettingsInput` as follows:

![logging_audit_transactions_1](https://storage.travelgate.com/kbase/logging_audit_transactions_1.jpg)

```graphql
query ($criteriaSearch: HotelCriteriaSearchInput, $settings: HotelSettingsInput, $filterSearch: HotelXFilterSearchInput) {
  hotelX {
    search (criteria: $criteriaSearch, settings: $settings, filterSearch: $filterSearch) {
      auditData {
        transactions {
          request
          response
        }
      }
      context
      options {
        ...
      }
    }
  }
}
```

### Hotel-X Query Variables
Include the `auditTransactions` field in your Query settings:

```json
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

:::warning Important
To receive transactions with the Supplier, the `auditTransactions` field must be declared in **both your Query and Query variables**. Otherwise, the transactions will not be returned.
:::

## Setting the `registerTransactions` Field in a Legacy Pull Buyers API Request 
For Legacy methods, add the `filterAuditData` information (`registerTransactions`) to your main method request.

### Method Request

![logging_audit_transactions_2](https://storage.travelgate.com/kbase/logging_audit_transactions_2.jpg)

### Method Response
The Supplier's transactions will be returned within the `auditData` tag.

![logging_audit_transactions_3](https://storage.travelgate.com/kbase/logging_audit_transactions_3.jpg)

## Retrieving Supplier Transactions via Stats and Logging 
You can download logs of past transactions using our **Stats and Logging**, except for Search logs, as they are not saved by default.

🚨 **Important:** Use the `auditTransactions` or `registerTransactions` fields in Search requests **only for testing purposes**. Enabling them in a live environment may overload the system or increase response times.
