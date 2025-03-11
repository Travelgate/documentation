# Promotion

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a promotion for a hotel accommodation in search responses.

```csharp
public class Promotion
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Promotion](./connectors.pull.hotel.domain.contracts.search.response.promotion)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

A promotion may represent discounts, special offers, or exclusive deals tied to the accommodation. 
 It includes a unique code to identify the promotion and an optional name for descriptive purposes.

## Properties

### **Code**

The unique code identifying the promotion.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This code is used to uniquely reference the promotion in system operations or communications with suppliers.

### **Name**

The name of the promotion.

```csharp
public string Name { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This provides a descriptive label for the promotion, such as "Summer Discount" or "Early Bird Offer." 
 The name is optional and may be null if the promotion is only identified by its code.

## Constructors

### **Promotion(String, String)**

Initializes a new instance of the [Promotion](./connectors.pull.hotel.domain.contracts.search.response.promotion) class with the specified parameters.

```csharp
public Promotion(string code, string name)
```

#### Parameters

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The unique code identifying the promotion.

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The name of the promotion. This parameter is optional.

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown when `code` is null.
