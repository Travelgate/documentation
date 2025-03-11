# AmendDatesElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.AmendDates

Represents an element for amending dates in the hotel metadata domain.

```csharp
public class AmendDatesElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [AmendDatesElement](./connectors.hotel.metadata.domain.shopping.amenddates.amenddateselement)<br />
Implements IValidatableObject

## Properties

### **ImplementsAmendDates**

Gets or sets the boolean element indicating whether the element implements amend dates.

```csharp
public BoolElement ImplementsAmendDates { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowsAmendCheckIn**

Gets or sets the boolean element indicating whether the element allows amending check-in.

```csharp
public BoolElement AllowsAmendCheckIn { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowsAmendCheckOut**

Gets or sets the boolean element indicating whether the element allows amending check-out.

```csharp
public BoolElement AllowsAmendCheckOut { get; set; }
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

### **AmendDatesElement()**

```csharp
public AmendDatesElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the amend dates element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
