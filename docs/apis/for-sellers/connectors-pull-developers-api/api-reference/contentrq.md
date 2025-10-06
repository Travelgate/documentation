# ContentRq

No description available.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **TaskId** | Integer | Unique identifier of the task, automatically assigned by the system. |
| **Supplier** | String | Supplier code associated with the access. |
| **SupplierGroup** | String | Supplier group associated with the access. |
| **Platform** | String | The platform that this supplier belongs to. |
| **Operation** | [ServiceOperationEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/serviceoperationenum) | Operation to be executed. |
| **Parallelism** | Integer | Degree of parallelism for HotelDetails tasks. |
| **Timeout** | String | Maximum time to wait for a supplier response before timing out.Specified as a timestamp string (e.g., "24:00:00" for 24 hours). |
| **Access** | [Access](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/access) | Access information required for the operation, including API credentials, endpoints,and other integration-specific connection details. |
| **Access/Code** | Integer | The unique code identifying the access configuration. |
| **Access/User** | String | The username used for authentication with the supplier. |
| **Access/Password** | String | The password used for authentication with the supplier. |
| **Access/ApiKey** | String | The API key used for authentication or authorization. |
| **Access/Urls** | [Urls](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/urls) | The URLs associated with the access configuration. |
| **Access/Urls/Book** | String | The URL used for booking operations. |
| **Access/Urls/Search** | String | The URL used for Search operations. |
| **Access/Urls/Quote** | String | The URL used for Quote operations. |
| **Access/Urls/Generic** | String | A generic URL for additional operations. |
| **Access/Parameters** | [AccessParameters](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accessparameters) | Additional parameters related to the connection. |
| **Languages** | List&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/iso2languageenum)&gt; | Language codes for the operation, represented as a list of ISO 639-1 2-character codes (e.g., "en", "es"). |
| **ObsoleteDays** | Integer | Applicable only to HotelDetails operations. Specifies the number of days to filter hotelsthat have not been updated recently.Default value: 15 days. Setting this to 0 retrieves all hotels available for the given access, regardless of update date. |
| **HotelCode** | String | Specific hotel code to be executed locally in HotelDetails operations. |
| **FromDate** | String | No description available. |
