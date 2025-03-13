# ParameterType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Defines the categorization of a parameter based on its intended use.

```csharp
public enum ParameterType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [ParameterType](./connectors.pull.hotel.domain.contracts.common.parametertype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Internal | 0 | Reserved for internal framework operations.  The framework automatically adds internal parameters for internal checks or processing. Integrators should not use this type in their integrations. |
| Supplier | 1 | Used by integrators to pass information relevant to suppliers.  Parameters of this type are intended for external use and supplier-specific operations. Integrators must always use this type when adding parameters in their implementations. |
