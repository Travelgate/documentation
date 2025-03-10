---
sidebar_position: 4
---

# Boards

## What Is the Boards Query? 
The Boards Query provides a comprehensive mapping of board types available for a given set of credentials (access), which may include translations into multiple languages.

### How Can I Retrieve the Seller's Board List via Hotel-X?
To retrieve the board list, simply follow the specifications outlined in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards) and build your own Board queries. You can also customize the fields you request to ensure you receive only the relevant information.

:::tip
Explore our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards#requests-examples) for a complete example of a Boards Query! 🚀
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

### Is It My Responsibility to Map Hotel-X Boards, or Does Travelgate Provide Mapping Support? 
Travelgate delivers the Seller's native data without modifications, meaning the mapping process should be handled internally by your team. You are not required to map the entire board portfolio from a Seller—focus only on the boards relevant to your business needs.

:::note
If you're using the Hotel-X API, you can [upload your own mapping files to our SFTP](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) to streamline your Booking Flow and personalize your operations. 🚀
:::

## Availability Considerations

### Does the Presence of a Board in the Hotel-X Boards Query Guarantee Its Availability During a Search? 
No, the Boards Query response provides a list of all board types configured by the Seller for your account. However, availability may vary based on your requested dates and distribution criteria. Some boards may not be available for specific searches.

:::tip
Check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards) and [API Playground](https://api.travelgate.com/) for further details! 🚀
:::
