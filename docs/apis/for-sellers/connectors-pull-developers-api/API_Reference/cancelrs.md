# CancelRs

Represents the response for a hotel booking cancellation operation.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **AuditData** | [ProviderAudit](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/provideraudit) | Gets or sets the audit data provided by the supplier or system for the operation. |
| **AuditData/Request** | Array&lt;[ProviderAuditRq](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/providerauditrq)&gt; | Collection of audit entries for provider requests.Each entry contains details about a specific request made to the provider. |
| **AuditData/Request/SendAt** | String | The timestamp indicating when the request was sent. |
| **AuditData/Request/Data** | String | The payload data included in the request. |
| **AuditData/Request/Url** | String | The URL of the provider endpoint to which the request is sent. |
| **AuditData/Request/Headers** | Object | A collection of headers included in the request. |
| **AuditData/Request/HttpMethod** | [HttpMethod](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/httpmethod) | The HTTP method used to send the request. |
| **AuditData/Request/HttpMethod**<br />**Method** | String | No description available. |
| **AuditData/Response** | Array&lt;[ProviderAuditRs](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/providerauditrs)&gt; | Collection of audit entries for provider responses.Each entry contains details about a specific response received from the provider. |
| **AuditData/Response/ReceivedAt** | String | The timestamp indicating when the response was received. |
| **AuditData/Response/Data** | String | The payload data contained in the provider's response. |
| **AuditData/Response/Headers** | Object | A collection of headers included in the provider's response. |
| **AuditData/Response/StatusCode** | Integer | The HTTP status code returned by the provider. |
| **AdviseMessages** | Array&lt;[AdviseMessage](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessage)&gt; | Gets the collection of advise messages related to the cancellation operation. |
| **AdviseMessages/Code** | [AdviseMessageCode](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessagecode) | Gets the code that represents the message type. |
| **AdviseMessages/Level** | [AdviseMessageLevel](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessagelevel) | Gets the severity level of the message (e.g., Error, Warning, or Info). |
| **AdviseMessages/Description** | String | Gets the message description providing additional context. |
| **AdviseMessages/CorrelationId** | String | Gets a unique identifier for correlating the message with specific operations. |
| **AdviseMessages/External** | [External](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/external) | Gets additional external details associated with the message. |
| **AdviseMessages/External/Code** | String | The supplier's internal code for identifying the nature of the response or error. |
| **AdviseMessages/External**<br />**Message** | String | A descriptive message returned by the supplier. |
| **AdviseMessages/External**<br />**HttpStatusCode** | Integer | The HTTP status code of the supplier's response. |
| **Reference** | [Reference](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/reference) | Gets the reference information associated with the booking. |
| **Reference/ClientLocator** | String | The booking locator provided by the client.This is typically used to match the booking in the client's internal systems. |
| **Reference/SupplierLocator** | String | The booking locator provided by the supplier.This identifier is used to reference the booking in the supplier's system. |
| **Reference/HotelLocator** | String | The booking locator specific to the hotel, provided by the supplier. (Optional)This may be required in cases where the hotel system uses its own unique identifiers. |
| **CancelLocator** | String | Gets or sets the Cancel locator value specific to the cancellation operation. |
| **Status** | [BookStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookstatus) | Gets the status of the booking after the cancellation operation. Possible values: Unknown, Ko, Ok, OnRequest, Cancelled or PendingCommit. |
| **BookPrice** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Gets or sets the original booking price before cancellation. |
| **BookPrice/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **BookPrice/Binding** | Boolean | Indicates whether the price is binding. |
| **BookPrice/Net** | Double | The net price paid by the Buyer to the Seller. |
| **BookPrice/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **BookPrice/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **BookPrice/MinimumSellingPrice** | Double | The minimum selling price. |
| **CancelPrice** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Gets or sets the price associated with the cancellation operation. |
| **CancelPrice/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **CancelPrice/Binding** | Boolean | Indicates whether the price is binding. |
| **CancelPrice/Net** | Double | The net price paid by the Buyer to the Seller. |
| **CancelPrice/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **CancelPrice/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **CancelPrice**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **AddOns** | Object | Gets or sets additional supplier information as key-value pairs. |
