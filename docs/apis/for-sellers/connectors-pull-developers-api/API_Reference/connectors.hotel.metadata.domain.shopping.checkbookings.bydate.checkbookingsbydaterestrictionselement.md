# CheckBookingsByDateRestrictionsElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.CheckBookings.ByDate

Represents the restrictions element for checking bookings by date.

```csharp
public class CheckBookingsByDateRestrictionsElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [CheckBookingsByDateRestrictionsElement](./connectors.hotel.metadata.domain.shopping.checkbookings.bydate.checkbookingsbydaterestrictionselement)<br />
Implements IValidatableObject

## Properties

### **DateType**

Gets or sets the date type.

```csharp
public DateRangeTypeElement DateType { get; set; }
```

#### Property Value

[DateRangeTypeElement](./connectors.hotel.metadata.domain.shopping.checkbookings.bydate.daterangetypeelement)<br />

## Constructors

### **CheckBookingsByDateRestrictionsElement()**

```csharp
public CheckBookingsByDateRestrictionsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the check bookings by date restrictions element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
