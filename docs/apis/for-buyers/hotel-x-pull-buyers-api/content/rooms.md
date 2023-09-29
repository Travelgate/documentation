---
sidebar_position: 5
---

# Rooms

The Rooms Query returns a comprehensive room list from a supplier's access that may include translations to other languages, granting you access to all the rooms configured by the Seller for a given set of credentials. The returned fields include:

* `roomCode`
* `source`
* `occupancies`
* `amenities`
* `medias`
* `views`
* `beds`

:::note

The amount of information and content returned might vary between Sellers.

Hotel-X supports all languages, but receiving room descriptions in one or another depends entirely on the languages supported by the Seller.

:::

```graphql
query {
  hotelX {
    rooms(criteria: {access: "2"}, relay: {}) {
      edges {
        cursor
        node {
          code
          roomData {
            code
            roomCode
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

This query offers versatility, with certain fields marked as mandatory (`access`) and others as optional (`roomCodes`). This flexibility empowers you to create a personalized Rooms Query, tailoring the requested fields to your specific needs. Consequently, the response will only include information that is highly relevant to you, streamlining the retrieval process and ensuring the data you receive meets your exact requirements.

Mandatory criteria
* `access`

Optional criteria
* `roomCodes` (search by room type)
* `maxSize` (paginate response)

### Search for specific room

When utilizing the Rooms List Query, for more personalized results, filter specific rooms based on your interests. For example, to focus solely on the twin room inventory of a Seller, add the `roomCodes` field with "1" ("1" is the code that this Seller has assigned for the twin room) in your criteria. This will ensure you receive rooms directly related to the "1"/"twin room" room, providing you with highly targeted and relevant information.

**Request**

```graphql
query {
  hotelX {
    rooms(criteria: {access: "2",roomCodes: ["1"]}, relay:{}) {
      token
      edges {
```

### Paginate response

The Hotel-X API provides paginated responses to handle cases where the number of rooms from the selected provider exceeds 5000. The default response page contains a maximum of 5000 rooms, but you can specify the number of objects returned per page using the `maxSize` field in the query criteria to retrieve between 1 and 5000 rooms.

To include the token in your request, all you need to do is:

1. Add the `token` object to the fields and arguments. Moreover, you have the flexibility to specify the number of objects returned per page by utilizing the `maxSize` tag in your arguments.

2. After receiving a response, you will only receive a portion of the full list. To access the next page, simply copy the `token` tag from the response and include it in your next request. This will allow you to obtain a new set of objects in the following response.

3. Repeat these steps until the `token` is no longer included in the response, the query will return “Destinations not found”.

**Request**

```graphql
query {
    hotelX {
    rooms(criteria: {access: "2", maxsize: 500}, relay: {}) {
      token
      edges {
```

**Response**

```graphql
{
	"data": {
		"hotelX": {
			"rooms": {
				"token": "FGluY2x1ZGVfY29udGV4dF91dWlkDnF1ZXJ5FGhlbkZldGNoAhZMN2w2SlZYaVNaaXhYeXHwdm1GWjlBAAAAAATLRLQWeXZ3cU12MkpSbTY3WkF6QzJraWJWZxZFX3NZYkQ1UFN6fWFaQjlXMXBSbmhBAAAAABCavEoWWFltUDMwVXRUT0ctUWY5Y3FDX39vQQ==",,
				"edges": [
```

### Mapping

When utilizing the Room List Query, you will receive the Seller's native room codes. Connecting with a new Seller doesn't always mean that you are interested in the whole rooms portfolio, maybe you are just interested in some specific rooms. Since mapping depends entirely on your side, you can map only those rooms you are interested in.

Additionally, you can upload your own mapping files to our FTP (credentials should be provided by our Customer Care team), and we will use your own room codes in the booking flow.

You can find all the necessary information in the [mapping section](../plugins/mapping.mdx).