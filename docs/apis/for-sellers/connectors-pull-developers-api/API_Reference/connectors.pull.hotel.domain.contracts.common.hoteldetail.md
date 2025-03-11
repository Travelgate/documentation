# HotelDetail

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents detailed information about a hotel booking.

```csharp
public class HotelDetail
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [HotelDetail](./connectors.pull.hotel.domain.contracts.common.hoteldetail)<br />
Attributes DataContractAttribute

**Remarks:**

This class provides comprehensive details about a hotel booking, including 
 dates, the associated hotel, board information, and room or occupancy details. 
 It is primarily used in responses for operations like `CheckBookingsByReference` 
 or `CheckBookingsByDate`.

## Properties

### **BookingDate**

The date when the booking was created.

```csharp
public string BookingDate { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This represents the timestamp of the booking creation, typically provided in UTC format.
 Useful for auditing or analyzing booking trends.

### **CheckIn**

The check-in date for the booking.

```csharp
public string CheckIn { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This is the date when the guest is expected to arrive at the hotel. It is required 
 and validated to ensure correctness in booking operations.

### **CheckOut**

The check-out date for the booking.

```csharp
public string CheckOut { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This is the date when the guest is expected to leave the hotel. It is required 
 and validated alongside the check-in date.

### **CheckInAsDateTime**

The check-in date as a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) object.

```csharp
public DateTime CheckInAsDateTime { get; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

**Remarks:**

This property converts the check-in date string into a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) format 
 for easier manipulation in operations requiring date calculations.

### **CheckOutAsDateTime**

The check-out date as a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) object.

```csharp
public DateTime CheckOutAsDateTime { get; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

**Remarks:**

This property converts the check-out date string into a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) format 
 for easier manipulation in operations requiring date calculations.

### **HotelCode**

The unique code identifying the hotel.

```csharp
public string HotelCode { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This code is used to reference the specific hotel within the booking.

### **HotelName**

The name of the hotel associated with the booking.

```csharp
public string HotelName { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

Provides a human-readable name for the hotel, useful for display purposes in booking summaries.

### **BoardCode**

The board code for the booking.

```csharp
public string BoardCode { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

Indicates the meal plan associated with the booking (e.g., "HB" for half board, "AI" for all-inclusive).

### **Occupancies**

The collection of occupancies associated with the booking.

```csharp
public IEnumerable<BookOccupancy> Occupancies { get; set; }
```

#### Property Value

[IEnumerable\<BookOccupancy\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each [BookOccupancy](./connectors.pull.hotel.domain.contracts.book.request.bookoccupancy) represents the details of a group of guests 
 sharing a room, including the number of adults and children, and their respective ages.

### **Rooms**

The collection of rooms included in the booking.

```csharp
public IEnumerable<Room> Rooms { get; set; }
```

#### Property Value

[IEnumerable\<Room\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each [Room](./connectors.pull.hotel.domain.contracts.search.response.room) contains details such as room type, description, and price. 
 This helps in understanding the composition of the booking.

## Constructors

### **HotelDetail()**

```csharp
public HotelDetail()
```
