---
sidebar_position: 1
---

# Hotel Sellers API - Cancel Policies

We have updated our [Quote (Valuation)](https://docs.travelgatex.com/connectiontypessellers/hotelpullsellers/methods/messages/booking-flow-methods/valuation/?utm_campaign=Tech%20notifications&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--FNt5HPgsXK2qg5VWSRFvWpmsAVaUbIvhiJtwyWEV2_ZRfAio2Vj293rfLumb8YeEFP25V) method in order to provide more precise information regarding cancellationPolicies.

- **TIMEZONE:**  
    We have added the new field “Timezone” in our Metadata method:

    ```
    image
    ```

    Timezone (see the [Metadata](https://docs.travelgatex.com/connectiontypessellers/hotelpullsellers/methods/staticcontent/metadata/?utm_campaign=Tech%20notifications&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--FNt5HPgsXK2qg5VWSRFvWpmsAVaUbIvhiJtwyWEV2_ZRfAio2Vj293rfLumb8YeEFP25V) docs to check all possible values) will specify the timezone in UTC in which the cancellation policies are located.


:::info
If you have any doubts about the timezone returned (for example, if TimeZone is set as Unknown) we advise you to add an offset of +14 hours in order to avoid unexpected penalties caused by timezone difference.
:::

- **DEADLINE:**  
    Additionally, we have added the "Deadline" field on [CancellationPolicies](https://docs.travelgatex.com/connectiontypessellers/hotelpullsellers/methods/messages/booking-flow-methods/valuation/?utm_campaign=Tech%20notifications&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--FNt5HPgsXK2qg5VWSRFvWpmsAVaUbIvhiJtwyWEV2_ZRfAio2Vj293rfLumb8YeEFP25V) returned in Quote/Valuation response, in order to provide more precise information and avoid losing competitiveness.

    This field is not subjected to any ambiguity as it is a date in **UTC-0 Standard**. The conversion of the date is made according to the value specified on the Metadata TimeZone.

    ```
    image
    ```

- **CALCULATED DEADLINE:**  
    Finally, we have also added a "CalculatedDeadline" field to specify if the Deadline has been taken from the Seller’s response or if it has been calculated by TravelgateX.

    Please check the following table for a clear view of how we will treat the Cancellation Policies returned by the Seller according to the TimeZone established on the Metadata:

    ```
    image
    ```

:::info Why?
The limit in which a booking can be cancelled without penalty is specified on the field **HoursBefore**. This parameter informs about the maximum hours that could pass before the penalty starts to apply.

Transparency is a fundamental value in our culture and as such we avoid modifying the information provided by our partners. For this reason, hoursBefore value from cancellationPolicies will be returned without adding extra hours.
:::