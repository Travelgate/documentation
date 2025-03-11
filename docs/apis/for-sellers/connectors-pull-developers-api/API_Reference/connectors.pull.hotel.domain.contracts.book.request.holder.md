# Holder

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents the holder of a hotel booking request.

```csharp
public class Holder
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Holder](./connectors.pull.hotel.domain.contracts.book.request.holder)<br />
Attributes DataContractAttribute

**Remarks:**

The [Holder](./connectors.pull.hotel.domain.contracts.book.request.holder) class includes key personal information about the individual responsible 
 for the booking. It encapsulates details such as the holder's name, surname, title, 
 and their associated contact information using the [Holder.ContactInfo](./connectors.pull.hotel.domain.contracts.book.request.holder#contactinfo) class.

## Properties

### **Name**

The name of the holder.

```csharp
public string Name { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property is required and specifies the first name of the individual making the booking.

### **SurName**

The surname of the holder.

```csharp
public string SurName { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property is required and specifies the last name of the individual making the booking.

### **PersonalTitleType**

The personal title type of the holder.

```csharp
public PersonalTitleType PersonalTitleType { get; set; }
```

#### Property Value

[PersonalTitleType](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype)<br />

**Remarks:**

The [Holder.PersonalTitleType](./connectors.pull.hotel.domain.contracts.book.request.holder#personaltitletype) enumeration defines possible titles:

- - [PersonalTitleType.MR](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype#mr): Represents "Mr." for male individuals.
- - [PersonalTitleType.MRS](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype#mrs): Represents "Mrs." for married female individuals.
- - [PersonalTitleType.MISS](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype#miss): Represents "Miss" for unmarried female individuals.
- - [PersonalTitleType.MS](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype#ms): Represents "Ms." for female individuals, regardless of marital status.
- - [PersonalTitleType.NOT_SPECIFIED](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype#not_specified): Represents cases where the title is not specified or known.

### **ContactInfo**

The contact information of the holder.

```csharp
public ContactInfo ContactInfo { get; set; }
```

#### Property Value

[ContactInfo](./connectors.pull.hotel.domain.contracts.book.request.contactinfo)<br />

**Remarks:**

This property uses the [Holder.ContactInfo](./connectors.pull.hotel.domain.contracts.book.request.holder#contactinfo) class to store the email and phone number 
 of the individual making the booking.

## Constructors

### **Holder(String, String, ContactInfo)**

Initializes a new instance of the [Holder](./connectors.pull.hotel.domain.contracts.book.request.holder) class with the specified name, surname, and optional contact information.

```csharp
public Holder(string name, string surName, ContactInfo contactInfo)
```

#### Parameters

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The name of the holder.

`surName` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The surname of the holder.

`contactInfo` [ContactInfo](./connectors.pull.hotel.domain.contracts.book.request.contactinfo)<br />
The contact information of the holder. This parameter is optional.
