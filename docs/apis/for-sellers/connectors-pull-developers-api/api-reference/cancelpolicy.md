# CancelPolicy

Represents a cancellation policy for a hotel booking.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Refundable** | Boolean | Indicates whether the booking is refundable. |
| **CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **CancelPenalties/HoursBefore** | Integer | **[Deprecated]** This field is deprecated. Use `Deadline` instead. Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **CancelPenalties/Value** | Double | Indicates the value of the penalty. It usually corresponds to the net amount (without commission) the client must pay. If the supplier only provides a gross price (with commission), the penalty will be calculated using that price. Travelgate attempts to detect the price type and align it with the cancellation policy to ensure consistency throughout the booking process. |
| **CancelPenalties/Deadline** | String | Date on UTC Standard TimeZone in which this cancellation policy applies (ISO 8601 UTC `2025-11-01T05:00:00Z`) |
| **CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
