# RateRule

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a rate rule, which defines specific conditions or restrictions associated with a hotel booking option.
 Rate rules may include eligibility criteria, geographical restrictions, or promotional constraints.

```csharp
public class RateRule : System.IEquatable`1[[Connectors.Pull.Hotel.Domain.Contracts.Search.Response.RateRule, Connectors.Pull.Hotel.Domain, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [RateRule](./connectors.pull.hotel.domain.contracts.search.response.raterule)<br />
Implements [IEquatable\<RateRule\>](https://docs.microsoft.com/en-us/dotnet/api/system.iequatable-1)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

## Properties

### **RateRuleType**

Selling restrictions applied to the room. These define specific conditions or eligibility requirements 
 that must be met to sell the room. Possible restrictions include:

```csharp
public RateRule RateRuleType { get; set; }
```

#### Property Value

RateRule<br />

**Remarks:**

- - Older55: Restricted to guests aged 55 and older.
- - Older60: Restricted to guests aged 60 and older.
- - Older65: Restricted to guests aged 65 and older.
- - Package: Can only be sold as part of a travel package.
- - CanaryResident: Available exclusively to residents of the Canary Islands.
- - BalearicResident: Available exclusively to residents of the Balearic Islands.
- - LargeFamily: Reserved for large families meeting specific criteria.
- - Honeymoon: Offered to couples on their honeymoon.
- - PublicServant: Restricted to public servants.
- - Unemployed: Reserved for unemployed individuals.
- - Mobile: Only available for bookings made via mobile devices.
- - Warranty: Requires a warranty or specific guarantee.
- - EssentialWorker: Reserved for essential workers (e.g., healthcare, emergency services).
- - Custom: A custom restriction defined by the provider.
- - Negotiated: Available as part of a negotiated agreement or special contract.

### **Code**

Represents a unique identifier for the rate rule, typically defined by the supplier.
 This code is used to reference and distinguish the rule from others.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Name**

Provides a human-readable name or label for the rate rule.
 This name is typically used in user interfaces or reports to describe the rule.

```csharp
public string Name { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Restrictions**

Defines a collection of additional restrictions that further specify the conditions of the rate rule.
 Restrictions can include age limits, regional requirements, or special eligibility conditions.

```csharp
public IEnumerable<Restriction> Restrictions { get; set; }
```

#### Property Value

[IEnumerable\<Restriction\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

## Constructors

### **RateRule(RateRule, String, String, IEnumerable\<Restriction\>)**

Creates a new instance of [RateRule](./connectors.pull.hotel.domain.contracts.search.response.raterule) with the specified type, code, name, and restrictions.

```csharp
public RateRule(RateRule rateRuleType, string code, string name, IEnumerable<Restriction> restrictions)
```

#### Parameters

`rateRuleType` RateRule<br />
The type of rate rule, such as "CanaryResident" or "Honeymoon."

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
A unique code identifying the rate rule (optional).

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
A descriptive name for the rate rule (optional).

`restrictions` [IEnumerable\<Restriction\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
A list of additional restrictions associated with this rate rule (optional).

## Methods

### **Equals(RateRule)**

Compares this instance to another [RateRule](./connectors.pull.hotel.domain.contracts.search.response.raterule) to determine if they are equal.
 Equality is based on the rule type, code, name, and associated restrictions.

```csharp
public bool Equals(RateRule rateRule)
```

#### Parameters

`rateRule` [RateRule](./connectors.pull.hotel.domain.contracts.search.response.raterule)<br />
The rate rule to compare against.

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
True if the two rate rules are equivalent; otherwise, false.

### **Equals(Object)**

Overrides the equality check for a generic object by casting it to a [RateRule](./connectors.pull.hotel.domain.contracts.search.response.raterule) and comparing their properties.

```csharp
public bool Equals(object obj)
```

#### Parameters

`obj` [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object)<br />
The object to compare.

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
True if the object is a [RateRule](./connectors.pull.hotel.domain.contracts.search.response.raterule) and has the same properties; otherwise, false.

### **GetHashCode()**

Generates a hash code based on the rate rule's properties, including its type, code, name, and restrictions.

```csharp
public int GetHashCode()
```

#### Returns

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />
An integer representing the hash code.
