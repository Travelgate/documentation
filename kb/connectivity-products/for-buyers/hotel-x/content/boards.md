---
sidebar_position: 4
---

# Boards

## What Is the Boards Query?

The Boards Query provides two key pieces of information:

1. **FastX Board List** – the master set of standardized board codes and descriptions used by Travelgate to ensure consistency across all Suppliers.
2. **Supplier Board Data** – the board codes and descriptions for a specific Supplier and access, showing how their boards map to the standardized FastX list.

:::info FastX Codes  
Not familiar with Travelgate’s **FastX Codes** yet? Visit our [FastX Codes documentation](/kb/platform/app-features/connections/fastx-codes) for a complete overview and all the details you need.  
:::


### How Can I Retrieve the Seller's Board List via Hotel-X?
To retrieve the board list, simply follow the specifications outlined in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards) and build your own Board queries. You can also customize the fields you request to ensure you receive only the relevant information.

:::tip
Explore our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards#query-overview) for a complete example of a Boards Query! 🚀
:::

## Filtering Board Queries

### How Can I Filter My Boards Query? 
You can refine your Boards query results by including the **"boardCodes"** field in your query criteria and specifying the board codes you want to retrieve.

## Understanding the Query Response

### What Information Is Included in the Boards Query Response?
The response typically includes the following fields:

- **Code**
- **Board Code**
- **Text**

:::note
Please note that the total number of boards offered by the Seller cannot be determined unless the complete boards list is downloaded. The amount of information returned may also vary across different Sellers.
:::

## Mapping Responsibilities

### Is It My Responsibility to Map Hotel Boards, or Does Travelgate Provide Mapping Support?

Each Supplier has its own board codes, but Travelgate provides a standardized **FastX board code**. In Search responses, you’ll see both the Supplier’s code and the corresponding FastX code.

This lets you work directly with FastX codes — consistent across all Suppliers of the Marketplace — without mapping each Supplier’s boards individually, while still having their codes if needed.


## Availability Considerations

### Does the Presence of a Board in the Hotel-X Boards Query Guarantee Its Availability During a Search? 
No, the Boards Query response provides a list of all board types configured by the Seller for your account. However, availability may vary based on your requested dates and distribution criteria. Some boards may not be available for specific searches.

:::tip
Check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards) and [API Playground](/playground) for further details! 🚀
:::
