---
sidebar_position: 3
---

# Destination

The Destinations Query returns a comprehensive destination list from a supplier's access, granting you access to all the destinations configured by the Seller for a given set of credentials. The returned fields include:

* DestinationData (including code, availability, and destination leaf)
* Texts (if you filter your request by language)
* ClosestDestinations
* Parent
* Type

### Criteria  

This query offers versatility in search options, with certain fields marked as mandatory (access) and others as optional (group, destinationCodes and maxSize). This flexibility empowers you to create a personalized Destinatiosn Query, tailoring the requested fields to your specific needs. Consequently, the response will only include information that is highly relevant to you, streamlining the retrieval process and ensuring the data you receive meets your exact requirements.

Mandatory criteria
* access

Optional criteria
* group
* destinationCodes
* maxSize

[ añadir ejemplo ]

### Filter by language

Implement language filtering in destinationData/texts/languages to receive texts exclusively in the specified language, improving information retrieval precision. 

[ añadir ejemplo ]

### Paginate response

The Hotel-X API provides paginated responses to handle cases where the number of destinations from the selected provider exceeds 5000. The default response page contains a maximum of 5000 destinations, but you can specify the number of objects returned per page using the "maxSize" field in the query criteria to retrieve between 1 and 5000 destinations.

To implement pagination for Destination List in the Hotel-X API, include the "token" object in your request fields and arguments. Upon receiving a response, you will get a partial list of destinations. To access the next page, extract the "token" tag from the response and incorporate it into your subsequent request. This process must be repeated by setting the token of the previous response in the query parameter until the query returns “Destinations not found”.

[ añadir ejemplo ]

### Mapping

When utilizing the Destination List Query, you will receive the Seller's native destination codes, which are categorized as Zone and City nodes. Sellers construct their Destination Tree based on these nodes, leading to a classified response that aids in mapping. It's important to note that node classification can vary between Sellers, for example, San Francisco may be classified as a Zone by one Seller and as a City by another.

For more personalized results in the Destinations Query, filter specific destinations based on your interests. For example, to focus solely on the Spanish inventory of a Seller, add the "destinationCodes" field with "ES" in your criteria. This will ensure you receive destinations directly related to the "ES" zone, providing you with highly targeted and relevant information.

Additionally, you can upload your own mapping files to our FTP (credentials should be provided by our Customer Care team), and we will use your own destination codes in the booking flow.

[ Añadir ejemplo ]
