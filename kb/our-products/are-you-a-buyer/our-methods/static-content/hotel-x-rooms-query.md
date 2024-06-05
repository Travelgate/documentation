---
title: Rooms
sidebar_position: 3
---

# Hotel-X Development - Rooms Query

### What is Hotel-X Rooms Query?🏨
Rooms Query returns a simple rooms map for a given set of credentials (access) that may include translations to other languages. You should bear in mind that the response object roomData is shared with Hotels Query but will not necessarily contain the same data.

### How can I retrieve the Seller's Room List via Hotel-X?
You just need to follow the specifications in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms) and build your own Rooms Query, as easy as that! Also, remember you are able to **personalize** the fields requested in order to receive only the information that matters to you in the response.

:::tip
Don't forget to check our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms#requests-examples) for a full example of a Hotel-X Rooms Query!🚀
:::

### How can I filter my Rooms Query?🔎
To filter your results and receive specific room/s, you can include the **"roomCodes"** field in your criteria and specify the desired room/s.

### What is the maximum number of rooms I am allowed to request in one request?🔢
To determine the number of properties you wish to receive in the Rooms response, you should include the "**maxSize**" field in your Query criteria.
Please keep in mind that the maximum value for "maxSize" is 10000. However, we recommend requesting 500 rooms per page to optimize response times.

### How can I paginate my Rooms Query?📑
Please be aware that it is not possible to determine the total number of rooms offered by the Seller without downloading the complete rooms list using [pagination](/kb/our-products/are-you-a-buyer/our-methods/static-content/faqs/token-based-pagination-hotel-room-destinations).

This process involves **utilizing the token** provided in each response to fetch the next batch of rooms. Only when you encounter an error indicating "rooms not found" will you know that you have retrieved the entire list.

### What can I expect to receive in Hotels Query response?✔️
Some of the fields returned are: 

- Room Code
- Source
- Occupancies
- Amenities
- Medias
- Views
- Beds

:::note
The amount of information and content returned might vary between Sellers.
:::

### Is it my responsibility to map Hotel-X Rooms? Or does TravelgateX provide mapping support?🛠️
Our primary goal is to ensure that our Partners receive the Seller's native information without any modifications. This means that the mapping process should be handled either internally or externally on your side.

Don't worry, connecting with a new Seller doesn't mean you have to be interested in their entire rooms portfolio. You have the flexibility to map only the specific rooms that catch your interest.

:::info
Remember that if you are utilizing the Hotel-X API, you have the option to [upload your own mapping files to our FTP](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping). Take advantage of our FTP mapping and make the Booking Flow truly your own!🚀
:::

### Is it possible to receive GIATA codes in Hotel-X Rooms Query response?💡
Unfortunately,  GIATA codes are not included in Hotel-X Rooms Query response. For specific details on GIATA codes in **Hotels Query response**, please check our article on [GIATA Multicodes](/kb/our-products/are-you-a-buyer/mapping-solutions/giata/giata-multicodes).

### Does the presence of a room in the Hotel-X Rooms Query ensure its availability during a Search?⚠️
No, the Room List response provides information on all the rooms that a Seller has configured for your account. However, it's important to note that availability may vary based on the specific dates and distribution you are requesting. Therefore, it is possible that certain rooms may not be available for your desired criteria.

:::tip
Don't forget to check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms) and [API Playground](/playground) for further details!🚀
:::
 
