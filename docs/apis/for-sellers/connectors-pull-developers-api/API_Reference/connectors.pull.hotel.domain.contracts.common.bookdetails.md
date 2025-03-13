# BookDetails

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents the details of a hotel booking.

```csharp
public class BookDetails
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [BookDetails](./connectors.pull.hotel.domain.contracts.common.bookdetails)<br />
Attributes DataContractAttribute

**Remarks:**

This class provides a comprehensive representation of a booking, including its status, 
 references, holder information, pricing, cancellation policy, and associated remarks. 
 It is used in operations such as checking bookings by date or reference.

## Properties

### **Status**

The current status of the booking.

```csharp
public BookStatus Status { get; set; }
```

#### Property Value

BookStatus<br />

**Remarks:**

The  can have one of the following values:

- - Unknown (0): The status is not specified.
- - Ok (2): The booking has been successfully confirmed.
- - OnRequest (3): The booking is pending supplier confirmation.
- - Cancelled (4): The booking has been cancelled.
- - PendingCommit (5): The booking is in a two-phase process and is waiting for finalization.

### **Reference**

A collection of locators that identify the booking.

```csharp
public Reference Reference { get; set; }
```

#### Property Value

[Reference](./connectors.pull.hotel.domain.contracts.common.reference)<br />

**Remarks:**

The [BookDetails.Reference](./connectors.pull.hotel.domain.contracts.common.bookdetails#reference) includes:

- - ClientLocator: The identifier provided by the client.
- - SupplierLocator: The identifier provided by the supplier.
- - HotelLocator: An optional identifier specific to the hotel.

### **Holder**

The personal details of the booking holder.

```csharp
public Holder Holder { get; set; }
```

#### Property Value

[Holder](./connectors.pull.hotel.domain.contracts.book.request.holder)<br />

**Remarks:**

The [BookDetails.Holder](./connectors.pull.hotel.domain.contracts.common.bookdetails#holder) contains the full name and contact details of the person 
 who holds the booking.

### **Hotel**

The hotel details associated with the booking.

```csharp
public HotelDetail Hotel { get; set; }
```

#### Property Value

[HotelDetail](./connectors.pull.hotel.domain.contracts.common.hoteldetail)<br />

**Remarks:**

The [HotelDetail](./connectors.pull.hotel.domain.contracts.common.hoteldetail) provides specific information about the hotel, 
 including its name, code, check-in and check-out dates, and the rooms booked.

### **Price**

The total price of the booking.

```csharp
public Price Price { get; set; }
```

#### Property Value

Price<br />

**Remarks:**

The [BookDetails.Price](./connectors.pull.hotel.domain.contracts.common.bookdetails#price) includes details such as the currency, gross and net amounts.

### **CancelPolicy**

The cancellation policy associated with the booking.

```csharp
public CancelPolicy CancelPolicy { get; set; }
```

#### Property Value

[CancelPolicy](./connectors.pull.hotel.domain.contracts.common.cancelpolicy)<br />

**Remarks:**

The [BookDetails.CancelPolicy](./connectors.pull.hotel.domain.contracts.common.bookdetails#cancelpolicy) outlines the penalties and conditions for cancelling the booking.

### **Remarks**

Additional remarks or notes related to the booking.

```csharp
public IEnumerable<Remark> Remarks { get; set; }
```

#### Property Value

[IEnumerable\<Remark\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each [Remark](./connectors.pull.hotel.domain.contracts.common.remark) provides supplementary information, such as special requests or comments.

### **BillingSupplierCode**

The code of the agency responsible for the booking.

```csharp
public string BillingSupplierCode { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The BillingSupplierCode identifies the agency or supplier handling the billing 
 and reservation process.

### **Payable**

Information about the entity responsible for payment of the booking.

```csharp
public string Payable { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The Payable field contains details about who is responsible for paying the booking amount, 
 such as the client or a third party.

## Constructors

### **BookDetails(BookStatus, Reference, Price)**

Initializes a new instance of the [BookDetails](./connectors.pull.hotel.domain.contracts.common.bookdetails) class with specified parameters.

```csharp
public BookDetails(BookStatus status, Reference reference, Price price)
```

#### Parameters

`status` BookStatus<br />
The current status of the booking.

`reference` [Reference](./connectors.pull.hotel.domain.contracts.common.reference)<br />
The references associated with the booking.

`price` Price<br />
The price of the booking (optional).
