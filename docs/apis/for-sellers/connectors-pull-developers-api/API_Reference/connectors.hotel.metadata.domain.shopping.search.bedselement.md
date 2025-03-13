# BedsElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a beds element in the hotel metadata domain.

```csharp
public class BedsElement : Connectors.Hotel.Metadata.Domain.BaseTypes.OptionalElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [OptionalElement](./connectors.hotel.metadata.domain.basetypes.optionalelement) → [BedsElement](./connectors.hotel.metadata.domain.shopping.search.bedselement)<br />
Implements IValidatableObject

## Properties

### **InformNumberOfUnits**

Gets or sets a value indicating whether to inform the number of units.

```csharp
public BoolElement InformNumberOfUnits { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **InformSharedBed**

Gets or sets a value indicating whether to inform the shared bed.

```csharp
public BoolElement InformSharedBed { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **InformBedType**

Gets or sets a value indicating whether to inform the bed type.

```csharp
public BoolElement InformBedType { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **InformNumberOfBeds**

Gets or sets a value indicating whether to inform the number of beds.

```csharp
public BoolElement InformNumberOfBeds { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

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

### **BedsElement()**

```csharp
public BedsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the beds element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
