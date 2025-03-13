# AdviseMessageCode

Namespace: Connectors.Core.Domain.AdviseMessages

Represents the codes used in advice messages to categorize errors, warnings, or informational messages.

```csharp
public enum AdviseMessageCode
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [AdviseMessageCode](./connectors.core.domain.advisemessages.advisemessagecode)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| SupplierError | 11102 | Represents a supplier error. |
| SupplierBadRequest | 11207 | Represents a bad request sent to the supplier. |
| SupplierNoResultsFound | 11204 | Represents no results found from the supplier.  Typically returned in a search when no options are available for the given criteria (e.g., stay dates, hotel codes). |
| BadRequest | 12207 | Represents a bad request to the connector. For example, sending a search request without hotel codes. |
| SupplierSessionExpired | 11205 | Represents a session expired with the supplier. |
| ItemNotAvailable | 11301 | Represents an item that is no longer available. Typically returned when the option is no longer available during a quote. |
| PriceChanged | 11304 | Represents a price change for an item. Indicates that the price has changed between quote and book. |
| ItemNotFoundInContent | 11302 | Represents an item not found in the content. For example, requesting a hotel that doesn't exist. |
| SupplierBookingNotConfirmed | 11303 | Represents a booking not confirmed by the supplier. |
| InternalError | 22101 | Represents an internal error in the connectors. |
| SupplierResponseMaxSizeExceeded | 22106 | Represents a supplier response exceeding the maximum size. Indicates the response is too large to process. |
| MaxOptionsExceeded | 22107 | Represents the maximum options exceeded. Indicates more than 20,000 options were returned. |
| SupplierTooManyRequests | 31103 | Represents too many requests sent to the supplier. Indicates the supplier returns an error due to excessive client requests. |
| SupplierTimeout | 31104 | Represents a timeout with the supplier. Indicates the supplier didn't respond within the specified timeout. |
| SupplierConnectionError | 31105 | Represents a connection error with the supplier. Typically occurs when the supplier doesn't return a 200 status code. |
| ExtraOperationConnectionError | 22105 | Represents a connection error with an extra operation. Indicates an internal connector error. |
| NotImplemented | 12501 | Represents a not implemented error. Indicates the operation requested by the client is not implemented. |
| Unauthorized | 12401 | Represents an unauthorized access attempt. |
| SupplierResponseNotSerializable | 11206 | Represents a supplier response that is not serializable according to their documentation. |
| BookingNotFound | 11305 | Represents a booking not found. |
| InternalWarning | 12290 | Represents an internal warning. |
| SupplierWarning | 11291 | Represents a supplier warning. |
