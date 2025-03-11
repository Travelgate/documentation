# CheckBookingsByReferenceElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.CheckBookings

Represents the CheckBookingsByReferenceElement in the hotel metadata domain.

```csharp
public class CheckBookingsByReferenceElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [CheckBookingsByReferenceElement](./connectors.hotel.metadata.domain.shopping.checkbookings.checkbookingsbyreferenceelement)<br />
Implements IValidatableObject

## Properties

### **Implemented**

Gets or sets the Implemented element.

```csharp
public BoolElement Implemented { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **Restrictions**

Gets or sets the Restrictions element.

```csharp
public CheckBookingsByReferenceRestrictionsElement Restrictions { get; set; }
```

#### Property Value

[CheckBookingsByReferenceRestrictionsElement](./connectors.hotel.metadata.domain.shopping.checkbookings.byreference.checkbookingsbyreferencerestrictionselement)<br />

### **Optional**

Gets or sets the Optional element.

```csharp
public CheckBookingsOptionalElement Optional { get; set; }
```

#### Property Value

[CheckBookingsOptionalElement](./connectors.hotel.metadata.domain.shopping.checkbookings.checkbookingsoptionalelement)<br />

## Constructors

### **CheckBookingsByReferenceElement()**

```csharp
public CheckBookingsByReferenceElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the CheckBookingsByReferenceElement.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
