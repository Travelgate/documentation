# AmendPaxesSimulateInput

Represents the input data for modifying the passenger (pax) information of an existing booking.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Reference** | [Reference](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/reference) | Booking references for identifying the reservation to be amended. |
| **Reference/**<br />**ClientReference** | String | The client's internal reference for the booking. |
| **Reference/**<br />**SupplierReference** | String | The supplier's reference for the booking. |
| **Occupancies** | Array&lt;[AmendOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amendoccupancy)&gt; | The updated occupancy information with new passenger details. Each occupancy contains a list of passengers with their personal information. |
| **Occupancies/OccupancyId** | Integer | The unique identifier for the occupancy being updated. |
| **Occupancies/Paxes** | Array&lt;[BookPaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bookpaxinput)&gt; | The list of passengers in this occupancy. |
| **Occupancies/Paxes/Age** | Integer | The age of the passenger. |
| **Occupancies/Paxes/Name** | String | The first name of the passenger. |
| **Occupancies/Paxes/SurName** | String | The surname (last name) of the passenger. |
| **Occupancies/Paxes/**<br />**PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/personaltitletype) | The personal title of the passenger (e.g., MR, MRS, MS, MISS, NOT_SPECIFIED). |
| **Occupancies/Paxes/**<br />**DateOfBirth** | String | Date of birth of the passenger, represented as a string in ISO 8601 format (YYYY-MM-DD). |
| **Occupancies/Paxes/**<br />**IdentificationDocuments** | Array&lt;[IdentificationDocument](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/identification-document)&gt; | Identification documents for the passenger (e.g., passport, ID card). |
