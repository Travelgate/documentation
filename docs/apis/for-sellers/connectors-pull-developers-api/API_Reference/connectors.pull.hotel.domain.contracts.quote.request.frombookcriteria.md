# FromBookCriteria

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Quote.Request

Represents the criteria for creating a quote from a book request. 
 This is used internally by the framework when a booking operation requires a secondary quote.

```csharp
public class FromBookCriteria
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [FromBookCriteria](./connectors.pull.hotel.domain.contracts.quote.request.frombookcriteria)<br />
Attributes DataContractAttribute

**Remarks:**

The [FromBookCriteria](./connectors.pull.hotel.domain.contracts.quote.request.frombookcriteria) class facilitates scenarios where additional validation 
 or re-evaluation is needed during the booking process. It encapsulates pricing, cancellation policies, 
 and other relevant data from the booking context.

## Properties

### **BookPrice**

Contains the price details associated with the booking.

```csharp
public BookPrice BookPrice { get; set; }
```

#### Property Value

[BookPrice](./connectors.pull.hotel.domain.contracts.book.request.bookprice)<br />

**Remarks:**

The [FromBookCriteria.BookPrice](./connectors.pull.hotel.domain.contracts.quote.request.frombookcriteria#bookprice) object provides information such as total cost, currency. This field is required to ensure accurate quoting.

### **DateQuote**

Represents the date when the quote is generated during the booking process.

```csharp
public DateTime DateQuote { get; set; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

**Remarks:**

The [FromBookCriteria.DateQuote](./connectors.pull.hotel.domain.contracts.quote.request.frombookcriteria#datequote) indicates the specific moment in time when the second quote is created. 
 This is useful for audit and traceability purposes.

### **CancelPolicy**

Specifies the cancellation policy associated with the booking.

```csharp
public CancelPolicy CancelPolicy { get; set; }
```

#### Property Value

[CancelPolicy](./connectors.pull.hotel.domain.contracts.common.cancelpolicy)<br />

**Remarks:**

The [FromBookCriteria.CancelPolicy](./connectors.pull.hotel.domain.contracts.quote.request.frombookcriteria#cancelpolicy) defines the terms under which the booking can be canceled, 
 including penalties, deadlines, and refund conditions. It is essential for validating second quotes.

## Constructors

### **FromBookCriteria()**

```csharp
public FromBookCriteria()
```
