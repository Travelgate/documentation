# BookPrice

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents the price information for a hotel booking request.

```csharp
public class BookPrice
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [BookPrice](./connectors.pull.hotel.domain.contracts.book.request.bookprice)<br />
Attributes DataContractAttribute

**Remarks:**

This price should match the quoted price provided during the booking process. Additionally, 
 a [BookPrice.DeltaPrice](./connectors.pull.hotel.domain.contracts.book.request.bookprice#deltaprice) can be included to indicate permissible price adjustments.

## Properties

### **Price**

The price of the booking.

```csharp
public Price Price { get; set; }
```

#### Property Value

Price<br />

**Remarks:**

This value must align with the quoted price to ensure consistency during the booking process.

### **DeltaPrice**

The delta price, representing any allowable price changes or adjustments.

```csharp
public DeltaPrice DeltaPrice { get; set; }
```

#### Property Value

[DeltaPrice](./connectors.pull.hotel.domain.contracts.book.request.deltaprice)<br />

**Remarks:**

The [BookPrice.DeltaPrice](./connectors.pull.hotel.domain.contracts.book.request.bookprice#deltaprice) specifies the flexibility allowed in the booking price, 
 either as a percentage, an absolute value, or both.

## Constructors

### **BookPrice()**

```csharp
public BookPrice()
```
