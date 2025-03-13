# DateRangeType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents the type of date range used in hotel-related operations.

```csharp
public enum DateRangeType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [DateRangeType](./connectors.pull.hotel.domain.contracts.common.daterangetype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

This enumeration defines the context of date ranges that can be used in requests, 
 such as in the `CheckBookingsByDate` operation. The type specifies whether the 
 date range refers to when a booking was made or when a guest is expected to arrive.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Arrival | 0 | The date range refers to the arrival date of the guest(s). |
| Booking | 1 | The date range refers to the booking date when the reservation was made. |
