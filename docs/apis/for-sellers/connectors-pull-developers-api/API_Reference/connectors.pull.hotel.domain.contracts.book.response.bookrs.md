# BookRs

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Response

Represents the response for a hotel booking operation.

```csharp
public class BookRs
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [BookRs](./connectors.pull.hotel.domain.contracts.book.response.bookrs)<br />
Attributes DataContractAttribute

## Properties

### **AuditData**

Contains the requests and responses exchanged with the supplier.
 This field is populated internally by the connector framework. 
 Integrators do not need to handle this field manually.

```csharp
public ProviderAudit AuditData { get; set; }
```

#### Property Value

ProviderAudit<br />

**Remarks:**

The  class contains details related to the provider's audit logs, 
 which are useful for debugging and tracing booking operations.

### **AdviseMessages**

The collection of advise messages associated with the booking response.

```csharp
public IEnumerable<AdviseMessage> AdviseMessages { get; set; }
```

#### Property Value

[IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each  provides additional information or warnings related to the booking operation.

### **BookDetails**

The details of the booking.

```csharp
public BookDetails BookDetails { get; set; }
```

#### Property Value

[BookDetails](./connectors.pull.hotel.domain.contracts.common.bookdetails)<br />

**Remarks:**

The [BookRs.BookDetails](./connectors.pull.hotel.domain.contracts.book.response.bookrs#bookdetails) class includes comprehensive information about the booking, 
 such as status, references, pricing, and associated accommodations.

### **AddOns**

A dictionary containing supplier information for the option.

```csharp
public Dictionary<string, string> AddOns { get; set; }
```

#### Property Value

[Dictionary\<String, String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br />

**Remarks:**

This dictionary stores additional key-value pairs related to supplier-specific data.

## Constructors

### **BookRs(BookDetails, IEnumerable\<AdviseMessage\>)**

Initializes a new instance of the [BookRs](./connectors.pull.hotel.domain.contracts.book.response.bookrs) class with the specified booking details and advise messages.

```csharp
public BookRs(BookDetails bookDetails, IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`bookDetails` [BookDetails](./connectors.pull.hotel.domain.contracts.common.bookdetails)<br />
The details of the booking.

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of advise messages associated with the booking response.

## Methods

### **BuildErrorResponse(IEnumerable\<AdviseMessage\>)**

Builds an error response with the specified advise messages.

```csharp
public static BookRs BuildErrorResponse(IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of advise messages to include in the error response.

#### Returns

[BookRs](./connectors.pull.hotel.domain.contracts.book.response.bookrs)<br />
A [BookRs](./connectors.pull.hotel.domain.contracts.book.response.bookrs) instance representing an error response.

### **BuildErrorResponse(AdviseMessage)**

Builds an error response with a single advise message.

```csharp
public static BookRs BuildErrorResponse(AdviseMessage adviseMessage)
```

#### Parameters

`adviseMessage` AdviseMessage<br />
The advise message to include in the error response.

#### Returns

[BookRs](./connectors.pull.hotel.domain.contracts.book.response.bookrs)<br />
A [BookRs](./connectors.pull.hotel.domain.contracts.book.response.bookrs) instance representing an error response.
