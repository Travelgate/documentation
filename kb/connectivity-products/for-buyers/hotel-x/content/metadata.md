---
sidebar_position: 5
description: Learn how to use the HotelX Metadata Query to understand a Seller's capabilities, limits, and field support before sending your first requests.
---

# Metadata

## What Is the Metadata Query?

The Metadata Query provides a comprehensive overview of a Supplier's key characteristics, including the methods they have implemented and the associated limitations and restrictions. **Once your connection with a Seller is set up, always review their Metadata before sending your first requests** — it helps you understand their capabilities and avoid invalid or unnecessary calls.

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

## How Can I Use Metadata in My Integration?

Metadata is especially useful in the following scenarios:

- **When onboarding a new Seller:** Review their capabilities and constraints before writing any integration logic. For example, check whether they support amendments or require specific passenger details before your first request.
- **When optimizing Search requests:** Use `maxNumberHotels` and similar fields to align your batching strategy with the Seller's limits, reducing errors and unnecessary traffic.
- **When building request validation:** Use fields like `maxPaxInRoomCandidates` or `minimumStay` to validate requests on your side before sending them, avoiding easily preventable errors.
- **When verifying feature support:** Before attempting amendments or specific query types, confirm the Seller supports them via Metadata rather than discovering limitations in production.

### How Often Is Metadata Information Updated?

Since Sellers update their Metadata only when major changes occur in their APIs, we recommend confirming directly with them to ensure the information provided is up to date.

### As a Buyer, can I request an update to a Supplier's Metadata?

No. **A Supplier's Metadata applies globally to all their Buyers**, so individual Buyers cannot request updates directly. If you need a specific value reflected in the Metadata response, you should contact the Seller, who can review and evaluate the request on their side. If a change is needed, **the Supplier** must contact our team directly to request the update.

:::tip
For a full example of a HotelX Metadata Query and the complete list of available fields, check out our [HotelX Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata). 🚀
:::
