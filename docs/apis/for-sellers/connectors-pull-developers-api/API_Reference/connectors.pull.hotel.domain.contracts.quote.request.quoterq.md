# QuoteRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Quote.Request

Represents a request for a hotel quote.

```csharp
public class QuoteRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [QuoteRq](./connectors.pull.hotel.domain.contracts.quote.request.quoterq)<br />
Attributes DataContractAttribute

**Remarks:**

The [QuoteRq](./connectors.pull.hotel.domain.contracts.quote.request.quoterq) is used to evaluate or prebook an option previously returned in a search response.
 It allows specifying search criteria, such as selected dates and rooms, through the [QuoteRq.QuoteCriteria](./connectors.pull.hotel.domain.contracts.quote.request.quoterq#quotecriteria) property.
 Additionally, connection details and access settings for the provider are included in the [QuoteRq.Settings](./connectors.pull.hotel.domain.contracts.quote.request.quoterq#settings) property.

## Properties

### **QuoteCriteria**

Criteria for the quote request, such as dates, selected rooms, or other search-related parameters.

```csharp
public QuoteCriteria QuoteCriteria { get; set; }
```

#### Property Value

[QuoteCriteria](./connectors.pull.hotel.domain.contracts.quote.request.quotecriteria)<br />

**Remarks:**

The [QuoteRq.QuoteCriteria](./connectors.pull.hotel.domain.contracts.quote.request.quoterq#quotecriteria) provides the necessary details to identify and evaluate the specific option 
 being quoted. For example, it may include the room selection and associated dates.

### **Settings**

Access settings for connecting with the provider during the quote request.

```csharp
public Settings Settings { get; set; }
```

#### Property Value

[Settings](./connectors.pull.hotel.domain.contracts.common.settings)<br />

**Remarks:**

The [QuoteRq.Settings](./connectors.pull.hotel.domain.contracts.quote.request.quoterq#settings) property includes authentication credentials and other configuration 
 details required to communicate with the provider.

## Constructors

### **QuoteRq()**

```csharp
public QuoteRq()
```
