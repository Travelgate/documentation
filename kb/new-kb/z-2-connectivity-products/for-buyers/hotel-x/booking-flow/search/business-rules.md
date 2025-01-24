--- 
sidebar_position: 3
---


# Business Rules

## Which Business Rules Can Enhance My Search Requests? 💡

Discover how specific business rules can strategically optimize your search requests, ensuring efficient and targeted results. Below are key rules designed to refine and tailor your searches effectively:

1. **CHEAPER_AMOUNT**: Returns the cheapest options without exceeding the optionsQuota limit.
2. **ROOM_TYPE**: Groups options by room type without exceeding the optionsQuota limit.

   ![businessRules_2](https://storage.travelgate.com/kbase/businessRules_2.jpg)

:::info optionsquota
The optionsQuota refers to the **maximum number of options per meal plan (board)** returned in a Search response. The default value is **50**, but it can be customized. The allowed values range from 1 to 300.
:::

## How Can I Set Up Business Rules in My Requests? 🛠️

To configure Business Rules in your Search Query, simply include the **BusinessRulesInput** in your request settings:

![businessRules_1](https://storage.travelgate.com/kbase/businessRules_1.jpg)

:::tip 
You can also configure your own Business Rules by implementing our [Aggregation plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview). More details on Business Rules can be found in our [API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart).  
:::

## Additional Considerations on Business Rules ✔️

When applying business rules, options are filtered using a limited combination of room types:

1. **Grouping by Room Type:** First, options with the same room type/classification are grouped together (e.g., Standard-Standard-Standard or Junior-Junior-Junior).
2. **Combining Cheapest Options:** Subsequently, the cheapest rooms are combined with the remaining ones, ensuring that duplicates are checked and the options do not exceed the specified optionsQuota limit.

If a Buyer specifies a BusinessRules value, it will be applied when the number of returned options surpasses the optionsQuota. However, if no business rules are specified, the default **CHEAPER_AMOUNT** rule will be applied.
