# QuoteCriteria

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Quote.Request

Represents the criteria for a hotel quote request. Inherits from [Criteria](./connectors.pull.hotel.domain.contracts.common.criteria).

```csharp
public class QuoteCriteria : Connectors.Pull.Hotel.Domain.Contracts.Common.Criteria
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Criteria](./connectors.pull.hotel.domain.contracts.common.criteria) → [QuoteCriteria](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria)<br />
Attributes DataContractAttribute, KnownTypeAttribute, KnownTypeAttribute, KnownTypeAttribute, InterfaceTypeAttribute

**Remarks:**

The [QuoteCriteria](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria) defines the parameters for evaluating or prebooking a hotel option returned in a search response. 
 It includes details such as selected accommodations, boards, rooms, and payment types.

## Properties

### **Accommodation**

Accommodation details for the quote request, such as the hotel or rental being evaluated.

```csharp
public AccommodationRQ Accommodation { get; set; }
```

#### Property Value

[AccommodationRQ](./connectors.pull.hotel.domain.contracts.common.accommodationrq)<br />

**Remarks:**

The [QuoteCriteria.Accommodation](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria#accommodation) property specifies the accommodation being quoted. 
 It is required and should match the accommodations returned in the search response.

### **BoardCode**

Board code indicating the meal plan for the quote.

```csharp
public string BoardCode { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The [QuoteCriteria.BoardCode](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria#boardcode) represents the specific meal plan selected for the quote (e.g., "HB" for Half Board).
 It must correspond to one of the boards available in the search response.

### **Occupancies**

Details about the occupancy for the quote request, including rooms, passengers, and their ages.

```csharp
public IEnumerable<Occupancy> Occupancies { get; set; }
```

#### Property Value

[IEnumerable\<Occupancy\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

The [QuoteCriteria.Occupancies](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria#occupancies) define the distribution of guests across rooms. 
 This property is required and must conform to the [Occupancy](./connectors.pull.hotel.domain.contracts.common.occupancy) validation attributes.

### **Market**

The market code associated with the quote request.

```csharp
public string Market { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The [QuoteCriteria.Market](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria#market) property specifies the geographical or regulatory region for the quote. 
 It is optional and typically represented as an ISO 3166-1 alpha-2 country code.

### **Rooms**

List of selected rooms for the quote request.

```csharp
public IEnumerable<Room> Rooms { get; set; }
```

#### Property Value

[IEnumerable\<Room\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

The [QuoteCriteria.Rooms](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria#rooms) property includes the rooms being evaluated for the quote. 
 Each room must correspond to the options returned in the search response.

### **PaymentType**

Payment type selected for the quote request.

```csharp
public PaymentType PaymentType { get; set; }
```

#### Property Value

PaymentType<br />

**Remarks:**

The [QuoteCriteria.PaymentType](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria#paymenttype) defines the method of payment for the quote (e.g., "LaterPay" or "MerchantPay"). 
 It must align with the available payment options in the search response.

### **Parameters**

Additional parameters required for the quote.

```csharp
public IEnumerable<Parameter> Parameters { get; set; }
```

#### Property Value

[IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

The [QuoteCriteria.Parameters](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria#parameters) property allows passing additional metadata or information 
 between the search and quote requests. These parameters are supplier-specific and optional.

### **FromBookCriteria**

Criteria used for creating a quote from a book request.

```csharp
public FromBookCriteria FromBookCriteria { get; set; }
```

#### Property Value

[FromBookCriteria](./connectors.pull.hotel.domain.contracts.quote.request.frombookcriteria)<br />

**Remarks:**

The [QuoteCriteria.FromBookCriteria](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria#frombookcriteria) is only used in cases where a second quote is required during the booking process. 
 It provides the necessary data to perform a secondary validation. Do not fill it, it's for internal purposes

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

### **QuoteCriteria()**

```csharp
public QuoteCriteria()
```
