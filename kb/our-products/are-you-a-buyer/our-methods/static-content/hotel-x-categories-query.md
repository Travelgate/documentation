---
title: Categories
sidebar_position: 5
---

# Hotel-X Development - Categories Query

### What is Hotel-X Categories Query?⭐
The Categories Query retrieves the list of categories associated with the given credentials (access). E.g. 5 stars, 1 key, and others.

### How can I retrieve the Seller's Category List via Hotel-X?
You just need to follow the specifications in our [API Playground](https://api.travelgatex.com/) and build your own Categories Query, as easy as that! Also, remember you are able to **personalize** the fields requested, so only the information that matters to you is returned in the response.

:::tip
Don't forget to check our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/categories#requests-examples) for a full example of a Hotel-X Categories Query!🚀
:::

### How can I know the total amount of categories returned by a Seller?🔢
To determine the total number of categories provided by a Seller, it's crucial to download the complete categories list.

### What can I expect to receive in Categories Query response?✔️
Some of the fields returned are: 

- Code
- Category Code
- Text

:::note
Please note that the amount of information and content returned may vary between Sellers.
:::


### Can I filter by category code?✔️
Yes! You can filter your results by adding the "**categoryCodes**" field to your criteria and specifying the category or categories you want to receive.


### What category codes should I map as Buyer? Does TravelgateX map for us?❓
Our objective is to ensure that Buyers always receive the native information as sent by the Seller without any modification, so mapping should be done either internally or externally on your side.

Additionally, connecting with a new Seller doesn't always mean interest in the whole portfolio of categories, so you have the flexibility to map only the specific categories you are interested in.

### Will I receive availability results for all the categories within a Seller's portfolio?⚠️
No, the Categories Query response includes all the categories that a Seller has configured for your account. However, it is possible that there may be no availability for the specific dates or distribution that you are requesting.

 
:::tip
Don't forget to check our [API Playground](/playground) for further information on Hotel-X Categories Query!🚀
:::
 
