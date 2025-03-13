# QuoteOptionalElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Quote

Represents an optional element in the hotel metadata domain.

```csharp
public class QuoteOptionalElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [QuoteOptionalElement](./connectors.hotel.metadata.domain.shopping.quote.quoteoptionalelement)<br />
Implements IValidatableObject

## Properties

### **Surcharges**

Gets or sets the surcharges element.

```csharp
public OptionalElement Surcharges { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **Remarks**

Gets or sets the remarks element.

```csharp
public OptionalElement Remarks { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **CancelPolicyDescription**

Gets or sets the cancel policy description element.

```csharp
public OptionalElement CancelPolicyDescription { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **PaymentInfo**

Gets or sets the payment info element.

```csharp
public OptionalElement PaymentInfo { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

## Constructors

### **QuoteOptionalElement()**

```csharp
public QuoteOptionalElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the quote optional element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
