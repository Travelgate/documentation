# LegacyErrorCodes

Namespace: Connectors.Core.Domain.AdviseMessages

Represents the legacy error codes.

```csharp
public enum LegacyErrorCodes
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [LegacyErrorCodes](./connectors.core.domain.advisemessages.legacyerrorcodes)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| OK | 0 | Represents a successful operation. |
| SYSTEM_ERROR | 101 | Represents a system error. |
| PROVIDER_ERROR | 102 | Represents a provider error. |
| TOO_MANY_REQUESTS | 103 | Represents too many requests. |
| TIMEOUT | 104 | Represents a timeout error. |
| COMMUNICATION_ERROR | 105 | Represents a communication error. |
| DISPONIBILIDAD_ZERO_HOTELS_AVAILABLE | 204 | Represents zero hotels available. |
| DISPONIBILIDAD_RQ_DISTRIBUCION_NOT_SUPPORTED | 205 | Represents unsupported distribution in availability request. |
| DISPONIBILIDAD_RQ_DATES_NOT_SUPPORTED | 206 | Represents unsupported dates in availability request. |
| DISPONIBILIDAD_RQ_NOT_SUPPORTED | 207 | Represents unsupported availability request. |
| OPTION_NOT_FOUND_VALUATION | 301 | Represents option not found in valuation. |
| HOTEL_NOT_FOUND_DESCRIPTIVE | 302 | Represents hotel not found in descriptive. |
| BOOKING_NOT_CONFIRMED | 303 | Represents a booking not confirmed. |
