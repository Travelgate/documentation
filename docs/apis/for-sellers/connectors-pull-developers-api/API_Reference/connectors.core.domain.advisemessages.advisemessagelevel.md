# AdviseMessageLevel

Namespace: Connectors.Core.Domain.AdviseMessages

Represents the severity level of an advise message.

```csharp
public enum AdviseMessageLevel
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [AdviseMessageLevel](./connectors.core.domain.advisemessages.advisemessagelevel)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

This enumeration categorizes messages based on their severity, allowing consumers
 to differentiate between warnings, errors, and informational messages.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Warning | 0 | Represents a warning level advise message. |
| Error | 1 | Represents an error level advise message. |
| Info | 2 | Represents an information level advise message. |
