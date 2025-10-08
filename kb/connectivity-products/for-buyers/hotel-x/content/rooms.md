---
sidebar_position: 5
---

# Rooms

## What Is the Rooms Query? 
The Rooms Query provides a comprehensive mapping of room types available for a given set of credentials (access), which may include translations into multiple languages. It is important to note that the response object `roomData` is shared with the Hotels Query but may contain different data.

### How Can I Retrieve the Seller's Room List via Hotel-X?
To retrieve the room list, simply follow the specifications outlined in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms) and build your own Rooms Query. You can also customize the fields you request to ensure you receive only the relevant information.

:::tip
Explore our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms#query-overview) for a complete example of a Rooms Query! 🚀
:::

## Filtering and Pagination

### How Can I Filter My Rooms Query? 
You can refine your Rooms query results by including the **"roomCodes"** field in your query criteria and specifying the room codes you want to retrieve.

### What Is the Maximum Number of Rooms I Can Request in a Single Rooms Query? 
To specify the number of rooms returned in the response, include the **"maxSize"** field in your query criteria. The maximum value for "maxSize" is 10,000; however, we recommend requesting 500 rooms per page to optimize response times.

### How Can I Paginate My Rooms Query? 
Note that it is not possible to determine the total number of rooms offered by the Seller without downloading the complete list using [pagination](/kb/connectivity-products/for-buyers/hotel-x/content/token-pagination). 

Pagination involves using the token provided in each response to fetch the next batch of rooms. The full list is retrieved only when you receive an error indicating "rooms not found."

## Understanding the Query Response

### What Information Is Included in the Rooms Query Response? 
The response typically includes the following fields:

- **Room Code**
- **Source**
- **Occupancies**
- **Amenities**
- **Medias**
- **Views**
- **Beds**

:::note
The amount of information returned may vary across different Sellers.
:::

## Mapping Responsibilities

### Is It My Responsibility to Map Hotel-X Rooms, or Does Travelgate Provide Mapping Support? 
Travelgate delivers the Seller's native data without modifications, meaning the mapping process should be handled internally by your team.  You are not required to map the entire room portfolio from a Seller—focus only on the rooms relevant to your business needs.

:::info
If you're using the Hotel-X API, you can [upload your own mapping files to our SFTP](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) to streamline your operations and improve efficiency. 🚀
:::

## Additional Considerations

### Can I Receive GIATA Codes in the Rooms Query Response? 
Unfortunately, GIATA codes are not included in the Rooms Query response. For specific details on GIATA codes in the **Hotels Query response**, please check our article on [GIATA Multicodes](/kb/connectivity-products/for-buyers/mapping-solutions/giata/giata-multicodes).

### Does the Presence of a Room in the Rooms Query Guarantee Its Availability During a Search?
No, the Rooms Query response provides a list of all the rooms a Seller has configured for your account. However, availability may vary based on your requested dates and distribution criteria. Some rooms may not be available for specific searches.

:::tip
Check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms) and [API Playground](/playground) for further details. 🚀
:::
