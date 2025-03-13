# AccommodationRQ

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a basic request for accommodation information, 
 serving as a base class for specific types of requests such as [HotelRQ](./connectors.pull.hotel.domain.contracts.common.hotelrq) or [RentalRQ](./connectors.pull.hotel.domain.contracts.common.rentalrq).

```csharp
public class AccommodationRQ
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute, KnownTypeAttribute, KnownTypeAttribute, ProtoIncludeAttribute, ProtoIncludeAttribute, InterfaceTypeAttribute

**Remarks:**

This class is designed to provide a general structure for requesting accommodation data.
 It includes common properties such as the accommodation type and its unique code.
 Specific types like hotels or rentals extend this class to include additional details.

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

### **AccommodationRQ()**

```csharp
public AccommodationRQ()
```
