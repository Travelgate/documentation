# DestinationsElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping.Search

Represents a destinations element in the hotel metadata domain.

```csharp
public class DestinationsElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [DestinationsElement](./connectors.hotel.metadata.domain.shopping.search.destinationselement)<br />
Implements IValidatableObject

## Properties

### **Locations**

Gets or sets the locations for destination restriction.

```csharp
public DestinationRestrictionElement Locations { get; set; }
```

#### Property Value

[DestinationRestrictionElement](./connectors.hotel.metadata.domain.shopping.search.destinationrestrictionelement)<br />

### **Hotels**

Gets or sets the hotels for hotel restriction.

```csharp
public HotelRestrictionElement Hotels { get; set; }
```

#### Property Value

[HotelRestrictionElement](./connectors.hotel.metadata.domain.shopping.search.hotelrestrictionelement)<br />

## Constructors

### **DestinationsElement()**

```csharp
public DestinationsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the destinations element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
