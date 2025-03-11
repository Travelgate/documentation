# AmendBookingRemarksOptions

Namespace: Connectors.Pull.Hotel.Domain.Options

Represents options for amending booking remarks operations.

```csharp
public class AmendBookingRemarksOptions : Connectors.Core.Application.Options.PlatformConnectionOptions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → PlatformConnectionOptions → [AmendBookingRemarksOptions](./connectors.pull.hotel.domain.options.amendbookingremarksoptions)

## Properties

### **CheckBookingsByReferenceRequired**

Gets or sets the options for checking bookings by reference.

```csharp
public CheckBookingsByReferenceRequired CheckBookingsByReferenceRequired { get; set; }
```

#### Property Value

[CheckBookingsByReferenceRequired](./connectors.pull.hotel.domain.options.checkbookingsbyreferencerequired)<br />

**Remarks:**

By default, this is set to never check bookings by reference.

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

### **AmendBookingRemarksOptions()**

#### Caution

Constructors of types with required members are not supported in this version of your compiler.

---

```csharp
public AmendBookingRemarksOptions()
```
