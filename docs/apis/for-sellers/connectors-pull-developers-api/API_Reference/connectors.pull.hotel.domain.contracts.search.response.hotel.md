# Hotel

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a hotel accommodation in search responses.

```csharp
public class Hotel : Accommodation
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Accommodation](./connectors.pull.hotel.domain.contracts.search.response.accommodation) → [Hotel](./connectors.pull.hotel.domain.contracts.search.response.hotel)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute, KnownTypeAttribute, KnownTypeAttribute, InterfaceTypeAttribute

**Remarks:**

This class extends [Accommodation](./connectors.pull.hotel.domain.contracts.search.response.accommodation) to provide additional details specific to hotels, 
 including available meal plans ([Board](./connectors.pull.hotel.domain.contracts.search.response.board)) and location details.

## Properties

### **Boards**

Gets the list of meal plan options ([Board](./connectors.pull.hotel.domain.contracts.search.response.board)) available for the hotel.

```csharp
public List<Board> Boards { get; set; }
```

#### Property Value

[List\<Board\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

**Remarks:**

Each [Board](./connectors.pull.hotel.domain.contracts.search.response.board) represents a specific meal plan, such as "Bed and Breakfast" or "All-Inclusive," 
 and includes the associated options for that plan.

### **Location**

Gets the geographical location of the hotel.

```csharp
public Location Location { get; set; }
```

#### Property Value

[Location](./connectors.pull.hotel.domain.contracts.common.location)<br />

**Remarks:**

This property provides details such as latitude, longitude, and country, if available.

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

### **Hotel(String, List\<Board\>, Location, String)**

Initializes a new instance of the [Hotel](./connectors.pull.hotel.domain.contracts.search.response.hotel) class with the specified parameters.

```csharp
public Hotel(string accommodationCode, List<Board> boards, Location location, string accommodationName)
```

#### Parameters

`accommodationCode` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The unique code identifying the hotel.

`boards` [List\<Board\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />
The list of meal plan options ([Board](./connectors.pull.hotel.domain.contracts.search.response.board)) available for the hotel.

`location` [Location](./connectors.pull.hotel.domain.contracts.common.location)<br />
The geographical location of the hotel. This parameter is optional.

`accommodationName` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The name of the hotel. This parameter is optional.

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown when `accommodationCode` or `boards` is null.
