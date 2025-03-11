# RemarkType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents the type of remark that can be associated with a hotel booking. 
 Each type categorizes the context or scope of the remark's relevance.

```csharp
public enum RemarkType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [RemarkType](./connectors.pull.hotel.domain.contracts.common.remarktype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Hotel | 0 | The remark pertains to the hotel as a whole. Examples may include general policies, check-in instructions, or hotel-wide features. |
| Room | 1 | The remark is specific to a room. Examples may include room-specific features, restrictions, or conditions (e.g., "No smoking room"). |
| Service | 2 | The remark is related to a service offered by the hotel or accommodation. Examples may include details about additional services such as "Spa reservation required" or "Shuttle service available." |
| General | 3 | The remark is of a general nature and does not specifically pertain to the hotel, room, or service. Examples may include general comments or supplier-provided notes. |
