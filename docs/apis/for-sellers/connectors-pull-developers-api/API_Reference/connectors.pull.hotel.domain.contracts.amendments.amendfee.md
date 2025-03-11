# AmendFee

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments

Represents a fee associated with amending a hotel booking.

```csharp
public class AmendFee
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AmendFee](./connectors.pull.hotel.domain.contracts.amendments.amendfee)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

## Properties

### **Currency**

Gets or sets the currency of the amendment fee.

```csharp
public Currency Currency { get; set; }
```

#### Property Value

Currency<br />

### **Amount**

Gets or sets the amount of the amendment fee.

```csharp
public double Amount { get; set; }
```

#### Property Value

[Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />

## Constructors

### **AmendFee()**

```csharp
public AmendFee()
```
