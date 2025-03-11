# RequestValidationErrorRs

Namespace: Connectors.Core.Domain

Class for internal purposes

```csharp
public class RequestValidationErrorRs
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [RequestValidationErrorRs](./connectors.core.domain.requestvalidationerrorrs)

## Properties

### <a id="properties-advisemessages"/>**AdviseMessages**

Gets the collection of advice messages.

```csharp
public IEnumerable<AdviseMessage> AdviseMessages { get; set; }
```

#### Property Value

[IEnumerable&lt;AdviseMessage&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

## Constructors

### <a id="constructors-.ctor"/>**RequestValidationErrorRs(IEnumerable&lt;AdviseMessage&gt;)**

Initializes a new instance of the [RequestValidationErrorRs](./connectors.core.domain.requestvalidationerrorrs) class.

```csharp
public RequestValidationErrorRs(IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`adviseMessages` [IEnumerable&lt;AdviseMessage&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of advise messages.
