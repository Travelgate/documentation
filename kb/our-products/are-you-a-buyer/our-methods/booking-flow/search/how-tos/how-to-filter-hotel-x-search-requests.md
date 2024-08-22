---
sidebar_position: 2
---

# How to filter Hotel-X Search requests

## Refining Search Requests for Precise and Relevant Results

### How can I filter my Search requests?🚀
You can filter your Search requests though the **HotelXFilterSearchInput** and according to the access, plugin, rateRules and status specified in your request.  

![filtersearch_playground](https://storage.travelgate.com/kbase/filtersearch_playground.png)

### 1. Access - AccessFilterInput✔️
You can specify one access or none of them. In this latter case, all the accesses configured for a Buyer will be executed. You will find more information in the following articles:

- [Hotel-X Development - Search Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search)
- [Hotel-X Credentials](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials)
### 2. RateRules - RateRulesFilterInput✔️
Rate Rules refer to the specific terms and conditions that define the pricing, availability, and booking policies for rooms or accommodations at a hotel. You can include or exclude specific rate rules in order to request only the information that matters to your business.  

Don't forget to check our [GraphQL API Reference](/api/enums/rate-rules-type) for further information regarding all the RateRules types available!

### 3. Plugin - HotelXPluginFilterInput✔️
Thanks to Hotel-X Plugins you can customize your requests and responses to meet your business needs. You can filter which plugins have to be executed (included) or excluded.

:::tip
Don't forget to check our Hotel-X Buyers API [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview) for further information!🚀
:::

### 4. Status - StatusFilterInput✔️
You can define/filter which status (OK or RQ) is to be excluded or included in your Search response. Note that this filter will depend on the Seller returning this information in their response. For example:

```
{
    "filterSearch" : {
        "access" : {
            "includes" : [
                "2"
            ]
        },
        "status" : {
            "excludes" : [
                "RQ"
            ]
        }
    }
}
```

If you're still using our **Legacy Pull Buyer API**, don’t worry! You can find all the necessary information on filtering the status of availability options using the ```OnRequest``` tag through this [link](/docs/apis/for-buyers/legacy-pull-buyers-api/booking-flow/avail). However, we highly recommend exploring the [Hotel-X Pull Buyers API documentation](/kb/getting-started-with-travelgate/About-our-Connectivity/what-exactly-is-hotel-x-and-why-should-i-develop-it) to discover all the advantages and new features that Hotel-X has to offer!

:::info Aggregate and apply business rules to this field!🚀
All you need to do is add either 'status' or 'notStatus' to the primary key of the aggregation and preference plugins. Both plugins follow the same behaviour, so it's a breeze to get started. For more details, don't forget to check out our [Developers Resources](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview).
:::

 

