# PriceElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents a price element in the hotel metadata domain.

```csharp
public class PriceElement : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [PriceElement](./connectors.hotel.metadata.domain.common.priceelement)<br />
Implements IValidatableObject

## Properties

### **Binding**

Gets or sets the binding element.

```csharp
public OptionalElement Binding { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Net**

Gets or sets the net element.

```csharp
public OptionalElement Net { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **PriceElement()**

```csharp
public PriceElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the price element.
 `validationContext`The validation context.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
