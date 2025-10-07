# CancelPenalty

Represents a cancellation penalty for a hotel booking.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **HoursBefore** | Integer | **[Deprecated]** This field is deprecated. Use `Deadline` instead. Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Value** | Double | Indicates the value of the penalty. It usually corresponds to the net amount (without commission) the client must pay. If the supplier only provides a gross price (with commission), the penalty will be calculated using that price. Travelgate attempts to detect the price type and align it with the cancellation policy to ensure consistency throughout the booking process. |
| **Deadline** | String | Date on UTC Standard TimeZone in which this cancellation policy applies (ISO 8601 UTC `2025-11-01T05:00:00Z`) |
