# AmendRoom

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments.Common

Represents a room amendment in a hotel booking.

```csharp
public class AmendRoom
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AmendRoom](./connectors.pull.hotel.domain.contracts.amendments.common.amendroom)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

## Properties

### **OccupancyRefId**

Gets or sets the reference ID of the occupancy associated with this room amendment.

```csharp
public uint OccupancyRefId { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **Code**

Gets or sets the code identifying the room type for this amendment.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

## Constructors

### **AmendRoom()**

```csharp
public AmendRoom()
```
