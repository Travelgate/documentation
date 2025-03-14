# BookOccupancy

Represents the occupancy details for a hotel booking request.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **OccupancyId** | Integer | The unique identifier for the occupancy. |
| **Paxes** | Array&lt;[BookPaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookpaxinput)&gt; | The collection of passenger inputs (paxes) for the occupancy. |
| **Paxes/Age** | Integer | The age of the passenger. |
| **Paxes/Name** | String | The first name of the passenger. |
| **Paxes/SurName** | String | The surname (last name) of the passenger. |
| **Paxes/PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the passenger. |
