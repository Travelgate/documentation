---
sidebar_position: 1
---

# Overview

Travelgate offers a set of API and connectivity models that let Buyers and Sellers connect to the marketplace in the way that best fits their systems. This overview helps a Partner quickly identify the right integration path for each side of the network.

## How a Buyer connects to Travelgate

Buyers consume product through Travelgate in one of two main ways: real-time API calls or a push-based product feed. The table below summarizes the most common Buyer connectivity models.

| Connectivity model | How the Buyer connects | What the Buyer receives | Best for |
| --- | --- | --- | --- |
| **HotelX Pull Buyers API** | The Buyer calls Travelgate’s GraphQL API and receives on-demand responses for search, quote, and booking. | Real-time access to Seller inventory, rates, and booking flow through Travelgate. | Buyers that want dynamic, transactional access and full booking flow through an API. |
| **ChannelX Push Buyers API** | The Buyer receives product data pushed to their own system and books through the marketplace when needed. | Hotel product data such as availability and prices, plus real-time booking through HotelX. | Buyers that want a push-based feed for content while still keeping booking live through the network. |

## How a Seller connects to Travelgate

Sellers publish their product to Travelgate in one of three main ways: pull connector, push-to-Inventory API, or file-based ingestion. The table below summarizes the Seller connectivity models.

| Connectivity model | How the Seller connects | What Travelgate does | What the Buyer sees |
| --- | --- | --- | --- |
| **Connector Pull Sellers API** | The Seller exposes a pull-based API, and Travelgate builds the connector. | Travelgate adapts the Seller API to the marketplace standard and manages the connectivity layer. | Buyers consume the product through Travelgate without integrating directly with the Seller. |
| **Inventory Push Sellers API** | The Seller pushes availability, rates, and pricing into Travelgate Inventory. | Travelgate stores the product centrally in Inventory, and the connector can be developed by Travelgate or implemented by the Seller using our API. | Buyers consume the product through different channels and integration models backed by Inventory. |
| **Sellers Cache Files** | The Seller loads product data through files instead of an API. | Travelgate develops the ingestion layer and loads the data into Inventory using the Seller’s own format or a Travelgate standard template. | Buyers consume the same product in the network without needing an API connection to the Seller. |

## Quick reading guide

- If you are a **Buyer**, choose the model based on whether you want **real-time API access** or **pushed product data**.
- If you are a **Seller**, choose the model based on whether your system already exposes **pull**, **push**, or **file-based** connectivity.
- If you are not sure which model fits your setup, start from the Buyer or Seller section and compare the use case and effort for each option.

![API Overview](https://storage.travelgate.com/docs/APIs_Overview.svg)
