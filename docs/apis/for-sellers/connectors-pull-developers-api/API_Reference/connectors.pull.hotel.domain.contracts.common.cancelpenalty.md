# CancelPenalty

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a cancellation penalty for a hotel booking.

```csharp
public class CancelPenalty
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CancelPenalty](./connectors.pull.hotel.domain.contracts.common.cancelpenalty)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

Cancellation penalties define the conditions under which a fee or restriction applies if the booking is canceled.
 These penalties are typically enforced by the supplier based on the booking terms.

## Properties

### **HoursBefore**

Indicates the number of hours before the check-in date when the penalty becomes applicable.

```csharp
public uint HoursBefore { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

**Remarks:**

This value helps determine how far in advance a booking must be canceled to avoid the penalty.

### **PenaltyType**

Specifies the type of penalty enforced upon cancellation.

```csharp
public PenaltyType PenaltyType { get; set; }
```

#### Property Value

[PenaltyType](./connectors.pull.hotel.domain.contracts.common.penaltytype)<br />

**Remarks:**

Possible values for [CancelPenalty.PenaltyType](./connectors.pull.hotel.domain.contracts.common.cancelpenalty#penaltytype):

- **[PenaltyType.Amount](./connectors.pull.hotel.domain.contracts.common.penaltytype#amount)** - A fixed monetary amount.
- **[PenaltyType.Nights](./connectors.pull.hotel.domain.contracts.common.penaltytype#nights)** - A penalty expressed as the cost of a specific number of nights.
- **[PenaltyType.Percentage](./connectors.pull.hotel.domain.contracts.common.penaltytype#percentage)** - A percentage of the total booking cost.

### **Currency**

Specifies the currency in which the penalty value is expressed.

```csharp
public Currency Currency { get; set; }
```

#### Property Value

Currency<br />

**Remarks:**

Example: USD, EUR, GBP.

### **Value**

Indicates the value of the penalty.

```csharp
public double Value { get; set; }
```

#### Property Value

[Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />

**Remarks:**

- - For [PenaltyType.Amount](./connectors.pull.hotel.domain.contracts.common.penaltytype#amount), this represents the fixed monetary value.
- - For [PenaltyType.Nights](./connectors.pull.hotel.domain.contracts.common.penaltytype#nights), this represents the number of nights.
- - For [PenaltyType.Percentage](./connectors.pull.hotel.domain.contracts.common.penaltytype#percentage), this represents the percentage of the total booking cost.

### **Deadline**

Specifies the absolute deadline for the penalty in UTC format.

```csharp
public string Deadline { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This is equivalent to [CancelPenalty.HoursBefore](./connectors.pull.hotel.domain.contracts.common.cancelpenalty#hoursbefore) but represented as an exact date and time in UTC.
 Example: "2024-01-01T12:00Z".

## Constructors

### **CancelPenalty(UInt32, PenaltyType, Currency, Double, String)**

Initializes a new instance of the [CancelPenalty](./connectors.pull.hotel.domain.contracts.common.cancelpenalty) class with the specified parameters.

```csharp
public CancelPenalty(uint hoursBefore, PenaltyType penaltyType, Currency currency, double value, string deadline)
```

#### Parameters

`hoursBefore` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The number of hours before the check-in date when the penalty applies.

`penaltyType` [PenaltyType](./connectors.pull.hotel.domain.contracts.common.penaltytype)<br />
The type of penalty (e.g., fixed amount, nights, or percentage).

`currency` Currency<br />
The currency in which the penalty value is expressed.

`value` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The monetary or percentage value of the penalty.

`deadline` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The absolute deadline for the penalty in UTC format (e.g., "2024-01-01T12:00Z"). 
 This is equivalent to `hoursBefore` expressed as an exact date and time.
