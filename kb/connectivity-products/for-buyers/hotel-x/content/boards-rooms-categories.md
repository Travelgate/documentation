---
sidebar_position: 4
draft: true
---

# Boards, Rooms, and Categories

The Boards, Rooms, and Categories queries let you retrieve static information about a Seller's meal plans, room types, and hotel categories. This data is **Supplier-wide**, not per-property. Use these queries to support your mapping and understand what a Seller exposes before running search requests.

## Boards

:::info
In HotelX API, **boards** refer to meal plans. If you're transitioning from the Legacy Pull Buyers API, note that the MealPlan List method has been replaced with the Boards Query in HotelX.
:::

### What Is the Boards Query?

The Boards Query provides two key pieces of information:

1. **FastX Board List** – the master set of standardized board codes and descriptions used by Travelgate to ensure consistency across all Suppliers.
2. **Supplier Board Data** – the board codes and descriptions for a specific Supplier and access, showing how their boards map to the standardized FastX list.

#### How Can I Retrieve the Seller's Board List via HotelX?
To retrieve the board list, simply follow the specifications outlined in our [Boards Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards) and build your own Board queries. You can also **customize the fields** you request to ensure you receive only the relevant information.

:::tip
Explore our [HotelX Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards#query-overview) for a complete example of a Boards Query! 🚀
:::

### Filtering Board Queries

#### How Can I Filter My Boards Query?
You can refine your Boards query results by including the **"boardCodes"** field in your query criteria and specifying the board codes you want to retrieve.

### Understanding the Query Response

#### What Information Is Included in the Boards Query Response?
The response typically includes the following fields:

- **Code**
- **Board Code**
- **Text**

:::info
Please note that the total number of boards offered by the Seller cannot be determined unless the complete boards list is downloaded. The amount of information returned may also **vary across different Sellers.**
:::

### Mapping Process

Each Supplier has its own board codes and descriptions. Travelgate generates suggested correspondences to standardized FastX board codes, and the Seller can [validate or invalidate](/kb/platform/app-features/connections/fast-x-codes/fastx-sellers) those suggestions.

**Buyers can:**
- **Use Default mode**, which allows validated and pending board mappings;
- **Enable validated-only mode** to restrict to Seller-confirmed mappings;
- **Review both** the FastX board value and the Supplier-native board value.


:::warning Important:
- **Sellers should keep board descriptions focused on the meal plan itself**. Occupancy, promotions, rates, or unrelated information can reduce mapping quality. Boards that cannot be mapped are not made available through FastX.
- A **validated** board mapping means the **Seller has confirmed the suggested correspondence**. It is not an independent Travelgate certification of every commercial condition associated with the option.
:::

### Availability Considerations

#### Does the Presence of a Board in the HotelX Boards Query Guarantee Its Availability During a Search?
No, the Boards Query response provides a list of all board types configured by the Seller. However, availability may vary based on your requested dates and distribution criteria. Some boards may not be available for specific searches.

:::tip
Check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards) and [API Reference](/api) for further details! 🚀
:::

## Rooms

### What Is the Rooms Query?
The Rooms Query provides a comprehensive list of room types available for a given set of credentials (access), which may include translations into multiple languages. It is important to note that the response object `roomData` is shared with the Hotels Query but may contain different data.

#### How Can I Retrieve the Seller's Room List via HotelX?
To retrieve the room list, simply follow the specifications outlined in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms) and build your own Rooms Query. You can also customize the fields you request to ensure you receive only the relevant information.

