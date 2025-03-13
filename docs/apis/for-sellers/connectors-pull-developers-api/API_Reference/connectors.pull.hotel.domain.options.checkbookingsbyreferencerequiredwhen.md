# CheckBookingsByReferenceRequiredWhen

Namespace: Connectors.Pull.Hotel.Domain.Options

Specifies when to check bookings by reference during a cancellation operation.

```csharp
public enum CheckBookingsByReferenceRequiredWhen
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [CheckBookingsByReferenceRequiredWhen](./connectors.pull.hotel.domain.options.checkbookingsbyreferencerequiredwhen)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

This enumeration defines the conditions under which booking checks by reference should be performed,
 such as never or always.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Never | 0 | Do not perform booking checks by reference. |
| Always | 1 | Always perform booking checks by reference. |
