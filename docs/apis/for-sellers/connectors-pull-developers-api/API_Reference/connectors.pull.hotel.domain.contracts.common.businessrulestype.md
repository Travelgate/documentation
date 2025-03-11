# BusinessRulesType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Specifies the business rules the client wants to apply during availability searches, 
 provided the supplier supports the chosen rule. 
 Refer to metadata to confirm if the supplier has implemented the selected rule.

```csharp
public enum BusinessRulesType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [BusinessRulesType](./connectors.pull.hotel.domain.contracts.common.businessrulestype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| CheaperAmount | 0 | A rule that prioritizes returning the cheapest options available for each meal plan,  ensuring the number of options does not exceed the specified `optionsQuota`. |
| RoomType | 1 | A rule that filters options based on consistent room type groupings for a hotel,  ensuring uniform classifications across the returned options (e.g., "Standard-Standard-Standard"  or "Junior-Junior-Junior"). |
