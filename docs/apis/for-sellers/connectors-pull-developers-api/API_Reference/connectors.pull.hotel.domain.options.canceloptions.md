# CancelOptions

Namespace: Connectors.Pull.Hotel.Domain.Options

Configuration options for cancellation operations in the hotel domain.

```csharp
public class CancelOptions : Connectors.Core.Application.Options.PlatformConnectionOptions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → PlatformConnectionOptions → [CancelOptions](./connectors.pull.hotel.domain.options.canceloptions)

**Remarks:**

This class provides settings for handling cancellations, including conditions
 for checking bookings by reference to ensure validity and prevent inconsistencies.
 Inherits from .

## Properties

### **CheckBookingsByReferenceRequired**

Specifies the settings for when and how to check bookings by reference during a cancellation operation.

```csharp
public CheckBookingsByReferenceRequired CheckBookingsByReferenceRequired { get; set; }
```

#### Property Value

[CheckBookingsByReferenceRequired](./connectors.pull.hotel.domain.options.checkbookingsbyreferencerequired)<br />

**Remarks:**

Defaults to [CheckBookingsByReferenceRequiredWhen.Never](./connectors.pull.hotel.domain.options.checkbookingsbyreferencerequiredwhen#never), meaning bookings by reference are not checked.

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

### **CancelOptions()**

#### Caution

Constructors of types with required members are not supported in this version of your compiler.

---

```csharp
public CancelOptions()
```
