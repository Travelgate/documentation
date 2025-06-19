--- 
sidebar_position: 2
---


# Search Filters

## Refining Search Requests for Precise and Relevant Results

### How Can I Filter My Search Requests?
You can filter your Search requests through the **HotelXFilterSearchInput**, using criteria such as access, plugin, rateRules, and status specified in your request.

![filtersearch_playground](https://storage.travelgate.com/kbase/filtersearch_playground.png)

### 1. Access - AccessFilterInput
You can specify a particular access or none at all. If no access is specified, all configured accesses for the Buyer will be executed. In this case, please ensure you use your own context code to avoid mapping errors. Learn more in the following articles:

- [Hotel-X Development - Search Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search)
- [Hotel-X Credentials](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials)

### 2. RateRules - RateRulesFilterInput
Rate Rules refer to the specific terms and conditions that define the pricing, availability, and booking policies for hotel accommodations. You can include or exclude specific rate rules to request only the data that aligns with your business needs.

Explore all available RateRules types in our [GraphQL API Reference](/api/types/enums/rate-rules-type) for further details.

### 3. Plugin - HotelXPluginFilterInput
Hotel-X Plugins allow you to customize requests and responses to meet your business requirements. You can filter which plugins to include or exclude in your search.

:::tip
Check out our Hotel-X Buyers API [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview) for more details! 🚀
:::

### 4. Status - StatusFilterInput
Define and filter which status (OK or RQ) should be included or excluded in your Search response. This filter depends on whether the Seller returns this information in their response. Example:

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

If you're still using our Legacy Pull Buyers API (deprecated), you can find information on filtering availability status using the `OnRequest` tag through this [link](/docs/apis/for-buyers/deprecated/legacy-pull-buyers-api/booking-flow/avail). However, we highly recommend exploring the [Hotel-X Pull Buyers API documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview) to benefit from all its [advanced features and improvements](/kb/connectivity-products/for-buyers/hotel-x/why-develop-hotel-x-explained).

:::info Aggregate and Apply Business Rules to This Field 🚀
To aggregate or apply business rules, simply add 'status' or 'notStatus' to the primary key of the aggregation and preference plugins. Both plugins operate similarly, making it easy to implement. For more details, visit our [Developers Resources](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview).
:::

