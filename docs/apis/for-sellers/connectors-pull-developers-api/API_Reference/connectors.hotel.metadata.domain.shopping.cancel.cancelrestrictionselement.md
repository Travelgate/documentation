# CancelRestrictionsElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Cancel

Represents a cancel restrictions element in the hotel metadata domain.

```csharp
public class CancelRestrictionsElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [CancelRestrictionsElement](./connectors.hotel.metadata.domain.shopping.cancel.cancelrestrictionselement)<br />
Implements IValidatableObject

## Properties

### **Reference**

Gets or sets the reference element.

```csharp
public ReferenceElement Reference { get; set; }
```

#### Property Value

[ReferenceElement](./connectors.hotel.metadata.domain.common.referenceelement)<br />

## Constructors

### **CancelRestrictionsElement()**

```csharp
public CancelRestrictionsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the cancel restrictions element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
