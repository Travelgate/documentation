# Room

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a room in a hotel search response.

```csharp
public class Room
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Room](./connectors.pull.hotel.domain.contracts.search.response.room)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

A room is part of an option in the search response. It includes detailed information about pricing, 
 amenities, cancellation policies, and other data necessary for making a booking decision.

## Properties

### **OccupancyRefId**

Numeric ID linking this room to its occupancy data in the [Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy).

```csharp
public uint OccupancyRefId { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **Code**

Unique code assigned to this room.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Description**

Description of the room's features or characteristics.

```csharp
public string Description { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **RoomPrice**

Pricing information for the room, including total price and currency details.

```csharp
public RoomPrice RoomPrice { get; set; }
```

#### Property Value

[RoomPrice](./connectors.pull.hotel.domain.contracts.search.response.roomprice)<br />

### **Refundable**

Indicates if the room is refundable based on the cancellation policy.

```csharp
public bool Refundable { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

**Remarks:**

If set to `true`, the room can be canceled with a refund according to the defined [Room.CancelPolicy](./connectors.pull.hotel.domain.contracts.search.response.room#cancelpolicy).

### **RefundableSpecified**

Indicates whether the refundable status has been explicitly specified.

```csharp
public bool RefundableSpecified { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **LegacyRoomId**

Legacy identifier for internal tracking. Automatically generated using [Room.OccupancyRefId](./connectors.pull.hotel.domain.contracts.search.response.room#occupancyrefid) and [Room.Code](./connectors.pull.hotel.domain.contracts.search.response.room#code).

```csharp
public string LegacyRoomId { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Units**

Number of units available for this room type.

```csharp
public Nullable<uint> Units { get; set; }
```

#### Property Value

[Nullable\<UInt32\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

### **RatePlan**

Rate plan associated with this room.

```csharp
public RatePlan RatePlan { get; set; }
```

#### Property Value

[RatePlan](./connectors.pull.hotel.domain.contracts.search.response.rateplan)<br />

### **Promotions**

Promotions or discounts applicable to this room.

```csharp
public IEnumerable<Promotion> Promotions { get; set; }
```

#### Property Value

[IEnumerable\<Promotion\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Remarks**

Additional remarks or notes about this room.

```csharp
public IEnumerable<Remark> Remarks { get; set; }
```

#### Property Value

[IEnumerable\<Remark\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Surcharges**

Additional surcharges applied to this room.

```csharp
public IEnumerable<Surcharge> Surcharges { get; set; }
```

#### Property Value

[IEnumerable\<Surcharge\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **CancelPolicy**

Cancellation policy specific to this room.

```csharp
public CancelPolicy CancelPolicy { get; set; }
```

#### Property Value

[CancelPolicy](./connectors.pull.hotel.domain.contracts.common.cancelpolicy)<br />

### **Beds**

List of beds available in the room, including types and configurations.

```csharp
public IEnumerable<Bed> Beds { get; set; }
```

#### Property Value

[IEnumerable\<Bed\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Amenities**

Amenities included with this room, such as Wi-Fi or parking.

```csharp
public IEnumerable<Amenity> Amenities { get; set; }
```

#### Property Value

[IEnumerable\<Amenity\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **UnitsSpecified**

Indicates whether the number of units has been explicitly specified.

```csharp
public bool UnitsSpecified { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **Features**

Features or custom attributes of the room, used for specific integrations.

```csharp
public IEnumerable<Feature> Features { get; set; }
```

#### Property Value

[IEnumerable\<Feature\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

## Constructors

### **Room(UInt32, String, String, RoomPrice)**

Initializes a new instance of the [Room](./connectors.pull.hotel.domain.contracts.search.response.room) class with the specified parameters.

```csharp
public Room(uint occupancyRefId, string code, string description, RoomPrice roomPrice)
```

#### Parameters

`occupancyRefId` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The unique reference ID for the occupancy, provided in the [SearchRq](./connectors.pull.hotel.domain.contracts.search.request.searchrq).

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The unique code identifying the room.

`description` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
A textual description of the room's attributes.

`roomPrice` [RoomPrice](./connectors.pull.hotel.domain.contracts.search.response.roomprice)<br />
The pricing information associated with the room.

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown when `code` is null.

## Methods

### **GetOccupancy(IEnumerable\<Occupancy\>)**

Retrieves the associated occupancy information from a collection of [Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy) objects.

```csharp
public Occupancy GetOccupancy(IEnumerable<Occupancy> occupancies)
```

#### Parameters

`occupancies` [IEnumerable\<Occupancy\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of occupancies to search.

#### Returns

[Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy)<br />
The matching [Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy), or null if not found.

### **GetOccupancy(IEnumerable\<BookOccupancy\>)**

Retrieves the associated booking occupancy information from a collection of [BookOccupancy](./connectors.pull.hotel.domain.contracts.book.request.bookoccupancy) objects.

```csharp
public BookOccupancy GetOccupancy(IEnumerable<BookOccupancy> occupancies)
```

#### Parameters

`occupancies` [IEnumerable\<BookOccupancy\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of booking occupancies to search.

#### Returns

[BookOccupancy](./connectors.pull.hotel.domain.contracts.book.request.bookoccupancy)<br />
The matching [BookOccupancy](./connectors.pull.hotel.domain.contracts.book.request.bookoccupancy), or null if not found.
