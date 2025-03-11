# AmenityType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Specifies the type of amenity associated with an accommodation.

```csharp
public enum AmenityType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [AmenityType](./connectors.pull.hotel.domain.contracts.common.amenitytype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Hotel | 0 | Represents amenities specific to the hotel as a whole. |
| Room | 1 | Represents amenities specific to individual rooms. |
| Service | 2 | Represents amenities related to services provided by the accommodation. |
| General | 3 | Represents general amenities that don't fit into other categories. |
