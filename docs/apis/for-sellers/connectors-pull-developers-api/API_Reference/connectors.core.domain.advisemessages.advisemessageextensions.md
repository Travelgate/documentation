# AdviseMessageExtensions

Namespace: Connectors.Core.Domain.AdviseMessages

Extension methods for AdviseMessage collection.

```csharp
public static class AdviseMessageExtensions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AdviseMessageExtensions](./connectors.core.domain.advisemessages.advisemessageextensions)

## Methods

### <a id="methods-haveerrors"/>**HaveErrors(IEnumerable&lt;AdviseMessage&gt;)**

Checks if the AdviseMessage collection has any errors.

```csharp
public static bool HaveErrors(IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`adviseMessages` [IEnumerable&lt;AdviseMessage&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The AdviseMessage collection.

#### Returns

True if the collection has errors, otherwise false.
