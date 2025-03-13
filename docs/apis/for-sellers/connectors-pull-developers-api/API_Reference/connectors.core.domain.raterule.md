# RateRule

Namespace: Connectors.Core.Domain

Represents selling restrictions or eligibility criteria applied to room rates.

```csharp
public enum RateRule
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [RateRule](./connectors.core.domain.raterule)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

These restrictions define specific conditions under which the rate can be sold. Possible rules include:
 - Older55: Restricted to guests aged 55 and older.
 - Older60: Restricted to guests aged 60 and older.
 - Older65: Restricted to guests aged 65 and older.
 - Package: Can only be sold as part of a travel package.
 - CanaryResident: Available exclusively to residents of the Canary Islands.
 - BalearicResident: Available exclusively to residents of the Balearic Islands.
 - LargeFamily: Reserved for large families meeting specific criteria.
 - Honeymoon: Offered to couples on their honeymoon.
 - PublicServant: Restricted to public servants.
 - Unemployed: Reserved for unemployed individuals.
 - Mobile: Only available for bookings made via mobile devices.
 - Warranty: Requires a warranty or specific guarantee.
 - EssentialWorker: Reserved for essential workers (e.g., healthcare, emergency services).
 - Custom: A custom restriction defined by the provider.
 - Negotiated: Available as part of a negotiated agreement or special contract.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| Older55 | 0 | Rate that can only be sold to people who are 55 years or older. |
| Older60 | 1 | Rate that can only be sold to people who are 60 years or older. |
| Older65 | 2 | Rate that can only be sold to people who are 65 years or older. |
| Package | 3 | Rate that can't be sold separately from another product attached to it, such as a flight. |
| CanaryResident | 4 | Rate applicable to Canary Islands residents only. |
| BalearicResident | 5 | Rate applicable to Balearic Islands residents only. |
| LargeFamily | 6 | Rate applied to large families, determined by each seller. Check remarks for more details. |
| Honeymoon | 7 | Rate applied to newlyweds, determined by each seller. Check remarks for more details. |
| PublicServant | 8 | Rate applicable to public servants only. |
| Unemployed | 9 | Rate applied to unemployed individuals. |
| Mobile | 10 | Rate applicable to bookings made via mobile devices. |
| Warranty | 11 | Rate applicable to options with a cancellation warranty. |
| EssentialWorker | 12 | Rate reserved for essential workers (e.g., healthcare, emergency services). |
| Custom | 13 | Custom rate defined by the provider. |
| Negotiated | 14 | Negotiated rate as part of a special agreement or contract. |
