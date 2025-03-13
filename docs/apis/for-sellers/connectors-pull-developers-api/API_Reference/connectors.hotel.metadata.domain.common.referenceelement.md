# ReferenceElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents a reference element in the hotel metadata domain.

```csharp
public class ReferenceElement : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [ReferenceElement](./connectors.hotel.metadata.domain.common.referenceelement)<br />
Implements IValidatableObject

## Properties

### **Includes**

Gets or sets the collection of reference locator types.

```csharp
public IEnumerable<ReferenceLocatorType> Includes { get; set; }
```

#### Property Value

[IEnumerable\<ReferenceLocatorType\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **ReferenceElement()**

```csharp
public ReferenceElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the reference element.
 `validationContext`The validation context.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
