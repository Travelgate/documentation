# Parameter

Represents a parameter with various properties and methods for building and cloning.
Used for passing information between `Search`, `Quote`, and `Book` operations.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Key** | Integer | Identifies the parameter with a numeric key. |
| **Value** | String | Defines the value associated with the parameter. |
| **ParameterType** | [ParameterType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parametertype) | Specifies the type of the parameter (ParameterType), whether it is internal or supplier-related. |
| **Immutable** | Boolean | Indicates whether the parameter remains constant throughout operations (e.g., from Search to Quote and Book). In second searches or quotes, an immutable parameter is used to identify and match the same option. |
| **RoomId** | Integer | Associates the parameter with a specific room, identified by its ID. |
