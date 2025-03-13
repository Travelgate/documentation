# PersonalTitleType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents the personal title types for individuals in a hotel booking request.

```csharp
public enum PersonalTitleType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [PersonalTitleType](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| MR | 0 | Represents the title "Mr." for male individuals. |
| MRS | 1 | Represents the title "Mrs." for married female individuals. |
| MISS | 2 | Represents the title "Miss" for unmarried female individuals. |
| MS | 3 | Represents the title "Ms." for female individuals, regardless of marital status. |
| NOT_SPECIFIED | 4 | Represents cases where the personal title is not specified or known. |
