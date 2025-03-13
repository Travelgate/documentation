# QuoteRs

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Quote.Response

Represents the response for a hotel quote request.
 This class provides details about the quoted price, status, rooms, and other relevant information for a hotel quote operation.

```csharp
public class QuoteRs
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [QuoteRs](./connectors.pull.hotel.domain.contracts.quote.response.quoters)<br />
Attributes DataContractAttribute

**Remarks:**

The [QuoteRs](./connectors.pull.hotel.domain.contracts.quote.response.quoters) class also includes additional data such as audit logs ([QuoteRs.AuditData](./connectors.pull.hotel.domain.contracts.quote.response.quoters#auditdata)),
 advice messages ([QuoteRs.AdviseMessages](./connectors.pull.hotel.domain.contracts.quote.response.quoters#advisemessages)), and cancellation policies ([QuoteRs.CancelPolicy](./connectors.pull.hotel.domain.contracts.quote.response.quoters#cancelpolicy)),
 helping clients understand the context and validity of the quote.

## Properties

### **AuditData**

Contains the audit data detailing the requests and responses exchanged with the supplier.
 This field is populated internally by the connector framework.

```csharp
public ProviderAudit AuditData { get; set; }
```

#### Property Value

ProviderAudit<br />

### **AdviseMessages**

Collection of advice messages, including errors or warnings encountered during the quote process.

```csharp
public IEnumerable<AdviseMessage> AdviseMessages { get; set; }
```

#### Property Value

[IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each  provides additional context for potential issues or warnings related to the quote.

### **Price**

Contains the price details for the quoted option.

```csharp
public Price Price { get; set; }
```

#### Property Value

Price<br />

**Remarks:**

The [QuoteRs.Price](./connectors.pull.hotel.domain.contracts.quote.response.quoters#price) includes net, gross, and other pricing components relevant to the quoted option.

### **Status**

Indicates the status of the quote.

```csharp
public Status Status { get; set; }
```

#### Property Value

[Status](./connectors.pull.hotel.domain.contracts.common.status)<br />

**Remarks:**

The [QuoteRs.Status](./connectors.pull.hotel.domain.contracts.quote.response.quoters#status) can represent values such as:

- - OK: The quote is valid and ready for booking.
- - RQ: The quote requires confirmation from the supplier.
- - Unknown: The quote status is undefined or not specified.

### **PaymentType**

Payment types available for the Option.

```csharp
public PaymentType PaymentType { get; set; }
```

#### Property Value

PaymentType<br />

**Remarks:**

The available payment types include:

- - LaterPay: Payment is made directly at the hotel; requires a credit card.
- - MerchantPay: Buyer and seller settle payments periodically; payments are not processed through Travelgate.
- - CardBookingPay: Payment is made using a virtual card at the time of booking.
- - CardCheckInPay: Payment is made using a virtual card at check-in.
- - PayX: Deprecated.

### **Rooms**

List of rooms included in the quoted option.

```csharp
public IEnumerable<Room> Rooms { get; set; }
```

#### Property Value

[IEnumerable\<Room\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each [Room](./connectors.pull.hotel.domain.contracts.search.response.room) contains details such as pricing, amenities, and cancellation policies.

### **CancelPolicy**

Cancellation policy applicable to the quoted option.

```csharp
public CancelPolicy CancelPolicy { get; set; }
```

#### Property Value

[CancelPolicy](./connectors.pull.hotel.domain.contracts.common.cancelpolicy)<br />

**Remarks:**

The [QuoteRs.CancelPolicy](./connectors.pull.hotel.domain.contracts.quote.response.quoters#cancelpolicy) details the conditions and penalties for canceling the quoted booking.

### **Surcharges**

Collection of surcharges applied to the quoted option.

```csharp
public IEnumerable<Surcharge> Surcharges { get; set; }
```

#### Property Value

[IEnumerable\<Surcharge\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Each [Surcharge](./connectors.pull.hotel.domain.contracts.common.surcharge) represents additional costs, such as mandatory fees or taxes.

### **Remarks**

Additional remarks associated with the quote.

```csharp
public IEnumerable<Remark> Remarks { get; set; }
```

#### Property Value

[IEnumerable\<Remark\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

Remarks can include extra information or specific conditions relevant to the quoted option.

### **PaymentInfo**

Payment information for the quoted option, such as accepted credit card types.

```csharp
public PaymentInfo PaymentInfo { get; set; }
```

#### Property Value

[PaymentInfo](./connectors.pull.hotel.domain.contracts.quote.response.paymentinfo)<br />

**Remarks:**

The [QuoteRs.PaymentInfo](./connectors.pull.hotel.domain.contracts.quote.response.quoters#paymentinfo) class provides details about payment methods and requirements.

### **Parameters**

Parameters associated with the quoted option for transferring data between operations.

```csharp
public IEnumerable<Parameter> Parameters { get; set; }
```

#### Property Value

[IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

The [Parameter](./connectors.pull.hotel.domain.contracts.common.parameter) collection can include metadata or client-defined values.

### **AddOns**

Additional information provided by the supplier for the quoted option.

```csharp
public Dictionary<string, string> AddOns { get; set; }
```

#### Property Value

[Dictionary\<String, String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br />

**Remarks:**

This is a collection of key-value pairs used to store supplier-specific data. It's for internal use.

## Constructors

### **QuoteRs(Price, Status, CancelPolicy, PaymentType, IEnumerable\<Room\>, PaymentInfo, IEnumerable\<AdviseMessage\>)**

Initializes a new instance of the [QuoteRs](./connectors.pull.hotel.domain.contracts.quote.response.quoters) class.

```csharp
public QuoteRs(Price price, Status status, CancelPolicy cancelPolicy, PaymentType paymentType, IEnumerable<Room> rooms, PaymentInfo paymentInfo, IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`price` Price<br />
The price details for the quote.

`status` [Status](./connectors.pull.hotel.domain.contracts.common.status)<br />
The status of the quote.

`cancelPolicy` [CancelPolicy](./connectors.pull.hotel.domain.contracts.common.cancelpolicy)<br />
The cancellation policy for the quote.

`paymentType` PaymentType<br />
The payment type for the quote.

`rooms` [IEnumerable\<Room\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The list of rooms included in the quote.

`paymentInfo` [PaymentInfo](./connectors.pull.hotel.domain.contracts.quote.response.paymentinfo)<br />
The payment information for the quote.

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The collection of advice messages.

#### Exceptions

[ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentexception)<br />
Thrown when certain payment types require credit card information, but it is missing in `paymentInfo`.

## Methods

### **BuildErrorResponse(IEnumerable\<AdviseMessage\>)**

Builds an error response with the specified advice messages.

```csharp
public static QuoteRs BuildErrorResponse(IEnumerable<AdviseMessage> adviseMessages)
```

#### Parameters

`adviseMessages` [IEnumerable\<AdviseMessage\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
A collection of  instances describing the error.

#### Returns

[QuoteRs](./connectors.pull.hotel.domain.contracts.quote.response.quoters)<br />
A new instance of [QuoteRs](./connectors.pull.hotel.domain.contracts.quote.response.quoters) configured as an error response.

### **BuildErrorResponse(AdviseMessage)**

Builds an error response with a single advice message.

```csharp
public static QuoteRs BuildErrorResponse(AdviseMessage adviseMessage)
```

#### Parameters

`adviseMessage` AdviseMessage<br />
A single  describing the error.

#### Returns

[QuoteRs](./connectors.pull.hotel.domain.contracts.quote.response.quoters)<br />
A new instance of [QuoteRs](./connectors.pull.hotel.domain.contracts.quote.response.quoters) configured as an error response.
