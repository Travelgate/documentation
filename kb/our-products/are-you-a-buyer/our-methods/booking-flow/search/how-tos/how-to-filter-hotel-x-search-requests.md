﻿---
sidebar_position: 2
---

# How to filter Hotel-X Search requests

## Refining Search Requests for Precise and Relevant Results

### How can I filter my Search requests?🚀
You can filter your Search requests though the **HotelXFilterSearchInput** and according to the access, plugin, rateRules and status specified in your request.

![filter_hotelx_search_1](https://storage.travelgate.com/kbase/filter_hotelx_search_1.jpg)

### 1. Access - AccessFilterInput✔️
You can specify one access or none of them. In this latter case, all the accesses configured for a Buyer will be executed. You will find more information in the following articles:

- [Hotel-X Development - Search Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search)
- [Hotel-X Credentials](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials)
### 2. RateRules - RateRulesFilterInput✔️
If requested, only options with the specified rateRules will be returned. Some of the rateRules that can be filtered are:

- NORMAL
- PACKAGE
- OLDER55
- OLDER60
- OLDER65
- ANARY_RESIDENT
- BALEARIC_RESIDENT
- LARGE_FAMILY
- HONEYMOON
- PUBLIC_SERVANT
- UNEMPLOYED
- NON_REFUNDABLE
- MOBILE
- WARRANTY
- ESSENTIAL_WORKER
### 3. Plugin - HotelXPluginFilterInput✔️
Thanks to Hotel-X Plugins you can customize your requests and responses to meet your business needs. You can filter which plugins have to be executed (included) or excluded.

:::tip
Don't forget to check our Hotel-X Buyers API [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview) for further information!🚀
:::

### 4. Status - StatusFilterInput✔️
You can define/filter which status (OK or RQ) is to be excluded or included in your Search response. Note that this filter will depend on the Seller returning this information in their response.

![filter_hotelx_search_2](https://storage.travelgate.com/kbase/filter_hotelx_search_2.jpg)

>**Aggregate and apply business rules to this field!🚀**  
>All you need to do is add either 'status' or 'notStatus' to the primary key of the aggregation and preference plugins. Both plugins follow the same behaviour, so it's a breeze to get started. For more details, don't forget to check out our [Developers Resources](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview).

 
