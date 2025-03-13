# ProviderAudit

Namespace: Connectors.Core.Domain.ProviderAudit

Represents an audit log for a provider, including details of requests and responses 
 exchanged during an operation.

```csharp
public class ProviderAudit
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ProviderAudit](./connectors.core.domain.provideraudit.provideraudit)

## Properties

### <a id="properties-request"/>**Request**

Collection of audit entries for provider requests.
 Each entry contains details about a specific request made to the provider.

```csharp
public IEnumerable<ProviderAuditRq> Request { get; set; }
```

#### Property Value

[IEnumerable&lt;ProviderAuditRq&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### <a id="properties-response"/>**Response**

Collection of audit entries for provider responses.
 Each entry contains details about a specific response received from the provider.

```csharp
public IEnumerable<ProviderAuditRs> Response { get; set; }
```

#### Property Value

[IEnumerable&lt;ProviderAuditRs&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

## Constructors

### <a id="constructors-.ctor"/>**ProviderAudit()**

```csharp
public ProviderAudit()
```
