# ProviderAuditRs

Namespace: Connectors.Core.Domain.ProviderAudit

Represents the response received from a provider during an audit process.

```csharp
public class ProviderAuditRs
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ProviderAuditRs](./connectors.core.domain.provideraudit.providerauditrs)

**Remarks:**

This class captures details about the response received from a provider, including the timestamp of reception, 
 data payload, headers, and the HTTP status code. It is used to log and trace provider interactions.

## Properties

### <a id="properties-data"/>**Data**

The payload data contained in the provider's response.

```csharp
public string Data { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property contains the serialized response body, often in JSON or XML format, as returned by the provider.

### <a id="properties-headers"/>**Headers**

A collection of headers included in the provider's response.

```csharp
public Dictionary<String, String> Headers { get; set; }
```

#### Property Value

[Dictionary&lt;String, String&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br />

**Remarks:**

Headers provide additional context or metadata about the response, such as content type, caching policies, or custom information.

### <a id="properties-receivedat"/>**ReceivedAt**

The timestamp indicating when the response was received.

```csharp
public string ReceivedAt { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The value is typically in ISO 8601 format (e.g., "2023-01-01T12:34:56Z"), enabling consistent time tracking.

### <a id="properties-statuscode"/>**StatusCode**

The HTTP status code returned by the provider.

```csharp
public int StatusCode { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

**Remarks:**

Indicates the outcome of the provider's response. Common examples include:
 - 200: OK
 - 400: Bad Request
 - 500: Internal Server Error

## Constructors

### <a id="constructors-.ctor"/>**ProviderAuditRs()**

```csharp
public ProviderAuditRs()
```
