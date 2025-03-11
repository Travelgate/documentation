# QuoteElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Quote

Represents a quote element in the hotel metadata domain.

```csharp
public class QuoteElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [QuoteElement](./connectors.hotel.metadata.domain.shopping.quote.quoteelement)<br />
Implements IValidatableObject

## Properties

### **Optional**

Gets or sets the optional element.

```csharp
public QuoteOptionalElement Optional { get; set; }
```

#### Property Value

[QuoteOptionalElement](./connectors.hotel.metadata.domain.shopping.quote.quoteoptionalelement)<br />

### **Status**

Gets or sets the status element.

```csharp
public StatusElement Status { get; set; }
```

#### Property Value

[StatusElement](./connectors.hotel.metadata.domain.common.statuselement)<br />

## Constructors

### **QuoteElement()**

```csharp
public QuoteElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the quote element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
