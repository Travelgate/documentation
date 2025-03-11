# Board

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a meal plan (board) option for accommodations in search responses.

```csharp
public class Board
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Board](./connectors.pull.hotel.domain.contracts.search.response.board)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

A board defines the meal plan associated with a hotel or accommodation (e.g., "Breakfast Included," 
 "All-Inclusive"). Each board includes a unique code, a name, and a collection of options 
 that offer this specific meal plan. This class is part of the [Hotel](./connectors.pull.hotel.domain.contracts.search.response.hotel) implementation 
 of the [Accommodation](./connectors.pull.hotel.domain.contracts.search.response.accommodation) base class.

## Properties

### **BoardCode**

The unique code identifying the meal plan option.

```csharp
public string BoardCode { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property represents the identifier for the board (e.g., "BB" for "Bed and Breakfast").

### **Name**

The name of the meal plan option.

```csharp
public string Name { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property provides a human-readable description of the meal plan (e.g., "Half Board").

### **Options**

The collection of options associated with this meal plan.

```csharp
public List<Option> Options { get; set; }
```

#### Property Value

[List\<Option\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

**Remarks:**

Each [Option](./connectors.pull.hotel.domain.contracts.search.response.option) represents a specific offering for this board, such as pricing, 
 cancellation policies, or availability. This collection defines all available options 
 for the given meal plan.

## Constructors

### **Board(String, List\<Option\>, String)**

Initializes a new instance of the [Board](./connectors.pull.hotel.domain.contracts.search.response.board) class with the specified parameters.

```csharp
public Board(string boardCode, List<Option> options, string name)
```

#### Parameters

`boardCode` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The unique code identifying the meal plan option.

`options` [List\<Option\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />
The collection of options associated with this meal plan.

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The name of the meal plan option. This parameter is optional.

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown when `boardCode` or `options` is null.
