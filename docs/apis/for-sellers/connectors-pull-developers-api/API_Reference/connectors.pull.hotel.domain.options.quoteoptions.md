# QuoteOptions

Namespace: Connectors.Pull.Hotel.Domain.Options

Represents options for quote-related operations.

```csharp
public class QuoteOptions : Connectors.Core.Application.Options.PlatformConnectionOptions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → PlatformConnectionOptions → [QuoteOptions](./connectors.pull.hotel.domain.options.quoteoptions)<br />
Attributes [RequiredMemberAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.requiredmemberattribute)

## Properties

### **Expiration**

Specifies the expiration time for quotes.

```csharp
public TimeSpan Expiration { get; set; }
```

#### Property Value

[TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/system.timespan)<br />

**Remarks:**

This property defines the duration after which a quote is no longer valid.
 Useful for ensuring that quotes are refreshed or invalidated in a timely manner.

### **SearchRequired**

Indicates whether a second availability check is required to refresh the quote option.

```csharp
public SearchRequired SearchRequired { get; set; }
```

#### Property Value

[SearchRequired](./connectors.pull.hotel.domain.options.searchrequired)<br />

**Remarks:**

The [QuoteOptions.SearchRequired](./connectors.pull.hotel.domain.options.quoteoptions#searchrequired) enum specifies the need for additional availability checks,
 ensuring that the quote reflects the most up-to-date pricing and availability.

### **ConnectorsHttpClient**

```csharp
public ConnectorsHttpClient ConnectorsHttpClient { get; set; }
```

#### Property Value

ConnectorsHttpClient<br />

### **OperationsMaxParallelism**

```csharp
public Nullable<int> OperationsMaxParallelism { get; set; }
```

#### Property Value

[Nullable\<Int32\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

### **Polling**

```csharp
public Polling Polling { get; set; }
```

#### Property Value

Polling<br />

### **OverrideFillStatsRequest**

```csharp
public OverrideFillStatsRequest OverrideFillStatsRequest { get; set; }
```

#### Property Value

OverrideFillStatsRequest<br />

## Constructors

### **QuoteOptions()**

#### Caution

Constructors of types with required members are not supported in this version of your compiler.

---

```csharp
public QuoteOptions()
```
