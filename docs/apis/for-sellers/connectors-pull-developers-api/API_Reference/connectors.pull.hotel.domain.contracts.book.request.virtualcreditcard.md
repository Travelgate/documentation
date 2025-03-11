# VirtualCreditCard

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents a virtual credit card used for hotel booking payments.

```csharp
public class VirtualCreditCard
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [VirtualCreditCard](./connectors.pull.hotel.domain.contracts.book.request.virtualcreditcard)<br />
Attributes DataContractAttribute

## Properties

### **VCCActivationDate**

Gets or sets the activation date of the virtual credit card.

```csharp
public string VCCActivationDate { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **VCCDeactivationDate**

Gets or sets the deactivation date of the virtual credit card.

```csharp
public string VCCDeactivationDate { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **VCCCurrentBalance**

Gets or sets the current balance of the virtual credit card.

```csharp
public double VCCCurrentBalance { get; set; }
```

#### Property Value

[Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />

### **VCCCurrencyCode**

Gets or sets the currency code for the virtual credit card balance.

```csharp
public string VCCCurrencyCode { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

## Constructors

### **VirtualCreditCard()**

```csharp
public VirtualCreditCard()
```
