# CombineElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a combine element in the hotel metadata domain.

```csharp
public class CombineElement : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [CombineElement](./connectors.hotel.metadata.domain.shopping.search.combineelement)<br />
Implements IValidatableObject

## Properties

### **UseCombinationKey**

Gets or sets a value indicating whether to use combination key.

```csharp
public bool UseCombinationKey { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **CombineType**

Gets or sets the combine type.

```csharp
public CombineType CombineType { get; set; }
```

#### Property Value

[CombineType](./connectors.hotel.metadata.domain.shopping.search.combinetype)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **CombineElement()**

```csharp
public CombineElement()
```
