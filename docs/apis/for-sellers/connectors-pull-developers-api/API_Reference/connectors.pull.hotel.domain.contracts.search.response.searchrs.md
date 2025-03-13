# SearchRs

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents the response for a hotel search operation. 
 Contains the list of available options that match the client's search criteria.
 Additionally, it includes error or warning messages ([SearchRs.AdviseMessages](./connectors.pull.hotel.domain.contracts.search.response.searchrs#advisemessages)) and trace data ([SearchRs.AuditData](./connectors.pull.hotel.domain.contracts.search.response.searchrs#auditdata)),
 which logs the transactions sent to and received from the supplier.

```csharp
public class SearchRs
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SearchRs](./connectors.pull.hotel.domain.contracts.search.response.searchrs)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

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

### **AdviseMessages**

Collection of advice messages, which may include errors or warnings generated during the search process.

```csharp
public IEnumerable<AdviseMessage> AdviseMessages { get; set; }
```

#### Property Value

[IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Accommodations**

List of accommodations, meal plans, and options returned by the search.
 These represent the available (hotel-mealPlans-options) that meet the client's criteria.

```csharp
public List<Accommodation> Accommodations { get; set; }
```

#### Property Value

[List\<Accommodation\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

### **GlobalOptionParameters**

Global parameters that the client must send in subsequent operations (e.g., in a quote request). 
 These parameters apply to all options returned in the response.

```csharp
public IEnumerable<Parameter> GlobalOptionParameters { get; set; }
```

#### Property Value

[IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

## Constructors

### **SearchRs(List\<Accommodation\>, IEnumerable\<AdviseMessage\>)**

Initializes a new instance of the [SearchRs](./connectors.pull.hotel.domain.contracts.search.response.searchrs) class with the specified accommodations and optional advise messages.

```csharp
public SearchRs(List<Accommodation> accommodations, IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`accommodations` [List\<Accommodation\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />
The list of accommodations found in the search.

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
Optional collection of  instances that provide warnings or errors related to the search operation.

## Methods

### **BuildErrorResponse(IEnumerable\<AdviseMessage\>)**

Builds an error response containing the specified collection of advice messages.

```csharp
public static SearchRs BuildErrorResponse(IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
A collection of  instances that describe the error or warnings encountered during the operation.

#### Returns

[SearchRs](./connectors.pull.hotel.domain.contracts.search.response.searchrs)<br />
A new instance of [SearchRs](./connectors.pull.hotel.domain.contracts.search.response.searchrs) configured as an error response.

### **BuildErrorResponse(AdviseMessage)**

Builds an error response containing a single advise message.

```csharp
public static SearchRs BuildErrorResponse(AdviseMessage adviseMessage)
```

#### Parameters

`adviseMessage` AdviseMessage<br />
A single  instance describing the error or warning encountered during the operation.

#### Returns

[SearchRs](./connectors.pull.hotel.domain.contracts.search.response.searchrs)<br />
A new instance of [SearchRs](./connectors.pull.hotel.domain.contracts.search.response.searchrs) configured as an error response.
