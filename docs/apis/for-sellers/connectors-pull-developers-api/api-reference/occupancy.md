# Occupancy

Represents an occupancy for a hotel room.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **OccupancyId** | Integer | The unique identifier for the occupancy. |
| **Paxes** | Array&lt;[PaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paxinput)&gt; | The collection of passenger inputs (paxes) for the occupancy. |
| **Paxes/Age** | Integer | Age of the passenger. This value is required and plays a critical role in determining eligibility for child or adult pricing as defined by the supplier. |
