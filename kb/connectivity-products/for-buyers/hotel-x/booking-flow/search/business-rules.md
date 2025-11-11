--- 
sidebar_position: 3
---

# Business Rules

Discover how specific [Business Rules](/api/types/objects/business-rules#) can strategically optimize your Search requests, ensuring efficient and targeted results. Below are key rules designed to refine and tailor your searches effectively.

## OptionsQuota

The `optionsQuota` limits the number of options in the Search response. It refers to the maximum number of options per board (meal plan) that can be returned. The default value is 300, but it can be customized. The allowed values range from 1 to 300.

## Business Rules Types

The `businessRulesType` is used for filtering options based on your specific needs. There are 2 types:

- **`CHEAPER_AMOUNT`**: Returns the cheapest options without exceeding the `optionsQuota` limit.
- **`ROOM_TYPE`**: Groups options by room type without exceeding the `optionsQuota` limit.


### How Can I Set Up Business Rules in My Requests?

To configure Business Rules in your Search Query, simply include the `BusinessRulesInput` in your request [`HotelSettingsInput`](/api/types/inputs/hotel-settings-input).

:::tip 
You can also configure your own Business Rules by implementing our [Aggregation plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview). For further details, check out our [API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart). 🚀
:::

## Additional Considerations

When applying Business Rules, options are filtered using a limited combination of room types:

1. **Grouping by Room Type**: First, options with the same room type/classification are grouped together (e.g., Standard-Standard-Standard or Junior-Junior-Junior).
2. **Combining Cheapest Options**: Subsequently, the cheapest rooms are combined with the remaining ones, ensuring that duplicates are checked and the options do not exceed the specified `optionsQuota` limit.

If a Buyer specifies a `BusinessRules` value, it will be applied when the number of returned options surpasses the `optionsQuota`. However, if no Business Rules are specified, the default **`CHEAPER_AMOUNT`** rule will be applied.
