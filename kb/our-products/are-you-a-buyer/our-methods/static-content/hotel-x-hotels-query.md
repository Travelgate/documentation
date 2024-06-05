---
title: Hotels
sidebar_position: 1
---

# Hotel-X Development - Hotels Query


### What is Hotel-X Hotels Query?🏨
Hotels Query returns a hotel list from a Supplier’s access, so that you are able to retrieve all the properties the Seller has configured for a given set of credentials.

### How can I retrieve the Seller's Hotel List via Hotel-X?  
You just need to follow the specifications in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels) and [API Playground](/playground) and build your own Hotels Query, as easy as that! Also, remember you are able to **personalize** the fields requested in order to receive only the information that matters to you in the response.

:::tip
Don't forget to check our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels#requests-examples) for a full example of a Hotel-X Hotels Query!🚀
:::

### Can I search hotels by destination?🔎
Of course! You can also **search hotels by destination by adding the "destinationCodes"** field in your Query criteria:

![hotels_query_destinations](https://storage.travelgate.com/kbase/hotels_query_destinations.jpg)


### What can I expect to receive in Hotels Query response?
Some of the fields returned are: 

- Hotel code
- Hotel name
- Location
- Amenities
- Medias
- Descriptions
- Room Information and max./min. occupancy and pax ranges (if provided)

:::info
Static content fetching is always sequential and **the amount of information and content returned may vary between Sellers**. You will find out all about mapping on TravelgateX [here](/kb/connections/connections-content/all-about-mapping).
:::

### How can I know the total amount of properties returned in Hotels Query?📑
Just add the "**count**" field to your Hotels Query in order to retrieve the total amount of properties in the list:

![hotelcount](https://storage.travelgate.com/kbase/hotelcount.jpg)


### Can I paginate content methods? 🔢
Sure! Make sure you check the following [article](/kb/our-products/are-you-a-buyer/our-methods/static-content/faqs/token-based-pagination-hotel-room-destinations) for further information.

### What languages does Hotel-X Hotels Query support?🔠
Hotel-X supports all languages, but receiving hotel descriptions in one or another depends entirely on the languages supported by every Seller - **we recommend you confirm this information with the Seller prior to activating the connection**.

You can also check this information through our **[Metadata Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata)**, though note that the information displayed is general and might be subject to changes depending on your agreement with the Seller.

### What is the difference between "hotelCode" and "hotelCodeSupplier"?☑️
Both "hotelCode" and "hotelCodeSupplier" are typically the same because we do not have our own hotel codes. However, there are instances where Sellers may return the same hotel code for different properties. In those cases, we concatenate the destination code with the hotel code to ensure a unique code (TravelgateX "hotelCode" vs. the Seller "hotelCodeSupplier").


### What hotel codes should I map as Buyer?❓
You should **always map the "hotelCode"** since it is the one you should use when performing Searches via our API.

### Will I receive availability results for all the properties within a Seller's portfolio?⚠️
No, the Hotel List response includes all the hotels that a Seller has configured for your account. However, it is possible that there may be no availability for the specific dates or distribution that you are requesting.

:::tip
More information on our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels) and [API Playground](/playground)
:::