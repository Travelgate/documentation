# CancelPolicy

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a cancellation policy for a hotel booking.

```csharp
public class CancelPolicy
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CancelPolicy](./connectors.pull.hotel.domain.contracts.common.cancelpolicy)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute, ProtoIncludeAttribute

**Remarks:**

A cancellation policy defines the conditions under which a booking can be canceled, 
 including whether it is refundable and the penalties that apply if the booking is canceled.

## Properties

### **Refundable**

Indicates whether the booking is refundable.

```csharp
public bool Refundable { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

**Remarks:**

If `true`, the booking can be canceled, and penalties described in [CancelPolicy.CancelPenalties](./connectors.pull.hotel.domain.contracts.common.cancelpolicy#cancelpenalties) may apply.
 If `false`, the booking is non-refundable, and no penalties are provided.

### **CancelPenalties**

A collection of penalties that apply if the booking is canceled.

```csharp
public IEnumerable<CancelPenalty> CancelPenalties { get; set; }
```

#### Property Value

[IEnumerable\<CancelPenalty\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each penalty is represented by a [CancelPenalty](./connectors.pull.hotel.domain.contracts.common.cancelpenalty) instance and defines specific 
 conditions (e.g., number of hours before check-in, penalty type, and amount).
 This property is required if [CancelPolicy.Refundable](./connectors.pull.hotel.domain.contracts.common.cancelpolicy#refundable) is `true`.

### **CancelPolicyDescription**

Provides additional details or a textual summary of the cancellation policy.

```csharp
public string CancelPolicyDescription { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This description can include supplier-provided information about the policy, 
 such as "Free cancellation up to 24 hours before check-in" or "Non-refundable after booking."

## Constructors

### **CancelPolicy()**

Initializes a new instance of the [CancelPolicy](./connectors.pull.hotel.domain.contracts.common.cancelpolicy) class.
 This constructor is protected and used for serialization purposes.

```csharp
protected CancelPolicy()
```

### **CancelPolicy(Boolean, IEnumerable\<CancelPenalty\>)**

Initializes a new instance of the [CancelPolicy](./connectors.pull.hotel.domain.contracts.common.cancelpolicy) class with the specified parameters.

```csharp
public CancelPolicy(bool refundable, IEnumerable<CancelPenalty> cancelPenalties)
```

#### Parameters

`refundable` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
Indicates whether the booking is refundable.
 If `true`, cancellation penalties must be provided in `cancelPenalties`.

`cancelPenalties` [IEnumerable\<CancelPenalty\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
A collection of [CancelPenalty](./connectors.pull.hotel.domain.contracts.common.cancelpenalty) instances that define the penalties applied 
 if the booking is canceled. Required if the booking is refundable.

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown when `cancelPenalties` is `null` for a refundable booking.
