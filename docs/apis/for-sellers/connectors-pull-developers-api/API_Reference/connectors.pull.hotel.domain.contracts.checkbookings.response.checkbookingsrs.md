# CheckBookingsRs

Namespace: Connectors.Pull.Hotel.Domain.Contracts.CheckBookings.Response

Represents the response for checking hotel bookings.
 This response includes detailed booking information, advice messages, and any additional metadata provided by the supplier.

```csharp
public class CheckBookingsRs
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CheckBookingsRs](./connectors.pull.hotel.domain.contracts.checkbookings.response.checkbookingsrs)<br />
Attributes DataContractAttribute

**Remarks:**

The [CheckBookingsRs](./connectors.pull.hotel.domain.contracts.checkbookings.response.checkbookingsrs) class is typically used to handle responses from operations that retrieve booking details, 
 either by reference or within a specified date range. It includes crucial elements such as [BookDetails](./connectors.pull.hotel.domain.contracts.common.bookdetails), 
 audit logs (), and contextual advice messages ().

## Properties

### **AuditData**

Provides detailed audit data for the supplier transactions, including request and response logs.

```csharp
public ProviderAudit AuditData { get; set; }
```

#### Property Value

ProviderAudit<br />

**Remarks:**

The  field is automatically populated by the connector framework 
 to aid in debugging and transaction tracking.

### **AdviseMessages**

A collection of advice messages generated during the booking check operation.

```csharp
public IEnumerable<AdviseMessage> AdviseMessages { get; set; }
```

#### Property Value

[IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each  provides warnings, errors, or additional context relevant to the operation.

### **Bookings**

A list of detailed booking information retrieved during the operation.

```csharp
public IEnumerable<BookDetails> Bookings { get; set; }
```

#### Property Value

[IEnumerable\<BookDetails\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each [BookDetails](./connectors.pull.hotel.domain.contracts.common.bookdetails) instance contains data such as booking status, references, holder information, and pricing details.

### **Parameters**

A collection of parameters used to transfer data across different operations.

```csharp
public IEnumerable<Parameter> Parameters { get; set; }
```

#### Property Value

[IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

The [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter) collection may include both client-defined and supplier-specific metadata.

### **AddOns**

Additional metadata provided by the supplier for internal use.

```csharp
public Dictionary<string, string> AddOns { get; set; }
```

#### Property Value

[Dictionary\<String, String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br />

**Remarks:**

This is a key-value dictionary intended for storing supplementary data or supplier-specific context.

## Constructors

### **CheckBookingsRs()**

Initializes a new instance of the [CheckBookingsRs](./connectors.pull.hotel.domain.contracts.checkbookings.response.checkbookingsrs) class.

```csharp
public CheckBookingsRs()
```

### **CheckBookingsRs(IEnumerable\<BookDetails\>, IEnumerable\<AdviseMessage\>)**

Initializes a new instance of the [CheckBookingsRs](./connectors.pull.hotel.domain.contracts.checkbookings.response.checkbookingsrs) class with specified bookings and advice messages.

```csharp
public CheckBookingsRs(IEnumerable<BookDetails> bookingList, IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`bookingList` [IEnumerable\<BookDetails\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The list of bookings retrieved from the operation.

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
A collection of advice messages, if any.

## Methods

### **BuildErrorResponse(IEnumerable\<AdviseMessage\>)**

Builds an error response containing the specified advice messages.

```csharp
public static CheckBookingsRs BuildErrorResponse(IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of  instances describing the error.

#### Returns

[CheckBookingsRs](./connectors.pull.hotel.domain.contracts.checkbookings.response.checkbookingsrs)<br />
A new instance of [CheckBookingsRs](./connectors.pull.hotel.domain.contracts.checkbookings.response.checkbookingsrs) configured as an error response.

### **BuildErrorResponse(AdviseMessage)**

Builds an error response containing a single advice message.

```csharp
public static CheckBookingsRs BuildErrorResponse(AdviseMessage adviseMessage)
```

#### Parameters

`adviseMessage` AdviseMessage<br />
A single  describing the error.

#### Returns

[CheckBookingsRs](./connectors.pull.hotel.domain.contracts.checkbookings.response.checkbookingsrs)<br />
A new instance of [CheckBookingsRs](./connectors.pull.hotel.domain.contracts.checkbookings.response.checkbookingsrs) configured as an error response.
