---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Buyer Connectivity Guide

As a Buyer on Travelgate, you can access the same supplier portfolio through different connectivity methods. The key question is not how the Seller connects to us, but how you want to receive the product and how you want to complete the reservation.

## The big picture

Travelgate can work with Sellers in different models:

- **Pull Sellers**: Travelgate retrieves data from the Seller when needed
- **Push Sellers**: the Seller sends price and allotment updates to Travelgate's Inventory database, and Travelgate delivers them in the format the Buyer requires

From the Buyer perspective, the important thing is that Travelgate transforms the Seller data into the Buyer format you need.

Travelgate offers three primary ways for Buyers to receive inventory:

| 🔄 HotelX Pull Buyers API | ⚡ ChannelX Push Buyers API | 📁 Buyer Cache Files |
|---|---|---|
| **Real-time data and full shopping flow** | **Pre-loaded price & allotment data** | **Scheduled files for price & allotment data** |
| Search availability and pricing | Fast availability and pricing queries | CSV and XML files with availability and pricing |
| Book, cancel, read and modify reservations | Used mainly for search and calendar-driven experiences | Used mainly for search and pre-loaded data |
| Access all Sellers | Requires HotelX for booking | Requires HotelX for booking |

This is the simplest way to compare the three Buyer connectivity methods: HotelX covers the full reservation flow, while ChannelX and Buyer Cache Files are designed to preload availability and pricing data for search scenarios. Let's check together more detail each connectivity type for Buyers.


## 1. HotelX Pull Buyers API

HotelX is Travelgate's real-time Pull API for Buyer requests. This is the method you use when you want to search availability, get pricing, and complete a reservation.

When you request information from Travelgate, we retrieve the latest data from the Seller and return it to you. This applies regardless of whether the Seller is connected to Travelgate through a pull or push model.

### What it is used for

| Operation | Available |
|-----------|-----------|
| Search availability | ✅ Yes |
| Get pricing | ✅ Yes |
| Make bookings | ✅ Yes |
| Cancel or modify reservations | ✅ Yes |
| Retrieve static data (hotel lists, room data) | ✅ Yes |

### Why Buyers use HotelX

- **Real-time data**: you receive current availability and pricing at the moment of the request
- **Reservation flow**: this is the only method that supports the end-to-end booking flow
- **Seller coverage**: it works with all Sellers connected to Travelgate
- **Unified access**: regardless of how the Seller communicates with us, Travelgate exposes the result to you through HotelX

:::info
For the full overview on how to develop this kind of connection, see the [HotelX Pull Buyers API overview](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart).
:::

## 2. ChannelX Push Buyers API

ChannelX is a Buyer-facing solution for receiving pre-loaded availability and pricing data. In this model, Sellers pushes data to Travelgate, and Travelgate standardizes and delivers it to the Buyer in a structured way for search and price display use cases.

**ChannelX is for price & allotment data only**. To make bookings or manage reservations, you must use HotelX.

### What it is used for

| Operation | Available |
|-----------|-----------|
| Search availability | ✅ Yes (pre-cached) |
| Get pricing | ✅ Yes (pre-cached) |
| Make bookings | ❌ Use HotelX |
| Cancel or modify reservations | ❌ Use HotelX |
| Fetch static data | ❌ Use HotelX |

### Why Buyers use ChannelX

- **Fast searches**: data is already loaded in Travelgate's system
- **Frequent updates**: changes arrive as they are pushed by the Seller
- **Search-oriented use cases**: especially suitable for calendar or browse experiences
- **Buyer standardization**: Travelgate adapts Seller data into the format you need

### Considerations

- Only available for Push Sellers
- Updates are managed through a push-based feed rather than scheduled files
- HotelX is still required for booking and reservation management

:::info
For the full overview of this connection, see the [ChannelX Push Buyers API overview](/docs/apis/for-buyers/channel-x-push-buyers-api/quickstart).
:::

### Supported price models

ChannelX supports the two main pricing models used in Travelgate:

- **ARI (Availability Rate Inventory)**: fixed price per night
- **LOS (Length of Stay)**: price varies according to stay duration


## 3. Buyer Cache Files

Buyer Cache Files are another way to receive availability and pricing. Travelgate generates the files and uploads them to an SFTP environment provided to the Buyer. The Buyer then retrieves and processes the file in its own system.

**Buyer Cache Files are for search data only**. To make bookings or manage reservations, you must use HotelX.

### What it is used for

| Operation | Available |
|-----------|-----------|
| Access pre-cached availability | ✅ Yes |
| Get pre-cached pricing | ✅ Yes |
| Make bookings | ❌ Use HotelX |
| Cancel or modify reservations | ❌ Use HotelX |
| Fetch static data | ❌ Use HotelX |

