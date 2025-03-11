# AmendBookingBoardRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments.AmendBookingBoard.Request

Represents a request to amend the board type of a booking.

```csharp
public class AmendBookingBoardRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AmendBookingBoardRq](./connectors.pull.hotel.domain.contracts.amendments.amendbookingboard.request.amendbookingboardrq)<br />
Attributes DataContractAttribute

## Properties

### **Input**

Gets or initializes the input details for amending the board type.

```csharp
public AmendBoardInput Input { get; set; }
```

#### Property Value

[AmendBoardInput](./connectors.pull.hotel.domain.contracts.amendments.amendbookingboard.request.amendboardinput)<br />

### **Settings**

Gets or initializes the settings for the amendment request.

```csharp
public Settings Settings { get; set; }
```

#### Property Value

[Settings](./connectors.pull.hotel.domain.contracts.common.settings)<br />

## Constructors

### **AmendBookingBoardRq()**

```csharp
public AmendBookingBoardRq()
```
