# BodyContent

Namespace: Connectors.Core.Domain.Audit

Represents the body content of an audit, containing details about transactions made with the supplier.

```csharp
public class BodyContent
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [BodyContent](./connectors.core.domain.audit.bodycontent)

**Remarks:**

This class is part of the [AuditData&lt;TStat&gt;](./connectors.core.domain.audit.auditdata-1) structure and provides detailed information
 about the request or response body exchanged with the supplier. It includes details such as the
 body type, size, content, and compression status.

## Properties

### <a id="properties-gzip"/>**Gzip**

Indicates whether the body content is compressed using Gzip.

```csharp
public bool Gzip { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

**Remarks:**

If `true`, the body content is Gzip-compressed. This helps reduce payload size but requires decompression before use.

### <a id="properties-length"/>**Length**

The length of the body content, in bytes.

```csharp
public Nullable<Int64> Length { get; set; }
```

#### Property Value

[Nullable&lt;Int64&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

**Remarks:**

Indicates the size of the body content. Useful for debugging or optimizing payload size.

### <a id="properties-type"/>**Type**

The MIME type of the body content.

```csharp
public string Type { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

Examples include "application/json", "text/xml", etc.
 This helps identify the format of the data exchanged in the transaction.

### <a id="properties-value"/>**Value**

The value of the body content.

```csharp
public RecyclableMemoryStream Value { get; set; }
```

#### Property Value

RecyclableMemoryStream<br />

**Remarks:**

This is the raw data of the body content, stored in a  for efficient memory usage.

## Constructors

### <a id="constructors-.ctor"/>**BodyContent()**

```csharp
public BodyContent()
```
