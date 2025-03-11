# PriceBreakdown

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a breakdown of daily prices for a specific room during a stay.

```csharp
public class PriceBreakdown
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [PriceBreakdown](./connectors.pull.hotel.domain.contracts.search.response.pricebreakdown)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

This class is used to provide detailed pricing for each day of a room's stay, 
 including start and end days relative to the stay period.

## Properties

### **Price**

The price for each day of the room during the specified period.

```csharp
public Price Price { get; set; }
```

#### Property Value

Price<br />

**Remarks:**

The price details associated with the option, including net, gross and minimum selling price.

### **Start**

The starting day of the pricing period (inclusive).

```csharp
public uint Start { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

**Remarks:**

This is typically relative to the check-in date, where 0 represents the first day.

### **End**

The ending day of the pricing period (inclusive).

```csharp
public uint End { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

**Remarks:**

This is typically relative to the check-in date and indicates the last day for which this price applies.

## Constructors

### **PriceBreakdown(Price, UInt32, UInt32)**

Initializes a new instance of the [PriceBreakdown](./connectors.pull.hotel.domain.contracts.search.response.pricebreakdown) class with the specified parameters.

```csharp
public PriceBreakdown(Price price, uint start, uint end)
```

#### Parameters

`price` Price<br />
The daily price for the room during the specified period.

`start` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The start day of the breakdown period (inclusive).

`end` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The end day of the breakdown period (inclusive).

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown if `price` is null.
