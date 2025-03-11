# RatePlan

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents the rate plan associated to the rooms in options.

```csharp
public class RatePlan
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [RatePlan](./connectors.pull.hotel.domain.contracts.search.response.rateplan)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

## Properties

### **Code**

The unique code for the rate plan.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Name**

The name of the rate plan.

```csharp
public string Name { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

## Constructors

### **RatePlan(String, String)**

Initializes a new instance of the [RatePlan](./connectors.pull.hotel.domain.contracts.search.response.rateplan) class with the specified code and optional name.

```csharp
public RatePlan(string code, string name)
```

#### Parameters

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The unique code for the rate plan. Cannot be null.

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The optional name of the rate plan.

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown when `code` is null.
