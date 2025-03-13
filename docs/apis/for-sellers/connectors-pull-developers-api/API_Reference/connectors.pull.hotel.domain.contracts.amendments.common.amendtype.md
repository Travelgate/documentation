# AmendType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments.Common

Represents the type of amendment to be performed on a booking.

```csharp
public enum AmendType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [AmendType](./connectors.pull.hotel.domain.contracts.amendments.common.amendtype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Add | 0 | Indicates that a new element should be added to the booking. |
| Remove | 1 | Indicates that an existing element should be removed from the booking. |
| Keep | 2 | Indicates that an existing element should be kept unchanged in the booking. |
