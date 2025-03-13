# AmendBoardElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.AmendBoard

Represents an element for amending board in the hotel metadata domain.

```csharp
public class AmendBoardElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [AmendBoardElement](./connectors.hotel.metadata.domain.shopping.amendboard.amendboardelement)<br />
Implements IValidatableObject

## Properties

### **ImplementsAmendBoard**

Gets or sets the boolean element indicating whether the board amendment is implemented.

```csharp
public BoolElement ImplementsAmendBoard { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **RequireBoardName**

Gets or sets the boolean element indicating whether the board name is required.

```csharp
public BoolElement RequireBoardName { get; set; }
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

### **AmendBoardElement()**

```csharp
public AmendBoardElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the amend board element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
