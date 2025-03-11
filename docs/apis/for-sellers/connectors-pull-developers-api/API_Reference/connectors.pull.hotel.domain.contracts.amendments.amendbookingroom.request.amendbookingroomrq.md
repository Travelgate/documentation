# AmendBookingRoomRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments.AmendBookingRoom.Request

Represents a request to amend a booking room.

```csharp
public class AmendBookingRoomRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AmendBookingRoomRq](./connectors.pull.hotel.domain.contracts.amendments.amendbookingroom.request.amendbookingroomrq)<br />
Attributes DataContractAttribute

## Properties

### **Input**

Gets or initializes the input details for amending the booking room.

```csharp
public AmendRoomInput Input { get; set; }
```

#### Property Value

[AmendRoomInput](./connectors.pull.hotel.domain.contracts.amendments.amendbookingroom.request.amendroominput)<br />

### **Settings**

Gets or initializes the settings for the amendment request.

```csharp
public Settings Settings { get; set; }
```

#### Property Value

[Settings](./connectors.pull.hotel.domain.contracts.common.settings)<br />

## Constructors

### **AmendBookingRoomRq()**

```csharp
public AmendBookingRoomRq()
```
