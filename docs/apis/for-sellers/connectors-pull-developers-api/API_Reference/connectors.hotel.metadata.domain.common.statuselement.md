# StatusElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents a status element in the hotel metadata domain.

```csharp
public class StatusElement : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [StatusElement](./connectors.hotel.metadata.domain.common.statuselement)<br />
Implements IValidatableObject

## Properties

### **Includes**

Gets or sets the includes.

```csharp
public IEnumerable<string> Includes { get; set; }
```

#### Property Value

[IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **StatusElement()**

```csharp
public StatusElement()
```

## Methods

### **Validate(ValidationContext)**

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
