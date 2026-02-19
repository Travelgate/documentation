# AmendRoomsInput

Represents the input data for modifying the room configuration and occupancy details of an existing booking.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Reference** | [Reference](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/reference) | Booking references for identifying the reservation to be amended. |
| **Reference/**<br />**ClientReference** | String | The client's internal reference for the booking. |
| **Reference/**<br />**SupplierReference** | String | The supplier's reference for the booking. |
| **Rooms** | Array&lt;[AmendRoom](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amendroom)&gt; | The new room configuration for the booking. Each AmendRoom specifies a room type and its associated occupancy. |
| **Rooms/OccupancyRefId** | Integer | Reference to the occupancy that will be assigned to this room. This links the room to its corresponding occupancy in the Occupancies list. |
| **Rooms/Code** | String | The room type code (e.g., "DBL" for Double, "SGL" for Single, "TWN" for Twin). |
| **Occupancies** | Array&lt;[AmendOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amendoccupancy)&gt; | The updated occupancy information with passenger details for each room. Each occupancy must have a unique OccupancyId that matches an OccupancyRefId in the Rooms list. |
| **Occupancies/**<br />**OccupancyId** | Integer | The unique identifier for the occupancy. Must match the OccupancyRefId in Rooms to link passengers to their assigned room. |
| **Occupancies/Paxes** | Array&lt;[BookPaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bookpaxinput)&gt; | The list of passengers in this occupancy. |
| **Occupancies/Paxes/Age** | Integer | The age of the passenger. |
| **Occupancies/Paxes/Name** | String | The first name of the passenger. |
| **Occupancies/Paxes/**<br />**SurName** | String | The surname (last name) of the passenger. |
| **Occupancies/Paxes/**<br />**PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/personaltitletype) | The personal title of the passenger (e.g., MR, MRS, MS, MISS, NOT_SPECIFIED). |
| **Occupancies/Paxes/**<br />**DateOfBirth** | String | Date of birth of the passenger, represented as a string in ISO 8601 format (YYYY-MM-DD). |
| **Occupancies/Paxes/**<br />**IdentificationDocuments** | Array&lt;[IdentificationDocument](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/identificationdocument)&gt; | Identification documents for the passenger (e.g., passport, ID card). |
| **PaymentType** | [PaymentType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paymenttype) | Payment type for the booking (e.g., Merchant, Direct). Optional - only required if the supplier needs payment details for the amendment. |
| **PaymentCardInput** | [PaymentCardInput](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paymentcardinput) | Payment card details, if applicable. Optional - only required if PaymentType is specified and card details are needed. |
