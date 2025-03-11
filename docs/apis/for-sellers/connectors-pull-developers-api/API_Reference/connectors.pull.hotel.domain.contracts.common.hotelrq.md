# HotelRQ

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a hotel request, extending the base [AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq) class 
 with additional hotel-specific details such as location.

```csharp
public class HotelRQ : AccommodationRQ
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq) → [HotelRQ](./connectors.pull.hotel.domain.contracts.common.hotelrq)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute, KnownTypeAttribute, KnownTypeAttribute, InterfaceTypeAttribute

**Remarks:**

This class is used for operations that specifically target hotel accommodations. 
 It inherits from [AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq) and adds hotel-specific properties like 
 [HotelRQ.Location](./connectors.pull.hotel.domain.contracts.common.hotelrq#location) to specify the geographical or contextual details of the hotel.

## Properties

### **Location**

The geographical or contextual location of the hotel.

```csharp
public Location Location { get; set; }
```

#### Property Value

[Location](./connectors.pull.hotel.domain.contracts.common.location)<br />

**Remarks:**

The [HotelRQ.Location](./connectors.pull.hotel.domain.contracts.common.hotelrq#location) property can include details such as:

- - The latitude and longitude for geographical pinpointing.
- - The city, region, or country where the hotel is situated.
- - Any additional identifiers relevant to the hotel's location.

This property is optional but can be helpful for filtering and targeting specific hotels.

### **Type**

Specifies the type of accommodation being requested, such as [AccommodationType.Hotel](./connectors.pull.hotel.domain.contracts.common.accommodationtype#hotel) or [AccommodationType.Rental](./connectors.pull.hotel.domain.contracts.common.accommodationtype#rental).

```csharp
public AccommodationType Type { get; set; }
```

#### Property Value

[AccommodationType](./connectors.pull.hotel.domain.contracts.common.accommodationtype)<br />

**Remarks:**

The [AccommodationType](./connectors.pull.hotel.domain.contracts.common.accommodationtype) helps differentiate between various accommodation categories,
 enabling proper handling of specific request types.

### **Code**

Represents a unique code identifying the accommodation in the request.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This code is typically assigned by the supplier or system and ensures the correct accommodation is referenced.

- - For hotels, it could be the supplier's hotel ID.
- - For rentals, it might represent a unique property code.

## Constructors

### **HotelRQ()**

Initializes a new instance of the [HotelRQ](./connectors.pull.hotel.domain.contracts.common.hotelrq) class.

```csharp
public HotelRQ()
```

**Remarks:**

The [Type](https://docs.microsoft.com/en-us/dotnet/api/system.type) property is automatically set to [AccommodationType.Hotel](./connectors.pull.hotel.domain.contracts.common.accommodationtype#hotel) 
 to indicate that this request targets a hotel accommodation.

### **HotelRQ(String, Location)**

Initializes a new instance of the [HotelRQ](./connectors.pull.hotel.domain.contracts.common.hotelrq) class with the specified accommodation code and optional location.

```csharp
public HotelRQ(string accommodationCode, Location location)
```

#### Parameters

`accommodationCode` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The unique code identifying the hotel.

`location` [Location](./connectors.pull.hotel.domain.contracts.common.location)<br />
The location of the hotel. This parameter is optional.

**Remarks:**

The `accommodationCode` is a mandatory identifier that uniquely defines the target hotel.
 The optional `location` provides geographical or contextual details about the hotel.
