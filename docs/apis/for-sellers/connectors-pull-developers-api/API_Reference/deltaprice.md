# DeltaPrice

Represents the price flexibility a client allows in a booking request compared to the quoted price. 
This can be expressed as a fixed amount, a percentage, or both. If both are provided, the greater delta is used.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Amount** | Double | The fixed amount allowed for the delta price. |
| **Percentage** | Double | The percentage allowed for the delta price. |
