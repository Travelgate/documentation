# SearchOptionalPerTypeElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents an optional element in the hotel metadata domain with a specific type.

```csharp
public class SearchOptionalPerTypeElement : Connectors.Hotel.Metadata.Domain.BaseTypes.OptionalElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement) → [SearchOptionalPerTypeElement](./connectors.hotel.metadata.domain.shopping.search.searchoptionalpertypeelement)<br />
Implements IValidatableObject

## Properties

### **Type**

Gets or sets the type of the search optional.

```csharp
public SearchOptionalType Type { get; set; }
```

#### Property Value

[SearchOptionalType](./connectors.hotel.metadata.domain.shopping.search.searchoptionaltype)<br />

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

### **SearchOptionalPerTypeElement()**

```csharp
public SearchOptionalPerTypeElement()
```
