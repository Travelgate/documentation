# CheckBookingsByReferenceRestrictionsElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.CheckBookings.ByReference

Represents the CheckBookingsByReferenceRestrictionsElement in the hotel metadata domain.

```csharp
public class CheckBookingsByReferenceRestrictionsElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [CheckBookingsByReferenceRestrictionsElement](./connectors.hotel.metadata.domain.shopping.checkbookings.byreference.checkbookingsbyreferencerestrictionselement)<br />
Implements IValidatableObject

## Properties

### **References**

Gets or sets the References element.

```csharp
public CheckBookingByReferenceReferenceElement References { get; set; }
```

#### Property Value

[CheckBookingByReferenceReferenceElement](./connectors.hotel.metadata.domain.common.checkbookingbyreferencereferenceelement)<br />

### **Reference**

Gets or sets the Reference element.

```csharp
public ReferenceElement Reference { get; set; }
```

#### Property Value

[ReferenceElement](./connectors.hotel.metadata.domain.common.referenceelement)<br />

## Constructors

### **CheckBookingsByReferenceRestrictionsElement()**

```csharp
public CheckBookingsByReferenceRestrictionsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the CheckBookingsByReferenceRestrictionsElement.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
