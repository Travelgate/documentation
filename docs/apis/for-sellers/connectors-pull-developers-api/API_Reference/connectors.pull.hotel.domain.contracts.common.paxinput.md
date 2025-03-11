# PaxInput

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents the age of a passenger (pax) in a hotel booking context.
 This information is used to determine room pricing and availability.

```csharp
public class PaxInput
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [PaxInput](./connectors.pull.hotel.domain.contracts.common.paxinput)<br />
Attributes DataContractAttribute

## Properties

### **Age**

Age of the passenger. This value is required and plays a critical role 
 in determining eligibility for child or adult pricing as defined by the supplier.

```csharp
public int Age { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

**Remarks:**

The age must be specified when creating a [PaxInput](./connectors.pull.hotel.domain.contracts.common.paxinput) instance.
 Suppliers often use this information to apply specific pricing rules or restrictions.

## Constructors

### **PaxInput()**

```csharp
public PaxInput()
```
