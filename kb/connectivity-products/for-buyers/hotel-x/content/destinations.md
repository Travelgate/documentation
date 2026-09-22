---
sidebar_position: 3
---

# Destinations

## What is the Destinations Query?
The Destinations Query lets you retrieve destination master data from HotelX in two scopes:

1. **FastX Destination List**: standardized destination values from Travelgate.
2. **Supplier Destination List**: native destination values configured by each Seller.

This allows you to inspect either the FastX destination master or one Seller's native destination tree, depending on the access used in the query.

:::tip
Check out our [HotelX Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/destinations#query-overview) for a complete example of a Destinations Query! 🚀
:::

### What Information is Included in the Destinations Query Response? 
The response typically includes the following fields:

- **Code** – The destination code from the selected Seller.
- **Available** – Indicates if the destination is available.
- **DestinationLeaf** – Specifies whether the destination is a final node in the hierarchy.
- **Texts** – Contains descriptions of the destination.
- **ClosestDestinations** – Lists nearby destinations.
- **Parent** – Indicates the parent destination in the hierarchy.
- **Type** – Specifies whether the destination is a zone or a city.

## FastX and Supplier Scope

### How Do FastX and Supplier Destination Values Differ?

- With **FastX access**, the destination list comes from the FastX standardized destination master.
- With **Supplier access**, the destination list comes from the Seller-native destination tree.

If your integration consumes both scopes, keep in mind that destination values and structure can vary depending on the selected access.

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

### How Can I Retrieve the FastX Destination Master?
Use your **FastX access** in the Destinations Query. You can find it in *MyConnections* under the Seller **"Travelgate"**.

### How Can I Retrieve a Seller's Native Destination List?
Use that Seller's access in the Destinations Query to retrieve the native destination tree configured for your account.

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
