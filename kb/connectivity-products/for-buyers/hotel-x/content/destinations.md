---
sidebar_position: 3
---

# Destinations

## What is the Destinations Query?
The Destinations Query provides a list of destinations from a supplier’s access, allowing Buyers to retrieve all destinations configured for a given set of credentials.

:::tip
Check out our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/destinations#query-overview) for a complete example of a Destinations Query! 🚀
:::

### What Information is Included in the Destinations Query Response? 
The response typically includes the following fields:

- **Code** – The Seller’s destination code.
- **Available** – Indicates if the destination is available.
- **DestinationLeaf** – Specifies whether the destination is a final node in the hierarchy.
- **Texts** – Contains descriptions of the destination.
- **ClosestDestinations** – Lists nearby destinations.
- **Parent** – Indicates the parent destination in the hierarchy.
- **Type** – Specifies whether the destination is a zone or a city.

## Understanding Destination List Logic

### How Are Destinations Categorized? 
When you run a Destinations Query, the Supplier's destination codes are classified into two categories:

1. **Zone**  
2. **City**  

### How Should I Use Zone and City Nodes in the Response? 
Suppliers structure their Destination Tree using both zone and city nodes. When you request their destination list, the response is categorized to facilitate the mapping process.

:::info
The amount of information, content, and categorization of destinations may vary across Sellers.  
For example, one Seller might classify San Francisco as a "Zone," while another may categorize it as a "City."
:::

## Destination Mapping and Filtering

### What Destination Codes Should I Map as a Buyer? 
The destinations you choose to map depend on your business needs. If you're only interested in specific locations, you can filter them accordingly.

For example, if you're focused on Spanish destinations, you can filter the Destinations Query using the **"destinationCodes"** field with the value **"ES"**, ensuring that only Spanish destinations are included in the response.

### How Can I Determine the Total Number of Destinations Provided by a Seller? 
To retrieve the complete list of destinations, you need to use [pagination](/kb/connectivity-products/for-buyers/hotel-x/content/token-pagination).

By utilizing the token provided in each response, you can fetch subsequent sets of destinations. When you encounter an error message stating **"destinations not found,"** it indicates that the entire list has been retrieved.

## Availability Considerations

### Will All Destinations in the List Have Availability? 
No, the inclusion of a destination in the list does not guarantee hotel availability in that location. 

To verify hotel availability, you should:

1. Perform a **Search Query** to check hotel availability for your desired dates.
2. Reach out to the Seller to inquire about the current availability of destinations and properties.

:::tip
Explore our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/destinations) to learn more about Destinations Query with detailed examples! 🚀🌟
:::
