# RoomRestrictionsElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a room restrictions element in the hotel metadata domain.

```csharp
public class RoomRestrictionsElement : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [RoomRestrictionsElement](./connectors.hotel.metadata.domain.shopping.search.roomrestrictionselement)<br />
Implements IValidatableObject

## Properties

### **MaxOccupancies**

Gets or sets the maximum number of occupancies.

```csharp
public uint MaxOccupancies { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **MaxGuestsInAllRooms**

Gets or sets the maximum number of guests in all rooms.

```csharp
public uint MaxGuestsInAllRooms { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **RequireSameGuestsInAllOccupancies**

Gets or sets the requirement for same guests in all occupancies.

```csharp
public RequireSameGuestsInAllOccupancies RequireSameGuestsInAllOccupancies { get; set; }
```

#### Property Value

[RequireSameGuestsInAllOccupancies](./connectors.hotel.metadata.domain.shopping.search.requiresameguestsinalloccupancies)<br />

### **GuestsInOccupancy**

Gets or sets the guests in occupancy.

```csharp
public GuestsInOccupancy GuestsInOccupancy { get; set; }
```

#### Property Value

[GuestsInOccupancy](./connectors.hotel.metadata.domain.shopping.search.guestsinoccupancy)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **RoomRestrictionsElement()**

```csharp
public RoomRestrictionsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
