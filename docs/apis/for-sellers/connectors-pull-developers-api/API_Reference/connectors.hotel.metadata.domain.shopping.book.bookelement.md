# BookElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Book

Represents a book element in the hotel metadata domain.

```csharp
public class BookElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [BookElement](./connectors.hotel.metadata.domain.shopping.book.bookelement)<br />
Implements IValidatableObject

## Properties

### **AllowDeltaPrice**

Gets or sets the allow delta price element.

```csharp
public BoolElement AllowDeltaPrice { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowRemarks**

Gets or sets the allow remarks element.

```csharp
public BoolElement AllowRemarks { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **Restrictions**

Gets or sets the book restrictions element.

```csharp
public BookRestrictionsElement Restrictions { get; set; }
```

#### Property Value

[BookRestrictionsElement](./connectors.hotel.metadata.domain.shopping.book.bookrestrictionselement)<br />

### **Optional**

Gets or sets the book optional element.

```csharp
public BookOptionalElement Optional { get; set; }
```

#### Property Value

[BookOptionalElement](./connectors.hotel.metadata.domain.shopping.book.bookoptionalelement)<br />

### **Status**

Gets or sets the book status element.

```csharp
public BookStatusElement Status { get; set; }
```

#### Property Value

[BookStatusElement](./connectors.hotel.metadata.domain.common.bookstatuselement)<br />

## Constructors

### **BookElement()**

```csharp
public BookElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the book element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
