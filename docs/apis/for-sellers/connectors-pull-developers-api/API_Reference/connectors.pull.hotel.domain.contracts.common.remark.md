# Remark

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a remark provided by the supplier in the context of hotel bookings. 
 Remarks may contain additional information or instructions relevant to rooms, options, quotes, or bookings.

```csharp
public class Remark
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Remark](./connectors.pull.hotel.domain.contracts.common.remark)<br />
Attributes DataContractAttribute

## Properties

### **RemarkType**

The type of the remark, categorized by [Remark.RemarkType](./connectors.pull.hotel.domain.contracts.common.remark#remarktype).
 This specifies the nature or purpose of the remark:

- **[RemarkType.Hotel](./connectors.pull.hotel.domain.contracts.common.remarktype#hotel)** - Related to the hotel as a whole.
- **[RemarkType.Room](./connectors.pull.hotel.domain.contracts.common.remarktype#room)** - Specific to the room being booked.
- **[RemarkType.Service](./connectors.pull.hotel.domain.contracts.common.remarktype#service)** - Related to services provided by the accommodation.
- **[RemarkType.General](./connectors.pull.hotel.domain.contracts.common.remarktype#general)** - General remarks not tied to a specific entity.

```csharp
public RemarkType RemarkType { get; set; }
```

#### Property Value

[RemarkType](./connectors.pull.hotel.domain.contracts.common.remarktype)<br />

### **Text**

The text content of the remark, providing details or additional notes.
 This can include supplier-specific instructions, conditions, or general information.

```csharp
public string Text { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

## Constructors

### **Remark(RemarkType, String)**

Initializes a new instance of the [Remark](./connectors.pull.hotel.domain.contracts.common.remark) class with specified parameters.

```csharp
public Remark(RemarkType remarkType, string text)
```

#### Parameters

`remarkType` [RemarkType](./connectors.pull.hotel.domain.contracts.common.remarktype)<br />
The type of the remark, categorized by [Remark.RemarkType](./connectors.pull.hotel.domain.contracts.common.remark#remarktype).

`text` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The text content of the remark.
