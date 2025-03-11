# HotelDetailOptionalElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Book

Represents a hotel detail optional element in the shopping book domain.

```csharp
public class HotelDetailOptionalElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [HotelDetailOptionalElement](./connectors.hotel.metadata.domain.shopping.book.hoteldetailoptionalelement)<br />
Implements IValidatableObject

## Properties

### **BookingDate**

Gets or sets the booking date optional element.

```csharp
public OptionalElement BookingDate { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Dates**

Gets or sets the dates optional element.

```csharp
public OptionalElement Dates { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **HotelCode**

Gets or sets the hotel code optional element.

```csharp
public OptionalElement HotelCode { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **HotelName**

Gets or sets the hotel name optional element.

```csharp
public OptionalElement HotelName { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **BoardCode**

Gets or sets the board code optional element.

```csharp
public OptionalElement BoardCode { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Occupancies**

Gets or sets the occupancies optional element.

```csharp
public OptionalElement Occupancies { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Rooms**

Gets or sets the rooms optional element.

```csharp
public OptionalElement Rooms { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

## Constructors

### **HotelDetailOptionalElement()**

```csharp
public HotelDetailOptionalElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the hotel detail optional element.
 The validation context.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
