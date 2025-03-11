# BookStatusElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents a book status element in the hotel metadata domain.

```csharp
public class BookStatusElement : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [BookStatusElement](./connectors.hotel.metadata.domain.common.bookstatuselement)<br />
Implements IValidatableObject

## Properties

### **Includes**

Gets or sets the collection of book statuses.

```csharp
public IEnumerable<BookStatus> Includes { get; set; }
```

#### Property Value

[IEnumerable\<BookStatus\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **BookStatusElement()**

```csharp
public BookStatusElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the book status element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
