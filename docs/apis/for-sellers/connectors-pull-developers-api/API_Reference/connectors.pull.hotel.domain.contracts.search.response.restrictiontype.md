# RestrictionType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Specifies the types of restrictions that can be applied to hotel accommodations.

```csharp
public enum RestrictionType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [RestrictionType](./connectors.pull.hotel.domain.contracts.search.response.restrictiontype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)<br />
Attributes DataContractAttribute

**Remarks:**

These restriction types are used to categorize eligibility conditions or limitations for rate rules.
 For example, restrictions may apply to specific companies, geographical markets, or custom-defined conditions.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Company | 1 | Restriction based on company affiliation. |
| Market | 2 | Restriction based on geographical market. |
| Others | 3 | Other types of restrictions not covered by predefined categories. |
