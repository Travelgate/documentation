# NationalitiesElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents an element that includes or excludes nationalities in the hotel metadata domain.

```csharp
public class NationalitiesElement : Connectors.Hotel.Metadata.Domain.BaseTypes.IncludeExcludeElement`1[[System.String, System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [IncludeExcludeElement\<String\>](./connectors.hotel.metadata.domain.basetypes.includeexcludeelement-1) → [NationalitiesElement](./connectors.hotel.metadata.domain.common.nationalitieselement)<br />
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

### **NationalitiesElement()**

Initializes a new instance of the [NationalitiesElement](./connectors.hotel.metadata.domain.common.nationalitieselement) class.

```csharp
public NationalitiesElement()
```

### **NationalitiesElement(Boolean, IEnumerable\<String\>, IEnumerable\<String\>)**

Initializes a new instance of the [NationalitiesElement](./connectors.hotel.metadata.domain.common.nationalitieselement) class with the specified values.

```csharp
public NationalitiesElement(bool all, IEnumerable<string> include, IEnumerable<string> exclude)
```

#### Parameters

`all` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
A value indicating whether all nationalities are included or excluded.

`include` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of nationalities to include.

`exclude` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of nationalities to exclude.

## Methods

### **FromExcluded(IEnumerable\<String\>)**

Creates a new instance of [NationalitiesElement](./connectors.hotel.metadata.domain.common.nationalitieselement) with the specified excluded nationalities.

```csharp
public static NationalitiesElement FromExcluded(IEnumerable<string> exclude)
```

#### Parameters

`exclude` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of nationalities to exclude.

#### Returns

[NationalitiesElement](./connectors.hotel.metadata.domain.common.nationalitieselement)<br />
A new instance of [NationalitiesElement](./connectors.hotel.metadata.domain.common.nationalitieselement) with the specified excluded nationalities.

### **FromIncluded(IEnumerable\<String\>)**

Creates a new instance of [NationalitiesElement](./connectors.hotel.metadata.domain.common.nationalitieselement) with the specified included nationalities.

```csharp
public static NationalitiesElement FromIncluded(IEnumerable<string> included)
```

#### Parameters

`included` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of nationalities to include.

#### Returns

[NationalitiesElement](./connectors.hotel.metadata.domain.common.nationalitieselement)<br />
A new instance of [NationalitiesElement](./connectors.hotel.metadata.domain.common.nationalitieselement) with the specified included nationalities.
