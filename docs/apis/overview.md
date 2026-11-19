---
sidebar_position: 1
---

# Overview

Travelgate offers a set of API and connectivity models that let Buyers and Sellers connect to the network in the way that best fits their systems. This overview helps a Partner quickly identify the right integration path for each side of the network.

![Diagram of the Travelgate API and connectivity models for Buyers and Sellers](https://storage.travelgate.com/docs/APIs_Overview.svg)

## Quick reading guide

- **Buyer:** choose between **real-time API access** ([HotelX Pull Buyers API](./for-buyers/hotel-x-pull-buyers-api/quickstart.mdx)) and **pushed product data** ([ChannelX Push Buyers API](./for-buyers/channel-x-push-buyers-api/quickstart.mdx)).
- **Seller:** choose the model that matches what your system already supports: **pull** ([Connector Pull Sellers API](./for-sellers/connector-pull-sellers-api/quickstart.mdx)), **push** ([Inventory Push Sellers API](./for-sellers/inventory-push-graphql-api/quickstart.mdx)), or **files** ([Sellers Cache Files](./for-sellers/sellers-cache-files/quickstart.mdx)).

The tables below compare the options for each role.

## How a Buyer connects to Travelgate

Buyers get product through Travelgate in one of two ways.

| Connectivity model | How the Buyer connects | What the Buyer receives | Best for |
| --- | --- | --- | --- |
| [**HotelX Pull Buyers API**](./for-buyers/hotel-x-pull-buyers-api/quickstart.mdx) | The Buyer calls the Travelgate GraphQL API and receives on-demand responses for Search, Quote, and Book. | Real-time access to Seller inventory, rates, and booking flow through Travelgate. | Buyers that want dynamic transactional access and the full booking flow through an API. |
| [**ChannelX Push Buyers API**](./for-buyers/channel-x-push-buyers-api/quickstart.mdx) | The Buyer receives product data pushed to their own system and books through the marketplace when needed. | Hotel product data (availability and prices) as a feed. Booking stays real time through HotelX. | Buyers that want to store product data in their own system and still book live. |

## How a Seller connects to Travelgate

Sellers publish their product to Travelgate in one of three ways.

| Connectivity model | How the Seller connects | What Travelgate does | Who builds the integration | What the Buyer sees |
| --- | --- | --- | --- | --- |
| [**Connector Pull Sellers API**](./for-sellers/connector-pull-sellers-api/quickstart.mdx) | The Seller exposes a pull-based API, and Travelgate builds the connector. | Adapts the Seller API to the Travelgate standard and runs the connectivity layer. | Travelgate builds the connector. | The product through Travelgate, without integrating directly with the Seller. |
| [**Inventory Push Sellers API**](./for-sellers/inventory-push-graphql-api/quickstart.mdx) | The Seller pushes availability, rates and prices into Travelgate Inventory. | Stores the product centrally in Inventory. | The Seller, implementing the Inventory Push API directly. | The product through different channels and integration models backed by Inventory. |
| **Hybrid (Push + real-time validation)** | The Seller pushes setup and availability into Inventory, and Travelgate validates price, policies, and booking details in real time with the Seller at quote/book. | Combines fast local inventory search with real-time validation at booking. | Travelgate builds the connector. | Fast search responses with up-to-date price and policy confirmation at booking. |
| [**Sellers Cache Files**](./for-sellers/sellers-cache-files/quickstart.mdx) | The Seller loads product data through files instead of an API. | Loads the files into Inventory, in the Seller's format or a Travelgate standard template. | Travelgate builds the ingestion layer. | The same product in the network, without needing an API connection to the Seller. |

:::tip Not a Partner yet?
Are you a Seller interested in joining the Travelgate network? [Contact our team](https://team.travelgate.com/contact-us) and we will help you choose the right connectivity model.
:::
