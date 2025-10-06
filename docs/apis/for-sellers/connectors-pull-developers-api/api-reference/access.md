# Access

Represents access credentials and related information required for a connection.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Code** | Integer | The unique code identifying the access configuration. |
| **User** | String | The username used for authentication with the supplier. |
| **Password** | String | The password used for authentication with the supplier. |
| **ApiKey** | String | The API key used for authentication or authorization. |
| **Urls** | [Urls](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/urls) | The URLs associated with the access configuration. |
| **Urls/Book** | String | The URL used for booking operations. |
| **Urls/Search** | String | The URL used for Search operations. |
| **Urls/Quote** | String | The URL used for Quote operations. |
| **Urls/Generic** | String | A generic URL for additional operations. |
| **Parameters** | [AccessParameters](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accessparameters) | Additional parameters related to the connection. |