### Why Buyers use Buyer Cache Files

- **Simple delivery format**: CSV or XML files
- **Batch processing**: well suited to scheduled ingestion
- **No API dependency**: useful when a Buyer prefers files over API requests
- **Buyer standardization**: Travelgate generates the file from the Seller data in the format required by the Buyer

### Considerations

- Data is delivered on a scheduled file cadence rather than a push-based feed
- Requires SFTP setup and file handling
- HotelX is still required for reservations and booking operations

### File formats

| File format | Type | Best use case | Pricing model |
|-------------|------|--------------|---------------|
| **CSV Files** | Flat file | Simple bulk ingestion and scheduled data refresh | Typically LOS |
| **XML Files** | Structured file | More detailed, standardized data exchange | ARI Standard / LOS |

Both formats are used to deliver availability and pricing data in a scheduled file flow. The choice depends on how the Buyer wants to process the information in its own system.

### ChannelX vs Buyer Cache Files

The difference between this two connection type is very clear:

- **ChannelX** is a push-based API feed. It is used when the Buyer wants more frequent updates and the Seller supports this model.
- **Buyer Cache Files** are scheduled file deliveries. They are used when the Buyer prefers a file-based integration and accepts updates on a fixed schedule.

Both are used to load availability and pricing data for search scenarios, but neither replaces HotelX for reservations. If the Buyer needs to book, cancel, or modify a reservation, it must use **HotelX**.


## Connection matrix

This matrix shows whether a Buyer connectivity method can be used with each Seller type.

| Buyer connectivity type | Pull Seller | Push Seller |
|------------------------|-------------|------------|
| **HotelX Pull Buyers API** | ✅ Yes | ✅ Yes |
| **ChannelX Push Buyers API** | ❌ No | ✅ Yes |
| **Buyer Cache Files (CSV)** | ✅ Yes | ✅ Yes |
| **Buyer Cache Files (XML: ARI Standard / LOS)** | ✅ Yes | ✅ Yes |

:::info
The important point is that the Buyer receives the product through the Buyer connectivity method they choose. The Seller's own integration model is handled by Travelgate.
:::


## Seller type does not define the Buyer experience

A Seller may connect to Travelgate in different ways:

- **Pull Seller**
- **Push Seller**

But the Buyer does not need to care about that internal implementation. Travelgate adapts and normalizes the data so you receive it in the format that fits your business.

That means:

- A Buyer can receive the same product through **HotelX**, **ChannelX**, or **Buyer Cache Files**
- Travelgate standardizes the Seller data before it reaches the Buyer
- The Buyer experience is defined by the method you choose, not by the Seller's internal integration model

This is the key point: regardless of whether the Seller is pull or push, the Buyer can access the product in the way that best suits their system.

## FAQ

<details>
  <summary><strong>Can I use all three methods together?</strong></summary>
  
  Yes. Many Buyers use HotelX for booking and combine it with ChannelX or Buyer Cache Files to optimize the search experience.
</details>

<details>
  <summary><strong>Do I need both HotelX and ChannelX?</strong></summary>
  
  No. HotelX is the method for reservations. ChannelX is optional and is mainly used to improve search performance and price display.
</details>

<details>
  <summary><strong>Do Seller types matter for the Buyer?</strong></summary>
  
  Not in the way the Buyer sees it. Travelgate adapts the Seller data so the Buyer receives it in the preferred format, regardless of whether the Seller is Pull or Push.
</details>

<details>
  <summary><strong>Can files include data from both Pull and Push Sellers?</strong></summary>
  
  Yes. Travelgate can generate and deliver Buyer Cache Files based on the Seller data, even when the original Seller connection model is different.
</details>

<details>
  <summary><strong>What if a Seller only connects through one model?</strong></summary>
  
  That does not change the Buyer experience. Travelgate standardizes the data so the Buyer receives it through the method that best matches the Buyer integration.
</details>

## To summarize

If your goal is to complete reservations, the answer is always **HotelX**.

If your goal is to load availability and pricing into your own system for search or price display, then you can use **ChannelX** or **Buyer Cache Files** depending on the preferred delivery model.

In other words, the Seller may connect to Travelgate in a Pull or Push way, but the Buyer receives the product in the way that fits the Buyer best.

:::info
The Buyer experience is standardized by Travelgate: regardless of the Seller's integration model, the Buyer receives the data through HotelX, ChannelX, or Buyer Cache Files according to the selected connectivity method.
:::

