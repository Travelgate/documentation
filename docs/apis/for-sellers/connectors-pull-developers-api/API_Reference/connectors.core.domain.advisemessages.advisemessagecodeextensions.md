# AdviseMessageCodeExtensions

Namespace: Connectors.Core.Domain.AdviseMessages

This class contains extension methods for the AdviseMessageCode enumeration.

```csharp
public static class AdviseMessageCodeExtensions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AdviseMessageCodeExtensions](./connectors.core.domain.advisemessages.advisemessagecodeextensions)

## Methods

### <a id="methods-tolegacy"/>**ToLegacy(AdviseMessageCode)**

Converts an AdviseMessageCode to a LegacyErrorCodes value.

```csharp
public static LegacyErrorCodes ToLegacy(AdviseMessageCode adviseMessageCode)
```

#### Parameters

`adviseMessageCode` [AdviseMessageCode](./connectors.core.domain.advisemessages.advisemessagecode)<br />
The AdviseMessageCode to convert.

#### Returns

The corresponding LegacyErrorCodes value.
