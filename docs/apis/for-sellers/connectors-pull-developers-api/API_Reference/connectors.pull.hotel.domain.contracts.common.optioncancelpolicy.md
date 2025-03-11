# OptionCancelPolicy

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a cancellation policy for a hotel option, extending the base [CancelPolicy](./connectors.pull.hotel.domain.contracts.common.cancelpolicy) class.

```csharp
public class OptionCancelPolicy : CancelPolicy
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CancelPolicy](./connectors.pull.hotel.domain.contracts.common.cancelpolicy) → [OptionCancelPolicy](./connectors.pull.hotel.domain.contracts.common.optioncancelpolicy)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

This class is specific to options in hotel operations, adding support for room-specific cancellation policy descriptions. 
 It provides details on whether an option is refundable and the associated penalties and room-specific details, if any.

## Properties

### **RoomCancelPolicyDescriptions**

Gets or sets the list of room-specific cancellation policy descriptions.

```csharp
public List<RoomCancelPolicyDescriptions> RoomCancelPolicyDescriptions { get; set; }
```

#### Property Value

[List\<RoomCancelPolicyDescriptions\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

**Remarks:**

This property contains detailed cancellation policy information for individual rooms within the option.
 Each [OptionCancelPolicy.RoomCancelPolicyDescriptions](./connectors.pull.hotel.domain.contracts.common.optioncancelpolicy#roomcancelpolicydescriptions) instance describes the cancellation conditions and penalties 
 applicable to a specific room in the option.

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

### **OptionCancelPolicy()**

Initializes a new instance of the [OptionCancelPolicy](./connectors.pull.hotel.domain.contracts.common.optioncancelpolicy) class.
 This constructor is protected and parameterless, used primarily for serialization purposes.

```csharp
protected OptionCancelPolicy()
```

### **OptionCancelPolicy(Boolean, IEnumerable\<CancelPenalty\>, List\<RoomCancelPolicyDescriptions\>)**

Initializes a new instance of the [OptionCancelPolicy](./connectors.pull.hotel.domain.contracts.common.optioncancelpolicy) class with specified parameters.

```csharp
public OptionCancelPolicy(bool refundable, IEnumerable<CancelPenalty> cancelPenalties, List<RoomCancelPolicyDescriptions> roomCancelPolicyDescriptions)
```

#### Parameters

`refundable` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
Indicates whether the option is refundable.

`cancelPenalties` [IEnumerable\<CancelPenalty\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
A collection of cancellation penalties associated with this policy.

`roomCancelPolicyDescriptions` [List\<RoomCancelPolicyDescriptions\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />
An optional list of room-specific cancellation policy descriptions, providing detailed policies for individual rooms.

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown when `cancelPenalties` is null for refundable options.
