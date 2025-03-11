# GuestsInOccupancy

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents the guests in occupancy.

```csharp
public class GuestsInOccupancy : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [GuestsInOccupancy](./connectors.hotel.metadata.domain.shopping.search.guestsinoccupancy)<br />
Implements IValidatableObject

## Properties

### **MaxGuestsInOccupancy**

Gets or sets the maximum number of guests in the occupancy.

```csharp
public uint MaxGuestsInOccupancy { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **Guests**

Gets or sets the collection of guests.

```csharp
public IEnumerable<Guest> Guests { get; set; }
```

#### Property Value

[IEnumerable\<Guest\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **GuestsInOccupancy()**

```csharp
public GuestsInOccupancy()
```
