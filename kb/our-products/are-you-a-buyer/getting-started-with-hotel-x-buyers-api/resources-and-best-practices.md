---
sidebar_position: 5
---

# Resources and Best Practices

### Main Resources🏆

- [Hotel-X Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart)
- [Hotel-X Playground](/playground): You can use Playground as a client to test your queries and mutations. Additionally, you can access our SDL by clicking on the "Docs" tab ("Export SDL") and examine the structure and definition of each API methods available.
- [Community](/kb/getting-started-with-travelgate/about-our-community): We regularly update and improve our Documentation, so make sure to check back often to stay up-to-date with the latest updates and changes.
- [How to retrieve your Hotel-X Credentials](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials)
- [How do I add more users to my Company's account?](/kb/account-settings/users-management/how-to-add-manage-users-to-organization)
- For Hotel-X implementation and testing purposes, we recommend using the following [accesses](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials):
	- TravelgateX Test Seller (tgx): Access 2 with context HOTELTEST.
	- Smyrooms Test: Access 5647 with context LOGITEST.  
	
	These have already been activated on your account and are ready to use.

- [Apollo GraphQL query Best Practices](https://www.apollographql.com/docs/react/data/operation-best-practices/)

### Hotel-X endpoint🌍

To access all the methods available through our Hotel-X API, please use the endpoint **https://api.travelgatex.com** (both test and production environments).

:::note
**China endpoint**: If your servers are located in China, you can improve performance by using the following URL: **https://api-cn.travelgatex.com**
:::

### GZIP Compression📦
To enhance performance and reduce bandwidth usage, it is **mandatory** to enable GZIP compression in the HTTP header for all Live traffic.

### Keep Alive Header🔎
To boost performance and enhance response times in Search, you have the option to include the Connection: keep-alive header in all our transactions.

### GraphQL To REST🔋

In case you expect receiving more than 5,000 options in each search response, we recommend utilizing our GraphQL to REST feature to maintain optimal performance.
To implement this feature, please follow the steps below:
1. Ensure that your JSON parser is updated to the latest schema as the Array. Fields previously defined as single Scalars may result in unexpected JSON marshalling.
1. Include the HTTP header in your request(s): TGX-Content-Type:graphqlx/json
1. Test a sample call for each request using the header.
1. Enjoy the performance

### Improve GraphQL Performance🏅

Feel free to visit our [blog](https://blog.travelgatex.com/en/how-to-improve-graphql-performance) for tips on improving GraphQL performance when dealing with responses that have over 10,000 nodes or weigh more than 1Mb

### TravelgateX Status✅

Stay informed about the real-time performance of our services with our [Status page](https://status.travelgatex.com/). Our event tracker and reliable metrics allow you to effortlessly track and monitor our performance.

### TravelgateX Plugins🔨
Hotel-X provides customizable [Plugins](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview) that enable you to integrate your own business logic seamlessly, without the need for separate implementation. With Hotel-X Plugins, you have full control over customizing your requests and responses to align with your specific requirements and easily enhance your functionalities as your business grows and evolves.

In order to configure a Plugin, you'll need to upload a specific set of files to our FTP. Don't have your FTP credentials yet? No worries! Just raise contact our Support Team via ["Tickets"](https://app.travelgatex.com/tickets) and we will be happy to help you!


### Content Calls🏨

The Hotel List, Room List, Board List, and other static information of Sellers can be obtained by making [Content Calls](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/overview) through our API. It is highly recommended to implement these calls because sometimes the Seller codes may vary from the ones provided through TravelgateX API.

### Criteria Search🔎
We strongly recommend including the following fields in the criteria section of your Hotel-X Search query:
- Check-in
- Check-out
- Hotels
- Occupancies
- Language
- Currency
- Nationality
- Market

Please keep in mind the following points:
- If you do not specify a currency, the default one will be applied.  However, it's important to note that even if you specify a specific currency, Sellers may still return rates in a different one.
- Sellers might offer different rates depending on the market.

### Hotel-X Calendar View📅
You may build a calendar on your side with the Search response received via Hotel-X API, however, please note that the more requests you send to TravelgateX, the higher your bill may be due to having a huge L2B (this depends on the contract signed with TravelgateX).

### Book Status
Learn all about Book (Reservation) status [here](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/what-status-can-be-returned-in-hotel-x-book-response).

### Cancel Status
Learn all about Cancel (Cancellation) status [here](/kb/our-products/are-you-a-buyer/our-methods/booking-management/cancel/cancel-status).

### Other Tools and Resources
- [GraphQL official Documentation](http://graphql.org/learn/)
- [Schema design](https://github.com/APIs-guru/graphql-faker)
- Go packages: [Redis](https://godoc.org/github.com/garyburd/redigo/redis) and [GraphQL server](https://github.com/graph-gophers/graphql-go)
- [Apollo](http://dev.apollodata.com/)
- Some of our architecture is written in NodeJS. This is because some packages are either not yet available in Go, or because Node alternatives perform better than Go packages. [Here](https://github.com/apollographql/apollo-server) you will find the packages we use.
- [Relay official Documentation](https://relay.dev/docs/)
- [Schema-first development - Johannes Schickling](https://www.youtube.com/watch?v=SdWI7XaAeeY)
- [Schema-first development with GraphQL](https://conferences.oreilly.com/fluent/fl-ca-2017/public/schedule/detail/58715)
- [GraphQL-first in practice at Quri](https://dev-blog.apollodata.com/graphql-first-in-practice-at-quri-7bf84b260135)
- [GraphQL-first: A better way to build modern apps](https://dev-blog.apollodata.com/graphql-first-a-better-way-to-build-modern-apps-b5a04f7121a0)
- [GraphQL User List](http://graphql.org/users/)

