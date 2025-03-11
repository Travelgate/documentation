# AuditResponse

Namespace: Connectors.Core.Domain.Audit

Represents the response details of an audit operation, capturing the outcome of a transaction with a supplier.

```csharp
public class AuditResponse
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AuditResponse](./connectors.core.domain.audit.auditresponse)

**Remarks:**

This class provides comprehensive information about the supplier's response during an audited operation, 
 including status code, headers, body content, and any exceptions that may have occurred.

## Properties

### <a id="properties-exceptionmessage"/>**ExceptionMessage**

The exception message, if an error occurred during the operation.

```csharp
public string ExceptionMessage { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property contains the error message if the request resulted in an exception.
 If no exception occurred, this property is `null`.

### <a id="properties-responsebody"/>**ResponseBody**

The body content of the response.

```csharp
public BodyContent ResponseBody { get; set; }
```

#### Property Value

[BodyContent](./connectors.core.domain.audit.bodycontent)<br />

**Remarks:**

Captures the payload returned by the supplier, including details like its type, size, 
 and whether it is compressed. See [BodyContent](./connectors.core.domain.audit.bodycontent) for more details.

### <a id="properties-responseheaders"/>**ResponseHeaders**

The headers returned in the response.

```csharp
public IDictionary<String, String> ResponseHeaders { get; set; }
```

#### Property Value

[IDictionary&lt;String, String&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.idictionary-2)<br />

**Remarks:**

Contains key-value pairs representing the headers included in the supplier's response,
 such as "Content-Type", "Cache-Control", or "X-Request-ID".

### <a id="properties-responsestatuscode"/>**ResponseStatusCode**

The HTTP status code returned in the response.

```csharp
public int ResponseStatusCode { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

**Remarks:**

Indicates the outcome of the supplier's response. Common examples include:
 - 200: OK
 - 400: Bad Request
 - 500: Internal Server Error

## Constructors

### <a id="constructors-.ctor"/>**AuditResponse()**

```csharp
public AuditResponse()
```
