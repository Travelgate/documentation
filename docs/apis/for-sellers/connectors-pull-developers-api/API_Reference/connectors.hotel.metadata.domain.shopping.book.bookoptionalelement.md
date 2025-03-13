# BookOptionalElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Book

Represents a book optional element in the hotel metadata domain.

```csharp
public class BookOptionalElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [BookOptionalElement](./connectors.hotel.metadata.domain.shopping.book.bookoptionalelement)<br />
Implements IValidatableObject

## Properties

### **HotelLocator**

Gets or sets the hotel locator.

```csharp
public OptionalElement HotelLocator { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **ClientLocator**

Gets or sets the client locator.

```csharp
public OptionalElement ClientLocator { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Holder**

Gets or sets the holder.

```csharp
public OptionalElement Holder { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **HotelDetail**

Gets or sets the hotel detail.

```csharp
public HotelDetailOptionalElement HotelDetail { get; set; }
```

#### Property Value

[HotelDetailOptionalElement](./connectors.hotel.metadata.domain.shopping.book.hoteldetailoptionalelement)<br />

### **Remarks**

Gets or sets the remarks.

```csharp
public OptionalElement Remarks { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Payable**

Gets or sets the payable.

```csharp
public OptionalElement Payable { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Reference**

Gets or sets the reference.

```csharp
public OptionalElement Reference { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Status**

Gets or sets the status.

```csharp
public OptionalElement Status { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

## Constructors

### **BookOptionalElement()**

```csharp
public BookOptionalElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the book optional element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
