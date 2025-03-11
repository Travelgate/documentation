# AmendPaxesElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.AmendPaxes

Represents an element for amending paxes in the hotel metadata domain.

```csharp
public class AmendPaxesElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [AmendPaxesElement](./connectors.hotel.metadata.domain.shopping.amendpaxes.amendpaxeselement)<br />
Implements IValidatableObject

## Properties

### **ImplementsAmendPaxes**

Gets or sets the boolean element indicating whether the paxes amendment is implemented.

```csharp
public BoolElement ImplementsAmendPaxes { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowsAmendPersonalTitle**

Gets or sets the boolean element indicating whether amending personal title is allowed.

```csharp
public BoolElement AllowsAmendPersonalTitle { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowsAmendName**

Gets or sets the boolean element indicating whether amending name is allowed.

```csharp
public BoolElement AllowsAmendName { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowsAmendSurname**

Gets or sets the boolean element indicating whether amending surname is allowed.

```csharp
public BoolElement AllowsAmendSurname { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowsAmendAge**

Gets or sets the boolean element indicating whether amending age is allowed.

```csharp
public BoolElement AllowsAmendAge { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowsAddPaxes**

Gets or sets the boolean element indicating whether adding paxes is allowed.

```csharp
public BoolElement AllowsAddPaxes { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **AllowsDeletePaxes**

Gets or sets the boolean element indicating whether deleting paxes is allowed.

```csharp
public BoolElement AllowsDeletePaxes { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **Restrictions**

Gets or sets the amend restrictions element.

```csharp
public AmendRestrictionsElement Restrictions { get; set; }
```

#### Property Value

[AmendRestrictionsElement](./connectors.hotel.metadata.domain.shopping.amend.amendrestrictionselement)<br />

### **Optional**

Gets or sets the amend optional element.

```csharp
public AmendOptionalElement Optional { get; set; }
```

#### Property Value

[AmendOptionalElement](./connectors.hotel.metadata.domain.shopping.amend.amendoptionalelement)<br />

## Constructors

### **AmendPaxesElement()**

```csharp
public AmendPaxesElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the amend paxes element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
