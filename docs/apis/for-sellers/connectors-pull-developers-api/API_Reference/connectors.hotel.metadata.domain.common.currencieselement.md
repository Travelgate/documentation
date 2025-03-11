# CurrenciesElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents an element that includes or excludes currencies in the hotel metadata domain.

```csharp
public class CurrenciesElement : Connectors.Hotel.Metadata.Domain.BaseTypes.IncludeExcludeElement`1[[Connectors.Core.Domain.Currency, Connectors.Core.Domain, Version=1.1.67.0, Culture=neutral, PublicKeyToken=null]], System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [IncludeExcludeElement\<Currency\>](./connectors.hotel.metadata.domain.basetypes.includeexcludeelement-1) → [CurrenciesElement](./connectors.hotel.metadata.domain.common.currencieselement)<br />
Implements IValidatableObject

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
public IEnumerable<Currency> Includes { get; set; }
```

#### Property Value

[IEnumerable\<Currency\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Excludes**

Gets or sets the collection of values to exclude.

```csharp
public IEnumerable<Currency> Excludes { get; set; }
```

#### Property Value

[IEnumerable\<Currency\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **CurrenciesElement()**

Initializes a new instance of the [CurrenciesElement](./connectors.hotel.metadata.domain.common.currencieselement) class.

```csharp
public CurrenciesElement()
```

### **CurrenciesElement(Boolean, IEnumerable\<Currency\>, IEnumerable\<Currency\>)**

Initializes a new instance of the [CurrenciesElement](./connectors.hotel.metadata.domain.common.currencieselement) class with the specified values.

```csharp
public CurrenciesElement(bool all, IEnumerable<Currency> include, IEnumerable<Currency> exclude)
```

#### Parameters

`all` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
A value indicating whether all currencies are included or excluded.

`include` [IEnumerable\<Currency\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of currencies to include.

`exclude` [IEnumerable\<Currency\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of currencies to exclude.

## Methods

### **FromExcluded(IEnumerable\<Currency\>)**

Creates a new instance of [CurrenciesElement](./connectors.hotel.metadata.domain.common.currencieselement) with the specified excluded currencies.

```csharp
public static CurrenciesElement FromExcluded(IEnumerable<Currency> exclude)
```

#### Parameters

`exclude` [IEnumerable\<Currency\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of currencies to exclude.

#### Returns

[CurrenciesElement](./connectors.hotel.metadata.domain.common.currencieselement)<br />
A new instance of [CurrenciesElement](./connectors.hotel.metadata.domain.common.currencieselement) with the specified excluded currencies.

### **FromIncluded(IEnumerable\<Currency\>)**

Creates a new instance of [CurrenciesElement](./connectors.hotel.metadata.domain.common.currencieselement) with the specified included currencies.

```csharp
public static CurrenciesElement FromIncluded(IEnumerable<Currency> included)
```

#### Parameters

`included` [IEnumerable\<Currency\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of currencies to include.

#### Returns

[CurrenciesElement](./connectors.hotel.metadata.domain.common.currencieselement)<br />
A new instance of [CurrenciesElement](./connectors.hotel.metadata.domain.common.currencieselement) with the specified included currencies.
