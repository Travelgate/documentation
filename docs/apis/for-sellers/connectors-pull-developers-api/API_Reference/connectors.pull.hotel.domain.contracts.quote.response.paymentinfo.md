# PaymentInfo

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Quote.Response

Represents payment information for a hotel quote response.
 This information is required only when the payment type requires a credit card.

```csharp
public class PaymentInfo
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [PaymentInfo](./connectors.pull.hotel.domain.contracts.quote.response.paymentinfo)<br />
Attributes DataContractAttribute

## Properties

### **AcceptedCreditCards**

A collection of accepted credit card types.
 This is required when the payment type requires a credit card.

```csharp
public IEnumerable<CreditCardType> AcceptedCreditCards { get; set; }
```

#### Property Value

[IEnumerable\<CreditCardType\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

## Constructors

### **PaymentInfo()**

```csharp
public PaymentInfo()
```
