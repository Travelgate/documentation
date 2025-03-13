# CreditCardInput

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents credit card input information for a hotel booking request.

```csharp
public class CreditCardInput
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CreditCardInput](./connectors.pull.hotel.domain.contracts.book.request.creditcardinput)<br />
Attributes DataContractAttribute

**Remarks:**

The [CreditCardInput](./connectors.pull.hotel.domain.contracts.book.request.creditcardinput) class includes detailed information about the credit card used in a booking, 
 such as card type, number, CVC, expiration date, and optional virtual card details.

## Properties

### **Type**

The type of the credit card.

```csharp
public CreditCardType Type { get; set; }
```

#### Property Value

CreditCardType<br />

**Remarks:**

The  enumeration specifies the card type, such as Visa, MasterCard, or AmEx.

### **Number**

The credit card number.

```csharp
public string Number { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property stores the primary account number (PAN) of the credit card.

### **Cvc**

The Card Verification Code (CVC) of the credit card.

```csharp
public string Cvc { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The CVC is a security feature typically located on the back of the card.

### **Expiration**

The expiration date of the credit card.

```csharp
public CreditCardExpiration Expiration { get; set; }
```

#### Property Value

[CreditCardExpiration](./connectors.pull.hotel.domain.contracts.book.request.creditcardexpiration)<br />

**Remarks:**

The [CreditCardExpiration](./connectors.pull.hotel.domain.contracts.book.request.creditcardexpiration) class specifies the month and year when the card expires.

### **IsVcc**

Indicates whether the credit card is a Virtual Credit Card (VCC).

```csharp
public bool IsVcc { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

**Remarks:**

When set to `true`, this indicates that the card is virtual rather than physical.

### **Holder**

The holder information of the credit card.

```csharp
public Holder Holder { get; set; }
```

#### Property Value

[Holder](./connectors.pull.hotel.domain.contracts.book.request.holder)<br />

**Remarks:**

The [CreditCardInput.Holder](./connectors.pull.hotel.domain.contracts.book.request.creditcardinput#holder) class provides the name, surname, and contact details of the cardholder.

### **VirtualCreditCard**

The virtual credit card information, if applicable.

```csharp
public VirtualCreditCard VirtualCreditCard { get; set; }
```

#### Property Value

[VirtualCreditCard](./connectors.pull.hotel.domain.contracts.book.request.virtualcreditcard)<br />

**Remarks:**

The [CreditCardInput.VirtualCreditCard](./connectors.pull.hotel.domain.contracts.book.request.creditcardinput#virtualcreditcard) class provides details specific to virtual credit cards.

### **ThreeDomainSecurity**

The 3-D Secure authentication information for the credit card transaction.

```csharp
public ThreeDomainSecurity ThreeDomainSecurity { get; set; }
```

#### Property Value

[ThreeDomainSecurity](./connectors.pull.hotel.domain.contracts.book.request.threedomainsecurity)<br />

**Remarks:**

The [CreditCardInput.ThreeDomainSecurity](./connectors.pull.hotel.domain.contracts.book.request.creditcardinput#threedomainsecurity) class includes information required for 3-D Secure authentication.

### **UrlPayment**

The URL payment information for the credit card transaction.

```csharp
public UrlPayment UrlPayment { get; set; }
```

#### Property Value

[UrlPayment](./connectors.pull.hotel.domain.contracts.book.request.urlpayment)<br />

**Remarks:**

The [CreditCardInput.UrlPayment](./connectors.pull.hotel.domain.contracts.book.request.creditcardinput#urlpayment) class provides URL-based payment details, if applicable.

## Constructors

### **CreditCardInput()**

```csharp
public CreditCardInput()
```
