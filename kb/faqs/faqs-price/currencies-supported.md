---
sidebar_position: 5
---

# Currencies at Travelgate

## How Can I Check the Currencies Supported by a Seller?

To find out which currencies a Seller supports, reach out to the Seller directly. Each Seller may support different currencies based on their configuration and agreements. This ensures you receive the most accurate and up-to-date information regarding supported currencies.

## Handling Unsupported Currencies

If a Seller does not support the currency specified in the Search request, one of two things may happen:

1. The Seller returns an error indicating that the requested currency is not supported.
2. The Seller responds with the default currency configured on their end for your credentials.

## Can I Use a Different Currency for a Specific Supplier Only?

It depends on whether you send `currency` in your `criteria`. When you do, that value is used for **every** Supplier in the request and always wins — it can't be overridden for a single Supplier, even if you also send a Supplier-specific override.

If you don't send `currency` in `criteria`, its value is normally taken from your default settings (Access > Supplier > Client > Organization). In that case, you can still set a different `currency` for a specific Supplier (or a specific access) using the `suppliers` field of your [settings](/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/settings#overriding-settings-for-a-specific-supplier-in-your-request), listing its `accesses` — the override has no effect if you don't include them. This override wins over the default settings for that Supplier/access. Suppliers you don't list there will simply use their default settings.

:::tip
For more details, explore our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart) and try the [HotelX Playground](/playground) 🚀
:::
