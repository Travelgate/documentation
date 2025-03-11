# EnrolledStatus

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents the enrolled status for a 3-D Secure authentication.

```csharp
public enum EnrolledStatus
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [EnrolledStatus](./connectors.pull.hotel.domain.contracts.book.request.enrolledstatus)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Y_ES | 0 | Indicates that the cardholder is enrolled in 3-D Secure authentication. |
| N_ES | 1 | Indicates that the cardholder is not enrolled in 3-D Secure authentication. |
| U_ES | 2 | Indicates that the enrollment status is unknown or unable to be determined. |
