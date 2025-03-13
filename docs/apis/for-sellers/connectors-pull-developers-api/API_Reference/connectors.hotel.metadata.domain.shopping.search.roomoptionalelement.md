# RoomOptionalElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a room optional element in the hotel metadata domain.

```csharp
public class RoomOptionalElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [RoomOptionalElement](./connectors.hotel.metadata.domain.shopping.search.roomoptionalelement)<br />
Implements IValidatableObject

## Properties

### **Description**

Gets or sets the description.

```csharp
public OptionalElement Description { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **PriceBreakdown**

Gets or sets the price breakdown.

```csharp
public OptionalElement PriceBreakdown { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **RatePlan**

Gets or sets the rate plan.

```csharp
public OptionalElement RatePlan { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Refundable**

Gets or sets the refundable.

```csharp
public OptionalElement Refundable { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Beds**

Gets or sets the beds.

```csharp
public BedsElement Beds { get; set; }
```

#### Property Value

[BedsElement](./connectors.hotel.metadata.domain.shopping.search.bedselement)<br />

### **Units**

Gets or sets the units.

```csharp
public OptionalElement Units { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

## Constructors

### **RoomOptionalElement()**

```csharp
public RoomOptionalElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the room optional element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
