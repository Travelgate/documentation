---
sidebar_position: 2
---

# Request Headers

The following HTTP request headers are essential for all request methods and must be included in every API request.

### Mandatory Request Headers

Gzip Compression: In order to increase performance and save bandwidth, all the live traffic must enable GZIP compression in the HTTP header. Add `Accept-Encoding: gzip`.                                           

API Key: Authentication is required for every request to the TravelgateX GraphQL API. An API Key must be included in the HTTP Authorization request header to authenticate the user agent with the server. Add `Authorization: ApiKey`.              

### Optional Request Headers

Keep Alive: In order to increase performance and improve response times (in Search), you can add the `Connection: keep-alive` header to all our transactions.                                              
                                                           
GraphQL To Rest: In case you expect to be returned +5k options per search response, we suggest using our GraphQL to Rest feature to keep performance at the highest level.

To implement this feature, please follow below steps:
1. Check that your JSON parser is updated to the last schema as the Array Fields previously defined as single Scalars can produce unexpected JSON marshalling
2. Add the HTTP header to your request(s): `TGX-Content-Type: graphqlx/json`
3. Test a sample call for every request using the header
