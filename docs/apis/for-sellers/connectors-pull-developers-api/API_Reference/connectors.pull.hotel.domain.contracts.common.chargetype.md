# ChargeType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents the type of charge for a hotel service or amenity.

```csharp
public enum ChargeType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [ChargeType](./connectors.pull.hotel.domain.contracts.common.chargetype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

This enumeration is used in the context of surcharges and supplements to indicate 
 whether a particular charge is included in the room rate or must be paid separately 
 (e.g., at the hotel).

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Included | 0 | Indicates that the charge is already included in the room rate. |
| Excluded | 1 | Indicates that the charge is not included in the room rate and must be paid as an extra. |
