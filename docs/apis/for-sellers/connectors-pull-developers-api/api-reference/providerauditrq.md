# ProviderAuditRq

Represents a request for provider audit, capturing details about the data sent to the provider.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **SendAt** | String | The timestamp indicating when the request was sent. |
| **Data** | String | The payload data included in the request. |
| **Url** | String | The URL of the provider endpoint to which the request is sent. |
| **Headers** | Object | A collection of headers included in the request. |
| **HttpMethod** | [HttpMethod](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/httpmethod) | The HTTP method used to send the request. |
| **HttpMethod/Method** | String | No description available. |
