# CancelOptionalElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Cancel

Represents a cancel optional element in the hotel metadata domain.

```csharp
public class CancelOptionalElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [CancelOptionalElement](./connectors.hotel.metadata.domain.shopping.cancel.canceloptionalelement)<br />
Implements IValidatableObject

## Properties

### **CancelLocator**

Gets or sets the cancel locator.

```csharp
public OptionalElement CancelLocator { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **BookPrice**

Gets or sets the book price.

```csharp
public OptionalElement BookPrice { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **CancelPrice**

Gets or sets the cancel price.

```csharp
public OptionalElement CancelPrice { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

## Constructors

### **CancelOptionalElement()**

```csharp
public CancelOptionalElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the cancel optional element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
