# CancelPenalty

Represents a cancellation penalty for a hotel booking.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Value** | Double | Indicates the value of the penalty. |
| **Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
