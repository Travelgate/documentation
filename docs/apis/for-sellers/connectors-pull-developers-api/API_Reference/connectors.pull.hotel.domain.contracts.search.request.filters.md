# Filters

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Request

Represents a collection of filters that can be applied to hotel search requests.

```csharp
public class Filters
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Filters](./connectors.pull.hotel.domain.contracts.search.request.filters)<br />
Attributes DataContractAttribute

## Properties

### **Status**

Filter for hotel statuses to include or exclude specific booking statuses in the search results.

```csharp
public StatusFilter Status { get; set; }
```

#### Property Value

[StatusFilter](./connectors.pull.hotel.domain.contracts.search.request.statusfilter)<br />

**Remarks:**

This filter allows fine-grained control over the statuses returned in the search results. 
 If null, all statuses will be considered by default.
 See [StatusFilter](./connectors.pull.hotel.domain.contracts.search.request.statusfilter) for details on how to configure includes and excludes.

### **RateRuleFilter**

Filter for rate rules to include or exclude specific rate restrictions in the search results.

```csharp
public RateRuleFilter RateRuleFilter { get; set; }
```

#### Property Value

[RateRuleFilter](./connectors.pull.hotel.domain.contracts.search.request.raterulefilter)<br />

**Remarks:**

This filter is useful for tailoring search results based on sales restrictions, 
 such as "Canary resident" or "senior discounts." 
 If null, all rate rules will be considered by default. 
 See [Filters.RateRuleFilter](./connectors.pull.hotel.domain.contracts.search.request.filters#raterulefilter) for detailed configuration options.

## Constructors

### **Filters()**

```csharp
public Filters()
```
