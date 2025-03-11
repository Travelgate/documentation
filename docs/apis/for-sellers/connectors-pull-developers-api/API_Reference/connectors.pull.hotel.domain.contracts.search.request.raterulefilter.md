# RateRuleFilter

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Request

Filter for rate rules, which represent sales restrictions such as "Canary resident," "senior," etc.
 This filter allows specifying which rate rules to include or exclude in search results.

```csharp
public class RateRuleFilter
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [RateRuleFilter](./connectors.pull.hotel.domain.contracts.search.request.raterulefilter)<br />
Attributes DataContractAttribute

## Properties

### **Excludes**

The collection of rate rules that should be excluded from the search results.

```csharp
public IEnumerable<RateRule> Excludes { get; set; }
```

#### Property Value

[IEnumerable\<RateRule\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

The rate rules specified here take precedence over those in [RateRuleFilter.Includes](./connectors.pull.hotel.domain.contracts.search.request.raterulefilter#includes).
 For instance, if a rule is present in both [RateRuleFilter.Includes](./connectors.pull.hotel.domain.contracts.search.request.raterulefilter#includes) and [RateRuleFilter.Excludes](./connectors.pull.hotel.domain.contracts.search.request.raterulefilter#excludes), it will be excluded.
 Each entry must correspond to a valid .

### **Includes**

The collection of rate rules that should be included in the search results.

```csharp
public IEnumerable<RateRule> Includes { get; set; }
```

#### Property Value

[IEnumerable\<RateRule\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

If this property is null, all options will be included, depending on the value of [RateRuleFilter.IncludeEmptyRateRulesOptions](./connectors.pull.hotel.domain.contracts.search.request.raterulefilter#includeemptyraterulesoptions).
 Each entry must correspond to a valid .

### **IncludeEmptyRateRulesOptions**

Specifies whether options without rate rules should be included in the results 
 when [RateRuleFilter.Includes](./connectors.pull.hotel.domain.contracts.search.request.raterulefilter#includes) is null.

```csharp
public bool IncludeEmptyRateRulesOptions { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

**Remarks:**

The default value is `true`. If [RateRuleFilter.Includes](./connectors.pull.hotel.domain.contracts.search.request.raterulefilter#includes) is null, options without any rate rules 
 will still be included if this property is set to `true`. This enables flexibility in handling 
 searches where rate rules may not be mandatory.

## Constructors

### **RateRuleFilter()**

```csharp
public RateRuleFilter()
```
