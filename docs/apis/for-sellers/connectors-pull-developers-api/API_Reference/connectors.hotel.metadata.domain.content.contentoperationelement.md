# ContentOperationElement

Namespace: Connectors.Hotel.Metadata.Domain.Content

Represents a content operation element in the hotel metadata domain.

```csharp
public class ContentOperationElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />
Implements IValidatableObject

## Properties

### **Implemented**

Gets or sets a value indicating whether the operation is implemented.

```csharp
public bool Implemented { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **Active**

Gets or sets a value indicating whether the operation is active.

```csharp
public bool Active { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **ReviewDate**

Gets or sets the review date of the operation.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **ContentOperationElement()**

```csharp
public ContentOperationElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the content operation element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
