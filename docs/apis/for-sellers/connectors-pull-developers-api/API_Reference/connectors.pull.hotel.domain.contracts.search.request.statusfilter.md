# StatusFilter

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Request

Represents a filter for hotel statuses in search requests.
 This filter allows specifying the statuses to include or exclude in the search results.

```csharp
public class StatusFilter
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [StatusFilter](./connectors.pull.hotel.domain.contracts.search.request.statusfilter)<br />
Attributes DataContractAttribute

## Properties

### **Includes**

The statuses to include in the response.

```csharp
public IEnumerable<Status> Includes { get; set; }
```

#### Property Value

[IEnumerable\<Status\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

- - [Status.Unknown](./connectors.pull.hotel.domain.contracts.common.status#unknown): The status is unknown or not specified.
- - [Status.OK](./connectors.pull.hotel.domain.contracts.common.status#ok): Available for sale.
- - [Status.RQ](./connectors.pull.hotel.domain.contracts.common.status#rq): On request.

If set to null or empty, all statuses are included by default.

### **Excludes**

The statuses to exclude from the response.

```csharp
public IEnumerable<Status> Excludes { get; set; }
```

#### Property Value

[IEnumerable\<Status\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

- - [Status.Unknown](./connectors.pull.hotel.domain.contracts.common.status#unknown): The status is unknown or not specified.
- - [Status.OK](./connectors.pull.hotel.domain.contracts.common.status#ok): Available for sale.
- - [Status.RQ](./connectors.pull.hotel.domain.contracts.common.status#rq): On request.

If set to null or empty, no statuses are excluded.
 This property takes precedence over [StatusFilter.Includes](./connectors.pull.hotel.domain.contracts.search.request.statusfilter#includes); for example, if 
 [Status.OK](./connectors.pull.hotel.domain.contracts.common.status#ok) is in both [StatusFilter.Includes](./connectors.pull.hotel.domain.contracts.search.request.statusfilter#includes) and `Excludes`, it will be excluded.

## Constructors

### **StatusFilter()**

```csharp
public StatusFilter()
```
