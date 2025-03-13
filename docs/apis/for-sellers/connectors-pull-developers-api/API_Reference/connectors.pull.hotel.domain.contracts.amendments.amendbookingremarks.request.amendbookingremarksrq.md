# AmendBookingRemarksRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments.AmendBookingRemarks.Request

Represents a request to amend the remarks of a booking.

```csharp
public class AmendBookingRemarksRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AmendBookingRemarksRq](./connectors.pull.hotel.domain.contracts.amendments.amendbookingremarks.request.amendbookingremarksrq)<br />
Attributes DataContractAttribute

## Properties

### **Input**

Gets or initializes the input details for amending the booking remarks.

```csharp
public AmendRemarksInput Input { get; set; }
```

#### Property Value

[AmendRemarksInput](./connectors.pull.hotel.domain.contracts.amendments.amendbookingremarks.request.amendremarksinput)<br />

### **Settings**

Gets or initializes the settings for the amendment request.

```csharp
public Settings Settings { get; set; }
```

#### Property Value

[Settings](./connectors.pull.hotel.domain.contracts.common.settings)<br />

## Constructors

### **AmendBookingRemarksRq()**

```csharp
public AmendBookingRemarksRq()
```
