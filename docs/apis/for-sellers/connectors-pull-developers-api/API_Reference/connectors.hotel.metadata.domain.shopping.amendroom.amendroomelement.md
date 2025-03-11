# AmendRoomElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.AmendRoom

Represents an element for amending room in the hotel metadata domain.

```csharp
public class AmendRoomElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [AmendRoomElement](./connectors.hotel.metadata.domain.shopping.amendroom.amendroomelement)<br />
Implements IValidatableObject

## Properties

### **ImplementsAmendRoom**

Gets or sets the boolean element indicating whether the room amendment is implemented.

```csharp
public BoolElement ImplementsAmendRoom { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **RequireSameGuestsInAllOccupancies**

Gets or sets the boolean element indicating whether the same guests are required in all occupancies.

```csharp
public BoolElement RequireSameGuestsInAllOccupancies { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **RequireSameRooms**

Gets or sets the boolean element indicating whether the same rooms are required.

```csharp
public BoolElement RequireSameRooms { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowsAddRooms**

Gets or sets the boolean element indicating whether adding rooms is allowed.

```csharp
public BoolElement AllowsAddRooms { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowsDeleteRooms**

Gets or sets the boolean element indicating whether deleting rooms is allowed.

```csharp
public BoolElement AllowsDeleteRooms { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowsChangeRoomCode**

Gets or sets the boolean element indicating whether changing room code is allowed.

```csharp
public BoolElement AllowsChangeRoomCode { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **Restrictions**

Gets or sets the amend restrictions element.

```csharp
public AmendRestrictionsElement Restrictions { get; set; }
```

#### Property Value

[AmendRestrictionsElement](./connectors.hotel.metadata.domain.shopping.amend.amendrestrictionselement)<br />

### **Optional**

Gets or sets the amend optional element.

```csharp
public AmendOptionalElement Optional { get; set; }
```

#### Property Value

[AmendOptionalElement](./connectors.hotel.metadata.domain.shopping.amend.amendoptionalelement)<br />

## Constructors

### **AmendRoomElement()**

```csharp
public AmendRoomElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the amend room element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
