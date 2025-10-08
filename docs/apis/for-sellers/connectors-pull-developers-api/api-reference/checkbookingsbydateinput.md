# CheckBookingsByDateInput

Represents the input for checking bookings within a specific date range.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **CheckIn** | String | The check-in date for the booking check, specified as a string. |
| **CheckOut** | String | The check-out date for the booking check, specified as a string. |
| **CheckInAsDateTime** | String | Parses and returns the check-in date as a DateTime object. |
| **CheckOutAsDateTime** | String | Parses and returns the check-out date as a DateTime object. |
| **DateType** | [DateRangeType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/daterangetype) | Specifies the type of date range to use for the booking check. |
| **Language** | String | The language code to be used for the booking check. |
| **Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency to be used for the booking check. |
