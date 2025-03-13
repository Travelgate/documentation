# SearchElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a search element in the hotel metadata domain.

```csharp
public class SearchElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [SearchElement](./connectors.hotel.metadata.domain.shopping.search.searchelement)<br />
Implements IValidatableObject

## Properties

### **Restrictions**

Gets or sets the search restrictions element.

```csharp
public SearchRestrictionsElement Restrictions { get; set; }
```

#### Property Value

[SearchRestrictionsElement](./connectors.hotel.metadata.domain.shopping.search.searchrestrictionselement)<br />

### **Optional**

Gets or sets the search optional element.

```csharp
public SearchOptionalElement Optional { get; set; }
```

#### Property Value

[SearchOptionalElement](./connectors.hotel.metadata.domain.shopping.search.searchoptionalelement)<br />

### **Status**

Gets or sets the status element.

```csharp
public StatusElement Status { get; set; }
```

#### Property Value

[StatusElement](./connectors.hotel.metadata.domain.common.statuselement)<br />

### **Combine**

Gets or sets the combine element.

```csharp
public CombineElement Combine { get; set; }
```

#### Property Value

[CombineElement](./connectors.hotel.metadata.domain.shopping.search.combineelement)<br />

### **AllowsCurrency**

Gets or sets the allows currency element.

```csharp
public BoolElement AllowsCurrency { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

## Constructors

### **SearchElement()**

```csharp
public SearchElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the search element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
