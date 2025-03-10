---
sidebar_position: 6
---

# Categories

## What Is the Categories Query?
The Categories Query retrieves the list of categories associated with a given set of credentials (access), such as "5 stars," "1 key," and others.

### How Can I Retrieve the Seller's Category List via Hotel-X?
You can easily retrieve the category list by following the specifications outlined in our [API Playground](/playground) and creating your own Categories Query. 

Additionally, you can **customize** the fields requested to receive only the information relevant to your business needs.

:::tip
Check out our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/categories#requests-examples) for a full example of a Categories Query. 🚀
:::

## Filtering and Pagination

### How Can I Determine the Total Number of Categories Provided by a Seller? 
To obtain the full list of categories, you must download the entire dataset. Use pagination techniques to ensure you capture all available categories.

### Can I Filter by Category Code? 
Yes, you can filter your results by adding the **"categoryCodes"** field to your query criteria and specifying the desired categories.

## Understanding the Query Response

### What Information Is Included in the Categories Query Response? 
The response typically includes the following fields:

- **Code**
- **Category Code**
- **Text**

:::note
Please note that the quantity and content of information provided may vary depending on the Seller.
:::

## Mapping Responsibilities

### Should I Map Category Codes as a Buyer? Does Travelgate Provide Mapping Support? 
Travelgate provides Sellers' native information without modifications. Therefore, mapping should be managed either internally by your team or through an external solution.

Additionally, when connecting with a new Seller, you have the flexibility to map only the categories that align with your business needs rather than mapping the entire portfolio.

## Additional Considerations

### Will I Receive Availability for All Categories Listed by the Seller? 
No, the Categories Query response contains all the categories that a Seller has configured for your account. However, availability may vary based on your search criteria, such as specific dates or distribution requests.

:::tip
For further details on the Hotel-X Categories Query, don't forget to check our [API Playground](/playground). 🚀
:::
