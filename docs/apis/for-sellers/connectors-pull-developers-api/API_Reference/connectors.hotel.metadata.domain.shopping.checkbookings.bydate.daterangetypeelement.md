# DateRangeTypeElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.CheckBookings.ByDate

Represents a date range type element in the hotel metadata domain.

```csharp
public class DateRangeTypeElement : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [DateRangeTypeElement](./connectors.hotel.metadata.domain.shopping.checkbookings.bydate.daterangetypeelement)<br />
Implements IValidatableObject

## Properties

### **DateRangeType**

Gets or sets the date range type.

```csharp
public IEnumerable<string> DateRangeType { get; set; }
```

#### Property Value

[IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **DateRangeTypeElement()**

```csharp
public DateRangeTypeElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
