# AmendDatesInput

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments.AmendBookingDates.Request

Represents the input for amending booking dates.

```csharp
public class AmendDatesInput : Connectors.Pull.Hotel.Domain.Contracts.Amendments.Common.AmendInput
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AmendInput](./connectors.pull.hotel.domain.contracts.amendments.common.amendinput) → [AmendDatesInput](./connectors.pull.hotel.domain.contracts.amendments.amendbookingdates.request.amenddatesinput)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute, KnownTypeAttribute, KnownTypeAttribute, KnownTypeAttribute, KnownTypeAttribute, KnownTypeAttribute

## Properties

### **AmendDates**

Gets or initializes the amended dates for the booking.

```csharp
public AmendDates AmendDates { get; set; }
```

#### Property Value

[AmendDates](./connectors.pull.hotel.domain.contracts.amendments.amendbookingdates.request.amenddates)<br />

### **Reference**

Gets or initializes the reference information for the amendment.

```csharp
public Reference Reference { get; set; }
```

#### Property Value

[Reference](./connectors.pull.hotel.domain.contracts.common.reference)<br />

### **Dates**

Gets or initializes the dates associated with the amendment.

```csharp
public Dates Dates { get; set; }
```

#### Property Value

[Dates](./connectors.pull.hotel.domain.contracts.amendments.common.dates)<br />

### **AccommodationRq**

Gets or initializes the accommodation request information.

```csharp
public AccommodationRQ AccommodationRq { get; set; }
```

#### Property Value

[AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq)<br />

### **Parameters**

Gets or sets the collection of additional parameters for the amendment.

```csharp
public IEnumerable<Parameter> Parameters { get; set; }
```

#### Property Value

[IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Language**

Gets or initializes the language code for the amendment request.

```csharp
public string Language { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

## Constructors

### **AmendDatesInput()**

```csharp
public AmendDatesInput()
```
