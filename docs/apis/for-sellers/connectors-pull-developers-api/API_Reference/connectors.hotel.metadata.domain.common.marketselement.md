# MarketsElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents an element that includes or excludes markets in the hotel metadata domain.

```csharp
public class MarketsElement : Connectors.Hotel.Metadata.Domain.BaseTypes.IncludeExcludeElement`1[[System.String, System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [IncludeExcludeElement\<String\>](./connectors.hotel.metadata.domain.basetypes.includeexcludeelement-1) → [MarketsElement](./connectors.hotel.metadata.domain.common.marketselement)<br />
Implements IValidatableObject

**Remarks:**

This class inherits from [IncludeExcludeElement\<TValue\>](./connectors.hotel.metadata.domain.basetypes.includeexcludeelement-1) with [String](https://docs.microsoft.com/en-us/dotnet/api/system.string) as the type parameter.

## Properties

### **All**

Gets or sets a value indicating whether all values are included or excluded.

```csharp
public bool All { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **Includes**

Gets or sets the collection of values to include.

```csharp
public IEnumerable<string> Includes { get; set; }
```

#### Property Value

[IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Excludes**

Gets or sets the collection of values to exclude.

```csharp
public IEnumerable<string> Excludes { get; set; }
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

### **MarketsElement()**

Initializes a new instance of the [MarketsElement](./connectors.hotel.metadata.domain.common.marketselement) class.

```csharp
public MarketsElement()
```

### **MarketsElement(Boolean, IEnumerable\<String\>, IEnumerable\<String\>)**

Initializes a new instance of the [MarketsElement](./connectors.hotel.metadata.domain.common.marketselement) class with the specified values.

```csharp
public MarketsElement(bool all, IEnumerable<string> include, IEnumerable<string> exclude)
```

#### Parameters

`all` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
A value indicating whether all markets are included or excluded.

`include` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of markets to include.

`exclude` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of markets to exclude.

## Methods

### **FromExcluded(IEnumerable\<String\>)**

Creates a new instance of [MarketsElement](./connectors.hotel.metadata.domain.common.marketselement) with the specified excluded markets.

```csharp
public static MarketsElement FromExcluded(IEnumerable<string> exclude)
```

#### Parameters

`exclude` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of markets to exclude.

#### Returns

[MarketsElement](./connectors.hotel.metadata.domain.common.marketselement)<br />
A new instance of [MarketsElement](./connectors.hotel.metadata.domain.common.marketselement) with the specified excluded markets.

### **FromIncluded(IEnumerable\<String\>)**

Creates a new instance of [MarketsElement](./connectors.hotel.metadata.domain.common.marketselement) with the specified included markets.

```csharp
public static MarketsElement FromIncluded(IEnumerable<string> included)
```

#### Parameters

`included` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of markets to include.

#### Returns

[MarketsElement](./connectors.hotel.metadata.domain.common.marketselement)<br />
A new instance of [MarketsElement](./connectors.hotel.metadata.domain.common.marketselement) with the specified included markets.
