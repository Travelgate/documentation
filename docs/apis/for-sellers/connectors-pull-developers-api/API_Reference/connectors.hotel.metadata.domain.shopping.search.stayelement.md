# StayElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a stay element in the hotel metadata domain.

```csharp
public class StayElement : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [StayElement](./connectors.hotel.metadata.domain.shopping.search.stayelement)<br />
Implements IValidatableObject

## Properties

### **MaxStay**

Gets or sets the maximum stay duration.

```csharp
public uint MaxStay { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **MinimumStay**

Gets or sets the minimum stay duration.

```csharp
public uint MinimumStay { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **Release**

Gets or sets the release duration.

```csharp
public uint Release { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **StayElement()**

```csharp
public StayElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
