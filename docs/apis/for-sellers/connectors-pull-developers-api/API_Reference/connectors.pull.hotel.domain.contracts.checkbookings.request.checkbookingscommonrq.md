# CheckBookingsCommonRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.CheckBookings.Request

Represents a common base request for checking bookings in the system.
 This class is inherited by specific requests such as [CheckBookingsByDateRq](./connectors.pull.hotel.domain.contracts.checkbookings.request.bydate.checkbookingsbydaterq) and [CheckBookingsByReferenceRq](./connectors.pull.hotel.domain.contracts.checkbookings.request.byreference.checkbookingsbyreferencerq).

```csharp
public class CheckBookingsCommonRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CheckBookingsCommonRq](./connectors.pull.hotel.domain.contracts.checkbookings.request.checkbookingscommonrq)<br />
Attributes DataContractAttribute, ProtoIncludeAttribute, ProtoIncludeAttribute

**Remarks:**

The [CheckBookingsCommonRq](./connectors.pull.hotel.domain.contracts.checkbookings.request.checkbookingscommonrq) provides the foundation for different types of booking checks, 
 including by reference or date range. It includes the settings required for supplier communication and business logic configuration.

## Properties

### **Settings**

Contains the settings required for the check bookings request.

```csharp
public Settings Settings { get; set; }
```

#### Property Value

[Settings](./connectors.pull.hotel.domain.contracts.common.settings)<br />

**Remarks:**

The [CheckBookingsCommonRq.Settings](./connectors.pull.hotel.domain.contracts.checkbookings.request.checkbookingscommonrq#settings) property includes supplier, platform, and client identifiers, 
 as well as access credentials and business rules that apply to the operation.

## Constructors

### **CheckBookingsCommonRq()**

```csharp
public CheckBookingsCommonRq()
```
