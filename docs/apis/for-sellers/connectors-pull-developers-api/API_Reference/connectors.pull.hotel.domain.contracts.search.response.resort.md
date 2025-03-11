# Resort

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a resort associated with a supplement in an option.

```csharp
public sealed class Resort
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Resort](./connectors.pull.hotel.domain.contracts.search.response.resort)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

A resort in this context is tied to a specific [Supplement](./connectors.pull.hotel.domain.contracts.search.response.supplement) and provides information 
 about the location or property where the supplement applies. For example, a resort could represent 
 a ski resort associated with a ski pass supplement.

## Properties

### **Code**

Unique code that identifies the resort in the system.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The [Resort.Code](./connectors.pull.hotel.domain.contracts.search.response.resort#code) is used to link this resort to a specific [Supplement](./connectors.pull.hotel.domain.contracts.search.response.supplement) in the search response.

### **Name**

Name of the resort.

```csharp
public string Name { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The [Resort.Name](./connectors.pull.hotel.domain.contracts.search.response.resort#name) provides a human-readable label for the resort, typically displayed as part of the supplement details.

### **Description**

Optional description providing additional details about the resort.

```csharp
public string Description { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The [Resort.Description](./connectors.pull.hotel.domain.contracts.search.response.resort#description) can include highlights of the resort, such as its features, location, or amenities. 
 This field is optional and may not be present for all resorts.

## Constructors

### **Resort(String, String, String)**

Initializes a new instance of the [Resort](./connectors.pull.hotel.domain.contracts.search.response.resort) class with the specified parameters.

```csharp
public Resort(string code, string name, string description)
```

#### Parameters

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The unique code identifying the resort.

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The name of the resort.

`description` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
A brief description of the resort. This parameter is optional.

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown when `code` or `name` is null or empty.
