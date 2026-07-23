---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";


# FastX Content

FastX Content (powered by [AO](https://blog.travelgate.com/travelgate-part-of-travelsoft-group-acquires-ao-uk-ltd)) is **the new content standard**, designed to integrate perfectly with our HotelX API. This premium application, available in the Travelgate Store, represents the natural evolution of our connectivity. 

To understand the product, think about connectivity in two phases:

- **Phase 1 - FastX Solution (foundation):** A unified coding system that standardizes hotel, board, and room codes in the booking flow. This removes the need to map each supplier individually and lets you apply aggregation business rules.
- **Phase 2 - FastX Content (premium extension):** A paid layer that enriches FastX codes with complete, standardized, multilingual static content powered by AI. It gives you a single source for hotel and room content.


## FastX: The new content standard for Buyers

Built on a solid connectivity foundation, FastX Content helps Buyers transform raw supplier data into clear, conversion-ready content.

### The Problem to Solve

Even when using FastX unified codes in the booking flow, Buyers usually face static-content issues from suppliers:

- **Inconsistent content:** Fragmented or incomplete descriptions of hotels and rooms depending on the supplier.
- **Lack of visual standardization:** Broken, low-quality, or duplicated images in the catalogs.
- **Content management overload:** The need to contract separate external feeds to obtain descriptions in multiple languages and detailed room features.

### The FastX Content Solution

By activating FastX Content, your integration moves from unified codes to complete property-level content.

In simple terms:

1. You send a search with your usual FastX codes.
2. The Travelgate platform connects with the suppliers.
3. You receive the transactional data along with AO's premium static content (images, clean descriptions, and categories) from more than 500 suppliers.
4. Everything is delivered through the current standardized HotelX API response in a single block, reducing your content integration effort to zero. No need for developments. 

### Subscription Plans (Tiers)
FastX Content by AO adapts to the complexity and volume of your business through four plans:

**🥉 Bronze:**
    - It builds on FastX codes to offer widely improved, normalized, and aggregated hotel content using AI technology.
    - It includes standardized hotel names, chains, categories, contacts, descriptions, amenities, and geolocation.
    - Language note: The Bronze plan will display the content in English by default.

**🥈 Silver:** Bronze + Rooms
    - It includes everything from the Bronze plan and adds content at the Rooms level.
    - It normalizes and maps room descriptions, amenities, and images to the highest industry standards.

**🥇 Gold:** Silver + Personalized Content
    - It includes everything from the Silver plan and allows the Buyer to upload their own locally contracted content.
    - It applies custom brand and tone-of-voice rules through artificial intelligence.

**🎖️ Enterprise:**
    - An omnichannel Product Information Management (PIM) system for the travel sector. It expands the scope beyond hotels to include destinations, points of interest (POI), excursions, tours, and data on accessibility and sustainability.
  
:::info Add-ons
Both initial tiers (Bronze and Silver) offer add-ons for extra language coverage and market customization. If your business needs a specific tone or image strategy, our team can adapt the content.
:::

### Why FastX Content by AO matters

This premium extension greatly benefits the final conversion (Look-to-Book) of Buyers:

- **Zero content mapping effort:** You work with one code model in the Travelgate network (FastX Solution) and delegate content cleaning, normalization, and deduplication.
- **Frictionless activation:** Setup follows a simple 3-step process through the Travelgate Store.
- **No booking-flow latency impact:** Enriched static content is delivered through HotelX content methods without adding delay to the booking flow.

### How to activate the service

Once FastX Content is installed from the Travelgate Store, the flow is as follows:

1. Our Partnerships team receives your FastX Content request and validates the commercial agreement.
2. A Travelgate administrator activates your application immediately after the review.
3. You will be able to start consuming the content directly via the [HotelX API](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels) (using your FastX access) or visually through the web panel in [Connections Content](/kb/platform/app-features/connections/connections-content/content-management).

#### API response examples

<Tabs>
  <TabItem value="before" label="(Before) Basic content">
    ```json
        {
            "node": {
                "createdAt": "2026-06-21T02:44:18.5836893Z",
                "updatedAt": "2026-07-21T08:28:36.1567405Z",
                "hotelData": {
                "hotelCode": "ES2235",
                "hotelName": "Ilunion Malaga",
                "categoryCode": null,
                "chainCode": null,
                "location": {
                    "address": "Paseo Maritimo Antonio Machado, 10",
                    "zipCode": null,
                    "city": null,
                    "country": "ES",
                    "coordinates": {
                    "latitude": 36.710408,
                    "longitude": -4.427283
                    }
                },
                "contact": {
                    "email": null,
                    "telephone": null,
                    "fax": null,
                    "web": null
                },
                "descriptions": [],
                "medias": null,
                "rooms": {
                    "edges": null
                },
                "allAmenities": null
                }
            }
        }
        ```
  </TabItem>
  <TabItem value="after" label="(After) With FastX Content">
    ```json

    ```
  </TabItem>
</Tabs>

#### Key differences at a glance

- Without FastX Content, static fields may be incomplete or empty.
- With FastX Content, you get normalized multilingual descriptions, curated images, and richer room-level attributes.
- Both responses keep the same hotel identity (same FastX hotel code) while improving content quality.


