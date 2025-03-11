# DestinationRestrictionElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a destination restriction element in the hotel metadata domain.

```csharp
public class DestinationRestrictionElement : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [DestinationRestrictionElement](./connectors.hotel.metadata.domain.shopping.search.destinationrestrictionelement)<br />
Implements IValidatableObject

## Properties

### **Max**

Gets or sets the maximum number of destinations.

```csharp
public uint Max { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **Recommended**

Gets or sets the recommended number of destinations.

```csharp
public uint Recommended { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **SameCountry**

Gets or sets a value indicating whether the destinations must be in the same country.

```csharp
public bool SameCountry { get; set; }
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

### **DestinationRestrictionElement()**

```csharp
public DestinationRestrictionElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the destination restriction element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
