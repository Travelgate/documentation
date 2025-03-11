# CheckBookingsByDateRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.CheckBookings.Request.ByDate

Represents a request to check bookings by a specific date range.

```csharp
public class CheckBookingsByDateRq : Connectors.Pull.Hotel.Domain.Contracts.CheckBookings.Request.CheckBookingsCommonRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CheckBookingsCommonRq](./connectors.pull.hotel.domain.contracts.checkbookings.request.checkbookingscommonrq) → [CheckBookingsByDateRq](./connectors.pull.hotel.domain.contracts.checkbookings.request.bydate.checkbookingsbydaterq)<br />
Attributes DataContractAttribute

**Remarks:**

This request allows querying bookings based on a range of dates, such as arrival or booking dates. 
 It inherits common request settings from [CheckBookingsCommonRq](./connectors.pull.hotel.domain.contracts.checkbookings.request.checkbookingscommonrq) and includes additional 
 input parameters through [CheckBookingsByDateInput](./connectors.pull.hotel.domain.contracts.checkbookings.request.bydate.checkbookingsbydateinput).

## Properties

### **Input**

Contains the details for checking bookings within a specific date range.

```csharp
public CheckBookingsByDateInput Input { get; set; }
```

#### Property Value

[CheckBookingsByDateInput](./connectors.pull.hotel.domain.contracts.checkbookings.request.bydate.checkbookingsbydateinput)<br />

**Remarks:**

The [CheckBookingsByDateInput](./connectors.pull.hotel.domain.contracts.checkbookings.request.bydate.checkbookingsbydateinput) includes essential parameters like:

- - `CheckIn` and `CheckOut` dates in the format `yyyy-MM-dd`.
- - [DateRangeType](./connectors.pull.hotel.domain.contracts.common.daterangetype) to specify whether the date range refers to arrival or booking dates.

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

### **CheckBookingsByDateRq()**

```csharp
public CheckBookingsByDateRq()
```
