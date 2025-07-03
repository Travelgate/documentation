# SearchCriteria

Represents the Search criteria specified by the client for a hotel Search operation. 
Inherits from Criteria.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **CheckIn** | String | The check-in date for the operation, represented as a string in ISO 8601 format (yyyy-MM-dd). |
| **CheckOut** | String | The check-out date for the operation, represented as a string in ISO 8601 format (yyyy-MM-dd). |
| **CheckInAsDateTime** | String | The check-in date parsed as a DateTime object. |
| **CheckOutAsDateTime** | String | The check-out date parsed as a DateTime object. |
| **TotalNights** | Integer | The total number of nights for the stay, calculated as the difference between check-in and check-out dates. |
| **Language** | String | The language code for the operation, represented as a 2-character ISO 639-1 code (e.g., "en", "es"). |
| **Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The preferred currency for the operation, defined as an optional Currency value. |
| **Nationality** | String | The nationality code of the client, represented as a 2-character ISO 3166-1 alpha-2 country code (e.g., "US", "FR"). |
| **Destinations** | [Destinations](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/destinations) | Gets the destinations for the Search. These can be specific hotels or locations. |
| **Destinations/Accommodations** | Array&lt;[AccommodationRQ](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accommodationrq)&gt; | Collection of accommodations for the Search request. |
| **Destinations/Accommodations**<br />**Type** | [AccommodationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accommodationtype) | Specifies the type of accommodation being requested, such as Hotel or Rental. |
| **Destinations/Accommodations**<br />**Code** | String | Represents a unique code identifying the accommodation in the request. |
| **Destinations/Locations** | Array&lt;[Location](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/location)&gt; | Collection of locations for the Search request. |
| **Destinations/Locations/Code** | String | The unique code identifying the location. |
| **Destinations/Locations/Country** | String | The ISO 3166-1 alpha-2 country code where the location is situated. |
| **Destinations/Locations**<br />**Longitude** | Double | The longitude coordinate of the location, expressed in decimal degrees. |
| **Destinations/Locations**<br />**Latitude** | Double | The latitude coordinate of the location, expressed in decimal degrees. |
| **Occupancies** | Array&lt;[Occupancy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/occupancy)&gt; | Gets the occupancy details for the Search.Indicates the number of rooms, passengers, and their respective ages. |
| **Occupancies/OccupancyId** | Integer | The unique identifier for the occupancy. |
| **Occupancies/Paxes** | Array&lt;[PaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/paxinput)&gt; | The collection of passenger inputs (paxes) for the occupancy. |
| **Occupancies/Paxes/Age** | Integer | Age of the passenger. This value is required and plays a critical role in determining eligibility for child or adult pricing as defined by the supplier. |
| **Markets** | Array | Gets the markets associated with the Search.Represents ISO 3166-1 alpha-2 country codes. |
