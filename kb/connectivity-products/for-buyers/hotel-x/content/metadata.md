---
sidebar_position: 7
---

# Metadata

## What Is the Metadata Query?

The Metadata Query provides a comprehensive overview of the Supplier's key characteristics, including the methods implemented through their integration and the associated limitations and restrictions.

:::info
Travelgate's API specifications will always take precedence over the Supplier's specifications. For example, nationality must always be included in a Search request, even if it is optional for some Suppliers.
:::

## What Information Is Included in the Metadata Response?

The Metadata Query returns a variety of useful details, such as:

- Implemented methods.
- Maximum and minimum stay requirements.
- Minimum release periods.
- Supported payment types.
- Maximum number of guests per room.
- Maximum number of rooms per reservation.
- Cancellation policies (indicated whether they are returned in Search, Quote or both).
- RequiredAllPassengers flag (specifying if passenger name details are mandatory in Book requests).

:::note
The specific information returned depends on the Seller and may vary between Partners.
:::

### How Often Is Metadata Information Updated?

Since Sellers update their Metadata only when major changes occur in their APIs, we recommend confirming directly with them to ensure the information provided is up to date.

### As a Buyer, can I request an update to a Supplier's Metadata?
No. **A Supplier’s Metadata applies globally to all their Buyers**, so individual Buyers cannot request updates directly. If you need a specific value reflected in the Metadata response, you should contact the Seller, who can review and evaluate the request on their side. If a change is needed, **the Supplier** must contact our team directly to request the update.


:::tip
For a full example of a Hotel-X Metadata Query, check out our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata#query-overview). 🚀
:::
