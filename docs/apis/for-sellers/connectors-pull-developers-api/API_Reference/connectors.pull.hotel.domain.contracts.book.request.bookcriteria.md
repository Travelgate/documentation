# BookCriteria

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents the criteria for booking a hotel accommodation.
 Inherits from [Criteria](./connectors.pull.hotel.domain.contracts.common.criteria).

```csharp
public class BookCriteria : Connectors.Pull.Hotel.Domain.Contracts.Common.Criteria
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Criteria](./connectors.pull.hotel.domain.contracts.common.criteria) → [BookCriteria](./connectors.pull.hotel.domain.contracts.book.request.bookcriteria)<br />
Attributes DataContractAttribute, KnownTypeAttribute, KnownTypeAttribute, KnownTypeAttribute, InterfaceTypeAttribute

## Properties

### **Accommodation**

Accommodation details for the quote request, such as the hotel or rental being evaluated.

```csharp
public AccommodationRQ Accommodation { get; set; }
```

#### Property Value

[AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq)<br />

**Remarks:**

The [BookCriteria.Accommodation](./connectors.pull.hotel.domain.contracts.book.request.bookcriteria#accommodation) property specifies the accommodation being quoted. 
 It is required and should match the accommodations returned in the search response.

### **BoardCode**

Gets the board code for the booking.

```csharp
public string BoardCode { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The board code specifies the type of board (e.g., "BB" for Bed and Breakfast) 
 that the booking includes.

### **Occupancies**

Gets the occupancies for the booking.

```csharp
public IEnumerable<BookOccupancy> Occupancies { get; set; }
```

#### Property Value

[IEnumerable\<BookOccupancy\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

The [BookOccupancy](./connectors.pull.hotel.domain.contracts.book.request.bookoccupancy) class defines the details of room occupancies, 
 including the number of adults, children, and their ages.

### **Market**

Gets or sets the market for the booking.

```csharp
public string Market { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

Represents the target market, specified using an ISO 3166-1 alpha-2 country code.

### **Rooms**

Gets the rooms for the booking.

```csharp
public IEnumerable<Room> Rooms { get; set; }
```

#### Property Value

[IEnumerable\<Room\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each [Room](./connectors.pull.hotel.domain.contracts.search.response.room) object represents a booked room with specific details 
 such as room type and capacity.

### **PaymentType**

Gets the payment type for the booking.

```csharp
public PaymentType PaymentType { get; set; }
```

#### Property Value

PaymentType<br />

**Remarks:**

The [BookCriteria.PaymentType](./connectors.pull.hotel.domain.contracts.book.request.bookcriteria#paymenttype) enumeration defines the supported payment methods 
 such as prepaid or postpaid.

### **Remarks**

Gets the remarks for the booking.

```csharp
public IEnumerable<Remark> Remarks { get; set; }
```

#### Property Value

[IEnumerable\<Remark\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Additional comments or requests related to the booking. 
 Each [Remark](./connectors.pull.hotel.domain.contracts.common.remark) contains a description of the specific request.

### **ClientReference**

Gets the client reference for the booking.

```csharp
public string ClientReference { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

A unique identifier provided by the client to track the booking request.

### **BookPrice**

Gets the book price for the booking.

```csharp
public BookPrice BookPrice { get; set; }
```

#### Property Value

[BookPrice](./connectors.pull.hotel.domain.contracts.book.request.bookprice)<br />

**Remarks:**

The [BookCriteria.BookPrice](./connectors.pull.hotel.domain.contracts.book.request.bookcriteria#bookprice) class includes details about the total cost of the booking, 
 taxes, and currency.

### **Holder**

Gets or sets the holder information for the booking.

```csharp
public Holder Holder { get; set; }
```

#### Property Value

[Holder](./connectors.pull.hotel.domain.contracts.book.request.holder)<br />

**Remarks:**

The [BookCriteria.Holder](./connectors.pull.hotel.domain.contracts.book.request.bookcriteria#holder) class specifies the personal details of the booking holder, 
 including their full name and contact information.

### **PaymentCardInput**

Gets the payment card input for the booking.

```csharp
public CreditCardInput PaymentCardInput { get; set; }
```

#### Property Value

[CreditCardInput](./connectors.pull.hotel.domain.contracts.book.request.creditcardinput)<br />

**Remarks:**

The [CreditCardInput](./connectors.pull.hotel.domain.contracts.book.request.creditcardinput) class provides secure credit card information for payment.

### **Parameters**

Gets or sets the additional parameters for the booking.

```csharp
public IEnumerable<Parameter> Parameters { get; set; }
```

#### Property Value

[IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter) specifies additional details or configurations 
 for the booking request.

### **CheckIn**

The check-in date for the operation, represented as a string in ISO 8601 format (yyyy-MM-dd).

```csharp
public string CheckIn { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field is required and determines the start date of the client's stay.
 Use [Criteria.CheckInAsDateTime](./connectors.pull.hotel.domain.contracts.common.criteria#checkinasdatetime) to access the parsed DateTime representation.

### **CheckOut**

The check-out date for the operation, represented as a string in ISO 8601 format (yyyy-MM-dd).

```csharp
public string CheckOut { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field is required and determines the end date of the client's stay.
 Use [Criteria.CheckOutAsDateTime](./connectors.pull.hotel.domain.contracts.common.criteria#checkoutasdatetime) to access the parsed DateTime representation.

### **CheckInAsDateTime**

The check-in date parsed as a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) object.

```csharp
public DateTime CheckInAsDateTime { get; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

**Remarks:**

This property leverages  for parsing the string value 
 of [Criteria.CheckIn](./connectors.pull.hotel.domain.contracts.common.criteria#checkin). Use this to perform date-related operations.

### **CheckOutAsDateTime**

The check-out date parsed as a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) object.

```csharp
public DateTime CheckOutAsDateTime { get; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

**Remarks:**

Similar to [Criteria.CheckInAsDateTime](./connectors.pull.hotel.domain.contracts.common.criteria#checkinasdatetime), this property parses [Criteria.CheckOut](./connectors.pull.hotel.domain.contracts.common.criteria#checkout) 
 to provide a strongly typed representation of the check-out date.

### **TotalNights**

The total number of nights for the stay, calculated as the difference between check-in and check-out dates.

```csharp
public uint TotalNights { get; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

**Remarks:**

The value is computed using  and assumes valid input 
 for [Criteria.CheckIn](./connectors.pull.hotel.domain.contracts.common.criteria#checkin) and [Criteria.CheckOut](./connectors.pull.hotel.domain.contracts.common.criteria#checkout).

### **Language**

The language code for the operation, represented as a 2-character ISO 639-1 code (e.g., "en", "es").

```csharp
public string Language { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field is required and is used to tailor the response to the client's preferred language.

### **Currency**

The preferred currency for the operation, defined as an optional [Criteria.Currency](./connectors.pull.hotel.domain.contracts.common.criteria#currency) value.

```csharp
public Nullable<Currency> Currency { get; set; }
```

#### Property Value

[Nullable\<Currency\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

**Remarks:**

This field specifies the currency in which prices should be displayed. 
 If not provided, the system may use a default value.

### **Nationality**

The nationality code of the client, represented as a 2-character ISO 3166-1 alpha-2 country code (e.g., "US", "FR").

```csharp
public string Nationality { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field is optional but can be used to customize the search results based on the client's nationality.

## Constructors

### **BookCriteria()**

```csharp
public BookCriteria()
```
