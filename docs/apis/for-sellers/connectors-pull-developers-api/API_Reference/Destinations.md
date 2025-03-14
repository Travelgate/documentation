# Destinations

Represents a collection of destinations for a hotel search request.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Accommodations** | Array&lt;[AccommodationRQ](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accommodationrq)&gt; | Collection of accommodations for the search request. |
| **Accommodations/Type** | [AccommodationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accommodationtype) | Specifies the type of accommodation being requested, such as Hotel or Rental. |
| **Accommodations/Code** | String | Represents a unique code identifying the accommodation in the request. |
| **Locations** | Array&lt;[Location](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/location)&gt; | Collection of locations for the search request. |
| **Locations/Code** | String | The unique code identifying the location. |
| **Locations/Country** | String | The ISO 3166-1 alpha-2 country code where the location is situated. |
| **Locations/Longitude** | Double | The longitude coordinate of the location, expressed in decimal degrees. |
| **Locations/Latitude** | Double | The latitude coordinate of the location, expressed in decimal degrees. |
