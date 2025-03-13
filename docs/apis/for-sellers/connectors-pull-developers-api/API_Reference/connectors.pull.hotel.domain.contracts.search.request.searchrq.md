# SearchRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Request

Represents the request object for performing hotel searches in the Connectors domain.
 This class is used to define the parameters and settings for searching available hotel options.

```csharp
public class SearchRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SearchRq](./connectors.pull.hotel.domain.contracts.search.request.searchrq)<br />
Attributes DataContractAttribute

**Remarks:**

The search request (`SearchRq`) allows specifying key details such as:

- - Search criteria (e.g., check-in, check-out dates, guests, markets).
- - Configuration settings (e.g., access credentials for the supplier).
- - Filters for refining results (e.g., option status, rate rules).

This class ensures all required properties are provided for a valid search operation.

## Properties

### **SearchCriteria**

Gets the search criteria for the hotel search.

```csharp
public SearchCriteria SearchCriteria { get; set; }
```

#### Property Value

[SearchCriteria](./connectors.pull.hotel.domain.contracts.search.request.searchcriteria)<br />

**Remarks:**

This property contains the essential parameters required for the search operation, 
 including details like check-in and check-out dates, guest information (paxes), and market identifiers.

### **Settings**

Gets the search settings for the hotel search.

```csharp
public SearchSettings Settings { get; set; }
```

#### Property Value

[SearchSettings](./connectors.pull.hotel.domain.contracts.search.request.searchsettings)<br />

**Remarks:**

This property defines the configuration options for the search, such as access credentials and 
 supplier-specific settings required to execute the operation.

### **Filters**

Gets the filters to be applied to the hotel search results.

```csharp
public Filters Filters { get; set; }
```

#### Property Value

[Filters](./connectors.pull.hotel.domain.contracts.search.request.filters)<br />

**Remarks:**

This property provides optional refinements for the search results, allowing for additional criteria 
 such as filtering options by status, rate rules, or other custom parameters.

## Constructors

### **SearchRq()**

```csharp
public SearchRq()
```
