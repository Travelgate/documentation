# Amenity

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents an amenity associated with an accommodation, either in the room or option level.

```csharp
public class Amenity
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Amenity](./connectors.pull.hotel.domain.contracts.common.amenity)<br />
Attributes DataContractAttribute

**Remarks:**

Amenities provide additional features or services associated with accommodation. 
 Common examples include "Free Wi-Fi," "Parking," or "Pool Access." These can help differentiate rooms or options 
 based on the facilities and services they provide.

## Properties

### **Code**

A unique code that identifies the amenity.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The code acts as an identifier for the amenity, which could be standardized or provider-specific.
 Examples include "FW" for Free Wi-Fi or "PK" for Parking.

### **Type**

The type of the amenity, defined by [AmenityType](./connectors.pull.hotel.domain.contracts.common.amenitytype).

```csharp
public AmenityType Type { get; set; }
```

#### Property Value

[AmenityType](./connectors.pull.hotel.domain.contracts.common.amenitytype)<br />

**Remarks:**

Indicates the category or nature of the amenity. For instance:

- - [AmenityType.Hotel](./connectors.pull.hotel.domain.contracts.common.amenitytype#hotel): Amenities specific to the hotel, such as "Spa" or "Parking."
- - [AmenityType.Room](./connectors.pull.hotel.domain.contracts.common.amenitytype#room): Amenities available in individual rooms, such as "Air Conditioning" or "Mini Bar."
- - [AmenityType.Service](./connectors.pull.hotel.domain.contracts.common.amenitytype#service): Amenities related to services, such as "Laundry" or "Room Service."
- - [AmenityType.General](./connectors.pull.hotel.domain.contracts.common.amenitytype#general): General amenities not tied to specific areas, such as "Wi-Fi."

### **Value**

The value associated with the amenity.

```csharp
public string Value { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The value provides additional context about the amenity, such as a numerical measure or 
 a description. For example, "10 Mbps" for Wi-Fi speed or "Covered" for parking type.

### **Texts**

Additional textual information or description for the amenity.

```csharp
public string Texts { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field can include extra details or notes about the amenity, often provided by the supplier.
 For example, "Wi-Fi available in public areas only" or "Limited parking spaces."

## Constructors

### **Amenity(String, AmenityType, String, String)**

Initializes a new instance of the [Amenity](./connectors.pull.hotel.domain.contracts.common.amenity) class with specified parameters.

```csharp
public Amenity(string code, AmenityType type, string value, string texts)
```

#### Parameters

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The unique code of the amenity.

`type` [AmenityType](./connectors.pull.hotel.domain.contracts.common.amenitytype)<br />
The type of the amenity.

`value` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The value associated with the amenity.

`texts` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
Optional additional textual information about the amenity.

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown if `code` or `value` is null or empty.
