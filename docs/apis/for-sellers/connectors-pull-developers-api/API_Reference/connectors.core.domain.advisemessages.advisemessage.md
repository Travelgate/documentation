# AdviseMessage

Namespace: Connectors.Core.Domain.AdviseMessages

Represents a message that provides additional context or information about an operation's outcome.
 These messages can indicate errors, warnings, or informational messages, often including external details.

```csharp
public sealed class AdviseMessage
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage)

## Properties

### <a id="properties-code"/>**Code**

Gets the code that represents the message type.

```csharp
public AdviseMessageCode Code { get; set; }
```

#### Property Value

[AdviseMessageCode](./connectors.core.domain.advisemessages.advisemessagecode)<br />

**Remarks:**

The [AdviseMessageCode](./connectors.core.domain.advisemessages.advisemessagecode) provides a standardized way to categorize and identify
 the type of message, such as error, warning, or informational.

### <a id="properties-correlationid"/>**CorrelationId**

Gets a unique identifier for correlating the message with specific operations.

```csharp
public string CorrelationId { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The [AdviseMessage.CorrelationId](./connectors.core.domain.advisemessages.advisemessage#correlationid) allows tracing and associating the message with specific
 actions, requests, or operations for better debugging and monitoring.

### <a id="properties-description"/>**Description**

Gets the message description providing additional context.

```csharp
public string Description { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

A human-readable string that provides detailed context about the [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage).

### <a id="properties-external"/>**External**

Gets additional external details associated with the message.

```csharp
public External External { get; set; }
```

#### Property Value

[External](./connectors.core.domain.advisemessages.external)<br />

**Remarks:**

The [AdviseMessage.External](./connectors.core.domain.advisemessages.advisemessage#external) property includes supplementary information that might
 originate from external systems or providers.

### <a id="properties-level"/>**Level**

Gets the severity level of the message (e.g., Error, Warning, or Info).

```csharp
public AdviseMessageLevel Level { get; set; }
```

#### Property Value

[AdviseMessageLevel](./connectors.core.domain.advisemessages.advisemessagelevel)<br />

**Remarks:**

The [AdviseMessageLevel](./connectors.core.domain.advisemessages.advisemessagelevel) indicates the seriousness of the message, helping consumers
 prioritize or handle messages appropriately based on their severity.

## Constructors

### <a id="constructors-.ctor"/>**AdviseMessage(AdviseMessageCode, External)**

Initializes a new instance of the [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) class with the specified code and external details.

```csharp
public AdviseMessage(AdviseMessageCode code, External external)
```

#### Parameters

`code` [AdviseMessageCode](./connectors.core.domain.advisemessages.advisemessagecode)<br />
The code that identifies the type of message.

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Additional external details for the message (optional).

## Methods

### <a id="methods-buildbadrequest"/>**BuildBadRequest(String, External)**

Creates an error message indicating a bad request, with optional external details.

```csharp
public static AdviseMessage BuildBadRequest(string err, External external)
```

#### Parameters

`err` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The error message describing the issue.

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Optional. Additional external details associated with the error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.BadRequest](./connectors.core.domain.advisemessages.advisemessagecode#badrequest) 
 and an error level.

### <a id="methods-buildbookingnotfound"/>**BuildBookingNotFound(External)**

Creates a message indicating that the booking could not be found.

```csharp
public static AdviseMessage BuildBookingNotFound(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Additional external details associated with the error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.BookingNotFound](./connectors.core.domain.advisemessages.advisemessagecode#bookingnotfound).

### <a id="methods-buildexternalwarning"/>**BuildExternalWarning(External)**

Creates an external warning message using the specified external details.

```csharp
public static AdviseMessage BuildExternalWarning(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
The external details associated with the warning.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) instance with the [AdviseMessageCode.SupplierWarning](./connectors.core.domain.advisemessages.advisemessagecode#supplierwarning) code 
 and a warning level.

### <a id="methods-buildextraoperationconnectionerror"/>**BuildExtraOperationConnectionError(HttpRequestException)**

Creates a message indicating a connection error occurred during an extra operation.

```csharp
public static AdviseMessage BuildExtraOperationConnectionError(HttpRequestException httpRequestException)
```

#### Parameters

`httpRequestException` HttpRequestException<br />
The exception containing details about the connection error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.ExtraOperationConnectionError](./connectors.core.domain.advisemessages.advisemessagecode#extraoperationconnectionerror).

### <a id="methods-buildhotelnotfoundincontent"/>**BuildHotelNotFoundInContent()**

Creates an error message indicating that the requested hotel was not found in the content database.

```csharp
public static AdviseMessage BuildHotelNotFoundInContent()
```

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.ItemNotFoundInContent](./connectors.core.domain.advisemessages.advisemessagecode#itemnotfoundincontent) 
 and an error level.

### <a id="methods-buildinternalerror"/>**BuildInternalError(String)**

Builds an internal error advise message with the specified error message.

```csharp
public static AdviseMessage BuildInternalError(string msg)
```

#### Parameters

`msg` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The error message to include.

#### Returns

A new [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) instance.

### <a id="methods-buildinternalerror"/>**BuildInternalError(Exception)**

Creates an internal error message using the provided exception details.

```csharp
public static AdviseMessage BuildInternalError(Exception e)
```

#### Parameters

`e` [Exception](https://docs.microsoft.com/en-us/dotnet/api/system.exception)<br />
The exception that caused the error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.InternalError](./connectors.core.domain.advisemessages.advisemessagecode#internalerror) 
 and an error level.

### <a id="methods-buildinternalerror"/>**BuildInternalError(String, External)**

Creates an internal error message with the specified description and external details.

```csharp
public static AdviseMessage BuildInternalError(string msg, External external)
```

#### Parameters

`msg` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The error description.

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Additional external details associated with the error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.InternalError](./connectors.core.domain.advisemessages.advisemessagecode#internalerror) 
 and an error level.

### <a id="methods-buildinternalwarning"/>**BuildInternalWarning(String, External)**

Builds an internal warning message with the specified details.

```csharp
public static AdviseMessage BuildInternalWarning(string err, External external)
```

#### Parameters

`err` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The warning message.

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Optional. External details for the warning.

#### Returns

A new [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) instance.

### <a id="methods-buildmaxoptionsexceedederror"/>**BuildMaxOptionsExceededError(String)**

Creates an error message indicating that the number of options exceeded the allowed maximum.

```csharp
public static AdviseMessage BuildMaxOptionsExceededError(string msg)
```

#### Parameters

`msg` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The error message describing the issue.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.MaxOptionsExceeded](./connectors.core.domain.advisemessages.advisemessagecode#maxoptionsexceeded) 
 and an error level.

### <a id="methods-buildnotimplemented"/>**BuildNotImplemented()**

Creates an informational message indicating that the operation is not implemented.

```csharp
public static AdviseMessage BuildNotImplemented()
```

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.NotImplemented](./connectors.core.domain.advisemessages.advisemessagecode#notimplemented) 
 and an informational level.

### <a id="methods-buildnotimplemented"/>**BuildNotImplemented(String)**

Creates an informational message indicating that the operation is not implemented, with a custom description.

```csharp
public static AdviseMessage BuildNotImplemented(string errorDescription)
```

#### Parameters

`errorDescription` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The custom description for the not implemented message.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.NotImplemented](./connectors.core.domain.advisemessages.advisemessagecode#notimplemented) 
 and an informational level.

### <a id="methods-buildoptionnotfoundinquote"/>**BuildOptionNotFoundInQuote(External)**

Creates a message indicating that an option was not found in the quote.

```csharp
public static AdviseMessage BuildOptionNotFoundInQuote(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Optional. Additional external details associated with the error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.ItemNotAvailable](./connectors.core.domain.advisemessages.advisemessagecode#itemnotavailable).

### <a id="methods-buildsupplierbadrequest"/>**BuildSupplierBadRequest(External)**

Creates a message indicating a bad request was sent to the supplier.

```csharp
public static AdviseMessage BuildSupplierBadRequest(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Optional. Additional external details associated with the error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.SupplierBadRequest](./connectors.core.domain.advisemessages.advisemessagecode#supplierbadrequest).

### <a id="methods-buildsupplierbookingnotconfirmed"/>**BuildSupplierBookingNotConfirmed(External)**

Creates a message indicating that the supplier could not confirm the booking.

```csharp
public static AdviseMessage BuildSupplierBookingNotConfirmed(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Optional. Additional external details associated with the error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.SupplierBookingNotConfirmed](./connectors.core.domain.advisemessages.advisemessagecode#supplierbookingnotconfirmed).

### <a id="methods-buildsupplierconnectionerror"/>**BuildSupplierConnectionError(UInt32)**

Creates a message indicating a connection error occurred with the supplier, including the HTTP status code.

```csharp
public static AdviseMessage BuildSupplierConnectionError(uint httpStatusCode)
```

#### Parameters

`httpStatusCode` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The HTTP status code returned by the supplier.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.SupplierConnectionError](./connectors.core.domain.advisemessages.advisemessagecode#supplierconnectionerror).

### <a id="methods-buildsupplierconnectionerror"/>**BuildSupplierConnectionError(HttpRequestException)**

Creates a message indicating a connection error occurred with the supplier, including exception details.

```csharp
public static AdviseMessage BuildSupplierConnectionError(HttpRequestException httpRequestException)
```

#### Parameters

`httpRequestException` HttpRequestException<br />
The exception containing details about the connection error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.SupplierConnectionError](./connectors.core.domain.advisemessages.advisemessagecode#supplierconnectionerror).

### <a id="methods-buildsuppliererror"/>**BuildSupplierError(External)**

Creates a message indicating an error occurred with the supplier.

```csharp
public static AdviseMessage BuildSupplierError(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Additional external details associated with the error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.SupplierError](./connectors.core.domain.advisemessages.advisemessagecode#suppliererror).

### <a id="methods-buildsuppliernoresults"/>**BuildSupplierNoResults(External)**

Creates a warning message indicating that no results were found from the supplier.

```csharp
public static AdviseMessage BuildSupplierNoResults(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Optional. Additional external details associated with the warning.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.SupplierNoResultsFound](./connectors.core.domain.advisemessages.advisemessagecode#suppliernoresultsfound).

### <a id="methods-buildsupplierpricechanged"/>**BuildSupplierPriceChanged(External)**

Builds an advise message indicating a supplier price change.

```csharp
public static AdviseMessage BuildSupplierPriceChanged(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Optional. External details associated with the message.

#### Returns

A new [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) instance.

### <a id="methods-buildsupplierresponsemaxsizeerror"/>**BuildSupplierResponseMaxSizeError(String)**

Creates an error message indicating that the supplier's response size exceeded the maximum allowed limit.

```csharp
public static AdviseMessage BuildSupplierResponseMaxSizeError(string msg)
```

#### Parameters

`msg` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The error message describing the issue.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.SupplierResponseMaxSizeExceeded](./connectors.core.domain.advisemessages.advisemessagecode#supplierresponsemaxsizeexceeded) 
 and an error level.

### <a id="methods-buildsupplierresponsenotserializable"/>**BuildSupplierResponseNotSerializable(External)**

Creates a message indicating that the supplier's response could not be deserialized.

```csharp
public static AdviseMessage BuildSupplierResponseNotSerializable(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Optional. Additional external details associated with the error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.SupplierResponseNotSerializable](./connectors.core.domain.advisemessages.advisemessagecode#supplierresponsenotserializable).

### <a id="methods-buildsuppliertimeout"/>**BuildSupplierTimeout(External)**

Creates a message indicating a timeout occurred while communicating with the supplier.

```csharp
public static AdviseMessage BuildSupplierTimeout(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Optional. Additional external details associated with the timeout.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.SupplierTimeout](./connectors.core.domain.advisemessages.advisemessagecode#suppliertimeout).

### <a id="methods-buildsuppliertoomanyrequests"/>**BuildSupplierTooManyRequests(External)**

Creates a message indicating too many requests were sent to the supplier.

```csharp
public static AdviseMessage BuildSupplierTooManyRequests(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Additional external details associated with the error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.SupplierTooManyRequests](./connectors.core.domain.advisemessages.advisemessagecode#suppliertoomanyrequests).

### <a id="methods-buildunauthorized"/>**BuildUnauthorized(External)**

Creates an error message indicating that the operation was unauthorized.

```csharp
public static AdviseMessage BuildUnauthorized(External external)
```

#### Parameters

`external` [External](./connectors.core.domain.advisemessages.external)<br />
Optional. Additional external details associated with the error.

#### Returns

An [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) with the code [AdviseMessageCode.Unauthorized](./connectors.core.domain.advisemessages.advisemessagecode#unauthorized) 
 and an error level.
