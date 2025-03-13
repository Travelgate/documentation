# CheckBookingsByDateElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.CheckBookings

Represents the element for checking bookings by date.

```csharp
public class CheckBookingsByDateElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [CheckBookingsByDateElement](./connectors.hotel.metadata.domain.shopping.checkbookings.checkbookingsbydateelement)<br />
Implements IValidatableObject

## Properties

### **Implemented**

Gets or sets the implemented flag.

```csharp
public BoolElement Implemented { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **Restrictions**

Gets or sets the restrictions element.

```csharp
public CheckBookingsByDateRestrictionsElement Restrictions { get; set; }
```

#### Property Value

[CheckBookingsByDateRestrictionsElement](./connectors.hotel.metadata.domain.shopping.checkbookings.bydate.checkbookingsbydaterestrictionselement)<br />

### **Optional**

Gets or sets the optional element.

```csharp
public CheckBookingsOptionalElement Optional { get; set; }
```

#### Property Value

[CheckBookingsOptionalElement](./connectors.hotel.metadata.domain.shopping.checkbookings.checkbookingsoptionalelement)<br />

## Constructors

### **CheckBookingsByDateElement()**

```csharp
public CheckBookingsByDateElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the check bookings by date element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
