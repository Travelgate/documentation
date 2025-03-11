# MetadataElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents a metadata element in the hotel metadata domain.

```csharp
public class MetadataElement : MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [MetadataElement](./connectors.hotel.metadata.domain.common.metadataelement)<br />
Implements IValidatableObject

## Properties

### **Shopping**

Gets or sets the shopping element.

```csharp
public ShoppingElement Shopping { get; set; }
```

#### Property Value

[ShoppingElement](./connectors.hotel.metadata.domain.shopping.shoppingelement)<br />

### **Content**

Gets or sets the content element.

```csharp
public ContentElement Content { get; set; }
```

#### Property Value

[ContentElement](./connectors.hotel.metadata.domain.content.contentelement)<br />

## Constructors

### **MetadataElement()**

```csharp
public MetadataElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the metadata element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
