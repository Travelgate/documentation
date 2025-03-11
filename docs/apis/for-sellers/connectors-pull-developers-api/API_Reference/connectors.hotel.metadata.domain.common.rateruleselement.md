# RateRulesElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents a rate rules element in the hotel metadata domain.

```csharp
public class RateRulesElement : Connectors.Hotel.Metadata.Domain.BaseTypes.OptionalElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement) → [RateRulesElement](./connectors.hotel.metadata.domain.common.rateruleselement)<br />
Implements IValidatableObject

## Properties

### **Includes**

Gets or sets the collection of rate rules to include.

```csharp
public IEnumerable<RateRule> Includes { get; set; }
```

#### Property Value

[IEnumerable\<RateRule\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

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

### **RateRulesElement()**

```csharp
public RateRulesElement()
```
