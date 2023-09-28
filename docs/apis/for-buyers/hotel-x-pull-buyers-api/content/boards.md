---
sidebar_position: 6
---

# Boards

The Boards Query returns a comprehensive boards list from a supplier's access that may include translations to other languages, granting you access to all the boards configured by the Seller for a given set of credentials. The returned fields include:

* `code`
* `boardCode`
* `text`

:::note

The amount of information and content returned might vary between Sellers.

Hotel-X supports all languages, but receiving board descriptions in one or another depends entirely on the languages supported by the Seller.

:::

```graphql
query {
  hotelX {
    boards(criteria: {access: "2"}, relay: {}) {
      edges {
        cursor
        node {
          code
          boardData {
            code
            boardCode
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

This query offers versatility, with certain fields marked as mandatory (`access`) and others as optional (`boardCodes` and `group`). This flexibility empowers you to create a personalized Boards Query, tailoring the requested fields to your specific needs. Consequently, the response will only include information that is highly relevant to you, streamlining the retrieval process and ensuring the data you receive meets your exact requirements.

Mandatory criteria
* `access`

Optional criteria
* `boardCodes` (search by board type)
* `group`

### Search for specific board

When utilizing the Boards List Query, for more personalized results, filter specific boards based on your interests. For example, to focus solely on the half board inventory of a Seller, add the `boardCodes` field with "2" ("2" is the code that this Seller has assigned for the half board) in your criteria. This will ensure you receive boards directly related to the "2"/"half board" board, providing you with highly targeted and relevant information.

**Request**

```graphql
query {
  hotelX {
    boards(criteria: {access: "2",boardCodes: ["2"]}, relay:{}) {
      token
      edges {
```

### Mapping

When utilizing the Boards List Query, you will receive the Seller's native boards codes. Connecting with a new Seller doesn't always mean that you are interested in the whole board's portfolio, maybe you are just interested in some specific boards. Since mapping depends entirely on your side, you can map only those boards you are interested in.

Additionally, you can upload your own mapping files to our FTP (credentials should be provided by our Customer Care team), and we will use your own boards codes in the booking flow.

You can find all the necessary information in the [mapping section](../apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping).