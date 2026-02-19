# AmendOccupancy

Represents an occupancy that is being amended with updated passenger information.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **OccupancyId** | Integer | The unique identifier for the occupancy being updated. This ID must match an existing occupancy in the booking. |
| **Paxes** | Array&lt;[BookPaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bookpaxinput)&gt; | The complete list of passengers for this occupancy after the amendment. This replaces all existing passenger information for the specified occupancy. |
