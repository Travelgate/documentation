# TgxHeaders

Namespace: Connectors.Core.Domain.Headers

Represents internal headers used within the Travelgate system, providing metadata about the flow of requests 
 through different layers. These headers include fields such as correlation IDs, origin details, 
 IP addresses, custom tags, and other operational information.

```csharp
public class TgxHeaders
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [TgxHeaders](./connectors.core.domain.headers.tgxheaders)

## Fields

### <a id="fields-auditkey"/>**AuditKey**

The key for the audit header.

```csharp
public static string AuditKey;
```

### <a id="fields-connectorsauditkey"/>**ConnectorsAuditKey**

The key for the Connectors Audit header.

```csharp
public static string ConnectorsAuditKey;
```

### <a id="fields-connectorsextraprovideroperation"/>**ConnectorsExtraProviderOperation**

The key for the Connectors ExtraProviderOperation header.

```csharp
public static string ConnectorsExtraProviderOperation;
```

### <a id="fields-connectorsoriginoperation"/>**ConnectorsOriginOperation**

The key for the Connectors OriginOperation header.

```csharp
public static string ConnectorsOriginOperation;
```

### <a id="fields-connectorspreoperation"/>**ConnectorsPreOperation**

The key for the Connectors PreOperation header.

```csharp
public static string ConnectorsPreOperation;
```

### <a id="fields-connectorstestkey"/>**ConnectorsTestKey**

The key for the Connectors Test header.

```csharp
public static string ConnectorsTestKey;
```

### <a id="fields-correlationidkey"/>**CorrelationIdKey**

The key for the correlation ID header.

```csharp
public static string CorrelationIdKey;
```

### <a id="fields-hrefidkey"/>**HrefIdKey**

The key for the Href ID header.

```csharp
public static string HrefIdKey;
```

### <a id="fields-originidkey"/>**OriginIdKey**

The key for the origin ID header.

```csharp
public static string OriginIdKey;
```

### <a id="fields-originipkey"/>**OriginIpKey**

The key for the origin IP header.

```csharp
public static string OriginIpKey;
```

### <a id="fields-tagkey"/>**TagKey**

The key for the tag header.

```csharp
public static string TagKey;
```

### <a id="fields-tgxrefererkey"/>**TgxRefererKey**

The key for the TgxSource header.

```csharp
public static string TgxRefererKey;
```

### <a id="fields-tgxsource"/>**TgxSource**

The key for the TgxSource header.

```csharp
public static string TgxSource;
```

## Properties

### <a id="properties-authorization"/>**Authorization**

The authorization value.

```csharp
public string Authorization { get; private set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-connectorsaudit"/>**ConnectorsAudit**

Gets or sets the Connectors Audit value.

```csharp
public string ConnectorsAudit { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-correlationid"/>**CorrelationId**

Gets or sets the correlation ID.

```csharp
public string CorrelationId { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-gzip"/>**Gzip**

Indicates whether Gzip encoding is enabled.

```csharp
public bool Gzip { get; private set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### <a id="properties-href"/>**Href**

Gets the Href value.

```csharp
public string Href { get; private set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-isaudit"/>**IsAudit**

Indicates whether audit is enabled.

```csharp
public bool IsAudit { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### <a id="properties-originid"/>**OriginId**

Gets or sets the origin ID.

```csharp
public string OriginId { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-originip"/>**OriginIp**

Gets or sets the origin IP.

```csharp
public string OriginIp { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-originoperation"/>**OriginOperation**

Gets the origin operation.

```csharp
public int OriginOperation { get; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### <a id="properties-sourcetype"/>**SourceType**

Gets the source type.

```csharp
public SourceType SourceType { get; set; }
```

#### Property Value

[SourceType](./connectors.core.domain.headers.sourcetype)<br />

### <a id="properties-tag"/>**Tag**

Gets or sets the tag value.

```csharp
public string Tag { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### <a id="properties-test"/>**Test**

Gets or sets the Connectors Test value.

```csharp
public string Test { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

## Constructors

### <a id="constructors-.ctor"/>**TgxHeaders()**

Initializes a new instance of the [TgxHeaders](./connectors.core.domain.headers.tgxheaders) class.

```csharp
public TgxHeaders()
```

## Methods

### <a id="methods-asdictionary"/>**AsDictionary()**

Converts the TgxHeaders to a dictionary.

```csharp
public Dictionary<String, String> AsDictionary()
```

#### Returns

The TgxHeaders as a dictionary.

### <a id="methods-enableaudit"/>**EnableAudit()**

Enables audit.

```csharp
public void EnableAudit()
```

### <a id="methods-trybind"/>**TryBind(IDictionary&lt;String, StringValues&gt;, String, ref AdviseMessage)**

Tries to bind the headers.

```csharp
public bool TryBind(IDictionary<String, StringValues> headers, string refererInput, ref AdviseMessage adviseMessage)
```

#### Parameters

`headers` [IDictionary&lt;String, StringValues&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.idictionary-2)<br />
The headers to bind.

`refererInput` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`adviseMessage` [AdviseMessage](./connectors.core.domain.advisemessages.advisemessage)<br />
The advise message.

#### Returns

`true` if the binding is successful; otherwise, `false`.
