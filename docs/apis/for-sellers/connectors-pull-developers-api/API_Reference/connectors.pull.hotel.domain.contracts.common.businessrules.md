# BusinessRules

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents business rules applicable to hotel search operations.
 These rules guide how search results are filtered and limited based on client preferences 
 and supplier capabilities.

```csharp
public class BusinessRules
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [BusinessRules](./connectors.pull.hotel.domain.contracts.common.businessrules)<br />
Attributes DataContractAttribute

## Properties

### **OptionsQuota**

The maximum number of options that can be returned for a search operation.

```csharp
public int OptionsQuota { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

**Remarks:**

- - The default value is defined by [Constants.MaxOptionsQuotaAllowed](./connectors.pull.hotel.domain.constants#maxoptionsquotaallowed), which defaults to 300.
- - If the client specifies a lower `OptionsQuota`, the connector ensures that the number of options 
 returned per meal plan does not exceed this value.
- - If no value is provided, the system applies the default limit.

### **BusinessRuleType**

The business rule type that determines how search results are prioritized or filtered.

```csharp
public BusinessRulesType BusinessRuleType { get; set; }
```

#### Property Value

[BusinessRulesType](./connectors.pull.hotel.domain.contracts.common.businessrulestype)<br />

**Remarks:**

- - [BusinessRulesType.CheaperAmount](./connectors.pull.hotel.domain.contracts.common.businessrulestype#cheaperamount): Focuses on returning the cheapest options.
- - [BusinessRulesType.RoomType](./connectors.pull.hotel.domain.contracts.common.businessrulestype#roomtype): Groups options by consistent room types.

## Constructors

### **BusinessRules()**

```csharp
public BusinessRules()
```
