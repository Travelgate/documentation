# Criteria

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Common

Represents the base criteria for hotel-related operations.

```csharp
public class Criteria
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Criteria](./connectors.pull.hotel.domain.contracts.common.criteria)<br />
Attributes DataContractAttribute, KnownTypeAttribute, ProtoIncludeAttribute, KnownTypeAttribute, ProtoIncludeAttribute, KnownTypeAttribute, ProtoIncludeAttribute, InterfaceTypeAttribute

**Remarks:**

This class serves as the foundation for specific request types, such as 
 [SearchCriteria](./connectors.pull.hotel.domain.contracts.search.request.searchcriteria), [QuoteCriteria](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria), and [BookCriteria](./connectors.pull.hotel.domain.contracts.book.request.bookcriteria).
 It includes common fields such as check-in and check-out dates, language preferences, 
 currency, and nationality.

## Properties

### **CheckIn**

The check-in date for the operation, represented as a string in ISO 8601 format (yyyy-MM-dd).

```csharp
public string CheckIn { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field is required and determines the start date of the client's stay.
 Use [Criteria.CheckInAsDateTime](./connectors.pull.hotel.domain.contracts.common.criteria#checkinasdatetime) to access the parsed DateTime representation.

### **CheckOut**

The check-out date for the operation, represented as a string in ISO 8601 format (yyyy-MM-dd).

```csharp
public string CheckOut { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field is required and determines the end date of the client's stay.
 Use [Criteria.CheckOutAsDateTime](./connectors.pull.hotel.domain.contracts.common.criteria#checkoutasdatetime) to access the parsed DateTime representation.

### **CheckInAsDateTime**

The check-in date parsed as a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) object.

```csharp
public DateTime CheckInAsDateTime { get; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

**Remarks:**

This property leverages  for parsing the string value 
 of [Criteria.CheckIn](./connectors.pull.hotel.domain.contracts.common.criteria#checkin). Use this to perform date-related operations.

### **CheckOutAsDateTime**

The check-out date parsed as a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) object.

```csharp
public DateTime CheckOutAsDateTime { get; }
```

#### Property Value

[DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)<br />

**Remarks:**

Similar to [Criteria.CheckInAsDateTime](./connectors.pull.hotel.domain.contracts.common.criteria#checkinasdatetime), this property parses [Criteria.CheckOut](./connectors.pull.hotel.domain.contracts.common.criteria#checkout) 
 to provide a strongly typed representation of the check-out date.

### **TotalNights**

The total number of nights for the stay, calculated as the difference between check-in and check-out dates.

```csharp
public uint TotalNights { get; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

**Remarks:**

The value is computed using  and assumes valid input 
 for [Criteria.CheckIn](./connectors.pull.hotel.domain.contracts.common.criteria#checkin) and [Criteria.CheckOut](./connectors.pull.hotel.domain.contracts.common.criteria#checkout).

### **Language**

The language code for the operation, represented as a 2-character ISO 639-1 code (e.g., "en", "es").

```csharp
public string Language { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field is required and is used to tailor the response to the client's preferred language.

### **Currency**

The preferred currency for the operation, defined as an optional [Criteria.Currency](./connectors.pull.hotel.domain.contracts.common.criteria#currency) value.

```csharp
public Nullable<Currency> Currency { get; set; }
```

#### Property Value

[Nullable\<Currency\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

**Remarks:**

This field specifies the currency in which prices should be displayed. 
 If not provided, the system may use a default value.

### **Nationality**

The nationality code of the client, represented as a 2-character ISO 3166-1 alpha-2 country code (e.g., "US", "FR").

```csharp
public string Nationality { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field is optional but can be used to customize the search results based on the client's nationality.

## Constructors

### **Criteria()**

```csharp
public Criteria()
```
