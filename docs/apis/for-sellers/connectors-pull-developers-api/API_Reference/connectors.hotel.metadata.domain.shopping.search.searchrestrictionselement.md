# SearchRestrictionsElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a search restrictions element in the hotel metadata domain.

```csharp
public class SearchRestrictionsElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [SearchRestrictionsElement](./connectors.hotel.metadata.domain.shopping.search.searchrestrictionselement)<br />
Implements IValidatableObject

## Properties

### **Destinations**

Gets or sets the destinations element.

```csharp
public DestinationsElement Destinations { get; set; }
```

#### Property Value

[DestinationsElement](./connectors.hotel.metadata.domain.shopping.search.destinationselement)<br />

### **Stay**

Gets or sets the stay element.

```csharp
public StayElement Stay { get; set; }
```

#### Property Value

[StayElement](./connectors.hotel.metadata.domain.shopping.search.stayelement)<br />

### **RoomRestrictions**

Gets or sets the room restrictions element.

```csharp
public RoomRestrictionsElement RoomRestrictions { get; set; }
```

#### Property Value

[RoomRestrictionsElement](./connectors.hotel.metadata.domain.shopping.search.roomrestrictionselement)<br />

## Constructors

### **SearchRestrictionsElement()**

```csharp
public SearchRestrictionsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the search restrictions element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
