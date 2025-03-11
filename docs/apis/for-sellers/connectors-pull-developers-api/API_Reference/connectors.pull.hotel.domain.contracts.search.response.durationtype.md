# DurationType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents the type of duration for a hotel supplement, stay, or availability period.

```csharp
public enum DurationType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [DurationType](./connectors.pull.hotel.domain.contracts.search.response.durationtype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

The [DurationType](./connectors.pull.hotel.domain.contracts.search.response.durationtype) is used to define whether a supplement, stay, or period 
 is open-ended or has a specific date range. It provides a clear indication of the 
 temporal boundaries associated with an entity.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Open | 0 | Indicates an open-ended duration with no specified end date. |
| Range | 1 | Indicates a duration with a specific start and end date range. |
