---
sidebar_position: 2
---

# Hotel

The Hotels Query returns a comprehensive hotel list from a supplier's access, granting you access to all the properties configured by the Seller for a given set of credentials. The returned fields include:

* `hotelCode`
* `hotelName`
* `giataData`
* `location`
* `allAmenities`
* `medias`
* `descriptions`

:::note

The amount of information and content returned might vary between Sellers.

Hotel-X supports all languages, but receiving hotel descriptions in one or another depends entirely on the languages supported by the Seller.

:::

```graphql
query {
    hotelX {
    hotels(criteria: {access: "2"}, relay: {}) {
      count
      token
      edges {
        cursor
        node {
          code
          hotelData {
            hotelCode
            hotelName
            giataData {
              updatedAt
              source
              href
            }
            categoryCode
            exclusiveDeal
            rank
            location {
              city
              address
              zipCode
              country
              coordinates {
                latitude
                longitude
              }
              closestDestination {
                code
                available
                texts {
                  text
                  language
                }
                type
                parent
              }
            }
            contact {
              email
              telephone
              fax
              web
            }
            propertyType {
              propertyCode
              name
            }
            descriptions {
              type
              texts {
                language
                text
              }
            }
            rooms {
              edges {
                node {
                  code
                  roomData {
                    code
                    roomCode
                    allAmenities {
                      edges {
                        node {
                          amenityData {
                            code
                            amenityCode
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allAmenities {
              edges {
                node {
                  amenityData {
                    code
                    amenityCode
                  }
                }
              }
            }
          }
          adviseMessage(level: ERROR) {
            code
            description
            level
            external {
              code
              message
            }
            correlationID
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

This query offers versatility, with certain fields marked as mandatory (`access`) and others as optional (`hotelCodes`, `countries`, `destinationCodes`, etc.). This flexibility empowers you to create a personalized Hotels Query, tailoring the requested fields to your specific needs. Consequently, the response will only include information that is highly relevant to you, streamlining the retrieval process and ensuring the data you receive meets your exact requirements.

Mandatory criteria
* `access`

Optional criteria
* `hotelCodes` (search by hotel)
* `countries` ??? (search by country)
* `destinationCodes` (search by destination)
* `ranks` ???
* `maxSize` (paginate response)

### Search for specific hotel, country or destination

When utilizing the Hotels List Query, for more personalized results, filter specific hotels, countries or destinations based on your interests. For example, to focus solely on the destination Greece inventory of a Seller, add the `destinationCodes` field with "3" ("3" is the code that this Seller has assigned for Greece) in your criteria. This will ensure you receive boards directly related to the "3"/"Greece" destination, providing you with highly targeted and relevant information.

**Request**

```graphql
query {
  hotelX {
    hotel(criteria: {access: "2",destinationCodes: ["3"]}, relay:{}) {
      token
      edges {
```

You would need to apply the same approach for search for specific hotels (`hotelCodes`) and countries (`countries`).

### Know the total amount of properties

To obtain the total number of properties in the list, you can easily add the `count` field to your Hotels Query.

**Request**

```graphql
query {
    hotelX {
    hotels(criteria: {access: "2"}, relay: {}) {
      count
      edges {
```

**Response**

```graphql
{
	"data": {
		"hotelX": {
			"hotels": {
				"count": 693772,
				"edges": [
```

### Receive GIATA codes

Hotel-X API fully supports GIATA codes in Hotel-X Hotels Query response. Note that GIATA codes are only available at a hotel level.

GIATA information is retrieved in the node `giataData`. This information is not returned by default, to activate this feature, [submit a ticket](https://app.travelgatex.com/tickets) with your GIATA credentials and specified Sellers for activation to our Customer Care team. Once GIATA is implemented for your account, add `giataData` node to your Hotels Query to receive GIATA details in the response.

**Request**

```graphql
query {
    hotelX {
    hotels(criteria: {access: "2"}, relay: {}) {
      edges {
        cursor
        node {
          code
          hotelData {
            hotelCode
            hotelName
            giataData {
              updatedAt
              source
              href
            }
```

**Response**

```graphql
{
	"data": {
		"hotelX": {
			"hotels": {
				"edges": [
					{
						"cursor": "",
						"node": {
							"code": "",
							"hotelData": {
								"hotelCode": "66337",
								"hotelName": "Hotel Test",
								"giataData": "11267",
```

### Filter the search

Filter feature allows for more precise queries. It consists of two types of filters:

* Date filters: To search for hotels based on the dates they were created, updated, or deleted.

* Field filters: To search for hotels based on specific fields such as country, category, destination, name, and coordinates.

### Paginate the response

The Hotel-X API provides paginated responses to handle cases where the number of hotels from the selected provider exceeds 5000. The default response page contains a maximum of 5000 hotels, but you can specify the number of objects returned per page using the `maxSize` field in the query criteria to retrieve between 1 and 5000 hotels.

To include the token in your request, all you need to do is:

1. Add the `token` object to the fields and arguments. Moreover, you have the flexibility to specify the number of objects returned per page by utilizing the `maxSize` tag in your arguments.

2. After receiving a response, you will only receive a portion of the full list. To access the next page, simply copy the `token` tag from the response and include it in your next request. This will allow you to obtain a new set of objects in the following response.

3. Repeat these steps until the `token` is no longer included in the response, the query will return “Hotels not found”.

**Request**

```graphql
query {
    hotelX {
    hotels(criteria: {access: "2", maxsize: 500}, relay: {}) {
      token
      edges {
```

**Response**

```graphql
{
	"data": {
		"hotelX": {
			"hotels": {
				"token": "FGluY2x1ZGVfY29udGV4dF91dWlkDnF1ZXJ5FGhlbkZldGNoAhZMN2w2SlZYaVNaaXhYeXHwdm1GWjlBAAAAAATLRLQWeXZ3cU12MkpSbTY3WkF6QzJraWJWZxZFX3NZYkQ1UFN6fWFaQjlXMXBSbmhBAAAAABCavEoWWFltUDMwVXRUT0ctUWY5Y3FDX39vQQ==",,
				"edges": []
```

### Mapping

When utilizing the Hotel List Query, you will receive the Seller's native hotel codes. Connecting with a new Seller doesn't always mean that you are interested in the whole hotels portfolio, maybe you are just interested in some specific hotels. Since mapping depends entirely on your side, you can map only those hotels you are interested in.

Additionally, you can upload your own mapping files to our FTP (credentials should be provided by our Customer Care team), and we will use your own hotel codes in the booking flow.

You can find all the necessary information in the [mapping section](../plugins/mapping.mdx).