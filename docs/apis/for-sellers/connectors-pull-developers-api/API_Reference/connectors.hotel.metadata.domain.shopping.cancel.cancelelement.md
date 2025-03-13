# CancelElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Cancel

Represents a cancel element in the hotel metadata domain.

```csharp
public class CancelElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [CancelElement](./connectors.hotel.metadata.domain.shopping.cancel.cancelelement)<br />
Implements IValidatableObject

## Properties

### **Implemented**

Gets or sets the implemented element.

```csharp
public BoolElement Implemented { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **Optional**

Gets or sets the optional element.

```csharp
public CancelOptionalElement Optional { get; set; }
```

#### Property Value

[CancelOptionalElement](./connectors.hotel.metadata.domain.shopping.cancel.canceloptionalelement)<br />

### **Restrictions**

Gets or sets the restrictions element.

```csharp
public CancelRestrictionsElement Restrictions { get; set; }
```

#### Property Value

[CancelRestrictionsElement](./connectors.hotel.metadata.domain.shopping.cancel.cancelrestrictionselement)<br />

### **Status**

Gets or sets the book status element.

```csharp
public BookStatusElement Status { get; set; }
```

#### Property Value

[BookStatusElement](./connectors.hotel.metadata.domain.common.bookstatuselement)<br />

## Constructors

### **CancelElement()**

```csharp
public CancelElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the cancel element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
Validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
