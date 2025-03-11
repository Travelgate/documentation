# CheckBookingByReferenceReferenceElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents the CheckBookingByReferenceReferenceElement in the hotel metadata domain.

```csharp
public class CheckBookingByReferenceReferenceElement : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [CheckBookingByReferenceReferenceElement](./connectors.hotel.metadata.domain.common.checkbookingbyreferencereferenceelement)<br />
Implements IValidatableObject

## Properties

### **SellerLocator**

Gets or sets the Seller Locator.

```csharp
public OptionalElement SellerLocator { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **BuyerLocator**

Gets or sets the Buyer Locator.

```csharp
public OptionalElement BuyerLocator { get; set; }
```

#### Property Value

[OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **CheckBookingByReferenceReferenceElement()**

```csharp
public CheckBookingByReferenceReferenceElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
