# RoomPrice

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents the price information for a room in a hotel search response.

```csharp
public class RoomPrice
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [RoomPrice](./connectors.pull.hotel.domain.contracts.search.response.roomprice)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

This class provides pricing details for a specific room, including the total price and a breakdown of prices by day or period.

## Properties

### **Price**

The total price of the room.

```csharp
public Price Price { get; set; }
```

#### Property Value

Price<br />

### **PriceBreakdown**

Breakdown of the room price over specific periods, such as daily rates.

```csharp
public IEnumerable<PriceBreakdown> PriceBreakdown { get; set; }
```

#### Property Value

[IEnumerable\<PriceBreakdown\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

The [RoomPrice.PriceBreakdown](./connectors.pull.hotel.domain.contracts.search.response.roomprice#pricebreakdown) collection provides detailed pricing information for specific periods. 
 Each item includes:

- - Start and End days for the pricing period.
- - Price object specifying the cost for that period.

This is useful for integrations where clients require granular pricing information, such as multi-day stays with different daily rates.

## Constructors

### **RoomPrice(Price)**

Initializes a new instance of the [RoomPrice](./connectors.pull.hotel.domain.contracts.search.response.roomprice) class with the specified total price.

```csharp
public RoomPrice(Price price)
```

#### Parameters

`price` Price<br />
The total price of the room, encapsulated in a [RoomPrice.Price](./connectors.pull.hotel.domain.contracts.search.response.roomprice#price) object, which includes details 
 such as currency, net price, and gross price.

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown when `price` is null.
