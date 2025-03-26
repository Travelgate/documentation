---
sidebar_position: 2
---

# Hotels

## What is the Hotels Query? 
The Hotels Query allows Buyers to retrieve a list of hotels from a Seller's access, providing all the properties configured for their credentials.

### How Can I Retrieve a Seller's Hotel List via Hotel-X?  
To retrieve a Seller's hotel list, follow the specifications outlined in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels) and explore the [API Playground](/playground). You can **customize** the fields in your query to receive only the information relevant to your needs.

## Query Features

### Can I Search Hotels by Destination? 
Yes! You can search for hotels by destination by including the **"destinationCodes"** field in your query criteria:

![hotels_query_destinations](https://storage.travelgate.com/kbase/hotels_query_destinations.jpg)

### What Information Can I Expect in the Hotels Query Response?
The response may include the following fields:

- Hotel code
- Hotel name
- Location
- Amenities
- Media (images)
- Descriptions
- Room details, including max/min occupancy and pax ranges (if available)

:::info
Static content fetching is always sequential and the amount of content returned may vary between Sellers. Learn more about mapping on Travelgate [here](/kb/app-features/connections/connections-content/mapping-at-travelgate).
:::

### Can I obtain the list of amenities available at Travelgate?
Amenities information varies by supplier and hotel. For details, please consult the specific supplier's hotel list. While Travelgate consistently collects information from each Seller, please note that disclosing amenities information is optional.

### How Can I Find the Total Number of Properties Returned? 
To retrieve the total number of properties in the response, simply add the **"count"** field to your query:

![hotelcount](https://storage.travelgate.com/kbase/hotelcount.jpg)

### Can I Paginate Content Methods? 
Yes, you can! Check out our [pagination guide](/kb/connectivity-products/for-buyers/hotel-x/content/token-pagination) for more details.

### What Languages Does Hotel-X Hotels Query Support? 
Hotel-X supports all languages; however, the availability of hotel descriptions depends on the languages supported by the Seller. We recommend confirming this information with the Seller before activating the connection.

You can also verify supported languages through our [Metadata Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata). Keep in mind that the displayed information is general and may be subject to change based on your agreement with the Seller.

## Hotel Code Management

### What Is the Difference Between "hotelCode" and "hotelCodeSupplier"? 
While both "hotelCode" and "hotelCodeSupplier" are often the same, some Sellers may assign the same hotel code to different properties. To avoid duplication, Travelgate concatenates the destination code with the hotel code to ensure uniqueness. If necessary, you can still find the supplier codes under the 'hotelCodeSupplier' node.

### Which Hotel Codes Should I Use as a Buyer? 
Buyers should always map and use the **"hotelCode"**, as this is the code required when performing queries via our API.

### Can a Single Hotel Have Different Codes?  
Yes, the same hotel may have different codes depending on the Seller. For example, the hotel "La Plaza" could have code "1" with Supplier A and "2342334" with Supplier B.

## Availability and Filtering

### Will I Receive Availability Results for All the Properties in a Seller’s Portfolio? 
No, the hotel list includes all properties configured by the Seller for your account, but availability and pricing depend on the specific dates and search criteria used in your request.

### Can I Exclude Hotels With No Availability From the Portfolio Download?
No, it is not possible to exclude hotels with no availability from the portfolio download, as the Hotels Query provides static data about the Seller's product. 

To check real-time availability, you should use the **Search Query** in the booking flow. Additionally, you can optimize search results using the **Traffic Optimizer** tool, which allows blacklisting of hotels with consistent no availability issues. For more details, check the [Traffic Optimizer documentation](/kb/app-features/smart-traffic/traffic-optimizer/traffic-optimizer-details).

:::tip
More information is available in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels) and [API Playground](/playground).
:::
