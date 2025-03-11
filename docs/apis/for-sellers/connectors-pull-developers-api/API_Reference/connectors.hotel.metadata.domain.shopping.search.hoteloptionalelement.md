# HotelOptionalElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a hotel optional element in the shopping search domain.

```csharp
public class HotelOptionalElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [HotelOptionalElement](./connectors.hotel.metadata.domain.shopping.search.hoteloptionalelement)<br />
Implements IValidatableObject

## Properties

### **Surcharges**

Gets or sets the surcharges element.

```csharp
public SearchOptionalPerTypeElement Surcharges { get; set; }
```

#### Property Value

[SearchOptionalPerTypeElement](./connectors.hotel.metadata.domain.shopping.search.searchoptionalpertypeelement)<br />

### **Promotions**

Gets or sets the promotions element.

```csharp
public SearchOptionalPerTypeElement Promotions { get; set; }
```

#### Property Value

[SearchOptionalPerTypeElement](./connectors.hotel.metadata.domain.shopping.search.searchoptionalpertypeelement)<br />

### **Amenities**

Gets or sets the amenities element.

```csharp
public SearchOptionalPerTypeElement Amenities { get; set; }
```

#### Property Value

[SearchOptionalPerTypeElement](./connectors.hotel.metadata.domain.shopping.search.searchoptionalpertypeelement)<br />

### **Remarks**

Gets or sets the remarks element.

```csharp
public SearchOptionalPerTypeElement Remarks { get; set; }
```

#### Property Value

[SearchOptionalPerTypeElement](./connectors.hotel.metadata.domain.shopping.search.searchoptionalpertypeelement)<br />

### **Supplements**

Gets or sets the supplements element.

```csharp
public SearchOptionalPerTypeElement Supplements { get; set; }
```

#### Property Value

[SearchOptionalPerTypeElement](./connectors.hotel.metadata.domain.shopping.search.searchoptionalpertypeelement)<br />

### **CancelPolicy**

Gets or sets the cancel policy element.

```csharp
public SearchOptionalPerTypeElement CancelPolicy { get; set; }
```

#### Property Value

[SearchOptionalPerTypeElement](./connectors.hotel.metadata.domain.shopping.search.searchoptionalpertypeelement)<br />

### **HotelName**

Gets or sets the hotel name element.

```csharp
public OptionalElement HotelName { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **HotelLocation**

Gets or sets the hotel location element.

```csharp
public OptionalElement HotelLocation { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **BoardName**

Gets or sets the board name element.

```csharp
public OptionalElement BoardName { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Rooms**

Gets or sets the rooms element.

```csharp
public RoomOptionalElement Rooms { get; set; }
```

#### Property Value

[RoomOptionalElement](./connectors.hotel.metadata.domain.shopping.search.roomoptionalelement)<br />

## Constructors

### **HotelOptionalElement()**

```csharp
public HotelOptionalElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the hotel optional element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
