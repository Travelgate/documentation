# LanguagesElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents a collection of languages to include or exclude in the hotel metadata domain.

```csharp
public class LanguagesElement : Connectors.Hotel.Metadata.Domain.BaseTypes.IncludeExcludeElement`1[[System.String, System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [IncludeExcludeElement\<String\>](./connectors.hotel.metadata.domain.basetypes.includeexcludeelement-1) → [LanguagesElement](./connectors.hotel.metadata.domain.common.languageselement)<br />
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

### **LanguagesElement()**

Initializes a new instance of the [LanguagesElement](./connectors.hotel.metadata.domain.common.languageselement) class.

```csharp
public LanguagesElement()
```

### **LanguagesElement(Boolean, IEnumerable\<String\>, IEnumerable\<String\>)**

Initializes a new instance of the [LanguagesElement](./connectors.hotel.metadata.domain.common.languageselement) class with the specified values.

```csharp
public LanguagesElement(bool all, IEnumerable<string> include, IEnumerable<string> exclude)
```

#### Parameters

`all` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
A value indicating whether all languages are included or excluded.

`include` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of languages to include.

`exclude` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of languages to exclude.

## Methods

### **FromExcluded(IEnumerable\<String\>)**

Creates a new instance of [LanguagesElement](./connectors.hotel.metadata.domain.common.languageselement) with the specified excluded languages.

```csharp
public static LanguagesElement FromExcluded(IEnumerable<string> exclude)
```

#### Parameters

`exclude` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of languages to exclude.

#### Returns

[LanguagesElement](./connectors.hotel.metadata.domain.common.languageselement)<br />
A new instance of [LanguagesElement](./connectors.hotel.metadata.domain.common.languageselement) with the specified excluded languages.

### **FromIncluded(IEnumerable\<String\>)**

Creates a new instance of [LanguagesElement](./connectors.hotel.metadata.domain.common.languageselement) with the specified included languages.

```csharp
public static LanguagesElement FromIncluded(IEnumerable<string> included)
```

#### Parameters

`included` [IEnumerable\<String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of languages to include.

#### Returns

[LanguagesElement](./connectors.hotel.metadata.domain.common.languageselement)<br />
A new instance of [LanguagesElement](./connectors.hotel.metadata.domain.common.languageselement) with the specified included languages.
