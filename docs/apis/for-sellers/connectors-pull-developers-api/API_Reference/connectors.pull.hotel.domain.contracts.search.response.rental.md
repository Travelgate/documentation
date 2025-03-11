# Rental

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a rental accommodation (e.g., vacation homes) in search responses.

```csharp
public class Rental : Accommodation
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Accommodation](./connectors.pull.hotel.domain.contracts.search.response.accommodation) → [Rental](./connectors.pull.hotel.domain.contracts.search.response.rental)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute, KnownTypeAttribute, KnownTypeAttribute, InterfaceTypeAttribute

**Remarks:**

This implementation is currently not fully supported. Although the structure exists to accommodate rental accommodations, 
 only hotel accommodations are implemented and functional at this time.

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

### **Rental(String, String)**

Creates a new instance of the [Rental](./connectors.pull.hotel.domain.contracts.search.response.rental) class with a specific code and optional name.

```csharp
public Rental(string code, string name)
```

#### Parameters

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
A unique identifier for the rental accommodation.

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
An optional name for the rental accommodation.

**Remarks:**

The `code` parameter is mandatory and serves as the primary identifier for the rental.
 The `name` parameter can provide additional context or a human-readable label for the rental.
