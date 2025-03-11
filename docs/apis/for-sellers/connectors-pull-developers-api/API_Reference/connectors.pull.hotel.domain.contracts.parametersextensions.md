# ParametersExtensions

Namespace: Connectors.Pull.Hotel.Domain.Contracts

Provides extension methods for managing and accessing parameters within a collection of [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter) objects.
 These utilities simplify the process of storing and retrieving information between different operations (e.g., from Search to Quote, and Quote to Book).
 The integrator must define an enumeration containing the possible parameters for their integration and use these methods 
 to access and manage them.

```csharp
public static class ParametersExtensions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ParametersExtensions](./connectors.pull.hotel.domain.contracts.parametersextensions)<br />
Attributes [ExtensionAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.extensionattribute)

## Methods

### **TryGetParameter\<TKey\>(IEnumerable\<Parameter\>, TKey, UInt32, Parameter&)**

Attempts to retrieve a [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter) with the specified key and room ID from the collection.

```csharp
public static bool TryGetParameter<TKey>(IEnumerable<Parameter> parameters, TKey key, uint roomId, Parameter& parameter)
```

#### Type Parameters

`TKey`<br />
The type of the key, which must be an enumeration.

#### Parameters

`parameters` [IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of parameters to search.

`key` TKey<br />
The key identifying the parameter.

`roomId` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The room ID associated with the parameter.

`parameter` [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter)<br />
When this method returns, contains the found parameter, if any; otherwise, `null`.

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
`true` if a matching parameter was found; otherwise, `false`.

### **GetParameter\<TKey\>(IEnumerable\<Parameter\>, TKey, UInt32)**

Retrieves a single [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter) with the specified key and room ID from the collection.

```csharp
public static Parameter GetParameter<TKey>(IEnumerable<Parameter> parameters, TKey key, uint roomId)
```

#### Type Parameters

`TKey`<br />
The type of the key, which must be an enumeration.

#### Parameters

`parameters` [IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of parameters to search.

`key` TKey<br />
The key identifying the parameter.

`roomId` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The room ID associated with the parameter.

#### Returns

[Parameter](./connectors.pull.hotel.domain.contracts.common.parameter)<br />
The matching [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter), or `null` if no match is found.

### **GetParameter\<TKey\>(IEnumerable\<Parameter\>, TKey)**

Retrieves a single [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter) with the specified key from the collection.

```csharp
public static Parameter GetParameter<TKey>(IEnumerable<Parameter> parameters, TKey key)
```

#### Type Parameters

`TKey`<br />
The type of the key, which must be an enumeration.

#### Parameters

`parameters` [IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of parameters to search.

`key` TKey<br />
The key identifying the parameter.

#### Returns

[Parameter](./connectors.pull.hotel.domain.contracts.common.parameter)<br />
The matching [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter), or `null` if no match is found.

### **GetParameters\<TKey\>(IEnumerable\<Parameter\>, TKey, UInt32)**

Retrieves all [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter) objects with the specified key and room ID from the collection.

```csharp
public static IEnumerable<Parameter> GetParameters<TKey>(IEnumerable<Parameter> parameters, TKey key, uint roomId)
```

#### Type Parameters

`TKey`<br />
The type of the key, which must be an enumeration.

#### Parameters

`parameters` [IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of parameters to search.

`key` TKey<br />
The key identifying the parameters.

`roomId` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The room ID associated with the parameters.

#### Returns

[IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
An enumerable collection of matching [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter) objects.

### **GetParameters\<TKey\>(IEnumerable\<Parameter\>, TKey)**

Retrieves all [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter) objects with the specified key from the collection.

```csharp
public static IEnumerable<Parameter> GetParameters<TKey>(IEnumerable<Parameter> parameters, TKey key)
```

#### Type Parameters

`TKey`<br />
The type of the key, which must be an enumeration.

#### Parameters

`parameters` [IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of parameters to search.

`key` TKey<br />
The key identifying the parameters.

#### Returns

[IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
An enumerable collection of matching [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter) objects.
