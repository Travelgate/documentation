# MetadataValidableElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents an abstract metadata validable element in the hotel metadata domain.

```csharp
public abstract class MetadataValidableElement : System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement)<br />
Implements IValidatableObject

## Constructors

### **MetadataValidableElement()**

```csharp
protected MetadataValidableElement()
```

## Methods

### **Validate(Object[])**

Validates the specified items.

```csharp
public static IEnumerable<ValidationResult> Validate(Object[] items)
```

#### Parameters

`items` [Object[]](https://docs.microsoft.com/en-us/dotnet/api/system.object)<br />
The items to validate.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.

### **Validate(ValidationContext)**

Validates the metadata validable element.

```csharp
public abstract IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
