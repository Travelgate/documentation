# External

Namespace: Connectors.Core.Domain.AdviseMessages

Additional information provided by the supplier, associated with a warning or error message.

```csharp
public class External
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [External](./connectors.core.domain.advisemessages.external)

**Remarks:**

This class complements an [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage) by including details specific to the supplier, 
 such as their internal code, message, and the HTTP status code of their response.

## Properties

### <a id="properties-code"/>**Code**

The supplier's internal code for identifying the nature of the response or error.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This code is useful for tracing or diagnosing supplier-specific issues.

### <a id="properties-httpstatuscode"/>**HttpStatusCode**

The HTTP status code of the supplier's response.

```csharp
public int HttpStatusCode { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

**Remarks:**

Reflects the HTTP outcome of the operation with the supplier. Examples:
 - 200: OK
 - 400: Bad Request
 - 500: Internal Server Error

### <a id="properties-message"/>**Message**

A descriptive message returned by the supplier.

```csharp
public string Message { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

Typically a human-readable explanation of the supplier's response context.

## Constructors

### <a id="constructors-.ctor"/>**External(String, String, Int32)**

Creates a new instance of the [External](./connectors.core.domain.advisemessages.external) class.

```csharp
public External(string code, string message, int httpStatusCode)
```

#### Parameters

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The supplier's internal code that identifies the response or error.

`message` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
A descriptive message returned by the supplier.

`httpStatusCode` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />
The HTTP status code of the supplier's response. Default is 200.
