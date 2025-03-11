# Status

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents the availability status of a hotel or room option in search and quote operations.

```csharp
public enum Status
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [Status](./connectors.pull.hotel.domain.contracts.common.status)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Unknown | 0 | The status is unknown or has not been explicitly defined by the supplier. This is typically used as a fallback when no specific status is provided. |
| OK | 1 | Indicates that the option is available for immediate booking and does not require any additional confirmation from the supplier. |
| RQ | 2 | Indicates that the option is available but requires a confirmation request (on request) from the supplier before it can be booked. |
