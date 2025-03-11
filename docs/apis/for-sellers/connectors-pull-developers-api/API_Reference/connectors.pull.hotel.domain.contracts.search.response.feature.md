# Feature

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a feature of accommodation in search responses.

```csharp
public class Feature
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Feature](./connectors.pull.hotel.domain.contracts.search.response.feature)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

This class is used to include additional metadata or attributes about rooms, as required by specific integrations.
 It is a generic field designed to accommodate client-specific requirements and is only used in certain integrations, 
 such as HubPush.

## Properties

### **Code**

The unique code identifying the feature of the room.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field can be used to specify attributes or identifiers that are relevant to certain clients or systems.

- - ExtraBed: Rooms that allow an additional bed.
- - SeaView: Rooms with a sea view.
- - PetFriendly: Rooms that allow pets.

## Constructors

### **Feature()**

```csharp
public Feature()
```
