---
sidebar_position: 3
---

# Categories

The Category Query returns a comprehensive categories list from a supplier's access that may include translations to other languages, granting you access to all the categories configured by the Seller for a given set of credentials. The returned fields include:

* `code`
* `categoryCode`
* `text`

:::note

The amount of information and content returned might vary between Sellers.

Hotel-X supports all languages, but receiving category descriptions in one or another depends entirely on the languages supported by the Seller.

:::

```graphql
query{
  hotelX {
    categories(criteria: {access: "2"}, relay: {}) {
      edges {
        cursor
        node {
          code
          categoryData {
            code
            categoryCode
            texts {
              text
              language
            }
          }
          error {
            code
            type
            description
          }
          createdAt
          updatedAt
        }
      }
    }
  }
}
```

### Criteria    

This query offers versatility, with certain fields marked as mandatory (`access`) and others as optional (`categoryCodes` and `group`). This flexibility empowers you to create a personalized Categories Query, tailoring the requested fields to your specific needs. Consequently, the response will only include information that is highly relevant to you, streamlining the retrieval process and ensuring the data you receive meets your exact requirements.

Mandatory criteria
* `access`

Optional criteria
* `categoryCodes` (search by category type)
* `group`

### Search for specific category

When utilizing the Categories List Query, for more personalized results, filter specific categories based on your interests. For example, to focus solely on the 4* inventory of a Seller, add the `categoryCodes` field with "4" ("4" is the code that this Seller has assigned for the 2* category) in your criteria. This will ensure you receive categories directly related to the "4"/"4*" category, providing you with highly targeted and relevant information.

**Request**

```graphql
query {
  hotelX {
    categories(criteria: {access: "2",categoryCodes: ["4"]}, relay:{}) {
      token
      edges {
```

### Mapping

When utilizing the Categories List Query, you will receive the Seller's native categories codes. Connecting with a new Seller doesn't always mean that you are interested in the whole categories portfolio, maybe you are just interested in some specific categories. Since mapping depends entirely on your side, you can map only those categories you are interested in.

Additionally, you can upload your own mapping files to our FTP (credentials should be provided by our Customer Care team), and we will use your own categories codes in the booking flow.

You can find all the necessary information in the [mapping section](../plugins/mapping.mdx).