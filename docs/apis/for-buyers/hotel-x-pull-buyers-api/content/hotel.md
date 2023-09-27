---
sidebar_position: 2
---

# Hotel

The Hotels Query returns a comprehensive hotel list from a supplier's access, granting you access to all the properties configured by the Seller for a given set of credentials. The returned fields include:

* `hotelCode`
* `hotelName`
* `categoryCode`
* `location`
* `amenities`
* `media`
* `Descriptions`
* `RoomInformation` and max/min occupancy pax ranges (if available)

### Criteria 

This query offers versatility in search options, with certain fields marked as mandatory (access) and others as optional (hotelCodes, destinationCodes, maxSize, etc.). This flexibility empowers you to create a personalized Hotels Query, tailoring the requested fields to your specific needs. Consequently, the response will only include information that is highly relevant to you, streamlining the retrieval process and ensuring the data you receive meets your exact requirements.

Mandatory criteria
* access

Optional criteria
* hotelCodes
* supplierHotelCodes
* hotelName
* destinationCodes
* countries
* ranks
* maxSize
* group
supplierCode

[ añadir ejemplo ]

### Search by destination

Moreover, you have the option to search for hotels based on destination by including the "destinationCodes" field in your query criteria.

[ añadir ejemplo ]

### Total amount of properties

To obtain the total number of properties in the list, you can easily add the "count" field to your Hotels Query.

[ añadir ejemplo ]

### Receive GIATA codes

Hotel-X API fully supports GIATA codes in Hotel-X Hotels Query response (GIATA codes are only available at a hotel level). GIATA information can be retrieved in the node GiataData inside the HotelData node. This information is not returned by default, to activate this feature, submit a ticket with your GIATA credentials and specified Sellers for activation to our Customer Care team. Once GIATA is implemented for your account, add "giataData" node to your Hotels Query to receive GIATA details in the response.

[ añadir ejemplo ]

### Paginate response

The Hotel-X API provides paginated responses to handle cases where the number of hotels from the selected provider exceeds 5000. The default response page contains a maximum of 5000 hotels, but you can specify the number of objects returned per page using the "maxSize" field in the query criteria to retrieve between 1 and 5000 hotels.

To implement pagination for Hotel List in the Hotel-X API, include the "token" object in your request fields and arguments. Upon receiving a response, you will get a partial list of hotels. To access the next page, extract the "token" tag from the response and incorporate it into your subsequent request. This process must be repeated by setting the token of the previous response in the query parameter until the query returns “Hotels not found”.

[ añadir ejemplo ]

### Mapping

When utilizing the Hotel List Query, you will receive the Seller's native hotel codes. Connecting with a new Seller doesn't always mean that you are interested in the whole hotels portfolio, maybe you are just interested in some specific hotels. Since mapping depends entirely on your side, you can map only those hotels you are interested in.

Additionally, you can upload your own mapping files to our FTP (credentials should be provided by our Customer Care team), and we will use your own hotel codes in the booking flow.

[ Añadir ejemplo ]
