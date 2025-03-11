# AmendBookingDatesRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments.AmendBookingDates.Request

Represents a request to amend the dates of a booking.

```csharp
public class AmendBookingDatesRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AmendBookingDatesRq](./connectors.pull.hotel.domain.contracts.amendments.amendbookingdates.request.amendbookingdatesrq)<br />
Attributes DataContractAttribute

## Properties

### **Input**

Gets or initializes the input details for amending the booking dates.

```csharp
public AmendDatesInput Input { get; set; }
```

#### Property Value

[AmendDatesInput](./connectors.pull.hotel.domain.contracts.amendments.amendbookingdates.request.amenddatesinput)<br />

### **Settings**

Gets or initializes the settings for the amendment request.

```csharp
public Settings Settings { get; set; }
```

#### Property Value

[Settings](./connectors.pull.hotel.domain.contracts.common.settings)<br />

## Constructors

### **AmendBookingDatesRq()**

```csharp
public AmendBookingDatesRq()
```
