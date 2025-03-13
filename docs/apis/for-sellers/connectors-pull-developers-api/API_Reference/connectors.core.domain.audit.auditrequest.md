# AuditRequest

Namespace: Connectors.Core.Domain.Audit

Represents the audit request, containing details about the request made to the supplier.

```csharp
public class AuditRequest
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AuditRequest](./connectors.core.domain.audit.auditrequest)

## Properties

### <a id="properties-headers"/>**Headers**

The headers of the audit request.

```csharp
public IDictionary<String, String> Headers { get; set; }
```

#### Property Value

[IDictionary&lt;String, String&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.idictionary-2)<br />

**Remarks:**

Contains key-value pairs representing the headers sent in the request to the supplier.
 Examples include "Content-Type", etc.

### <a id="properties-path"/>**Path**

The path of the audit request.

```csharp
public string Path { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

Represents the endpoint or resource path accessed in the request. 
 For example, "/api/v1/hotels/search".

### <a id="properties-requestbody"/>**RequestBody**

The body content of the audit request.

```csharp
public BodyContent RequestBody { get; set; }
```

#### Property Value

[BodyContent](./connectors.core.domain.audit.bodycontent)<br />

**Remarks:**

Includes details about the request payload, such as its type, size, and value. 
 See [BodyContent](./connectors.core.domain.audit.bodycontent) for more information.

## Constructors

### <a id="constructors-.ctor"/>**AuditRequest()**

```csharp
public AuditRequest()
```
