# AuditData&lt;TStat&gt;

Namespace: Connectors.Core.Domain.Audit

Represents audit data that includes request, response, and statistics information for a transaction.

```csharp
public class AuditData<TStat> : System.IDisposable
```

#### Type Parameters

`TStat`<br />
The type of the statistic associated with the audit data.

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AuditData&lt;TStat&gt;](./connectors.core.domain.audit.auditdata-1)<br />
Implements [IDisposable](https://docs.microsoft.com/en-us/dotnet/api/system.idisposable)

**Remarks:**

This class is designed to capture and manage detailed information about transactions, including the request sent,
 the response received, and any related statistical data. It also provides utilities for estimating the size
 of the audit data and managing its lifecycle.

## Properties

### <a id="properties-auditrequest"/>**AuditRequest**

The request details of the audited transaction.

```csharp
public AuditRequest AuditRequest { get; set; }
```

#### Property Value

[AuditRequest](./connectors.core.domain.audit.auditrequest)<br />

**Remarks:**

Contains information such as headers, body content, and the endpoint path.
 See [AuditData&lt;TStat&gt;.AuditRequest](./connectors.core.domain.audit.auditdata-1#auditrequest) for more details.

### <a id="properties-auditresponse"/>**AuditResponse**

The response details of the audited transaction.

```csharp
public AuditResponse AuditResponse { get; set; }
```

#### Property Value

[AuditResponse](./connectors.core.domain.audit.auditresponse)<br />

**Remarks:**

Includes the HTTP status code, headers, body content, and any associated exceptions.
 See [AuditData&lt;TStat&gt;.AuditResponse](./connectors.core.domain.audit.auditdata-1#auditresponse) for more details.

### <a id="properties-stat"/>**Stat**

The statistics or metadata associated with the audit data.

```csharp
public TStat Stat { get; set; }
```

#### Property Value

TStat<br />

**Remarks:**

The type of statistics is determined by the generic parameter .
 This can include performance metrics, processing times, or other custom data.

## Constructors

### <a id="constructors-.ctor"/>**AuditData()**

```csharp
public AuditData()
```

## Methods

### <a id="methods-dispose"/>**Dispose()**

Disposes of the resources used by the audit data.

```csharp
public void Dispose()
```

**Remarks:**

This method releases the memory streams associated with the request and response bodies. 
 It should be called when the audit data is no longer needed.

### <a id="methods-getaproximatesize"/>**GetAproximateSize(Int32)**

Calculates the approximate size of the audit data without assuming base64 encoding.

```csharp
public long GetAproximateSize(int marginSize)
```

#### Parameters

`marginSize` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />
The margin size to add to the calculated size, in bytes.

#### Returns

The approximate size of the audit data, in bytes.

**Remarks:**

This method is useful for calculating the raw size of the request and response bodies without encoding.

### <a id="methods-getaproximatesizebase64"/>**GetAproximateSizeBase64(Int32)**

Calculates the approximate size of the audit data in base64 format.

```csharp
public long GetAproximateSizeBase64(int marginSize)
```

#### Parameters

`marginSize` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />
The margin size to add to the calculated size, in bytes.

#### Returns

The approximate size of the audit data in base64 format, in bytes.

**Remarks:**

This method assumes that the request and response bodies are stored in base64 format, 
 which increases their size by approximately 33% (4/3 ratio).
