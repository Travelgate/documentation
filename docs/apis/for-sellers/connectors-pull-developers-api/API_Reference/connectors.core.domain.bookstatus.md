# BookStatus

Namespace: Connectors.Core.Domain

Represents the possible statuses of a booking operation.

```csharp
public enum BookStatus
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [BookStatus](./connectors.core.domain.bookstatus)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

The [BookStatus](./connectors.core.domain.bookstatus) enum defines the various states that a booking can be in during its lifecycle, 
 such as being confirmed, on request, or cancelled. It also includes statuses specific to bookings in two-phase operations.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Unknown | 0 | The booking status is unknown. |
| Ok | 2 | The booking has been successfully confirmed. |
| OnRequest | 3 | The booking is currently on request. |
| Cancelled | 4 | The booking has been cancelled. |
| PendingCommit | 5 | The booking is awaiting commit in a two-phase operation. |
