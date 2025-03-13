# SearchOptions

Namespace: Connectors.Pull.Hotel.Domain.Options

Represents options for search-related operations in the hotel domain.

```csharp
public class SearchOptions : Connectors.Core.Application.Options.PlatformConnectionOptions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → PlatformConnectionOptions → [SearchOptions](./connectors.pull.hotel.domain.options.searchoptions)

**Remarks:**

The [SearchOptions](./connectors.pull.hotel.domain.options.searchoptions) class provides configuration options to customize search behaviors, 
 including settings for expiration and limiting the number of returned options.

## Properties

### **Expiration**

Specifies the expiration time for a search, if applicable.

```csharp
public TimeSpan Expiration { get; set; }
```

#### Property Value

[TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/system.timespan)<br />

**Remarks:**

If a search result has an associated expiration, this value indicates the duration 
 after which the search is no longer valid.

### **MaxOptionsNumber**

The maximum number of options that can be returned in a search.

```csharp
public long MaxOptionsNumber { get; set; }
```

#### Property Value

[Int64](https://docs.microsoft.com/en-us/dotnet/api/system.int64)<br />

**Remarks:**

By default, this value is set to 20,000. Adjust this property to limit the number 
 of results for performance optimization or specific business requirements.

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

### **SearchOptions()**

#### Caution

Constructors of types with required members are not supported in this version of your compiler.

---

```csharp
public SearchOptions()
```
