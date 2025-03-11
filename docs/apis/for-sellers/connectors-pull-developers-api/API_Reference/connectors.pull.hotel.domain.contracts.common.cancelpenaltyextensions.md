# CancelPenaltyExtensions

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Provides extension methods for the [CancelPenalty](./connectors.pull.hotel.domain.contracts.common.cancelpenalty) class.

```csharp
public static class CancelPenaltyExtensions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CancelPenaltyExtensions](./connectors.pull.hotel.domain.contracts.common.cancelpenaltyextensions)<br />
Attributes [ExtensionAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.extensionattribute)

## Methods

### **ToAmount(CancelPenalty, Price, UInt32, Boolean)**

Converts a [CancelPenalty](./connectors.pull.hotel.domain.contracts.common.cancelpenalty) to an amount-based penalty.

```csharp
public static CancelPenalty ToAmount(CancelPenalty cancelPenalty, Price price, uint nights, bool useGross)
```

#### Parameters

`cancelPenalty` [CancelPenalty](./connectors.pull.hotel.domain.contracts.common.cancelpenalty)<br />
The cancel penalty to convert.

`price` Price<br />
The price of the booking.

`nights` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The number of nights for the booking.

`useGross` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
A flag indicating whether to use the gross price (true) or net price (false).

#### Returns

[CancelPenalty](./connectors.pull.hotel.domain.contracts.common.cancelpenalty)<br />
A new [CancelPenalty](./connectors.pull.hotel.domain.contracts.common.cancelpenalty) with the penalty converted to an amount, or the original penalty if no conversion was necessary.
