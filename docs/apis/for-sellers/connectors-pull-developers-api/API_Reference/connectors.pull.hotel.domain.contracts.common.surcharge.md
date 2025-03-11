# Surcharge

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a surcharge associated with a hotel booking. 
 Surcharges typically include additional costs such as local taxes, fees, or optional extras.

```csharp
public class Surcharge
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Surcharge](./connectors.pull.hotel.domain.contracts.common.surcharge)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

## Properties

### **ChargeType**

Specifies whether the surcharge is included in the room rate or must be paid separately at the property. 
 See [Surcharge.ChargeType](./connectors.pull.hotel.domain.contracts.common.surcharge#chargetype) for possible values.

```csharp
public ChargeType ChargeType { get; set; }
```

#### Property Value

[ChargeType](./connectors.pull.hotel.domain.contracts.common.chargetype)<br />

### **Mandatory**

Indicates whether this surcharge is mandatory. 
 Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences.

```csharp
public bool Mandatory { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **Description**

Provides a description of the surcharge, giving context about the type of cost it represents.
 Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee".

```csharp
public string Description { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Price**

Represents the price of this surcharge, including the amount and currency. 
 See [Surcharge.Price](./connectors.pull.hotel.domain.contracts.common.surcharge#price) for details about the price structure.

```csharp
public Price Price { get; set; }
```

#### Property Value

Price<br />

### **Code**

An optional code that uniquely identifies this surcharge for internal or external reference. 
 This can be useful for tracking specific fees or integrating with supplier systems.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

## Constructors

### **Surcharge(ChargeType, Boolean, String, Price, String)**

Initializes a new instance of the [Surcharge](./connectors.pull.hotel.domain.contracts.common.surcharge) class with specified parameters.

```csharp
public Surcharge(ChargeType chargeType, bool mandatory, string description, Price price, string code)
```

#### Parameters

`chargeType` [ChargeType](./connectors.pull.hotel.domain.contracts.common.chargetype)<br />
Specifies whether the surcharge is included in the room rate or must be paid separately at the property.

`mandatory` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
Indicates whether the surcharge is mandatory (e.g., local taxes) or optional (e.g., additional services).

`description` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
Provides a textual description of the surcharge (e.g., "City Tax" or "Service Fee").

`price` Price<br />
The monetary value of the surcharge, including its currency.

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
An optional code to uniquely identify the surcharge for tracking or reference purposes.
