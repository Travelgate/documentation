# BoolElement

Namespace: Connectors.Hotel.Metadata.Domain.BaseTypes

Represents a boolean element.

```csharp
public class BoolElement : ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />
Implements IValidatableObject

## Properties

### **Value**

Gets or sets the value of the boolean element.

```csharp
public bool Value { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **BoolElement()**

```csharp
public BoolElement()
```
