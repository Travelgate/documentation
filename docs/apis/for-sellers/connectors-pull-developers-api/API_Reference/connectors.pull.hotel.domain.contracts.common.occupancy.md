# Occupancy

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents an occupancy for a hotel room.

```csharp
public class Occupancy
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy)<br />
Attributes DataContractAttribute

**Remarks:**

The [Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy) class is used in both Search and Quote requests to define 
 the specific occupants for a hotel room. It includes details such as the unique identifier 
 for the occupancy and the passengers (paxes) associated with it.

## Properties

### **OccupancyId**

The unique identifier for the occupancy.

```csharp
public uint OccupancyId { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

**Remarks:**

This ID is used to link the occupancy to a specific room in the response.

### **Paxes**

The collection of passenger inputs (paxes) for the occupancy.

```csharp
public IEnumerable<PaxInput> Paxes { get; set; }
```

#### Property Value

[IEnumerable\<PaxInput\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each [PaxInput](./connectors.pull.hotel.domain.contracts.common.paxinput) represents a passenger and includes details such as age and type 
 (e.g., adult, child, or infant). This information is used to calculate room pricing and availability.

## Constructors

### **Occupancy()**

```csharp
public Occupancy()
```

## Methods

### **GetRoom(IEnumerable\<Room\>)**

Retrieves the room associated with this occupancy from a collection of rooms.

```csharp
public Room GetRoom(IEnumerable<Room> rooms)
```

#### Parameters

`rooms` [IEnumerable\<Room\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of rooms to search.

#### Returns

[Room](./connectors.pull.hotel.domain.contracts.search.response.room)<br />
The [Room](./connectors.pull.hotel.domain.contracts.search.response.room) matching the occupancy's ID, or null if no matching room is found.

**Remarks:**

This method is useful for associating an occupancy with its corresponding room 
 in scenarios where rooms are returned as part of a response.
