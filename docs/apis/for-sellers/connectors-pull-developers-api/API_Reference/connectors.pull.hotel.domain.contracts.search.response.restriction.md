# Restriction

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a restriction for a hotel accommodation in search responses.

```csharp
public class Restriction : System.IEquatable`1[[Connectors.Pull.Hotel.Domain.Contracts.Search.Response.Restriction, Connectors.Pull.Hotel.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Restriction](./connectors.pull.hotel.domain.contracts.search.response.restriction)<br />
Implements [IEquatable\<Restriction\>](https://docs.microsoft.com/en-us/dotnet/api/system.iequatable-1)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

Restrictions complement the [RateRule](./connectors.pull.hotel.domain.contracts.search.response.raterule) class by adding specific conditions or limitations 
 that further define eligibility for a rate rule. These are optional and provide additional granularity 
 for cases such as custom rate rules. 
 For example, if the [RateRule.RateRuleType](./connectors.pull.hotel.domain.contracts.search.response.raterule#rateruletype) is "Custom," this field can specify eligibility 
 for particular groups, such as employees of Microsoft.

## Properties

### **Code**

A unique identifier for the restriction.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This code is used to differentiate between various restrictions, even within the same type. 
 For example, "MSF1" might indicate a company-based restriction for Microsoft employees.

### **Name**

A descriptive name for the restriction.

```csharp
public string Name { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This provides a human-readable label for the restriction, such as "Hotel discount for Microsoft employees."

### **RestrictionType**

The type of the restriction, categorizing its purpose or application.

```csharp
public RestrictionType RestrictionType { get; set; }
```

#### Property Value

[RestrictionType](./connectors.pull.hotel.domain.contracts.search.response.restrictiontype)<br />

**Remarks:**

The [Restriction.RestrictionType](./connectors.pull.hotel.domain.contracts.search.response.restriction#restrictiontype) enum defines categories such as:

- - Company: Restrictions based on company affiliations.
- - Market: Restrictions tied to specific geographical markets.
- - Others: Other types of restrictions not covered by predefined categories.

## Constructors

### **Restriction(String, RestrictionType, String)**

Initializes a new instance of the [Restriction](./connectors.pull.hotel.domain.contracts.search.response.restriction) class with the specified code and restriction type.

```csharp
public Restriction(string code, RestrictionType restrictionType, string name)
```

#### Parameters

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
A unique identifier for the restriction, typically assigned by the provider (e.g., "MSF1").

`restrictionType` [RestrictionType](./connectors.pull.hotel.domain.contracts.search.response.restrictiontype)<br />
The type of the restriction, categorizing its nature or application.

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
An optional descriptive name for the restriction (e.g., "Hotel discount for Microsoft employees").

## Methods

### **Equals(Restriction)**

Compares the current restriction to another restriction to determine equality.

```csharp
public bool Equals(Restriction restriction)
```

#### Parameters

`restriction` [Restriction](./connectors.pull.hotel.domain.contracts.search.response.restriction)<br />
The restriction to compare against.

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
`true` if the `restriction` has the same [Restriction.Code](./connectors.pull.hotel.domain.contracts.search.response.restriction#code), [Restriction.Name](./connectors.pull.hotel.domain.contracts.search.response.restriction#name), 
 and [Restriction.RestrictionType](./connectors.pull.hotel.domain.contracts.search.response.restriction#restrictiontype); otherwise, `false`.

### **Equals(Object)**

Determines whether the specified object is equal to the current restriction.

```csharp
public bool Equals(object obj)
```

#### Parameters

`obj` [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object)<br />
The object to compare against.

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
`true` if the specified object is equal to the current restriction; otherwise, `false`.

### **GetHashCode()**

Computes a hash code for the current restriction.

```csharp
public int GetHashCode()
```

#### Returns

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />
A hash code that uniquely identifies the restriction based on its [Restriction.Code](./connectors.pull.hotel.domain.contracts.search.response.restriction#code), [Restriction.Name](./connectors.pull.hotel.domain.contracts.search.response.restriction#name), 
 and [Restriction.RestrictionType](./connectors.pull.hotel.domain.contracts.search.response.restriction#restrictiontype).
