# OptionCancelPolicy

Represents a cancellation policy for a hotel option, extending the base CancelPolicy class.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Refundable** | Boolean | Indicates whether the booking is refundable. |
| **CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **CancelPenalties/HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **CancelPenalties/Value** | Double | Indicates the value of the penalty. |
| **CancelPenalties/Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **RoomCancelPolicyDescriptions** | Array&lt;[RoomCancelPolicyDescriptions](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/roomcancelpolicydescriptions)&gt; | Gets or sets the list of room-specific cancellation policy descriptions. |
| **RoomCancelPolicyDescriptions/**<br />**OccupancyRefId** | Integer | Identifies the specific occupancy within the booking for which this cancellation policy applies. |
| **RoomCancelPolicyDescriptions/**<br />**Description** | String | Textual information detailing the cancellation policy applicable to the room associated with the OccupancyRefId. |
