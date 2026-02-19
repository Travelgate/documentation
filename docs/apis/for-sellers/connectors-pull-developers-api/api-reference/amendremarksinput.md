# AmendRemarksInput

Represents the input data for adding or modifying special requests and remarks for an existing booking.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Reference** | [Reference](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/reference) | Booking references for identifying the reservation to be amended. |
| **Reference/**<br />**ClientReference** | String | The client's internal reference for the booking. |
| **Reference/**<br />**SupplierReference** | String | The supplier's reference for the booking. |
| **AmendRemarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remark)&gt; | A collection of remarks to be amended or added to the booking. Each remark contains a type (General, Hotel, Room, Service) and text content with specific instructions, preferences, or notes. Common examples include room preferences, dietary restrictions, accessibility requirements, or special instructions for the hotel. |
| **AmendRemarks/**<br />**RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remarktype) | The type/category of the remark: General, Hotel, Room, or Service. |
| **AmendRemarks/Text** | String | The text content of the remark. |
| **PaymentType** | [PaymentType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paymenttype) | Payment type for the booking (e.g., Merchant, Direct). Optional - only required if the supplier needs payment details for the amendment. |
| **PaymentCardInput** | [PaymentCardInput](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paymentcardinput) | Payment card details, if applicable. Optional - only required if PaymentType is specified and card details are needed. |
