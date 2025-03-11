# ContactInfo

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents contact information for a hotel booking request.

```csharp
public class ContactInfo
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ContactInfo](./connectors.pull.hotel.domain.contracts.book.request.contactinfo)<br />
Attributes DataContractAttribute

**Remarks:**

The [ContactInfo](./connectors.pull.hotel.domain.contracts.book.request.contactinfo) class provides details specific to individual passengers (paxes), 
 including their email and phone number for communication purposes.
 This class is typically used within the [Holder](./connectors.pull.hotel.domain.contracts.book.request.holder) class.

## Properties

### **Email**

The email address of the passenger.

```csharp
public string Email { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property is required to ensure proper communication of booking confirmations and updates.

### **Phone**

The phone number of the passenger.

```csharp
public string Phone { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

While optional, providing a phone number ensures timely communication in urgent scenarios.

## Constructors

### **ContactInfo(String, String)**

Initializes a new instance of the [ContactInfo](./connectors.pull.hotel.domain.contracts.book.request.contactinfo) class with the specified email and optional phone number.

```csharp
public ContactInfo(string email, string phone)
```

#### Parameters

`email` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The email address of the passenger.

`phone` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The phone number of the passenger. This parameter is optional.
