---
sidebar_position: 6
---

# Hotel-X API Headers

### What are the different types of headers that can be included in a Hotel-X request?💡

There are 2 different types of headers:

1. **Mandatory headers**: they should be added to your Hotel-X request.
1. **Optional headers**: they are not mandatory but might be added to your Hotel-X, for instance, to improve performance.

### Which headers are mandatory for my Hotel-X request?
* **Gzip Compression**  
In order to increase performance and save bandwidth, all the live traffic must enable GZIP compression in the HTTP header:  
![hotelx_headers_1](https://storage.travelgate.com/kbase/hotelx_headers_1.jpg)


* **API Key Authorization**  
Authentication is necessary for every request made to the TravelgateX GraphQL API. To authenticate the user agent with the server, an API Key must be included in the HTTP Authorization request header.
	![hotelx_headers_2](https://storage.travelgate.com/kbase/hotelx_headers_2.jpg)

### Which headers are optional for my Hotel-X request?
* **Keep-Alive**  
To enhance performance and optimize response times in Search, you have the option to include the Connection: keep-alive header in all your transactions.
	![hotelx_headers_3](https://storage.travelgate.com/kbase/hotelx_headers_3.jpg)


* **GraphQL To Rest**  
To ensure optimal performance when expecting more than 5,000 options per search response, we recommend utilizing our GraphQL to Rest feature. To implement this feature, please follow the steps below:  
1. Verify that your JSON parser is updated to the latest schema, as Array Fields that were previously defined as single Scalars may result in unexpected JSON marshalling.
1. Include the following HTTP header in your request(s): TGX-Content-Type: graphqlx/json.
1. Test a sample call for each request using the provided header.

**Sit back and enjoy the enhanced performance!**

:::tip
Don't forget to explore our [Playground](/playground) for comprehensive details and additional Documentation!🚀
:::