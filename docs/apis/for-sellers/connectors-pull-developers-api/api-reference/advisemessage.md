# AdviseMessage

Represents a message that provides additional context or information about an operation's outcome.
These messages can indicate errors, warnings, or informational messages, often including external details.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Code** | [AdviseMessageCode](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/advisemessagecode) | Gets the code that represents the message type. |
| **Level** | [AdviseMessageLevel](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/advisemessagelevel) | Gets the severity level of the message (e.g., Error, Warning, or Info). |
| **Description** | String | Gets the message description providing additional context. |
| **CorrelationId** | String | Gets a unique identifier for correlating the message with specific operations. |
| **External** | [External](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/external) | Gets additional external details associated with the message. |
| **External/Code** | String | The supplier's internal code for identifying the nature of the response or error. |
| **External/Message** | String | A descriptive message returned by the supplier. |
| **External/HttpStatusCode** | Integer | The HTTP status code of the supplier's response. |
