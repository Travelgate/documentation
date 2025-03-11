# CheckBookingsByReferenceRequired

Namespace: Connectors.Pull.Hotel.Domain.Options

Defines the requirements for performing booking checks by reference in a cancellation operation.

```csharp
public class CheckBookingsByReferenceRequired
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CheckBookingsByReferenceRequired](./connectors.pull.hotel.domain.options.checkbookingsbyreferencerequired)

**Remarks:**

This class allows configuring when and where bookings should be verified by reference.

## Properties

### **When**

Specifies the condition under which bookings should be checked by reference.

```csharp
public CheckBookingsByReferenceRequiredWhen When { get; set; }
```

#### Property Value

[CheckBookingsByReferenceRequiredWhen](./connectors.pull.hotel.domain.options.checkbookingsbyreferencerequiredwhen)<br />

**Remarks:**

The [CheckBookingsByReferenceRequiredWhen](./connectors.pull.hotel.domain.options.checkbookingsbyreferencerequiredwhen) value determines whether booking checks
 are always required or never performed.

### **CheckBookingsByReferenceUrl**

The URL endpoint used to perform booking checks by reference.

```csharp
public string CheckBookingsByReferenceUrl { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property defines the API endpoint or service URL to validate bookings using a reference number.

## Constructors

### **CheckBookingsByReferenceRequired()**

```csharp
public CheckBookingsByReferenceRequired()
```
