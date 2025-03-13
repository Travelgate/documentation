# RequireSameGuestsInAllOccupancies

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents the requirement for same guests in all occupancies.

```csharp
public class RequireSameGuestsInAllOccupancies : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [RequireSameGuestsInAllOccupancies](./connectors.hotel.metadata.domain.shopping.search.requiresameguestsinalloccupancies)<br />
Implements IValidatableObject

## Properties

### **SamePaxNumber**

Gets or sets a value indicating whether the pax number should be the same in all occupancies.

```csharp
public bool SamePaxNumber { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **SamePaxAge**

Gets or sets a value indicating whether the pax age should be the same in all occupancies.

```csharp
public bool SamePaxAge { get; set; }
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

### **RequireSameGuestsInAllOccupancies()**

```csharp
public RequireSameGuestsInAllOccupancies()
```
