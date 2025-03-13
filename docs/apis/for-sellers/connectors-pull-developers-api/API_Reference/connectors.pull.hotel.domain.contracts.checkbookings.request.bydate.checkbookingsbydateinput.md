# CheckBookingsByDateInput

Namespace: Connectors.Pull.Hotel.Domain.Contracts.CheckBookings.Request.ByDate

Represents the input for checking bookings within a specific date range.

```csharp
public class CheckBookingsByDateInput
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CheckBookingsByDateInput](./connectors.pull.hotel.domain.contracts.checkbookings.request.bydate.checkbookingsbydateinput)<br />
Attributes DataContractAttribute

## Properties

### **CheckIn**

The check-in date for the booking check, specified as a string.

```csharp
public string CheckIn { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property is required and must be provided in the format `yyyy-MM-dd`.

### **CheckOut**

The check-out date for the booking check, specified as a string.

```csharp
public string CheckOut { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property is required and must be provided in the format `yyyy-MM-dd`.

### **CheckInAsDateTime**

Parses and returns the check-in date as a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) object.

```csharp
public DateTime CheckInAsDateTime { get; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

### **CheckOutAsDateTime**

Parses and returns the check-out date as a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) object.

```csharp
public DateTime CheckOutAsDateTime { get; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

### **DateType**

Specifies the type of date range to use for the booking check.

```csharp
public DateRangeType DateType { get; set; }
```

#### Property Value

[DateRangeType](./connectors.pull.hotel.domain.contracts.common.daterangetype)<br />

**Remarks:**

- - Arrival: The date range is based on the arrival dates of guests.
- - Booking: The date range is based on the dates when reservations were made.

### **Language**

The language code to be used for the booking check.

```csharp
public string Language { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property must be a valid ISO 639-1 language code, exactly 2 characters long.

### **Currency**

The currency to be used for the booking check.

```csharp
public Nullable<Currency> Currency { get; set; }
```

#### Property Value

[Nullable\<Currency\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

**Remarks:**

The [CheckBookingsByDateInput.Currency](./connectors.pull.hotel.domain.contracts.checkbookings.request.bydate.checkbookingsbydateinput#currency) defines the currency in which the prices and surcharges are represented.

## Constructors

### **CheckBookingsByDateInput()**

```csharp
public CheckBookingsByDateInput()
```
