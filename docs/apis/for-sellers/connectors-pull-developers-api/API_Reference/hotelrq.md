# HotelRQ

Represents a hotel request, extending the base AccommodationRQ class 
with additional hotel-specific details such as location.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Type** | [AccommodationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accommodationtype) | Specifies the type of accommodation being requested, such as Hotel or Rental. |
| **Code** | String | Represents a unique code identifying the accommodation in the request. |
| **Location** | [Location](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/location) | The geographical or contextual location of the hotel. |
| **Location/Code** | String | The unique code identifying the location. |
| **Location/Country** | String | The ISO 3166-1 alpha-2 country code where the location is situated. |
| **Location/Longitude** | Double | The longitude coordinate of the location, expressed in decimal degrees. |
| **Location/Latitude** | Double | The latitude coordinate of the location, expressed in decimal degrees. |
