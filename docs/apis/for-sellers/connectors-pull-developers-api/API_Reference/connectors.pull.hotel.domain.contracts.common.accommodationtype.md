# AccommodationType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Defines the types of accommodations that can be requested or managed in the system.

```csharp
public enum AccommodationType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [AccommodationType](./connectors.pull.hotel.domain.contracts.common.accommodationtype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

This enumeration categorizes accommodations into distinct types, such as hotels or rentals, 
 to ensure the appropriate handling of requests and data processing.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Hotel | 0 | Specifies that the accommodation is a hotel. |
| Rental | 1 | Specifies that the accommodation is a rental property. |
