# UnitTimeType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Specifies the unit of time used to measure durations in the context of hotel-related supplements, 
 such as forfaits, activities, or equipment rentals.

```csharp
public enum UnitTimeType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [UnitTimeType](./connectors.pull.hotel.domain.contracts.common.unittimetype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

This enumeration helps to define the validity or duration of a supplement, indicating whether it applies 
 per hour or per day. Common use cases include ski passes, activity durations, or equipment rental periods.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Hours | 0 | Indicates that the duration or application of the supplement is measured in hours. |
| Days | 1 | Indicates that the duration or application of the supplement is measured in days. |
