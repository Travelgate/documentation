# Stat

Namespace: Connectors.Core.Domain

Stats send to XTG Insights team.

```csharp
public class Stat : IStat
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Stat](./connectors.core.domain.stat)<br />
Implements [IStat](./connectors.core.domain.istat)

## Properties

### <a id="properties-access"/>**Access**

Gets or sets the access.

```csharp
public string Access { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-advisemessages"/>**AdviseMessages**

Gets or sets the advise messages.

```csharp
public IEnumerable<AdviseMessageCode> AdviseMessages { get; set; }
```

#### Property Value

[IEnumerable&lt;AdviseMessageCode&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### <a id="properties-audit"/>**Audit**

Gets or sets the audit flag.

```csharp
public bool Audit { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### <a id="properties-byproxy"/>**ByProxy**

Gets or sets the by proxy.

```csharp
public int ByProxy { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### <a id="properties-client"/>**Client**

Gets or sets the client.

```csharp
public string Client { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-connectorstime"/>**ConnectorsTime**

Gets or sets the connectors time.

```csharp
public long ConnectorsTime { get; set; }
```

#### Property Value

[Int64](https://docs.microsoft.com/en-us/dotnet/api/system.int64)<br />

### <a id="properties-discardeditems"/>**DiscardedItems**

Discarded items in the response.

```csharp
public int DiscardedItems { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### <a id="properties-discardtype"/>**DiscardType**

Discard type in the response.

```csharp
public DiscardTypeEnum DiscardType { get; set; }
```

#### Property Value

[DiscardTypeEnum](./connectors.core.domain.stat.discardtypeenum)<br />

### <a id="properties-environment"/>**Environment**

Gets or sets the environment.

```csharp
public string Environment { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-executionprovider"/>**ExecutionProvider**

Gets or sets the execution provider.

```csharp
public string ExecutionProvider { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-format"/>**Format**

Gets or sets the format.

```csharp
public string Format { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-href"/>**Href**

Gets or sets the href.

```csharp
public string Href { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-httpstatuscode"/>**HttpStatusCode**

Gets or sets the HTTP status code.

```csharp
public int HttpStatusCode { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### <a id="properties-legacyerrorcode"/>**LegacyErrorCode**

Gets or sets the legacy error code.

```csharp
public int LegacyErrorCode { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### <a id="properties-operation"/>**Operation**

Gets or sets the operation.

```csharp
public int Operation { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### <a id="properties-operationname"/>**OperationName**

Gets or sets the operation name.

```csharp
public string OperationName { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-operationtype"/>**OperationType**

Gets or sets the operation type.

```csharp
public OperationType OperationType { get; set; }
```

#### Property Value

[OperationType](./connectors.core.domain.operationtype)<br />

### <a id="properties-platform"/>**Platform**

Gets or sets the platform.

```csharp
public string Platform { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-servicetype"/>**ServiceType**

Gets or sets the service type.

```csharp
public int ServiceType { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### <a id="properties-source"/>**Source**

Gets or sets the source.

```csharp
public SourceType Source { get; set; }
```

#### Property Value

[SourceType](./connectors.core.domain.headers.sourcetype)<br />

### <a id="properties-startat"/>**StartAt**

Gets or sets the start at.

```csharp
public string StartAt { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-stattype"/>**StatType**

Gets or sets the stat type.

```csharp
public int StatType { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### <a id="properties-supplier"/>**Supplier**

Gets or sets the supplier.

```csharp
public string Supplier { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-tgxcorrelationid"/>**TgxCorrelationId**

Gets or sets the Tgx correlation ID.

```csharp
public string TgxCorrelationId { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-tgxtag"/>**TgxTag**

Gets or sets the Tgx tag.

```csharp
public string TgxTag { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-uselegacyerrorcode"/>**UseLegacyErrorCode**

Gets or sets the use legacy error code flag.

```csharp
public bool UseLegacyErrorCode { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

## Constructors

### <a id="constructors-.ctor"/>**Stat()**

```csharp
public Stat()
```
