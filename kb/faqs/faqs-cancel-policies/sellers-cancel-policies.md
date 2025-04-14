---
sidebar_position: 1
---

# Cancel Policies - Sellers

In the Travelgate [Quote (Valuation)](/docs/apis/for-sellers/hotel-pull-sellers-api/booking-flow/valuation) response, several fields provide detailed insights. Among them, specific fields offer clear information about cancellation policies, ensuring a precise understanding of available options.

## Key Cancellation Policy Fields

- **TIMEZONE**  
  It specifies the timezone in UTC where the cancellation policies apply. To check all possible values, refer to the [Metadata](/docs/apis/for-sellers/hotel-pull-sellers-api/content/meta-data) documentation.

  ![hotel_sellers_api_cancelpolicies1](https://storage.travelgate.com/kbase/hotel_sellers_api_cancelpolicies1.jpg)

  :::info
  If the returned timezone is unclear (e.g., if `TimeZone` is set as "Unknown"), we recommend adding a +14-hour offset to prevent unexpected penalties due to timezone differences.
  :::

- **DEADLINE**  
  The **Deadline** field in the [CancellationPolicies](/docs/apis/for-sellers/hotel-pull-sellers-api/booking-flow/valuation) section of the Quote/Valuation response provides precise cancellation deadlines, helping to maintain competitiveness.

  This field is unambiguous, as it is always expressed in **UTC-0 Standard**. The date is converted according to the timezone value specified in Metadata.

  ![deadline-format-updated](https://storage.travelgate.com/kbase/deadline-format-updated.jpg)

- **CALCULATED DEADLINE**  
  The **CalculatedDeadline** field indicates whether the Deadline value originates from the Seller’s response or has been calculated by Travelgate.

  The table below outlines how cancellation policies are processed based on the timezone specified in Metadata:

  | Metadata TimeZone  | HoursBefore | Deadline Handling      |
  |--------------------|-------------|------------------------|
  | Hotel Local Time   | Bypass      | Converted to UTC-0    |
  | TimeZone          | Bypass      | Converted to UTC-0    |
  | Unknown           | Bypass      | +14-hour offset added |

## Do Cancellation Policy Timezones Apply to All Buyers Connected to a Supplier?

Yes, in Travelgate, cancellation policy timezone settings are managed in the Supplier’s Metadata. These settings apply uniformly to all Buyers connected to that Supplier.
