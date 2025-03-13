# BookOptions

Namespace: Connectors.Pull.Hotel.Domain.Options

Represents options for booking operations in the hotel domain.

```csharp
public class BookOptions : Connectors.Core.Application.Options.PlatformConnectionOptions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → PlatformConnectionOptions → [BookOptions](./connectors.pull.hotel.domain.options.bookoptions)<br />
Attributes [RequiredMemberAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.requiredmemberattribute)

**Remarks:**

This class provides configuration options for booking processes, including 
 quote requirements that specify conditions under which quotes are necessary before booking.

## Properties

### **QuoteRequired**

Specifies the quote requirement options for the booking.

```csharp
public QuoteRequired QuoteRequired { get; set; }
```

#### Property Value

[QuoteRequired](./connectors.pull.hotel.domain.options.quoterequired)<br />

**Remarks:**

The [BookOptions.QuoteRequired](./connectors.pull.hotel.domain.options.bookoptions#quoterequired) property determines whether and under what conditions
 a quote is required before proceeding with a booking operation.

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

### **BookOptions()**

#### Caution

Constructors of types with required members are not supported in this version of your compiler.

---

```csharp
public BookOptions()
```
