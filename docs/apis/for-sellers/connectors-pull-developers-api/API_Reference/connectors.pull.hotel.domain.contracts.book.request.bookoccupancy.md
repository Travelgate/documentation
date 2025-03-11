# BookOccupancy

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents the occupancy details for a hotel booking request.

```csharp
public class BookOccupancy
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [BookOccupancy](./connectors.pull.hotel.domain.contracts.book.request.bookoccupancy)<br />
Attributes DataContractAttribute

## Properties

### **OccupancyId**

The unique identifier for the occupancy.

```csharp
public uint OccupancyId { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

**Remarks:**

This ID is used to link the occupancy to a specific room in the booking request.

### **Paxes**

The collection of passenger inputs (paxes) for the occupancy.

```csharp
public IEnumerable<BookPaxInput> Paxes { get; set; }
```

#### Property Value

[IEnumerable\<BookPaxInput\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each [BookPaxInput](./connectors.pull.hotel.domain.contracts.book.request.bookpaxinput) represents a passenger and includes details such as age and type 
 (e.g., adult, child, or infant). This information is used to calculate room pricing and availability.

## Constructors

### **BookOccupancy()**

```csharp
public BookOccupancy()
```

## Methods

### **ToOccupancy()**

Converts the BookOccupancy instance to an Occupancy object.

```csharp
public Occupancy ToOccupancy()
```

#### Returns

[Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy)<br />
An Occupancy object with mapped passenger inputs and occupancy ID.

**Remarks:**

Maps the occupancy details and associated passengers to an instance of the 
 [Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy) class, which is used in further processing.
