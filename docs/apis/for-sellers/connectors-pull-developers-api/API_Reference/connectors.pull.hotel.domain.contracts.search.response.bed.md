# Bed

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a bed in a hotel room or accommodation.

```csharp
public class Bed
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Bed](./connectors.pull.hotel.domain.contracts.search.response.bed)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

This class provides detailed information about the type, description, count, 
 and sharing properties of beds in accommodation. It is commonly used to describe 
 room configurations in hotel search or booking responses.

## Properties

### **Type**

The type of the bed.

```csharp
public string Type { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

Examples include "Single," "Double," "Queen," or "King." This property is used 
 to specify the bed's category in the room.

### **Description**

A description of the bed.

```csharp
public string Description { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

Provides additional information about the bed, such as dimensions or special features 
 (e.g., "Fordable sofa bed" or "Extra-long bed").

### **Count**

The number of beds of this type in the room.

```csharp
public Nullable<int> Count { get; set; }
```

#### Property Value

[Nullable\<Int32\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

**Remarks:**

If not specified, the default value is null, indicating an unknown or variable count.

### **Shared**

Indicates whether the bed is shared.

```csharp
public Nullable<bool> Shared { get; set; }
```

#### Property Value

[Nullable\<Boolean\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

**Remarks:**

A value of `true` means the bed is shared (e.g., in dormitories or hostels), 
 while `false` means the bed is private. If not specified, the default value is null.

## Constructors

### **Bed()**

```csharp
public Bed()
```
