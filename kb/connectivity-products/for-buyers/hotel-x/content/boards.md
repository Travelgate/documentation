---
sidebar_position: 4
---

# Boards

:::info
In HotelX API, **boards** refer to meal plans. If you're transitioning from the Legacy Pull Buyers API, note that the MealPlan List method has been replaced with the Boards Query in HotelX.
:::

## What Is the Boards Query?

The Boards Query provides two key pieces of information:

1. **FastX Board List** – the master set of standardized board codes and descriptions used by Travelgate to ensure consistency across all Suppliers.
2. **Supplier Board Data** – the board codes and descriptions for a specific Supplier and access, showing how their boards map to the standardized FastX list.


### How Can I Retrieve the Seller's Board List via HotelX?
To retrieve the board list, simply follow the specifications outlined in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards) and build your own Board queries. You can also customize the fields you request to ensure you receive only the relevant information.

:::tip
Explore our [HotelX Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards#query-overview) for a complete example of a Boards Query! 🚀
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

## Mapping Process

Each Supplier has its own board codes and descriptions. Travelgate generates suggested correspondences to standardized FastX board codes, and the Seller can validate or invalidate those suggestions.

Buyers can:
- Use Default mode, which allows validated and pending board mappings;
- Enable validated-only mode to restrict to Seller-confirmed mappings;
- Review both the FastX board value and the Supplier-native board value.

Sellers should keep board descriptions focused on the meal plan itself. Occupancy, promotional, rate, or unrelated information can reduce mapping quality. Boards that cannot be mapped are not made available through FastX.

:::note Validation meaning
A validated board mapping means the Seller has confirmed the suggested correspondence. It is not an independent Travelgate certification of every commercial condition associated with the option.
:::


## Availability Considerations

### Does the Presence of a Board in the HotelX Boards Query Guarantee Its Availability During a Search?
No, the Boards Query response provides a list of all board types configured by the Seller for your account. However, availability may vary based on your requested dates and distribution criteria. Some boards may not be available for specific searches.

:::tip
Check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards) and [API Playground](/playground) for further details! 🚀
:::