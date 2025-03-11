# AmendOccupancy

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments.Common

Represents an amendment to an occupancy in a hotel booking.

```csharp
public class AmendOccupancy
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AmendOccupancy](./connectors.pull.hotel.domain.contracts.amendments.common.amendoccupancy)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

## Properties

### **OccupancyId**

Gets or sets the unique identifier for the occupancy.

```csharp
public uint OccupancyId { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **Paxes**

Gets or sets the collection of pax (passenger) inputs for the occupancy.

```csharp
public IEnumerable<BookPaxInput> Paxes { get; set; }
```

#### Property Value

[IEnumerable\<BookPaxInput\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

## Constructors

### **AmendOccupancy()**

```csharp
public AmendOccupancy()
```

## Methods

### **ToOccupancy()**

Converts the AmendOccupancy instance to an Occupancy object.

```csharp
public Occupancy ToOccupancy()
```

#### Returns

[Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy)<br />
An Occupancy object with mapped paxes and occupancy ID.
