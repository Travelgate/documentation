---
sidebar_position: 2
---

# Cancel Policies - Buyers

In the Travelgate [Quote (Valuation)](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote) response, several fields provide detailed insights. Among them, specific fields offer clear information about cancellation policies, ensuring a precise understanding of available options.

## Key Cancellation Policy Fields

- **TIMEZONE**  
  It specifies the timezone in UTC where the cancellation policies apply. Refer to the [Metadata](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata) documentation for all possible values.

  ![hotel_buyers_api_cancelpolicies1](https://storage.travelgate.com/kbase/hotel_buyers_api_cancelpolicies1.jpg)

  :::tip
  If the timezone returned by your Seller is unclear (e.g., if `TimeZone` is set as "Unknown"), we recommend adding a +14-hour offset to prevent unexpected penalties due to timezone differences.
  :::

- **DEADLINE**  
  The **Deadline** field in the [CancellationPolicies](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote) section of the Quote/Valuation response provides precise cancellation deadlines, helping to maintain competitiveness.

  This field is unambiguous, as it is always expressed in **UTC-0 Standard**. The date is converted according to the timezone value specified in Metadata.

  ![deadline-format-updated](https://storage.travelgate.com/kbase/deadline-format-updated.jpg)

- **CALCULATED DEADLINE**  
  The **[isCalculatedDeadline](/api/types/objects/cancel-penalty?_highlight=iscalculateddeadline)** field indicates whether the Deadline value originates from the Seller’s response or has been calculated by Travelgate.

  The table below outlines how cancellation policies are processed based on the timezone specified in Metadata:

| Supplier Metadata TimeZone  | HoursBefore | Deadline Handling       | isCalculatedDeadline value |
|--------------------|-------------|-------------------------|----------------------------|
| Hotel Local Time   | Bypass      | Converted to UTC-0      | false                      |
| TimeZone           | Bypass      | Converted to UTC-0      | false                      |
| Unknown            | Bypass      | +14-hour offset added   | true                       |


## What Do I Need to Do?

- **`hoursBefore` node (deprecated⚠️):** Travelgate returns the information exactly as provided by the Seller—no additional hours are added. This logic should be handled on your end.
- **`deadline` node:** Travelgate returns the calculated deadline based on the table above. **Please ensure you use this node.**

:::warning Important
The `HoursBefore` field specified the maximum number of hours before a penalty would apply. To provide more accurate information and maintain competitiveness, we introduced the **`Deadline` node**, which eliminates ambiguity by representing a specific date in UTC-0 Standard.

It is essential to update your logic and **discontinue the use of the `hoursBefore` node**. Instead, use the `deadline` node. This update applies to both Hotel-X and Legacy Pull Buyers API.
:::
