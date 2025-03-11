# ContentOperationsElement

Namespace: Connectors.Hotel.Metadata.Domain.Content

Represents a content operations element in the hotel metadata domain.

```csharp
public class ContentOperationsElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ContentOperationsElement](./connectors.hotel.metadata.domain.content.contentoperationselement)<br />
Implements IValidatableObject

## Properties

### **HotelListBasicInfo**

Gets or sets the hotel list basic info operation.

```csharp
public ContentOperationElement HotelListBasicInfo { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **HotelListFull**

Gets or sets the hotel list full operation.

```csharp
public ContentOperationElement HotelListFull { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **HotelListDelta**

Gets or sets the hotel list delta operation.

```csharp
public ContentOperationElement HotelListDelta { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **HotelDetails**

Gets or sets the hotel details operation.

```csharp
public ContentOperationElement HotelDetails { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **HotelDetailsByDates**

Gets or sets the hotel details by dates operation.

```csharp
public ContentOperationElement HotelDetailsByDates { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **HotelDetailsMultiCodes**

Gets or sets the hotel details multi codes operation.

```csharp
public ContentOperationElement HotelDetailsMultiCodes { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **HotelDetailsMultiLanguages**

Gets or sets the hotel details multi languages operation.

```csharp
public ContentOperationElement HotelDetailsMultiLanguages { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **HotelDetailsMultiLanguagesMultiCodes**

Gets or sets the hotel details multi languages multi codes operation.

```csharp
public ContentOperationElement HotelDetailsMultiLanguagesMultiCodes { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **Destinations**

Gets or sets the destinations operation.

```csharp
public ContentOperationElement Destinations { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **Boards**

Gets or sets the boards operation.

```csharp
public ContentOperationElement Boards { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **Categories**

Gets or sets the categories operation.

```csharp
public ContentOperationElement Categories { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **Rooms**

Gets or sets the rooms operation.

```csharp
public ContentOperationElement Rooms { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **Currencies**

Gets or sets the currencies operation.

```csharp
public ContentOperationElement Currencies { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **Markets**

Gets or sets the markets operation.

```csharp
public ContentOperationElement Markets { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

### **Giata**

Gets or sets the Giata operation.

```csharp
public ContentOperationElement Giata { get; set; }
```

#### Property Value

[ContentOperationElement](./connectors.hotel.metadata.domain.content.contentoperationelement)<br />

## Constructors

### **ContentOperationsElement()**

```csharp
public ContentOperationsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the content operations element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