:::tip
Explore our [HotelX Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms#query-overview) for a complete example of a Rooms Query! 🚀
:::

### Filtering and Pagination

#### How Can I Filter My Rooms Query?
You can refine your Rooms query results by including the **"roomCodes"** field in your query criteria and specifying the room codes you want to retrieve.

#### What Is the Maximum Number of Rooms I Can Request in a Single Rooms Query?
To specify the number of rooms returned in the response, include the **"maxSize"** field in your query criteria. The maximum value for "maxSize" is 10,000; however, we recommend requesting 500 rooms per page to optimize response times.

#### How Can I Paginate My Rooms Query?
Note that it is not possible to determine the total number of rooms offered by the Seller without downloading the complete list using [**pagination**](/kb/connectivity-products/for-buyers/hotel-x/content/token-pagination). 

**Pagination** involves using the token provided in each response to fetch the next batch of rooms. The full list is retrieved only when you receive an error indicating "rooms not found."

### Understanding the Query Response

#### What Information Is Included in the Rooms Query Response?
The response typically includes the following fields:

- **Room Code**
- **Source**
- **Occupancies**
- **Amenities**
- **Medias**
- **Views**
- **Beds**

:::info
The amount of information returned may vary across different Sellers.
:::

### Standardization Process

Each Supplier has its own native room codes and descriptions. **FastX generates a standardized room code and description at Search** time from the Supplier-native description.

Search responses include both:
- The Supplier-native room code and description;
- The FastX standardized room code and description.

:::warning Important:
- **FastX room standardization is not Seller-validated**. It is intended to reduce repetitive mapping and facilitate comparison, but it does not guarantee that rooms with the same standardized output are commercially identical in every respect.  
- Review the Supplier-native values whenever exact room equivalence, bedding, view, capacity, amenities, or other product attributes are material to your operation.
:::

### Additional Considerations

#### Can I Receive GIATA Codes in the Rooms Query Response?
Unfortunately, GIATA codes are not included in the Rooms Query response. For specific details on GIATA codes in the **Hotels Query response**, please check our article on [GIATA Multicodes](/kb/connectivity-products/for-buyers/giata/giata-multicodes).

#### Does the Presence of a Room in the Rooms Query Guarantee Its Availability During a Search?
No, the Rooms Query response provides a list of all the rooms a Seller has configured for your account. However, availability may vary based on your requested dates and distribution criteria. Some rooms may not be available for specific searches.

:::tip
Check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms) and [API Reference](/api) for further details. 🚀
:::

## Categories

### What Is the Categories Query?
The Categories Query retrieves the list of categories associated with a given set of credentials (access), such as "5 stars," "1 key," and others.

#### How Can I Retrieve the Seller's Category List via HotelX?
You can easily retrieve the category list by following the specifications outlined in our [HotelX Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/categories) and creating your own Categories Query. Additionally, you can **customize** the fields requested in your query to receive only the information relevant to your business needs.

:::tip
Check out our [HotelX Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/categories#query-overview) for a full example of a Categories Query. 🚀
:::

### Filtering Categories Queries

#### How Can I Determine the Total Number of Categories Provided by a Seller?
To obtain the full list of categories, you must **download the entire dataset.**

#### Can I Filter by Category Code?
Yes, you can filter your results by adding the `categoryCodes` field to your query criteria and specifying the desired categories.

### Understanding the Query Response

#### What Information Is Included in the Categories Query Response?
The response typically includes the following fields:

- **Code**
- **Category Code**
- **Text**

:::info
Please note that the quantity and content of information provided may vary depending on the Seller.
:::

### Mapping Responsibilities

#### Should I Map Category Codes as a Buyer? Does Travelgate Provide Mapping Support?
Travelgate provides Sellers' information without modifications. Therefore, mapping should be managed either internally by your team or through an external solution.

Additionally, when connecting with a new Seller, you have the flexibility to map only the categories that align with your business needs rather than mapping the entire portfolio.

### Additional Considerations

#### Will I Receive Availability for All Categories Listed by the Seller?
No, the Categories Query response contains all the categories that a Seller has configured for your account. However, availability may vary based on your search criteria, such as specific dates or distribution requests.

:::tip
For further details on the HotelX Categories Query, don't forget to check our [API Reference](/api). 🚀
:::