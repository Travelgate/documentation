---
sidebar_position: 7
---

# Chains

## What Is the Chains Query?

The Chains Query lets you retrieve hotel chain master data from HotelX in two scopes:

1. **FastX Chain List**: standardized chain values from Travelgate.
2. **Supplier Chain List**: native chain values configured by each Seller.

### How Can I Retrieve a Seller's Chain List via HotelX?

To retrieve chain values, follow the specifications in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/chains) and build your own Chains Query.

:::tip
Check our [HotelX Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/chains#query-overview) for a complete Chains Query example. 🚀
:::

## Filtering Chain Queries

### How Can I Filter My Chains Query?

You can filter chain values by adding `chainCodes` to the query criteria.

## Understanding the Query Response

### What Information Is Included in the Chains Query Response?

The response typically includes:

- **Chain code**
- **Text**
- **Language**

:::note
The value in `chainCode` depends on the selected scope (FastX or Supplier access). Some hotels may not include a `chainCode` value.
:::

## FastX and Supplier Scope

### How Do FastX and Supplier Chain Values Differ?

- With **FastX access**, `chainCode` comes from the FastX standardized master chain catalog.
- With **Supplier access**, `chainCode` comes from the Seller-native chain catalog.

If your integration consumes both scopes, keep in mind that values can differ depending on the access used.

## Additional Considerations

### Does the Presence of a Chain in Content Guarantee Availability in Search?

No. Content queries return static master data. Availability depends on search criteria, travel dates, distribution, and Seller conditions.

:::tip
You can review Seller constraints and supported behavior in [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata).
:::