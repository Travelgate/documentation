# Destinations

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Request

Represents a collection of destinations for a hotel search request.

```csharp
public class Destinations
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Destinations](./connectors.pull.hotel.domain.contracts.search.request.destinations)<br />
Attributes DataContractAttribute

**Remarks:**

This class defines the possible destinations for a hotel search, which can be specified either as accommodations (e.g., hotels) 
 or locations. Currently, only accommodations are supported, and these must be hotels. 
 
 Note: The request must specify either [Destinations.Accommodations](./connectors.pull.hotel.domain.contracts.search.request.destinations#accommodations) or [Destinations.Locations](./connectors.pull.hotel.domain.contracts.search.request.destinations#locations), but not both.

## Properties

### **Accommodations**

Collection of accommodations for the search request.

```csharp
public IEnumerable<AccommodationRQ> Accommodations { get; set; }
```

#### Property Value

[IEnumerable\<AccommodationRQ\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Accommodations represent specific hotels or rentals. Although the structure allows for rentals, 
 only hotels are supported at this time. This property cannot be used simultaneously with [Destinations.Locations](./connectors.pull.hotel.domain.contracts.search.request.destinations#locations).

### **Locations**

Collection of locations for the search request.

```csharp
public IEnumerable<Location> Locations { get; set; }
```

#### Property Value

[IEnumerable\<Location\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Locations represent broader geographic areas (e.g., cities or regions). 
 This property cannot be used simultaneously with [Destinations.Accommodations](./connectors.pull.hotel.domain.contracts.search.request.destinations#accommodations).

## Constructors

### **Destinations()**

```csharp
public Destinations()
```
