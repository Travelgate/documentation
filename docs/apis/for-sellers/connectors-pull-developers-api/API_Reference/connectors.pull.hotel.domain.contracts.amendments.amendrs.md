# AmendRs

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments

Represents the response for an amendment operation on a hotel booking.

```csharp
public class AmendRs
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AmendRs](./connectors.pull.hotel.domain.contracts.amendments.amendrs)<br />
Attributes DataContractAttribute

## Properties

### **AuditData**

Gets or sets the audit data for the provider.

```csharp
public ProviderAudit AuditData { get; set; }
```

#### Property Value

ProviderAudit<br />

### **AdviseMessages**

Gets or initializes the collection of advise messages.

```csharp
public IEnumerable<AdviseMessage> AdviseMessages { get; set; }
```

#### Property Value

[IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **BookingsDetails**

Gets or initializes the details of the booking.

```csharp
public BookDetails BookingsDetails { get; set; }
```

#### Property Value

[BookDetails](./connectors.pull.hotel.domain.contracts.common.bookdetails)<br />

### **AmendFee**

Gets or initializes the fee associated with the amendment.

```csharp
public AmendFee AmendFee { get; set; }
```

#### Property Value

[AmendFee](./connectors.pull.hotel.domain.contracts.amendments.amendfee)<br />

### **Parameters**

Gets or sets the collection of additional parameters.

```csharp
public IEnumerable<Parameter> Parameters { get; set; }
```

#### Property Value

[IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **AddOns**

Gets or sets a dictionary containing supplier information for the option.

```csharp
public Dictionary<string, string> AddOns { get; set; }
```

#### Property Value

[Dictionary\<String, String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br />

## Constructors

### **AmendRs()**

Initializes a new instance of the [AmendRs](./connectors.pull.hotel.domain.contracts.amendments.amendrs) class.

```csharp
public AmendRs()
```

### **AmendRs(AmendFee, BookDetails, IEnumerable\<AdviseMessage\>)**

Initializes a new instance of the [AmendRs](./connectors.pull.hotel.domain.contracts.amendments.amendrs) class with specified parameters.

```csharp
public AmendRs(AmendFee amendFee, BookDetails bookDetails, IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`amendFee` [AmendFee](./connectors.pull.hotel.domain.contracts.amendments.amendfee)<br />
The fee associated with the amendment.

`bookDetails` [BookDetails](./connectors.pull.hotel.domain.contracts.common.bookdetails)<br />
The details of the booking.

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of advise messages.

## Methods

### **BuildErrorResponse(IEnumerable\<AdviseMessage\>)**

Builds an error response with a collection of advise messages.

```csharp
public static AmendRs BuildErrorResponse(IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of advise messages for the error response.

#### Returns

[AmendRs](./connectors.pull.hotel.domain.contracts.amendments.amendrs)<br />
An instance of [AmendRs](./connectors.pull.hotel.domain.contracts.amendments.amendrs) representing an error response.

### **BuildErrorResponse(AdviseMessage)**

Builds an error response with a single advise message.

```csharp
public static AmendRs BuildErrorResponse(AdviseMessage adviseMessage)
```

#### Parameters

`adviseMessage` AdviseMessage<br />
The advise message for the error response.

#### Returns

[AmendRs](./connectors.pull.hotel.domain.contracts.amendments.amendrs)<br />
An instance of [AmendRs](./connectors.pull.hotel.domain.contracts.amendments.amendrs) representing an error response.
