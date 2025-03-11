# CancelRs

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Cancel.Response

Represents the response for a hotel booking cancellation operation.

```csharp
public class CancelRs
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CancelRs](./connectors.pull.hotel.domain.contracts.cancel.response.cancelrs)<br />
Attributes DataContractAttribute

## Properties

### **AuditData**

Gets or sets the audit data provided by the supplier or system for the operation.

```csharp
public ProviderAudit AuditData { get; set; }
```

#### Property Value

ProviderAudit<br />

### **AdviseMessages**

Gets the collection of advise messages related to the cancellation operation.

```csharp
public IEnumerable<AdviseMessage> AdviseMessages { get; set; }
```

#### Property Value

[IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Reference**

Gets the reference information associated with the booking.

```csharp
public Reference Reference { get; set; }
```

#### Property Value

[Reference](./connectors.pull.hotel.domain.contracts.common.reference)<br />

### **CancelLocator**

Gets or sets the cancel locator value specific to the cancellation operation.

```csharp
public string CancelLocator { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Status**

Gets the status of the booking after the cancellation operation. 
 Possible values: Unknown, Ko, Ok, OnRequest, Cancelled or PendingCommit.

```csharp
public BookStatus Status { get; set; }
```

#### Property Value

BookStatus<br />

### **BookPrice**

Gets or sets the original booking price before cancellation.

```csharp
public Price BookPrice { get; set; }
```

#### Property Value

Price<br />

### **CancelPrice**

Gets or sets the price associated with the cancellation operation.

```csharp
public Price CancelPrice { get; set; }
```

#### Property Value

Price<br />

### **AddOns**

Gets or sets additional supplier information as key-value pairs.

```csharp
public Dictionary<string, string> AddOns { get; set; }
```

#### Property Value

[Dictionary\<String, String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br />

## Constructors

### **CancelRs(Reference, BookStatus, IEnumerable\<AdviseMessage\>)**

Initializes a new instance of the [CancelRs](./connectors.pull.hotel.domain.contracts.cancel.response.cancelrs) class with the specified reference, status, and optional advise messages.

```csharp
public CancelRs(Reference reference, BookStatus status, IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`reference` [Reference](./connectors.pull.hotel.domain.contracts.common.reference)<br />
The reference associated with the cancellation.

`status` BookStatus<br />
The status of the booking after cancellation.

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
Optional. A collection of advise messages related to the operation.

## Methods

### **BuildErrorResponse(IEnumerable\<AdviseMessage\>)**

Creates an error response containing the specified collection of advise messages.

```csharp
public static CancelRs BuildErrorResponse(IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of advise messages to include in the error response.

#### Returns

[CancelRs](./connectors.pull.hotel.domain.contracts.cancel.response.cancelrs)<br />
A [CancelRs](./connectors.pull.hotel.domain.contracts.cancel.response.cancelrs) instance representing an error response.

### **BuildErrorResponse(AdviseMessage)**

Creates an error response containing a single advise message.

```csharp
public static CancelRs BuildErrorResponse(AdviseMessage adviseMessage)
```

#### Parameters

`adviseMessage` AdviseMessage<br />
The advise message to include in the error response.

#### Returns

[CancelRs](./connectors.pull.hotel.domain.contracts.cancel.response.cancelrs)<br />
A [CancelRs](./connectors.pull.hotel.domain.contracts.cancel.response.cancelrs) instance representing an error response.
