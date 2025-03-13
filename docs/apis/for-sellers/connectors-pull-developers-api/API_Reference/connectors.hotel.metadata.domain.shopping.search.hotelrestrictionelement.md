# HotelRestrictionElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a hotel restriction element in the hotel metadata domain.

```csharp
public class HotelRestrictionElement : DestinationRestrictionElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [DestinationRestrictionElement](./connectors.hotel.metadata.domain.shopping.search.destinationrestrictionelement) → [HotelRestrictionElement](./connectors.hotel.metadata.domain.shopping.search.hotelrestrictionelement)<br />
Implements IValidatableObject

## Properties

### **SameLocation**

Gets or sets a value indicating whether the hotel must be in the same location.

```csharp
public bool SameLocation { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **Max**

Gets or sets the maximum number of destinations.

```csharp
public uint Max { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **Recommended**

Gets or sets the recommended number of destinations.

```csharp
public uint Recommended { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **SameCountry**

Gets or sets a value indicating whether the destinations must be in the same country.

```csharp
public bool SameCountry { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **HotelRestrictionElement()**

```csharp
public HotelRestrictionElement()
```
