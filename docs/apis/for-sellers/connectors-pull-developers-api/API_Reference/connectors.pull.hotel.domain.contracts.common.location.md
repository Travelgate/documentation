# Location

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a geographical location, including its code, country, and optional coordinates.

```csharp
public class Location
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Location](./connectors.pull.hotel.domain.contracts.common.location)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

The [Location](./connectors.pull.hotel.domain.contracts.common.location) class is used to define geographical details of an accommodation or a destination.
 It includes a unique [Location.Code](./connectors.pull.hotel.domain.contracts.common.location#code) for identification and optional details such as country and coordinates.

## Properties

### **Code**

The unique code identifying the location.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This code is used to reference the location in operations such as searches or bookings.

### **Country**

The ISO 3166-1 alpha-2 country code where the location is situated.

```csharp
public string Country { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

- - This field is optional but can provide context about the location's region or country.
- - Examples: "US" for the United States, "ES" for Spain.

### **Longitude**

The longitude coordinate of the location, expressed in decimal degrees.

```csharp
public Nullable<double> Longitude { get; set; }
```

#### Property Value

[Nullable\<Double\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

**Remarks:**

- - Longitude values range from -180 to 180 degrees.
- - Positive values indicate locations east of the Prime Meridian, and negative values indicate locations west.

### **Latitude**

The latitude coordinate of the location, expressed in decimal degrees.

```csharp
public Nullable<double> Latitude { get; set; }
```

#### Property Value

[Nullable\<Double\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

**Remarks:**

- - Latitude values range from -90 to 90 degrees.
- - Positive values indicate locations north of the Equator, and negative values indicate locations south.

## Constructors

### **Location(String, String, Nullable\<Double\>, Nullable\<Double\>)**

Initializes a new instance of the [Location](./connectors.pull.hotel.domain.contracts.common.location) class with specified details.

```csharp
public Location(string code, string country, Nullable<double> longitude, Nullable<double> latitude)
```

#### Parameters

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The unique code identifying the location.

`country` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The ISO 3166-1 alpha-2 country code where the location is situated (optional).

`longitude` [Nullable\<Double\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />
The longitude coordinate of the location, expressed in decimal degrees (optional).

`latitude` [Nullable\<Double\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />
The latitude coordinate of the location, expressed in decimal degrees (optional).

**Remarks:**

- - The `code` is required to uniquely identify the location.
- - `country` should follow the ISO 3166-1 alpha-2 standard.
- - The `longitude` and `latitude` specify the geographical position of the location.
