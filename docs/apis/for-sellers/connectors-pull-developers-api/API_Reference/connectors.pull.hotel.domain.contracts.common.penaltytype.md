# PenaltyType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Defines the types of penalties that may apply to a cancellation policy for a room or option in a hotel booking context.

```csharp
public enum PenaltyType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [PenaltyType](./connectors.pull.hotel.domain.contracts.common.penaltytype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Amount | 0 | The penalty is a fixed monetary amount, typically in the booking's currency. |
| Nights | 1 | The penalty is calculated based on a specific number of nights' costs. |
| Percentage | 2 | The penalty is a percentage of the total booking cost. |
