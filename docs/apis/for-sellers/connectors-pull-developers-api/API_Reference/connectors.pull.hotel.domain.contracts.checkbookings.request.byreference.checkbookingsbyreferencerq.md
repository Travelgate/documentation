# CheckBookingsByReferenceRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.CheckBookings.Request.ByReference

Represents a request to check bookings using a reference.

```csharp
public class CheckBookingsByReferenceRq : Connectors.Pull.Hotel.Domain.Contracts.CheckBookings.Request.CheckBookingsCommonRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CheckBookingsCommonRq](./connectors.pull.hotel.domain.contracts.checkbookings.request.checkbookingscommonrq) → [CheckBookingsByReferenceRq](./connectors.pull.hotel.domain.contracts.checkbookings.request.byreference.checkbookingsbyreferencerq)<br />
Attributes DataContractAttribute

**Remarks:**

This request is used to retrieve booking details by providing a specific reference, 
 whether it is a supplier or client reference. It inherits from [CheckBookingsCommonRq](./connectors.pull.hotel.domain.contracts.checkbookings.request.checkbookingscommonrq), 
 which defines the common settings required for all booking checks.

## Properties

### **Input**

Specifies the input details required for the booking reference check.

```csharp
public CheckBookingsByReferenceInput Input { get; set; }
```

#### Property Value

[CheckBookingsByReferenceInput](./connectors.pull.hotel.domain.contracts.checkbookings.request.byreference.checkbookingsbyreferenceinput)<br />

**Remarks:**

The [CheckBookingsByReferenceInput](./connectors.pull.hotel.domain.contracts.checkbookings.request.byreference.checkbookingsbyreferenceinput) includes the booking reference, accommodation details, language, 
 and optional currency information necessary for the check.
 This property is mandatory.

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

### **CheckBookingsByReferenceRq()**

```csharp
public CheckBookingsByReferenceRq()
```
