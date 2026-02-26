# AmendRoom

Represents a room in the context of a room amendment operation, linking a room type code to its associated occupancy.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **OccupancyRefId** | Integer | Reference identifier that links this room to a specific occupancy. This value must match an OccupancyId in the occupancy list to associate passengers with this room. |
| **Code** | String | The room type code provided by the supplier (e.g., "DBL" for Double room, "SGL" for Single room, "TWN" for Twin room, "SUI" for Suite). |
