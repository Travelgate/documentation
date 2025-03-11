# QuoteRequiredWhen

Namespace: Connectors.Pull.Hotel.Domain.Options

Specifies when a quote is required in the hotel booking process.

```csharp
public enum QuoteRequiredWhen
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [QuoteRequiredWhen](./connectors.pull.hotel.domain.options.quoterequiredwhen)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Never | 0 | A quote is never required. |
| Always | 1 | A quote is always required. |
| OnExpiration | 2 | A quote is required when the previous quote has expired. |
| OnErrorExpiration | 3 | A quote is required when there's an error and the previous quote has expired. |
