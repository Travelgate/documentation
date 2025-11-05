---
sidebar_position: 2
---

# Hotels

## What is the Hotels Query? 
The Hotels Query allows Buyers to:

1. **Retrieve the FastX master hotel list**, which contains all unique FastX codes representing every hotel available across all your connected Suppliers in the Marketplace.

2. **Retrieve the hotel list from a specific access**, returning the Supplier’s hotel codes (`hotelCode`field), as well as their native hotel codes (`hotelCodeSupplier` field) and detailed static information.

:::info FastX Codes  
Not familiar with Travelgate’s **FastX Codes** yet? Visit our [FastX Codes documentation](/kb/platform/app-features/connections/fastx-codes) for a complete overview and all the details you need.  
:::

### How Can I Retrieve a Seller's Hotel List via Hotel-X?  
To retrieve a specific Seller's hotel list or the FastX master hotel list, follow the specifications outlined in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels) and explore the [API Playground](/playground). You can **customize** the fields in your query to receive only the information relevant to your needs.

## Query Features

### Can I Search Hotels by Destination in the Hotels Query? 
Yes! When using the Hotels Query, you can search for hotels by destination by adding the `destinationCodes` field to your [`HotelXHotelListInput`](/api/types/inputs/hotel-xhotel-list-input).

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
Static content fetching is always sequential and the amount of content returned may vary between Sellers. Learn more about mapping on Travelgate [here](/kb/platform/app-features/connections/connections-content/mapping-at-travelgate).
:::

### Can I obtain the list of amenities available at Travelgate?
Amenities information varies by supplier and hotel. For details, please consult the specific supplier's hotel list. While Travelgate consistently collects information from each Seller, please note that disclosing amenities information is optional.

### How Can I Find the Total Number of Properties Returned? 
To retrieve the total number of properties in the response, simply add the [`count`](/api/types/objects/hotel-connection) field to your Hotels Query:

![hotelcount](https://storage.travelgate.com/kbase/hotelcount.jpg)

### Can I Paginate Content Methods? 
Yes, you can! Check out our [pagination guide](/kb/connectivity-products/for-buyers/hotel-x/content/token-pagination) for more details.

### What Languages Does Hotel-X Hotels Query Support? 
Hotel-X supports all languages; however, the availability of hotel descriptions depends on the languages supported by the Seller. We recommend confirming this information with the Seller before activating the connection.

You can also verify supported languages through our [Metadata Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata). Keep in mind that the displayed information is general and may be subject to change based on your agreement with the Seller.

## Hotel Code Management

### What Is the Difference Between "hotelCode" and "hotelCodeSupplier"? 
While both `hotelCode` and `hotelCodeSupplier` are often the same, some Sellers may assign the same hotel code to different properties. To avoid duplication, Travelgate concatenates the destination code with the hotel code to ensure uniqueness.

In addition, under the `mappings` node, you can also find the corresponding FastX code, which represents the unified identifier used across the Marketplace.

### Can I run a Hotel-X Search Query using the "hotelCodeSupplier"?
No, you cannot run a Hotel-X Search Query using the `hotelCodeSupplier` (the Supplier's native hotel code). By default, searches in Hotel-X use the **FastX codes**—unique identifiers that allow you to perform a single search across one or multiple Sellers simultaneously, without sending separate requests for each Supplier.

Alternatively, you can use the `hotelCode` field by specifying the Supplier context in the Search Query. If you prefer to use your own internal codes, you also have the option to upload your mappings to our system using the [Mapping Plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping/).


### Can a Single Hotel Have Different Codes?

Yes. **Each Supplier has its own set of codes, or context**. For example, the hotel “La Plaza” might be identified as “1” by Supplier A and “2342334” by Supplier B. Normally, this would require mapping each Supplier’s codes for hotels, boards, and rooms. Travelgate simplifies this process through FastX codes — unique identifiers that unify all Suppliers' contexts.

As a Buyer, you can work directly with [FastX codes](/kb/platform/app-features/connections/fastx-codes) without worrying about Supplier codes. For instance, FastX code BR1518 (Hotel “Nord Easy Patos”) corresponds to 32123 for Supplier A and HFAFHAS for Supplier B. When you search using BR1518, Travelgate automatically manages the translation automatically.

Search responses include both the Suppliers' codes as well as the standardized FastX codes, giving you the flexibility to work with either the unified FastX identifiers or the Supplier-specific ones.


## Availability and Filtering

### Will I Receive Availability Results for All the Properties in a Seller’s Portfolio? 
No, the hotel list includes all properties configured by the Seller for your account, but availability and pricing depend on the specific dates and search criteria used in your request.

### Can I Exclude Hotels With No Availability From the Portfolio Download?
No, it is not possible to exclude hotels with no availability from the portfolio download, as the Hotels Query provides static data about the Seller's product. 

To check real-time availability, you should use the **Search Query** in the booking flow. Additionally, you can optimize search results using the **Traffic Optimizer** tool, which allows blacklisting of hotels with consistent no availability issues. For more details, check the [Traffic Optimizer documentation](/kb/platform/app-features/smart-traffic/traffic-optimizer/traffic-optimizer-details).

:::tip
More information is available in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels) and [API Playground](/playground).
:::
