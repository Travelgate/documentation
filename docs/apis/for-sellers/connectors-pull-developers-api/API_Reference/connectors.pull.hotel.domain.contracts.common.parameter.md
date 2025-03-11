# Parameter

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a parameter with various properties and methods for building and cloning.
 Used for passing information between `Search`, `Quote`, and `Book` operations.

```csharp
public class Parameter
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

## Fields

### **MaxKey**

The maximum allowed value for the Key property.

```csharp
public static int MaxKey;
```

## Properties

### **Key**

Identifies the parameter with a numeric key.

```csharp
public int Key { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### **Value**

Defines the value associated with the parameter.

```csharp
public string Value { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **ParameterType**

Specifies the type of the parameter ([Parameter.ParameterType](./connectors.pull.hotel.domain.contracts.common.parameter#parametertype)), 
 whether it is internal or supplier-related.

```csharp
public ParameterType ParameterType { get; set; }
```

#### Property Value

[ParameterType](./connectors.pull.hotel.domain.contracts.common.parametertype)<br />

### **Immutable**

Indicates whether the parameter remains constant throughout operations 
 (e.g., from `Search` to `Quote` and `Book`). In second searches or quotes, an immutable parameter is used to identify and match the same option.

```csharp
public bool Immutable { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

**Remarks:**

- - When set to `true`, the parameter is fixed and serves as a key for comparison to ensure the same option is selected.
- - When set to `false`, the parameter value can be updated or modified, and it is not considered in the matching process.

### **RoomId**

Associates the parameter with a specific room, identified by its ID.

```csharp
public uint RoomId { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

## Constructors

### **Parameter(Int32, String, ParameterType, Boolean, UInt32)**

Initializes a new instance of the Parameter class with specified values.

```csharp
public Parameter(int key, string value, ParameterType parameterType, bool immutable, uint roomId)
```

#### Parameters

`key` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />
The key of the parameter.

`value` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The value of the parameter.

`parameterType` [ParameterType](./connectors.pull.hotel.domain.contracts.common.parametertype)<br />
The type of the parameter ([Parameter.ParameterType](./connectors.pull.hotel.domain.contracts.common.parameter#parametertype)).

`immutable` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
Indicates whether the parameter can be modified in subsequent operations.

`roomId` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The room ID associated with the parameter (optional).

## Methods

### **BuildParameter\<TKey\>(TKey, String, ParameterType, Boolean, UInt32)**

Builds a new Parameter instance with the specified values.

```csharp
public static Parameter BuildParameter<TKey>(TKey key, string value, ParameterType parameterType, bool immutable, uint roomId)
```

#### Type Parameters

`TKey`<br />
The type of the key, which must be an Enum.

#### Parameters

`key` TKey<br />
The key of the parameter.

`value` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The value of the parameter.

`parameterType` [ParameterType](./connectors.pull.hotel.domain.contracts.common.parametertype)<br />
The type of the parameter.

`immutable` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
Indicates whether the parameter is immutable (default is true).

`roomId` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The room ID associated with the parameter (optional).

#### Returns

[Parameter](./connectors.pull.hotel.domain.contracts.common.parameter)<br />
A new Parameter instance.

### **CloneParameter\<TKey\>(TKey, Parameter, UInt32)**

Clones an existing Parameter instance with a new key and optionally a new room ID.

```csharp
public static Parameter CloneParameter<TKey>(TKey key, Parameter parameter, uint roomId)
```

#### Type Parameters

`TKey`<br />
The type of the key, which must be an Enum.

#### Parameters

`key` TKey<br />
The new key for the cloned parameter.

`parameter` [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter)<br />
The original Parameter instance to clone.

`roomId` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The new room ID for the cloned parameter (optional).

#### Returns

[Parameter](./connectors.pull.hotel.domain.contracts.common.parameter)<br />
A new Parameter instance with the specified changes.
