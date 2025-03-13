# CreditCardExpiration

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents the expiration date of a credit card.

```csharp
public class CreditCardExpiration
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CreditCardExpiration](./connectors.pull.hotel.domain.contracts.book.request.creditcardexpiration)<br />
Attributes DataContractAttribute

## Properties

### **Month**

The expiration month of the credit card.

```csharp
public int Month { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

**Remarks:**

Valid values are between 1 and 12.

### **Year**

The expiration year of the credit card (last two digits).

```csharp
public int Year { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

**Remarks:**

Valid values are between 0 and 99.

### **YearFull**

Gets the full four-digit year of the credit card expiration.

```csharp
public int YearFull { get; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

**Remarks:**

The full year is calculated by adding 2000 to the two-digit year. For example, a year value of 23 becomes 2023.

## Constructors

### **CreditCardExpiration()**

```csharp
public CreditCardExpiration()
```
