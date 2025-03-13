# OptionalElement

Namespace: Connectors.Hotel.Metadata.Domain.BaseTypes

Represents an optional element in the hotel metadata domain.

```csharp
public class OptionalElement : ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement)<br />
Implements IValidatableObject

## Properties

### **Specified**

Gets or sets the specified value.

```csharp
public Specified Specified { get; set; }
```

#### Property Value

[Specified](./connectors.hotel.metadata.domain.basetypes.specified)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **OptionalElement()**

```csharp
public OptionalElement()
```
