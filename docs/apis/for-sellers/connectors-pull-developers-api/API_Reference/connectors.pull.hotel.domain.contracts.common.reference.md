# Reference

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents a reference for a hotel booking, including client, supplier, and hotel locators.
 These locators are used to uniquely identify a booking in different contexts. 
 It is mandatory to provide either the client or supplier locator.

```csharp
public class Reference
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Reference](./connectors.pull.hotel.domain.contracts.common.reference)<br />
Attributes DataContractAttribute

## Properties

### **ClientLocator**

The booking locator provided by the client.
 This is typically used to match the booking in the client's internal systems.

```csharp
public string ClientLocator { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **SupplierLocator**

The booking locator provided by the supplier.
 This identifier is used to reference the booking in the supplier's system.

```csharp
public string SupplierLocator { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **HotelLocator**

The booking locator specific to the hotel, provided by the supplier. (Optional)
 This may be required in cases where the hotel system uses its own unique identifiers.

```csharp
public string HotelLocator { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

## Constructors

### **Reference()**

Initializes a new instance of the [Reference](./connectors.pull.hotel.domain.contracts.common.reference) class.

```csharp
public Reference()
```

### **Reference(String, String, String)**

Initializes a new instance of the [Reference](./connectors.pull.hotel.domain.contracts.common.reference) class with specified locators.

```csharp
public Reference(string clientLocator, string supplierLocator, string hotelLocator)
```

#### Parameters

`clientLocator` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The client-provided locator for the booking.

`supplierLocator` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The supplier-provided locator for the booking.

`hotelLocator` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
An optional hotel-specific locator for the booking, provided by the supplier.
