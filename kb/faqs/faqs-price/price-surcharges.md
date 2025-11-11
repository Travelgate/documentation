---
sidebar_position: 3
---

# Surcharges

## What Is a Surcharge?
A surcharge is an **additional fee** added to the option price. Sellers may apply surcharges for costs such as city taxes or resort fees when required on their end.

```graphql
type Surcharge {
  code: String
  chargeType: ChargeType!
  mandatory: Boolean!
  price: Price!
  description: String
}
```

:::info
Surcharge details may vary depending on the specific property and the Supplier's individual processes.
:::

## When are surcharges paid?
You can determine whether surcharges must be paid at the hotel (upon arrival) or in advance by checking the [`chargeTypes`](/api/types/enums/charge-type) field:

1. **INCLUDE** – The surcharge is mandatory and already included in the option price.
2. **EXCLUDE** – The surcharge is not included in the option price and must be paid separately.

```graphql
enum ChargeType {
  INCLUDE
  EXCLUDE
}
```

:::info
For more details, explore our [API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart) and [API Reference](/api) 🚀
:::
