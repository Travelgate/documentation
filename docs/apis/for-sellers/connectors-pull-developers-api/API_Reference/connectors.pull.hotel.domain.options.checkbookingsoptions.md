# CheckBookingsOptions

Namespace: Connectors.Pull.Hotel.Domain.Options

Represents configuration options for checking bookings operations in the hotel domain.

```csharp
public class CheckBookingsOptions : Connectors.Core.Application.Options.PlatformConnectionOptions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → PlatformConnectionOptions → [CheckBookingsOptions](./connectors.pull.hotel.domain.options.checkbookingsoptions)

**Remarks:**

This class serves as a placeholder for any specific options or settings required 
 when performing booking checks, such as by reference number or date.
 It inherits from , which provides 
 the necessary connection settings for interacting with the platform.

## Properties

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

### **CheckBookingsOptions()**

#### Caution

Constructors of types with required members are not supported in this version of your compiler.

---

```csharp
public CheckBookingsOptions()
```
