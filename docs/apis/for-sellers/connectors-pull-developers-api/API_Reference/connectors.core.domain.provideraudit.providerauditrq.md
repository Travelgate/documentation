# ProviderAuditRq

Namespace: Connectors.Core.Domain.ProviderAudit

Represents a request for provider audit, capturing details about the data sent to the provider.

```csharp
public class ProviderAuditRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ProviderAuditRq](./connectors.core.domain.provideraudit.providerauditrq)

**Remarks:**

This class encapsulates the information necessary to log or trace requests sent to providers, 
 including the timestamp, data payload, URL, headers, and HTTP method.

## Properties

### <a id="properties-data"/>**Data**

The payload data included in the request.

```csharp
public string Data { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property contains the serialized data sent in the request body, often in JSON or XML format.

### <a id="properties-headers"/>**Headers**

A collection of headers included in the request.

```csharp
public Dictionary<String, String> Headers { get; set; }
```

#### Property Value

[Dictionary&lt;String, String&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br />

**Remarks:**

Headers provide additional metadata for the request, such as authentication tokens, content type, or custom information.

### <a id="properties-httpmethod"/>**HttpMethod**

The HTTP method used to send the request.

```csharp
public HttpMethod HttpMethod { get; set; }
```

#### Property Value

HttpMethod<br />

**Remarks:**

Common methods include:
 - : For retrieving data.
 - : For sending data to create a resource.
 - : For updating an existing resource.
 - : For deleting a resource.

### <a id="properties-sendat"/>**SendAt**

The timestamp indicating when the request was sent.

```csharp
public string SendAt { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The value is typically in ISO 8601 format (e.g., "2023-01-01T12:34:56Z") to ensure compatibility 
 across systems and time zones.

### <a id="properties-url"/>**Url**

The URL of the provider endpoint to which the request is sent.

```csharp
public string Url { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This represents the full URI of the target provider, including any query parameters or path segments.

## Constructors

### <a id="constructors-.ctor"/>**ProviderAuditRq()**

```csharp
public ProviderAuditRq()
```
