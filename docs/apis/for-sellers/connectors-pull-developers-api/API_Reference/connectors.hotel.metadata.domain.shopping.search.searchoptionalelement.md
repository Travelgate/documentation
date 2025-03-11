# SearchOptionalElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a search optional element in the shopping search domain.

```csharp
public class SearchOptionalElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [SearchOptionalElement](./connectors.hotel.metadata.domain.shopping.search.searchoptionalelement)<br />
Implements IValidatableObject

## Properties

### **Hotel**

Gets or sets the hotel optional element.

```csharp
public HotelOptionalElement Hotel { get; set; }
```

#### Property Value

[HotelOptionalElement](./connectors.hotel.metadata.domain.shopping.search.hoteloptionalelement)<br />

### **Rental**

Gets or sets the rental optional element.

```csharp
public RentalOptionalElement Rental { get; set; }
```

#### Property Value

[RentalOptionalElement](./connectors.hotel.metadata.domain.shopping.search.rentaloptionalelement)<br />

## Constructors

### **SearchOptionalElement()**

```csharp
public SearchOptionalElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the search optional element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
