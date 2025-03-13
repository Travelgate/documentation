# BookRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents a hotel booking request.

```csharp
public class BookRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [BookRq](./connectors.pull.hotel.domain.contracts.book.request.bookrq)<br />
Attributes DataContractAttribute

**Remarks:**

The booking request (`BookRq`) includes the criteria for the hotel reservation and the settings required to process the request. 
 This ensures all necessary details, such as booking parameters and configuration, are provided for a valid operation.

## Properties

### **BookCriteria**

The booking criteria for the hotel reservation.

```csharp
public BookCriteria BookCriteria { get; set; }
```

#### Property Value

[BookCriteria](./connectors.pull.hotel.domain.contracts.book.request.bookcriteria)<br />

**Remarks:**

The [BookRq.BookCriteria](./connectors.pull.hotel.domain.contracts.book.request.bookrq#bookcriteria) property contains essential details such as the accommodation, 
 payment type, and passenger information required for the booking process.

### **Settings**

The settings for the hotel booking.

```csharp
public BookSettings Settings { get; set; }
```

#### Property Value

[BookSettings](./connectors.pull.hotel.domain.contracts.book.request.booksettings)<br />

**Remarks:**

The [BookSettings](./connectors.pull.hotel.domain.contracts.book.request.booksettings) property specifies configuration options, including whether the booking process 
 requires a commit phase and any supplier-specific settings needed for integration.

## Constructors

### **BookRq()**

```csharp
public BookRq()
```
