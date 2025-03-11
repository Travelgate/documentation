# PAResStatus

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents the status of the Payer Authentication Response (PARes) in 3-D Secure authentication.

```csharp
public enum PAResStatus
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [PAResStatus](./connectors.pull.hotel.domain.contracts.book.request.paresstatus)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Y_PRS | 0 | Authentication was successful. |
| N_PRS | 1 | Authentication failed. |
| U_PRS | 2 | Authentication could not be performed; technical or other problem. |
| A_PRS | 3 | Attempts processing performed; not authenticated. |
| B_PRS | 4 | Authentication bypassed by merchant/3DS Requestor. |
| R_PRS | 5 | Authentication rejected; issuer is rejecting authentication/account verification. |
