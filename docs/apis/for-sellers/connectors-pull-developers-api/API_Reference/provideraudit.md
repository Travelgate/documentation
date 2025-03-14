# ProviderAudit

Represents an audit log for a provider, including details of requests and responses 
exchanged during an operation.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Request** | Array&lt;[ProviderAuditRq](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/providerauditrq)&gt; | Collection of audit entries for provider requests.Each entry contains details about a specific request made to the provider. |
| **Request/SendAt** | String | The timestamp indicating when the request was sent. |
| **Request/Data** | String | The payload data included in the request. |
| **Request/Url** | String | The URL of the provider endpoint to which the request is sent. |
| **Request/Headers** | Object | A collection of headers included in the request. |
| **Request/HttpMethod** | [HttpMethod](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/httpmethod) | The HTTP method used to send the request. |
| **Request/HttpMethod/Method** | String | No description available. |
| **Response** | Array&lt;[ProviderAuditRs](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/providerauditrs)&gt; | Collection of audit entries for provider responses.Each entry contains details about a specific response received from the provider. |
| **Response/ReceivedAt** | String | The timestamp indicating when the response was received. |
| **Response/Data** | String | The payload data contained in the provider's response. |
| **Response/Headers** | Object | A collection of headers included in the provider's response. |
| **Response/StatusCode** | Integer | The HTTP status code returned by the provider. |
