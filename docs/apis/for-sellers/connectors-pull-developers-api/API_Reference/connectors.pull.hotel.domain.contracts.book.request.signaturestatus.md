# SignatureStatus

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents the status of the signature in a 3-D Secure authentication process.

```csharp
public enum SignatureStatus
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [SignatureStatus](./connectors.pull.hotel.domain.contracts.book.request.signaturestatus)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Y_SS | 0 | Indicates that the signature is valid or present. |
| N_SS | 1 | Indicates that the signature is invalid or not present. |
