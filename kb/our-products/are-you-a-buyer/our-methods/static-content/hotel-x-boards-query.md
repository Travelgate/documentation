---
title: Boards
sidebar_position: 4
---

# Hotel-X Development - Boards Query

### What is Hotel-X Boards Query?🏨
Boards Query returns a simple boards map for a given set of credentials (access) that may include translations to other languages.

### How can I retrieve the Seller's Board List via Hotel-X?
You just need to follow the specifications in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards) and [API Playground](https://api.travelgatex.com/) and build your own Boards Query, as easy as that! Also, remember you are able to personalize the fields requested in order to receive only the information that matters to you in the response.

:::tip
Don't forget to check our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards#requests-examples) for a full example of a Hotel-X Boards Query!🚀
:::


### How can I filter my Boards Query?🔎
To filter your results and receive specific board/s, you can include the "**boardCodes**" field in your criteria and specify the desired board/s.

### What can I expect to receive in Boards Query response?
- Code
- Board Code
- Text

:::note
Please keep in mind that you won't be able to determine the total number of boards offered by the Seller unless you download the complete boards list. The amount of information and content returned might also vary between Sellers.
:::


### Is it my responsibility to map Hotel-X Boards? Or does TravelgateX provide mapping support?🛠️
Our primary goal is to ensure that our Partners receive the Seller's native information without any modifications. This means that the mapping process should be handled either internally or externally on your side.

Don't worry, connecting with a new Seller doesn't mean you have to be interested in their entire boards portfolio. You have the flexibility to map only the specific boards that catch your interest.

:::note
Remember that if you are utilizing the Hotel-X API, you have the option to [upload your own mapping files to our FTP](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping). Take advantage of our FTP mapping and make the Booking Flow truly your own!🚀
:::

### Does the presence of a board in the Hotel-X Boards Query ensure its availability during a Search?⚠️
No, the Board List response provides information on all the boards that a Seller has configured for your account. However, it's important to note that availability may vary based on the specific dates and distribution you are requesting. Therefore, it is possible that certain boards may not be available for your desired criteria.

:::tip
Don't forget to check our Documentation and API Playground for further details!🚀
:::
 