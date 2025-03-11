# AmendDates

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments.AmendBookingDates.Request

Represents the new check-in and check-out dates for a booking amendment.

```csharp
public class AmendDates
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AmendDates](./connectors.pull.hotel.domain.contracts.amendments.amendbookingdates.request.amenddates)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

## Properties

### **CheckIn**

Gets or initializes the new check-in date.

```csharp
public string CheckIn { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **CheckOut**

Gets or initializes the new check-out date.

```csharp
public string CheckOut { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

## Constructors

### **AmendDates()**

```csharp
public AmendDates()
```
