# DeltaPrice

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents the price flexibility a client allows in a booking request compared to the quoted price. 
 This can be expressed as a fixed amount, a percentage, or both. If both are provided, the greater delta is used.

```csharp
public class DeltaPrice
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [DeltaPrice](./connectors.pull.hotel.domain.contracts.book.request.deltaprice)<br />
Attributes DataContractAttribute

## Properties

### **Amount**

The fixed amount allowed for the delta price.

```csharp
public double Amount { get; set; }
```

#### Property Value

[Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />

**Remarks:**

Specifies the absolute value difference a client permits between the quoted price and the final booking price.

### **Percentage**

The percentage allowed for the delta price.

```csharp
public double Percentage { get; set; }
```

#### Property Value

[Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />

**Remarks:**

Specifies the relative percentage difference a client permits between the quoted price and the final booking price.

## Constructors

### **DeltaPrice(Double, Double)**

Initializes a new instance of the [DeltaPrice](./connectors.pull.hotel.domain.contracts.book.request.deltaprice) class with the specified amount and percentage.

```csharp
public DeltaPrice(double amount, double percentage)
```

#### Parameters

`amount` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The fixed amount for the delta price.

`percentage` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The percentage for the delta price.

**Remarks:**

Use this constructor to define the allowed flexibility in both absolute and relative terms.
