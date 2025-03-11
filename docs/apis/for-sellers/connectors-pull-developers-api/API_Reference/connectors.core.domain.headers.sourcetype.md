# SourceType

Namespace: Connectors.Core.Domain.Headers

Defines the possible source types for a connector.

```csharp
public enum SourceType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [SourceType](./connectors.core.domain.headers.sourcetype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

This enumeration represents the different origins of requests handled by the connector. 
 It is typically received as a header in requests to the connector.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Standard | 0 | Represents a standard source type, typically used by external clients. |
| Cache | 1 | Represents a cache source type, used internally by the connector. |
| Scheduler | 2 | Represents a scheduler source type, used internally by the connector. |
