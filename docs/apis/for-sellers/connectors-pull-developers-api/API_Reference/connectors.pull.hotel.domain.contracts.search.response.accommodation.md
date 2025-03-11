# Accommodation

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents an abstract base class for accommodation types in search responses.
 This class is extended by specific types of accommodations such as [Hotel](./connectors.pull.hotel.domain.contracts.search.response.hotel) and [Rental](./connectors.pull.hotel.domain.contracts.search.response.rental).

```csharp
public abstract class Accommodation
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Accommodation](./connectors.pull.hotel.domain.contracts.search.response.accommodation)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute, KnownTypeAttribute, KnownTypeAttribute, ProtoIncludeAttribute, ProtoIncludeAttribute, InterfaceTypeAttribute

**Remarks:**

Accommodations are the primary entities returned in search responses, containing details such as 
 type, unique identifiers, and names. Derived classes provide specific details for different accommodation types.

## Properties

### **AccommodationType**

Gets or initializes the type of accommodation.

```csharp
public AccommodationType AccommodationType { get; set; }
```

#### Property Value

[AccommodationType](./connectors.pull.hotel.domain.contracts.common.accommodationtype)<br />

**Remarks:**

The [Accommodation.AccommodationType](./connectors.pull.hotel.domain.contracts.search.response.accommodation#accommodationtype) property indicates whether the accommodation is a hotel or a rental.

### **AccommodationCode**

Gets the unique code identifying the accommodation.

```csharp
public string AccommodationCode { get; protected set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This code serves as a unique identifier for the accommodation, typically provided by the supplier.

### **AccommodationName**

Gets or initializes the name of the accommodation.

```csharp
public string AccommodationName { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The name of the accommodation is typically a descriptive label such as the hotel or rental property name.

## Constructors

### **Accommodation()**

```csharp
protected Accommodation()
```
