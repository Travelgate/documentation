# AmendRestrictionsElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Amend

Represents an element for amending restrictions in the hotel metadata domain.

```csharp
public class AmendRestrictionsElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [AmendRestrictionsElement](./connectors.hotel.metadata.domain.shopping.amend.amendrestrictionselement)<br />
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

### **AmendRestrictionsElement()**

```csharp
public AmendRestrictionsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the amend restrictions element.
 The validation context.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
