# AmendDatesSimulateInput

Represents the input data for modifying the check-in and check-out dates of an existing booking.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Reference** | [Reference](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/reference) | Booking references for identifying the reservation to be amended. |
| **Reference/**<br />**ClientReference** | String | The client's internal reference for the booking. |
| **Reference/**<br />**SupplierReference** | String | The supplier's reference for the booking. |
| **AmendDates** | [AmendDates](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amenddates) | The amended dates for the booking. |
| **AmendDates/CheckIn** | String | The new check-in date for the booking, represented as a string in ISO 8601 format (YYYY-MM-DD). |
| **AmendDates/CheckOut** | String | The new check-out date for the booking, represented as a string in ISO 8601 format (YYYY-MM-DD). |
