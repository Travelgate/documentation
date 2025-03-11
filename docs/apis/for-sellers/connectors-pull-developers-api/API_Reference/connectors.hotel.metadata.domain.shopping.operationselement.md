# OperationsElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping

Represents an operations element in the hotel metadata domain.

```csharp
public class OperationsElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [OperationsElement](./connectors.hotel.metadata.domain.shopping.operationselement)<br />
Implements IValidatableObject

## Properties

### **Search**

Gets or sets the search element.

```csharp
public SearchElement Search { get; set; }
```

#### Property Value

[SearchElement](./connectors.hotel.metadata.domain.shopping.search.searchelement)<br />

### **Quote**

Gets or sets the quote element.

```csharp
public QuoteElement Quote { get; set; }
```

#### Property Value

[QuoteElement](./connectors.hotel.metadata.domain.shopping.quote.quoteelement)<br />

### **Book**

Gets or sets the book element.

```csharp
public BookElement Book { get; set; }
```

#### Property Value

[BookElement](./connectors.hotel.metadata.domain.shopping.book.bookelement)<br />

### **CheckBookings**

Gets or sets the check bookings element.

```csharp
public CheckBookingsElement CheckBookings { get; set; }
```

#### Property Value

[CheckBookingsElement](./connectors.hotel.metadata.domain.shopping.checkbookings.checkbookingselement)<br />

### **Cancel**

Gets or sets the cancel element.

```csharp
public CancelElement Cancel { get; set; }
```

#### Property Value

[CancelElement](./connectors.hotel.metadata.domain.shopping.cancel.cancelelement)<br />

### **AmendBoard**

Gets or sets the amend board element.

```csharp
public AmendBoardElement AmendBoard { get; set; }
```

#### Property Value

[AmendBoardElement](./connectors.hotel.metadata.domain.shopping.amendboard.amendboardelement)<br />

### **AmendDates**

Gets or sets the amend dates element.

```csharp
public AmendDatesElement AmendDates { get; set; }
```

#### Property Value

[AmendDatesElement](./connectors.hotel.metadata.domain.shopping.amenddates.amenddateselement)<br />

### **AmendPaxes**

Gets or sets the amend paxes element.

```csharp
public AmendPaxesElement AmendPaxes { get; set; }
```

#### Property Value

[AmendPaxesElement](./connectors.hotel.metadata.domain.shopping.amendpaxes.amendpaxeselement)<br />

### **AmendRemarks**

Gets or sets the amend remarks element.

```csharp
public AmendRemarksElement AmendRemarks { get; set; }
```

#### Property Value

[AmendRemarksElement](./connectors.hotel.metadata.domain.shopping.amendremarks.amendremarkselement)<br />

### **AmendRoom**

Gets or sets the amend room element.

```csharp
public AmendRoomElement AmendRoom { get; set; }
```

#### Property Value

[AmendRoomElement](./connectors.hotel.metadata.domain.shopping.amendroom.amendroomelement)<br />

## Constructors

### **OperationsElement()**

```csharp
public OperationsElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the operations element.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />
The validation context.

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The validation results.
