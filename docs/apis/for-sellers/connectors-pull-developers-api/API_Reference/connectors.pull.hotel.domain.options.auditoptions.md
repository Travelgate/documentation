# AuditOptions

Namespace: Connectors.Pull.Hotel.Domain.Options

Represents options for auditing operations.

```csharp
public class AuditOptions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AuditOptions](./connectors.pull.hotel.domain.options.auditoptions)

## Properties

### **Enabled**

Gets or sets a value indicating whether auditing is enabled.

```csharp
public bool Enabled { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **Type**

Gets or sets the type of audit to be performed.

```csharp
public AuditType Type { get; set; }
```

#### Property Value

[AuditType](./connectors.pull.hotel.domain.options.audittype)<br />

### **ShouldAuditRefresh**

Gets or sets the time interval for refreshing the audit.

```csharp
public TimeSpan ShouldAuditRefresh { get; set; }
```

#### Property Value

[TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/system.timespan)<br />

## Constructors

### **AuditOptions()**

```csharp
public AuditOptions()
```
