# AmendOptionalElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Amend

Represents an optional element for amending hotel metadata.

```csharp
public class AmendOptionalElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [AmendOptionalElement](./connectors.hotel.metadata.domain.shopping.amend.amendoptionalelement)<br />
Implements IValidatableObject

## Properties

### **Holder**

Gets or sets the optional element for the holder.

```csharp
public OptionalElement Holder { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **HotelLocator**

Gets or sets the optional element for the hotel locator.

```csharp
public OptionalElement HotelLocator { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Remarks**

Gets or sets the optional element for the remarks.

```csharp
public OptionalElement Remarks { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Price**

Gets or sets the optional element for the price.

```csharp
public OptionalElement Price { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Status**

Gets or sets the optional element for the status.

```csharp
public OptionalElement Status { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **HotelDetail**

Gets or sets the optional element for the hotel detail.

```csharp
public HotelDetailOptionalElement HotelDetail { get; set; }
```

#### Property Value

[HotelDetailOptionalElement](./connectors.hotel.metadata.domain.shopping.book.hoteldetailoptionalelement)<br />

### **AmendFee**

Gets or sets the optional element for the amend fee.

```csharp
public AmendFeeOptionalElement AmendFee { get; set; }
```

#### Property Value

[AmendFeeOptionalElement](./connectors.hotel.metadata.domain.shopping.amend.amendfeeoptionalelement)<br />

## Constructors

### **AmendOptionalElement()**

```csharp
public AmendOptionalElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the amend optional element.
 The validation context.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
