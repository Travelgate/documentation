# SearchRequired

Namespace: Connectors.Pull.Hotel.Domain.Options

Represents the requirements for performing a search in the hotel domain, particularly from a quote.

```csharp
public class SearchRequired
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SearchRequired](./connectors.pull.hotel.domain.options.searchrequired)

## Properties

### **When**

Specifies the condition that determines when a search is required.

```csharp
public SearchRequiredWhen When { get; set; }
```

#### Property Value

[SearchRequiredWhen](./connectors.pull.hotel.domain.options.searchrequiredwhen)<br />

**Remarks:**

The [SearchRequiredWhen](./connectors.pull.hotel.domain.options.searchrequiredwhen) value dictates if and when a search should be performed,
 based on specific conditions such as expiration or errors.

### **SearchUrl**

The URL endpoint used to perform a search operation.

```csharp
public string SearchUrl { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property allows specifying a custom API endpoint or service URL for initiating the search process.

### **CheaperOptionSameRooms**

Indicates whether to search for cheaper options with the same room types.

```csharp
public bool CheaperOptionSameRooms { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

**Remarks:**

If set to `true`, the search will include checks for cheaper alternatives that match
 the same room types as the original search. This is particularly relevant in cases where
 a second availability check is needed. Default value is `true`.

### **DelayTime**

The delay time in milliseconds before initiating a search operation.

```csharp
public int DelayTime { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

**Remarks:**

This property allows introducing a delay before the search process begins. This can be useful
 for rate-limiting or to provide a buffer for stabilizing conditions. Default value is 0 milliseconds.

## Constructors

### **SearchRequired()**

```csharp
public SearchRequired()
```
