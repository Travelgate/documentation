# DestinationsAttribute

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Request

Attribute used to validate the [Destinations](./connectors.pull.hotel.domain.contracts.search.request.destinations) property or field in a hotel search request.

```csharp
public sealed class DestinationsAttribute : System.ComponentModel.DataAnnotations.ValidationAttribute
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Attribute](https://docs.microsoft.com/en-us/dotnet/api/system.attribute) → ValidationAttribute → [DestinationsAttribute](./connectors.pull.hotel.domain.contracts.search.request.destinationsattribute)<br />
Attributes [AttributeUsageAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.attributeusageattribute)

**Remarks:**

Ensures that either the [Destinations.Accommodations](./connectors.pull.hotel.domain.contracts.search.request.destinations#accommodations) or [Destinations.Locations](./connectors.pull.hotel.domain.contracts.search.request.destinations#locations) property is set,
 but not both. This validation ensures that at least one valid destination is specified in the request.

## Properties

### **ErrorMessageString**

```csharp
protected string ErrorMessageString { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **RequiresValidationContext**

```csharp
public bool RequiresValidationContext { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **ErrorMessage**

```csharp
public string ErrorMessage { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **ErrorMessageResourceName**

```csharp
public string ErrorMessageResourceName { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **ErrorMessageResourceType**

```csharp
public Type ErrorMessageResourceType { get; set; }
```

#### Property Value

[Type](https://docs.microsoft.com/en-us/dotnet/api/system.type)<br />

### **TypeId**

```csharp
public object TypeId { get; }
```

#### Property Value

[Object](https://docs.microsoft.com/en-us/dotnet/api/system.object)<br />

## Constructors

### **DestinationsAttribute()**

```csharp
public DestinationsAttribute()
```

## Methods

### **IsValid(Object)**

Determines whether the specified value of the [Destinations](./connectors.pull.hotel.domain.contracts.search.request.destinations) object is valid.

```csharp
public bool IsValid(object value)
```

#### Parameters

`value` [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object)<br />
The value to validate, which must be a [Destinations](./connectors.pull.hotel.domain.contracts.search.request.destinations) instance.

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
`true` if the `value` is valid (i.e., either [Destinations.Accommodations](./connectors.pull.hotel.domain.contracts.search.request.destinations#accommodations) 
 or [Destinations.Locations](./connectors.pull.hotel.domain.contracts.search.request.destinations#locations) is not null); otherwise, `false`.

### **FormatErrorMessage(String)**

Formats the error message to be displayed when validation fails.

```csharp
public string FormatErrorMessage(string name)
```

#### Parameters

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The name of the field being validated.

#### Returns

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
A localized string describing the validation error, indicating that one of the required properties must be set.
