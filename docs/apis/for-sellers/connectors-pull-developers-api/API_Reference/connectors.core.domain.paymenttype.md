# PaymentType

Namespace: Connectors.Core.Domain

Represents the type of payment methods available for a booking or operation.

```csharp
public enum PaymentType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [PaymentType](./connectors.core.domain.paymenttype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

The [PaymentType](./connectors.core.domain.paymenttype) enum defines the accepted methods of payment:
 - LaterPay: Payment is made directly at the hotel; requires a credit card.
 - MerchantPay: Buyer and seller settle payments periodically; payments are not processed through Travelgate.
 - CardBookingPay: Payment is made using a virtual card at the time of booking.
 - CardCheckInPay: Payment is made using a virtual card at check-in.
 - PayX: Deprecated and no longer actively supported.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| LaterPay | 0 | Payment is deferred and made directly at the hotel; requires a credit card. |
| MerchantPay | 1 | Payment is handled directly between buyer and seller, without Travelgate processing. |
| CardBookingPay | 2 | Payment is processed using a virtual card at the time of booking. |
| CardCheckInPay | 3 | Payment is processed using a virtual card at the time of check-in. |
| PayX | 4 | Deprecated payment method, previously known as PayX. |
