---
sidebar_position: 1
---

# Hotel Sellers API - Cancel Policies

In TravelgateX [Quote (Valuation)](/docs/apis/for-sellers/hotel-pull-sellers-api/booking-flow/valuation) response, you'll find a number of fields that offer detailed insights. Among these, we've included specific fields that give you clearer information about cancellation policies, so you can have a more precise understanding of your options.

- **TIMEZONE:**  
    We have added the new field “Timezone” in our Metadata method:

    ![hotel_sellers_api_cancelpolicies1](https://storage.travelgate.com/kbase/hotel_sellers_api_cancelpolicies1.jpg)

    Timezone (see the [Metadata](/docs/apis/for-sellers/hotel-pull-sellers-api/content/meta-data) docs to check all possible values) will specify the timezone in UTC in which the cancellation policies are located.


:::info
If you have any doubts about the timezone returned (for example, if TimeZone is set as Unknown) we advise you to add an offset of +14 hours in order to avoid unexpected penalties caused by timezone difference.
:::

- **DEADLINE:**  
    Additionally, we have added the "Deadline" field on [CancellationPolicies](/docs/apis/for-sellers/hotel-pull-sellers-api/booking-flow/valuation) returned in Quote/Valuation response, in order to provide more precise information and avoid losing competitiveness.

    This field is not subjected to any ambiguity as it is a date in **UTC-0 Standard**. The conversion of the date is made according to the value specified on the Metadata TimeZone.

    ![deadline-format-updated](https://storage.travelgate.com/kbase/deadline-format-updated.jpg)

- **CALCULATED DEADLINE:**  
    Finally, we have also added a "CalculatedDeadline" field to specify if the Deadline has been taken from the Seller’s response or if it has been calculated by TravelgateX.

    Please check the following table for a clear view of how we will treat the Cancellation Policies returned by the Seller according to the TimeZone established on the Metadata:

    | Metadata TimeZone | HoursBefore | Deadline |
    |-------------------|-------------|----------|
    | Hotel Local Time        | Bypass   | Conversion to UTC-0 |
    | TimeZone        | Bypass   | Conversion to UTC-0 |
    | Unknown        | Bypass   | +14 hours offset |

