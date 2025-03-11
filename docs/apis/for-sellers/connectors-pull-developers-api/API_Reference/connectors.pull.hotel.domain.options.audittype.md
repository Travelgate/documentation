# AuditType

Namespace: Connectors.Pull.Hotel.Domain.Options

Specifies the type of audit to be performed.

```csharp
public enum AuditType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [AuditType](./connectors.pull.hotel.domain.options.audittype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| ServiceBus | 0 | Indicates that the audit should use a Service Bus for logging. |
| LocalFile | 1 | Indicates that the audit should log to a local file. |
