# AmendRemarksElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.AmendRemarks

Represents an element for amending remarks in the hotel metadata domain.

```csharp
public class AmendRemarksElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [AmendRemarksElement](./connectors.hotel.metadata.domain.shopping.amendremarks.amendremarkselement)<br />
Implements IValidatableObject

## Properties

### **ImplementsAmendRemarks**

Gets or sets the boolean element indicating whether the remarks are implemented.

```csharp
public BoolElement ImplementsAmendRemarks { get; set; }
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

### **AmendRemarksElement()**

```csharp
public AmendRemarksElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the amend remarks element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
