# CancelInput

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Cancel.Request

Represents the input data required to process a hotel booking cancellation request.
 Validation for this request is performed by verifying the metadata information.

```csharp
public class CancelInput
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CancelInput](./connectors.pull.hotel.domain.contracts.cancel.request.cancelinput)<br />
Attributes DataContractAttribute

## Properties

### **AccessCode**

Access code associated with the cancellation request. 
 This property is deprecated and should not be used in new implementations.

```csharp
public string AccessCode { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Language**

Gets or sets the language code for the cancellation request.

```csharp
public string Language { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property is required and must adhere to a 2-character ISO 639-1 language code format.
 Example: "EN" for English.

### **AccommodationRq**

Details of the accommodation associated with the cancellation request, 
 such as the accommodation type and code.

```csharp
public AccommodationRQ AccommodationRq { get; set; }
```

#### Property Value

[AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq)<br />

**Remarks:**

The [AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq) class contains specific details about the accommodation, 
 which can either be a hotel or a rental.

### **Reference**

Reference information containing client, supplier, or hotel locators for the booking associated 
 with the cancellation request. Validation of these locators is performed 
 based on the metadata restriction information.

```csharp
public Reference Reference { get; set; }
```

#### Property Value

[Reference](./connectors.pull.hotel.domain.contracts.common.reference)<br />

**Remarks:**

The [CancelInput.Reference](./connectors.pull.hotel.domain.contracts.cancel.request.cancelinput#reference) class includes identifiers such as:

- - ClientLocator: The client's booking reference.
- - SupplierLocator: The supplier's booking reference.
- - HotelLocator: A unique identifier for the hotel booking.

This property is required to ensure accurate identification of the booking.

## Constructors

### **CancelInput()**

```csharp
public CancelInput()
```
