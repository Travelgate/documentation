# ContentElement

Namespace: Connectors.Hotel.Metadata.Domain.Content

Represents a content element in the hotel metadata domain.

```csharp
public class ContentElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ContentElement](./connectors.hotel.metadata.domain.content.contentelement)<br />
Implements IValidatableObject

## Properties

### **Operations**

Gets or sets the operations element.

```csharp
public ContentOperationsElement Operations { get; set; }
```

#### Property Value

[ContentOperationsElement](./connectors.hotel.metadata.domain.content.contentoperationselement)<br />

### **Languages**

Gets or sets the list of languages.

```csharp
public List<string> Languages { get; set; }
```

#### Property Value

[List\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

## Constructors

### **ContentElement()**

```csharp
public ContentElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the content element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
