# RentalRQ

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a vacation rental request in the accommodation booking system.
 Extends the [AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq) class to specify details for vacation rental accommodations.

```csharp
public class RentalRQ : AccommodationRQ
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq) → [RentalRQ](./connectors.pull.hotel.domain.contracts.common.rentalrq)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute, KnownTypeAttribute, KnownTypeAttribute, InterfaceTypeAttribute

## Properties

### **Type**

Specifies the type of accommodation being requested, such as [AccommodationType.Hotel](./connectors.pull.hotel.domain.contracts.common.accommodationtype#hotel) or [AccommodationType.Rental](./connectors.pull.hotel.domain.contracts.common.accommodationtype#rental).

```csharp
public AccommodationType Type { get; set; }
```

#### Property Value

[AccommodationType](./connectors.pull.hotel.domain.contracts.common.accommodationtype)<br />

**Remarks:**

The [AccommodationType](./connectors.pull.hotel.domain.contracts.common.accommodationtype) helps differentiate between various accommodation categories,
 enabling proper handling of specific request types.

### **Code**

Represents a unique code identifying the accommodation in the request.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This code is typically assigned by the supplier or system and ensures the correct accommodation is referenced.

- - For hotels, it could be the supplier's hotel ID.
- - For rentals, it might represent a unique property code.

## Constructors

### **RentalRQ()**

Initializes a new instance of the [RentalRQ](./connectors.pull.hotel.domain.contracts.common.rentalrq) class.

```csharp
public RentalRQ()
```

**Remarks:**

This constructor automatically sets the [AccommodationRQ.Type](./connectors.pull.hotel.domain.contracts.common.accommodationrq#type) to 
 [AccommodationType.Rental](./connectors.pull.hotel.domain.contracts.common.accommodationtype#rental), identifying the accommodation as a vacation rental, 
 such as holiday homes or apartments.
