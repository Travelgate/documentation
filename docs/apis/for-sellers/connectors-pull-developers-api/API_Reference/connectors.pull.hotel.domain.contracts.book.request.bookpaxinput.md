# BookPaxInput

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents input data for a passenger (pax) in a hotel booking request.

```csharp
public class BookPaxInput
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [BookPaxInput](./connectors.pull.hotel.domain.contracts.book.request.bookpaxinput)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

## Properties

### **Age**

The age of the passenger.

```csharp
public int Age { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### **Name**

The first name of the passenger.

```csharp
public string Name { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **SurName**

The surname (last name) of the passenger.

```csharp
public string SurName { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **PersonalTitleType**

The personal title type of the passenger.

```csharp
public PersonalTitleType PersonalTitleType { get; set; }
```

#### Property Value

[PersonalTitleType](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype)<br />

**Remarks:**

The [BookPaxInput.PersonalTitleType](./connectors.pull.hotel.domain.contracts.book.request.bookpaxinput#personaltitletype) enum defines possible values, including:

- - [PersonalTitleType.MR](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype#mr): Represents "Mr." for male individuals.
- - [PersonalTitleType.MRS](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype#mrs): Represents "Mrs." for married female individuals.
- - [PersonalTitleType.MISS](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype#miss): Represents "Miss" for unmarried female individuals.
- - [PersonalTitleType.MS](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype#ms): Represents "Ms." for female individuals, regardless of marital status.
- - [PersonalTitleType.NOT_SPECIFIED](./connectors.pull.hotel.domain.contracts.book.request.personaltitletype#not_specified): Represents cases where the title is not specified.

## Constructors

### **BookPaxInput()**

```csharp
public BookPaxInput()
```
