# SearchRequiredWhen

Namespace: Connectors.Pull.Hotel.Domain.Options

Specifies when a search is required in the hotel quote process.

```csharp
public enum SearchRequiredWhen
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [SearchRequiredWhen](./connectors.pull.hotel.domain.options.searchrequiredwhen)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Never | 0 | A search is never required. |
| Always | 1 | A search is always required. |
| OnExpiration | 2 | A search is required when the previous search results have expired. |
| OnErrorExpiration | 3 | A search is required when there's an expiration specific error. |
