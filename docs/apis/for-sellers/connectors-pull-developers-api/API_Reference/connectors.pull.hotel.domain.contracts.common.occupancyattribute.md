# OccupancyAttribute

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a custom validation attribute for occupancy-related properties or fields.

```csharp
public sealed class OccupancyAttribute : System.ComponentModel.DataAnnotations.ValidationAttribute
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Attribute](https://docs.microsoft.com/en-us/dotnet/api/system.attribute) → ValidationAttribute → [OccupancyAttribute](./connectors.pull.hotel.domain.contracts.common.occupancyattribute)<br />
Attributes [AttributeUsageAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.attributeusageattribute)

**Remarks:**

This attribute is used to validate collections of occupancy-related objects such as 
 [Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy), [BookOccupancy](./connectors.pull.hotel.domain.contracts.book.request.bookoccupancy), or [AmendOccupancy](./connectors.pull.hotel.domain.contracts.amendments.common.amendoccupancy). 
 It ensures that occupancy IDs are unique, sequentially ordered starting from 1, 
 and that there are no gaps in the sequence.

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

### **OccupancyAttribute()**

```csharp
public OccupancyAttribute()
```

## Methods

### **IsValid(Object)**

Validates whether the value of the specified object meets the criteria for occupancies.

```csharp
public bool IsValid(object value)
```

#### Parameters

`value` [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object)<br />
The value to validate. Expected to be a collection of occupancies.

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
`true` if the specified value is valid; otherwise, `false`.

**Remarks:**

The validation checks for:

- - Unique occupancy IDs.
- - IDs that are sequentially ordered starting from 1.
- - No gaps in the sequence of IDs.

This method supports collections of [BookOccupancy](./connectors.pull.hotel.domain.contracts.book.request.bookoccupancy), [AmendOccupancy](./connectors.pull.hotel.domain.contracts.amendments.common.amendoccupancy), 
 or [Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy) by converting them into a unified [Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy) format.

### **FormatErrorMessage(String)**

Applies formatting to an error message based on the given name.

```csharp
public string FormatErrorMessage(string name)
```

#### Parameters

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The name to include in the formatted message.

#### Returns

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
A localized string describing the validation error, mentioning the invalid field.

**Remarks:**

This method provides a default error message if the validation fails. 
 It can be customized further if needed.
