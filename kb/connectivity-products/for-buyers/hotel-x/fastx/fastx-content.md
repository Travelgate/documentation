---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";


# FastX Content

FastX Content (powered by [AO](https://blog.travelgate.com/travelgate-part-of-travelsoft-group-acquires-ao-uk-ltd)) is **the new content standard**, designed to integrate perfectly with our HotelX API. This premium application, available in the [Travelgate Store](/kb/platform/app-features/app-store/discover-apps), represents the natural evolution of our connectivity. 

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
    - It standardizes room descriptions, amenities, and images to the highest industry standards.

**🥇 Gold:**
    - It includes everything from your base plan (Bronze or Silver) and allows you to upload your own locally contracted content.

**🎖️ Enterprise:**
    - It includes everything needed to create and manage content in-house across any channel.
    - It provides full Travel Product Information Management (PIM) functionality, with deployment on your own infrastructure directly through AO.
  
:::info Add-ons
Both initial tiers (Bronze and Silver) offer add-ons for extra language coverage and market customization. If your business needs a specific tone or image strategy, our team can adapt the content.
:::

### Why FastX Content by AO matters

This premium extension greatly benefits the final conversion (Look-to-Book) of Buyers:

- **Zero content mapping effort:** You work with one code model in the Travelgate network (FastX Solution) and delegate content cleaning, normalization, and deduplication.
- **Frictionless activation:** Setup follows a simple 3-step process through the [Travelgate Store](/kb/platform/app-features/app-store/discover-apps).
- **No booking-flow latency impact:** Enriched static content is delivered through HotelX content methods without adding delay to the booking flow.

### How to activate the service

Once FastX Content is installed from the [Travelgate Store](/kb/platform/app-features/app-store/discover-apps), the flow is as follows:

1. Our Partnerships team receives your FastX Content request and validates the commercial agreement.
2. A Travelgate administrator activates your application immediately after the review.
3. You will be able to start consuming the content directly via the [HotelX API](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels) (using your FastX access) or visually through the web panel in [Connections Content](/kb/platform/app-features/connections/connections-content/content-management).

#### API response examples

<Tabs>
  <TabItem value="before" label="(Before) Basic content">
    ```json
    {
        "node" : {
            "createdAt" : "2026-06-21T02:44:18.5836893Z",
            "updatedAt" : "2026-08-10T12:27:03.4047945Z",
            "hotelData" : {
                "hotelCode" : "ES2235",
                "hotelName" : "Ilunion Malaga",
                "categoryCode" : null,
                "chainCode" : null,
                "location" : {
                    "address" : "Paseo Maritimo Antonio Machado, 10",
                    "zipCode" : null,
                    "city" : null,
                    "state" : null,
                    "country" : "ES",
                    "coordinates" : {
                        "latitude" : 36.710408,
                        "longitude" : -4.427283
                    },
                    "airports" : null
                },
                "contact" : {
                    "email" : null,
                    "telephone" : null,
                    "fax" : null,
                    "web" : null
                },
                "cardTypes" : null,
                "checkIn" : {
                    "minAge" : 0,
                    "schedule" : null,
                    "instructions" : null,
                    "specialInstructions" : null
                },
                "checkOut" : {
                    "minAge" : 0,
                    "schedule" : null,
                    "instructions" : null,
                    "specialInstructions" : null
                },
                "mandatoryFees" : null,
                "descriptions" : [
                ],
                "medias" : null,
                "allAmenities" : null
            }
        }
    }
    ```
  </TabItem>
  <TabItem value="after" label="(After) With FastX Content by AO">
    ```json
    {
        "node" : {
            "createdAt" : "2026-07-21T08:58:05.556905Z",
            "updatedAt" : "2026-08-25T09:19:01.8295728Z",
            "hotelData" : {
                "hotelCode" : "ES2235",
                "hotelName" : "Hotel ILUNION Malaga",
                "categoryCode" : "4",
                "chainCode" : "ILUNIONGRO",
                "location" : {
                    "address" : "Paseo Marítimo Antonio Machado, 10",
                    "zipCode" : "29002",
                    "city" : "Málaga",
                    "state" : "Malaga",
                    "country" : "ES",
                    "coordinates" : {
                        "latitude" : 36.710255,
                        "longitude" : -4.427258
                    },
                    "airports" : [
                        {
                            "airportData" : {
                                "code" : "AGP"
                            }
                        }
                    ]
                },
                "contact" : {
                    "email" : "reservasmalaga@ilunionhotels.com",
                    "telephone" : "34-95-655478057",
                    "fax" : "34-95-2046006",
                    "web" : "http://www.ilunionmalaga.com/"
                },
                "cardTypes" : [
                    "VI",
                    "DC",
                    "AX",
                    "CA"
                ],
                "checkIn" : {
                    "minAge" : 18,
                    "schedule" : {
                        "startTime" : "14:00"
                    },
                    "instructions" : [
                        {
                            "language" : "en",
                            "text" : "Extra-person charges may apply and vary depending on property policy. Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges. Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed. Special cancellation policies or charges may apply for group reservations (more than 8 rooms for the same property / stay dates). This property accepts credit cards, debit cards, and cash. Safety features at this property include a fire extinguisher"
                        }
                    ],
                    "specialInstructions" : [
                        {
                            "language" : "en",
                            "text" : "To make arrangements for check-in please contact the property ahead of time using the information on the booking confirmation. If you are planning to arrive after 6:00 PM please contact the property in advance using the information on the booking confirmation. Guests must contact the property in advance for check-in instructions. Front desk staff will greet guests on arrival at the property. Information provided by the property may be translated using automated translation tools."
                        }
                    ]
                },
                "checkOut" : {
                    "schedule" : {
                        "endTime" : "12:00"
                    },
                    "instructions" : null,
                    "specialInstructions" : null
                },
                "descriptions" : [
                    {
                        "type" : "ACTIVITY",
                        "texts" : [
                            {
                                "language" : "en",
                                "text" : "Distances are displayed to the nearest 0.1 mile and kilometer. Soho - 0.1 km / 0.1 mi - CAC Málaga - 0.6 km / 0.4 mi - Parque Canino Parque de Huelin - 0.7 km / 0.4 mi - Centro Comercial Larios Centro - 0.7 km / 0.4 mi - Parque del Mar - 0.8 km / 0.5 mi - Teatro del Soho CaixaBank - 0.9 km / 0.6 mi - Playa de San Andrés - 1 km / 0.6 mi - El Corte Ingles Commercial Center - 1 km / 0.6 mi - Picasso Park - 1.1 km / 0.7 mi - Central Market of Atarazanas - 1.1 km / 0.7 mi - Port of Malaga - 1.1 km / 0.7 mi - Santisimo Cristo de la Buena Muerte - 1.1 km / 0.7 mi - Calle Larios - 1.3 km / 0.8 mi - Carmen Thyssen Museum - 1.5 km / 0.9 mi - Tajo's Tree-Lined Avenue - 1.5 km / 0.9 mi. The preferred airport for Hotel ILUNION Malaga is Malaga Airport (AGP) - 10.7 km / 6.6 mi"
                            }
                        ]
                    },
                    {
                        "type" : "AMENITY",
                        "texts" : [
                            {
                                "language" : "en",
                                "text" : "Be sure to enjoy recreational amenities, including an indoor pool, a sauna, and a fitness center. Additional amenities at this hotel include complimentary wireless internet access, an arcade/game room, and gift shops/newsstands."
                            }
                        ]
                    },
                    {
                        "type" : "GENERAL",
                        "texts" : [
                            {
                                "language" : "en",
                                "text" : "In Málaga (Málaga Centro),Featured amenities include a business center, dry cleaning/laundry services, and a 24-hour front desk. Planning an event in Málaga? This hotel has 8611 square feet (800 square meters) of space consisting of a conference center and meeting rooms. Self parking (subject to charges) is available onsite.,In the heart of Málaga, Hotel ILUNION Malaga is within a 5-minute drive of Málaga Cathedral and Alcazaba of Málaga.  This hotel is 1.2 mi (1.9 km) from Port of Malaga and 1.9 mi (3.1 km) from Picasso Museum Malaga."
                            }
                        ]
                    },
                    {
                        "type" : "RESTAURANT",
                        "texts" : [
                            {
                                "language" : "en",
                                "text" : "Enjoy Mediterranean cuisine at El Puerto, a restaurant which features a bar/lounge, or stay in and take advantage of the room service (during limited hours). English breakfasts are available daily from 7:00 AM to 11:00 AM for a fee."
                            }
                        ]
                    }
                ],
                "medias" : [
                    {
                        "type" : "HOTEL",
                        "url" : "https://images.orbiscdn.com/images/ES2235/base/f91381fa7520c356931c12510557dd1b9d016d1e2456cfca11f8d4db9eab4467",
                        "texts" : [
                            {
                                "language" : "en",
                                "text" : "Primary image"
                            }
                        ]
                    },
                    {
                        "type" : "GENERAL",
                        "url" : "https://images.orbiscdn.com/images/ES2235/base/c277aa4e6213a54324305c4984463d5b768c02796c5cb777aa9f6f9d00447873",
                        "texts" : [
                            {
                                "language" : "en",
                                "text" : "Lobby"
                            }
                        ]
                    },
                    {
                        "type" : "ROOM",
                        "url" : "https://images.orbiscdn.com/images/ES2235/base/254556702633955b4d0c0175b4c6a512791e6dd46c9f387c49a90f9f0bbc9757",
                        "texts" : [
                            {
                                "language" : "en",
                                "text" : "Room"
                            }
                        ]
                    },
                    {
                        "..." : "more media items"
                    }
                ],
                "allAmenities" : {
                    "edges" : [
                        {
                            "node" : {
                                "amenityData" : {
                                    "code" : "",
                                    "amenityCode" : "HAC116",
                                    "texts" : [
                                        {
                                            "language" : "en",
                                            "text" : "Accessible parking"
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            "node" : {
                                "amenityData" : {
                                    "code" : "",
                                    "amenityCode" : "HAC79",
                                    "texts" : [
                                        {
                                            "language" : "en",
                                            "text" : "Sauna"
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            "node" : {
                                "amenityData" : {
                                    "code" : "",
                                    "amenityCode" : "HAC1",
                                    "texts" : [
                                        {
                                            "language" : "en",
                                            "text" : "24-hour front desk"
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            "..." : "more amenities"
                        }
                    ]
                }
            }
        }
    }
    ```
  </TabItem>
</Tabs>

#### Key differences at a glance

- Without FastX Content, static fields may be incomplete or empty.
- With FastX Content, you get normalized multilingual descriptions, curated images, and richer room-level attributes.
- Both responses keep the same hotel identity (same FastX hotel code) while improving content quality.


