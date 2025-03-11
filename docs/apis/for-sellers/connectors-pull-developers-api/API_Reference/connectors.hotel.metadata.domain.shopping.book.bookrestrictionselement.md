# BookRestrictionsElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Book

Represents a book restrictions element in the hotel metadata domain.

```csharp
public class BookRestrictionsElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [BookRestrictionsElement](./connectors.hotel.metadata.domain.shopping.book.bookrestrictionselement)<br />
Implements IValidatableObject

## Properties

### **RequiredAllPassengers**

Gets or sets the required all passengers element.

```csharp
public BoolElement RequiredAllPassengers { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

## Constructors

### **BookRestrictionsElement()**

```csharp
public BookRestrictionsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the book restrictions element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
