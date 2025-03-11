# CheckBookingsByReferenceInput

Namespace: Connectors.Pull.Hotel.Domain.Contracts.CheckBookings.Request.ByReference

Represents the input required for checking bookings by reference.

```csharp
public class CheckBookingsByReferenceInput
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CheckBookingsByReferenceInput](./connectors.pull.hotel.domain.contracts.checkbookings.request.byreference.checkbookingsbyreferenceinput)<br />
Attributes DataContractAttribute

**Remarks:**

This class is used to provide the necessary data for verifying a booking using its reference.
 It includes details such as the booking reference, accommodation information, language, and currency preferences.

## Properties

### **Reference**

Specifies the reference details for identifying the booking.

```csharp
public Reference Reference { get; set; }
```

#### Property Value

[Reference](./connectors.pull.hotel.domain.contracts.common.reference)<br />

**Remarks:**

The [CheckBookingsByReferenceInput.Reference](./connectors.pull.hotel.domain.contracts.checkbookings.request.byreference.checkbookingsbyreferenceinput#reference) includes locators provided by the client, supplier, or hotel to uniquely identify the booking.

### **AccommodationRq**

Contains the accommodation request details for the booking check.

```csharp
public AccommodationRQ AccommodationRq { get; set; }
```

#### Property Value

[AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq)<br />

**Remarks:**

The [AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq) property specifies the type and code of the accommodation (e.g., hotel or vacation rental) involved in the booking.
 This property is required.

### **Language**

Specifies the language for the booking check.

```csharp
public string Language { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The language is represented by a two-character ISO code (e.g., "EN" for English). 
 This property helps ensure that the responses are provided in the requested language.

### **Currency**

Specifies the currency for the booking check, if applicable.

```csharp
public Nullable<Currency> Currency { get; set; }
```

#### Property Value

[Nullable\<Currency\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

**Remarks:**

The [CheckBookingsByReferenceInput.Currency](./connectors.pull.hotel.domain.contracts.checkbookings.request.byreference.checkbookingsbyreferenceinput#currency) property allows specifying a preferred currency for displaying price-related information in the response.

## Constructors

### **CheckBookingsByReferenceInput()**

```csharp
public CheckBookingsByReferenceInput()
```
