---
sidebar_position: 4
---

# Rooms

The Rooms Query returns a comprehensive room list from a supplier's access that may include translations to other languages, granting you access to all the rooms configured by the Seller for a given set of credentials. The returned fields include:

* Room Code
* Source
* Occupancies
* Amenities
* Medias
* Views
* Beds

### Criteria   

This query offers versatility in search options, with certain fields marked as mandatory (access) and others as optional (roomCodes and maxSize). This flexibility empowers you to create a personalized Rooms Query, tailoring the requested fields to your specific needs. Consequently, the response will only include information that is highly relevant to you, streamlining the retrieval process and ensuring the data you receive meets your exact requirements.

Mandatory criteria
* access

Optional criteria
* roomCodes
* maxSize

[ añadir ejemplo ]

### Paginate response

The Hotel-X API provides paginated responses to handle cases where the number of rooms from the selected provider exceeds 5000. The default response page contains a maximum of 5000 rooms, but you can specify the number of objects returned per page using the "maxSize" field in the query criteria to retrieve between 1 and 5000 rooms.

To implement pagination for Room List in the Hotel-X API, include the "token" object in your request fields and arguments. Upon receiving a response, you will get a partial list of rooms. To access the next page, extract the "token" tag from the response and incorporate it into your subsequent request. This process must be repeated by setting the token of the previous response in the query parameter until the query returns “Rooms not found”.

[ añadir ejemplo ]

### Mapping

When utilizing the Room List Query, you will receive the Seller's native room codes. Connecting with a new Seller doesn't always mean that you are interested in the whole rooms portfolio, maybe you are just interested in some specific rooms. Since mapping depends entirely on your side, you can map only those rooms you are interested in.

Additionally, you can upload your own mapping files to our FTP (credentials should be provided by our Customer Care team), and we will use your own room codes in the booking flow.

[ Añadir ejemplo ]