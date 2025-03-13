# CheckBookingsElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.CheckBookings

Represents the CheckBookingsElement in the hotel metadata domain.

```csharp
public class CheckBookingsElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [CheckBookingsElement](./connectors.hotel.metadata.domain.shopping.checkbookings.checkbookingselement)<br />
Implements IValidatableObject

## Properties

### **ByDate**

Gets or sets the CheckBookingsByDateElement.

```csharp
public CheckBookingsByDateElement ByDate { get; set; }
```

#### Property Value

[CheckBookingsByDateElement](./connectors.hotel.metadata.domain.shopping.checkbookings.checkbookingsbydateelement)<br />

### **ByReference**

Gets or sets the CheckBookingsByReferenceElement.

```csharp
public CheckBookingsByReferenceElement ByReference { get; set; }
```

#### Property Value

[CheckBookingsByReferenceElement](./connectors.hotel.metadata.domain.shopping.checkbookings.checkbookingsbyreferenceelement)<br />

### **Status**

Gets or sets the BookStatusElement.

```csharp
public BookStatusElement Status { get; set; }
```

#### Property Value

[BookStatusElement](./connectors.hotel.metadata.domain.common.bookstatuselement)<br />

## Constructors

### **CheckBookingsElement()**

```csharp
public CheckBookingsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the CheckBookingsElement.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
