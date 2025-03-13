# Dates

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Amendments.Common

Represents the dates associated with a hotel booking amendment.

```csharp
public class Dates
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Dates](./connectors.pull.hotel.domain.contracts.amendments.common.dates)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

## Properties

### **BookingDate**

Gets or sets the booking date as a string.

```csharp
public string BookingDate { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **CheckIn**

Gets or initializes the check-in date as a string.

```csharp
public string CheckIn { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **CheckOut**

Gets or initializes the check-out date as a string.

```csharp
public string CheckOut { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **CheckInAsDateTime**

Gets the check-in date as a DateTime object.

```csharp
public DateTime CheckInAsDateTime { get; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

### **CheckOutAsDateTime**

Gets the check-out date as a DateTime object.

```csharp
public DateTime CheckOutAsDateTime { get; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

### **BookingDateAsDateTime**

Gets the booking date as a DateTime object.

```csharp
public DateTime BookingDateAsDateTime { get; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

## Constructors

### **Dates()**

```csharp
public Dates()
```
