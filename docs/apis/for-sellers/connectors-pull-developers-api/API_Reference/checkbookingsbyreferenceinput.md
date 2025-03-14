# CheckBookingsByReferenceInput

Represents the input required for checking bookings by reference.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Reference** | [Reference](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/reference) | Specifies the reference details for identifying the booking. |
| **Reference/ClientLocator** | String | The booking locator provided by the client.This is typically used to match the booking in the client's internal systems. |
| **Reference/SupplierLocator** | String | The booking locator provided by the supplier.This identifier is used to reference the booking in the supplier's system. |
| **Reference/HotelLocator** | String | The booking locator specific to the hotel, provided by the supplier. (Optional)This may be required in cases where the hotel system uses its own unique identifiers. |
| **AccommodationRq** | [AccommodationRQ](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accommodationrq) | Contains the accommodation request details for the booking check. |
| **AccommodationRq/Type** | [AccommodationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accommodationtype) | Specifies the type of accommodation being requested, such as Hotel or Rental. |
| **AccommodationRq/Code** | String | Represents a unique code identifying the accommodation in the request. |
| **Language** | String | Specifies the language for the booking check. |
| **Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency for the booking check, if applicable. |
