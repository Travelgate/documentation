# AmendFeeOptionalElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Amend

Represents an optional element for amending fees in the hotel metadata domain.

```csharp
public class AmendFeeOptionalElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [AmendFeeOptionalElement](./connectors.hotel.metadata.domain.shopping.amend.amendfeeoptionalelement)<br />
Implements IValidatableObject

## Properties

### **Currency**

Gets or sets the currency for the fee.

```csharp
public OptionalElement Currency { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Amount**

Gets or sets the amount of the fee.

```csharp
public OptionalElement Amount { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

## Constructors

### **AmendFeeOptionalElement()**

```csharp
public AmendFeeOptionalElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the amend fee optional element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
