# TimeZoneElement

Namespace: Connectors.Hotel.Metadata.Domain.Common

Represents a time zone element in the hotel metadata domain.

```csharp
public class TimeZoneElement : Connectors.Hotel.Metadata.Domain.BaseTypes.ElementBase, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ElementBase](./connectors.hotel.metadata.domain.basetypes.elementbase) → [TimeZoneElement](./connectors.hotel.metadata.domain.common.timezoneelement)<br />
Implements IValidatableObject

## Properties

### **TimeZone**

Gets or sets the time zone.

```csharp
public Nullable<TimeZoneEnum> TimeZone { get; set; }
```

#### Property Value

[Nullable\<TimeZoneEnum\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

### **ReviewDate**

Gets or sets the review date.

```csharp
public DateTime ReviewDate { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **TimeZoneElement()**

```csharp
public TimeZoneElement()
```
