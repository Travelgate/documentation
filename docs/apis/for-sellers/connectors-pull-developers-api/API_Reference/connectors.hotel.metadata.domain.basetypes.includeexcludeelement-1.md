# IncludeExcludeElement\<TValue\>

Namespace: Connectors.Hotel.Metadata.Domain.BaseTypes

Represents an abstract base class for elements that include or exclude values in the hotel metadata domain.

```csharp
public abstract class IncludeExcludeElement<TValue> : ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

#### Type Parameters

`TValue`<br />
The type of the values to include or exclude.

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [IncludeExcludeElement\<TValue\>](./connectors.hotel.metadata.domain.basetypes.includeexcludeelement-1)<br />
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
public IEnumerable<TValue> Includes { get; set; }
```

#### Property Value

IEnumerable\<TValue\><br />

### **Excludes**

Gets or sets the collection of values to exclude.

```csharp
public IEnumerable<TValue> Excludes { get; set; }
```

#### Property Value

IEnumerable\<TValue\><br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **IncludeExcludeElement()**

Initializes a new instance of the [IncludeExcludeElement\<TValue\>](./connectors.hotel.metadata.domain.basetypes.includeexcludeelement-1) class.

```csharp
protected IncludeExcludeElement()
```

### **IncludeExcludeElement(Boolean, IEnumerable\<TValue\>, IEnumerable\<TValue\>)**

Initializes a new instance of the [IncludeExcludeElement\<TValue\>](./connectors.hotel.metadata.domain.basetypes.includeexcludeelement-1) class with the specified values.

```csharp
protected IncludeExcludeElement(bool all, IEnumerable<TValue> include, IEnumerable<TValue> exclude)
```

#### Parameters

`all` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
A value indicating whether all values are included or excluded.

`include` IEnumerable\<TValue\><br />
The collection of values to include.

`exclude` IEnumerable\<TValue\><br />
The collection of values to exclude.

## Methods

### **Validate(ValidationContext)**

Validates the element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
