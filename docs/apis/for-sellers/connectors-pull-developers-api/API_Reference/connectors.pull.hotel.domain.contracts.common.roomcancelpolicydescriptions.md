# RoomCancelPolicyDescriptions

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents detailed cancellation policy descriptions for a specific room in a hotel booking.
 This class provides textual information tied to a specific occupancy.

```csharp
public class RoomCancelPolicyDescriptions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [RoomCancelPolicyDescriptions](./connectors.pull.hotel.domain.contracts.common.roomcancelpolicydescriptions)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

## Properties

### **OccupancyRefId**

Identifies the specific occupancy within the booking for which this cancellation policy applies.

```csharp
public uint OccupancyRefId { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **Description**

Textual information detailing the cancellation policy applicable to the room associated with the [RoomCancelPolicyDescriptions.OccupancyRefId](./connectors.pull.hotel.domain.contracts.common.roomcancelpolicydescriptions#occupancyrefid).

```csharp
public string Description { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

## Constructors

### **RoomCancelPolicyDescriptions(UInt32, String)**

Initializes a new instance of the [RoomCancelPolicyDescriptions](./connectors.pull.hotel.domain.contracts.common.roomcancelpolicydescriptions) class with the specified occupancy reference ID and description.

```csharp
public RoomCancelPolicyDescriptions(uint occupancyRefId, string description)
```

#### Parameters

`occupancyRefId` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The unique identifier for the room's occupancy, linking the description to a specific room.

`description` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The textual representation of the cancellation policy for the room.
