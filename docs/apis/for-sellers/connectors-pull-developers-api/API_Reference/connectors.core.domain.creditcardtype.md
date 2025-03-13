# CreditCardType

Namespace: Connectors.Core.Domain

Represents the types of credit cards accepted by the Connectors framework.

```csharp
public enum CreditCardType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [CreditCardType](./connectors.core.domain.creditcardtype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

This enumeration lists the standard and regional credit cards that can be used within the Connectors system. 
 Each value corresponds to a specific credit card brand or type.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| VI | 0 | Visa |
| AX | 1 | American Express |
| BC | 2 | BC Card |
| CA | 3 | MasterCard |
| CB | 4 | Carte Blanche |
| CU | 5 | China Union Pay |
| DS | 6 | Discover |
| DC | 7 | Diners Club |
| T | 8 | Carta Si (Italy) |
| R | 9 | Carte Bleue (France) |
| N | 10 | Dankort (Denmark) |
| L | 11 | Delta |
| E | 12 | Electron |
| JC | 13 | Japan Credit Bureau (JCB) |
| TO | 14 | Maestro |
| S | 15 | Switch (United Kingdom) |
| EC | 16 | Electronic Cash |
| EU | 17 | EuroCard |
| TP | 18 | Universal Air Travel Card (UATP) |
| OP | 19 | Optima |
| ER | 20 | Air Canada EnRoute |
| XS | 21 | Access |
| O | 22 | Others (unspecified or unsupported card types) |
