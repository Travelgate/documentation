---
title: Destinations
sidebar_position: 2
---

# Hotel-X Development - Destinations Query

### What is Hotel-X Destinations Query?🌍
Destinations Query returns the list of destinations from a Supplier’s access, so that you are able to retrieve all the destinations the Seller has configured for a given set of credentials.

:::tip
Don't forget to check our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/destinations#requests-examples) for a full example of a Hotel-X Destinations Query!🚀
:::

### What can I expect to receive in Destinations Query response?✔️

Some of the fields returned are:
  - Code
  - Available
  - DestinationLeaf
  - Texts
  - ClosestDestinations
  - Parent
  - Type

### Destination List Logic🔎
Once you run a Destinations Query, you will receive the Seller's native destination codes in the response. These codes can be classified into 2 categories:

1. Zone
1. City
### How should I utilize the zone and city nodes in my Destinations Query response?💡
Sellers build their own Destination Tree based on both nodes: zone and city. Consequently, when you request their destination list, you will receive a structured categorized response that can help you with the mapping process.

:::info
Please note that **the amount of information, content returned and the categorization of destinations may vary between Sellers.**

For instance, if you are connected with two Sellers who have inventory in San Francisco, one Seller may classify it as a Zone, while the other may classify it as a City.
:::

### What destination codes should I map as a Buyer?📑
When it comes to mapping destinations, it's all about your interests and business needs. If you're only interested in specific locations, you have the power to selectively map them.

For instance, let's say you're focused on the Spanish inventory of a Seller. Simply apply a filter to the Destinations Query using the "destinationCodes" field "ES" in your criteria. This way, you'll receive only the destinations linked to the "ES" zone.

It's all about tailoring the mapping to suit your preferences!

### How can I know the total amount of destinations returned by a Seller?🔢
To determine the total number of destinations provided by a Seller, it's crucial to download the complete destination list using [pagination](/kb/our-products/are-you-a-buyer/our-methods/static-content/faqs/token-based-pagination-hotel-room-destinations).

This process involves utilizing the token returned in each response to fetch the next set of destinations. Only when you encounter an error stating "destinations not found" will you know that you have retrieved the entire list. Keep this in mind to ensure you have the complete picture!

### Will I receive availability results for all the destinations returned in the Seller's destination list?⚠️
It is important to note that the inclusion of a destination in the list does not guarantee the availability of hotels in that specific location.

To ensure the availability of hotels, we suggest performing a Search query to find hotels that are available for your desired dates. Additionally, we encourage you to reach out to the Seller to inquire about the current availability of destinations and properties.

 
:::tip
Don't forget to check out our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/destinations) for Destinations Query and our [Resources and Best Practices article](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/resources-and-best-practices), where you'll find Insomnia and Postman collections with Query examples🚀🌟
:::
