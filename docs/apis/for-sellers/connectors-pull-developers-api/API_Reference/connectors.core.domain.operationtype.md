# OperationType

Namespace: Connectors.Core.Domain

Represents the type of operation that can be performed within the Connectors framework.

```csharp
public enum OperationType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [OperationType](./connectors.core.domain.operationtype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

The [OperationType](./connectors.core.domain.operationtype) enum categorizes different types of operations, 
 such as searching for availability, booking reservations, managing bookings, retrieving content, 
 or handling operations specific to push integrations. Each type reflects a key functional area of the system.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| None | -1 | Represents no operation. |
| Search | 0 | Represents a search operation, typically for availability or rates. |
| Book | 1 | Represents a booking operation, including both quote and book actions. |
| Management | 2 | Represents a management operation, such as checking bookings. |
| Content | 3 | Represents a content operation, such as retrieving hotel information or hotel lists. |
| Load | 4 | Represents a load operation, used in push-based workflows for data loading. |
| Retrieve | 5 | Represents a retrieve operation, used to fetch information loaded during push-based workflows. |
