# AmendBookingPaxesRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments.AmendBookingPaxes.Request

Represents a request to amend passenger details in a booking.

```csharp
public class AmendBookingPaxesRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AmendBookingPaxesRq](./connectors.pull.hotel.domain.contracts.amendments.amendbookingpaxes.request.amendbookingpaxesrq)<br />
Attributes DataContractAttribute

## Properties

### **Input**

Gets or initializes the input details for amending passenger information.

```csharp
public AmendInputPax Input { get; set; }
```

#### Property Value

[AmendInputPax](./connectors.pull.hotel.domain.contracts.amendments.amendbookingpaxes.request.amendinputpax)<br />

### **Settings**

Gets or initializes the settings for the amendment request.

```csharp
public Settings Settings { get; set; }
```

#### Property Value

[Settings](./connectors.pull.hotel.domain.contracts.common.settings)<br />

## Constructors

### **AmendBookingPaxesRq()**

```csharp
public AmendBookingPaxesRq()
```
