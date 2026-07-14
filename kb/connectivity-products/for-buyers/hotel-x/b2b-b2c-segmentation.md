---
title: B2B and B2C Commercial Channels
sidebar_label: B2B & B2C Segmentation
sidebar_position: 5
description: Learn how to simultaneously operate and configure both B2B and B2C feeds using Travelgate's platform and HotelX API.
---


# Operating in B2B and B2C Segments

## Overview

Managing distinct commercial audiences requires a flexible technical infrastructure. **Travelgate allows partners to run both Business-to-Business (B2B) and Business-to-Consumer (B2C) operations simultaneously under a single integration.** By combining dedicated client codes, separate accesses, and rate-level business rules, you can segment traffic, apply commercial restrictions, and optimize your distribution strategy without maintaining separate API implementations.

This guide explains how B2B and B2C segmentation works in Travelgate, which configuration layers control it, and how to decide whether to separate traffic with client codes, accesses, or portfolios.

## Frequently Asked Questions

### Can I work with Travelgate in both B2B and B2C segments simultaneously?
**Yes.** Travelgate's platform is designed to support multiple commercial channels simultaneously.

The same HotelX integration can support both feeds as long as you model them correctly in your configuration. In practice, this separation is handled through three configuration layers: [client codes](/docs/get-started/key-concepts#client), [accesses](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials#access), and [portfolio mapping](/kb/platform/app-features/connections/connections-content/mapping-at-travelgate#can-i-map-different-portfolios-for-the-same-connection). The next section explains when to use each one.

### How does B2B and B2C segmentation work?

- **Client codes:** A [client](/docs/get-started/key-concepts#client) is the label used to categorize Buyer traffic. You can maintain multiple client codes, for example `client_b2b` and `client_b2c`, and all accesses are compatible with any client code.
- **Accesses:** An [access](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials#access) is the set of credentials and configuration used to connect to a Seller. Separate accesses are the right choice when a Seller gives you different credentials, configurations, or feeds for B2B and B2C.
- **Portfolios:** You can map multiple portfolios for the same connection, including B2B, B2C, or different market splits, **as long as each portfolio is delivered through a specific [HotelX access code](/kb/platform/app-features/connections/connections-content/mapping-at-travelgate#can-i-map-different-portfolios-for-the-same-connection).**

In practice, client codes answer **who is requesting**, while accesses and portfolios answer **which credentials and inventory set are being used**.

### Rate-Level Filtering in Inventory

Within Inventory, [rates](/kb/connectivity-products/for-buyers/inventory/set-up/add-rate/#rate-configuration-fields) can be configured with a **Distribution Type** of `B2B` or `B2C`. If a rate is configured as `B2C`, it will not be returned for `B2B` requests, and vice versa. If the field is empty, the rate is returned for both segments.

### Which setup should I use to separate B2B from B2C?

Use the simplest configuration layer that matches the business difference you need to enforce:

- Use **client codes** when you mainly need traffic identification, reporting, or internal segmentation.
- Use **separate accesses** when the Seller provides different credentials or connection settings per segment.
- Use **separate portfolios** when B2B and B2C inventory must be mapped independently for the same connection.
- Use **rate filters and business rules** when the differentiation happens at the Inventory rate level rather than at credential level.

### Does maintaining multiple feeds require a different onboarding track?
**No.** The onboarding process is the same regardless of whether you operate in B2B, B2C, or both. The B2B and B2C distinctions are handled through platform configuration afterward: client codes, accesses, portfolio mapping, and business-rule parameters.