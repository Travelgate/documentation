---
sidebar_position: 3
---

# Hotel-X Essentials

## Hotel-X Endpoint

To access all methods available through the Hotel-X API, use the endpoint **https://api.travelgatex.com** (for both test and production environments).

## API Headers and Performance Optimization

To ensure smooth operation and maximize efficiency, requests should include specific headers and follow best practices for performance.

### Mandatory Headers

- **GZIP Compression**: Required to enhance performance and reduce bandwidth consumption. All live traffic must enable GZIP compression in the HTTP header.

- **API Key Authorization**: Authentication is mandatory for every request to the Travelgate GraphQL API. The API Key must be included in the HTTP **Authorization** request header.

### Optional Headers

- **Keep-Alive Header**: To optimize response times in search transactions, include the **Connection: keep-alive** header.

- **GraphQL to REST**: Recommended when expecting more than 5,000 options per search response. This feature improves performance and ensures efficient data handling.

#### Implementation Steps for GraphQL to REST:
1. Update your JSON parser to the latest schema to avoid unexpected JSON marshalling.
2. Include the HTTP header:
   ```http
   TGX-Content-Type: graphqlx/json
   ```
3. Test a sample call using this header.

## Hotel-X API Languages

### Supported Languages

Hotel-X API does not impose language restrictions, but individual **Sellers may support different languages**. It is essential to verify the supported languages before proceeding.

### How to Check a Seller’s Supported Languages

To determine which languages a specific Seller supports, use the [Metadata Query](/kb/connectivity-products/for-buyers/hotel-x/content/metadata) method. Additionally, contact the Seller directly to confirm language support **before activation**.

:::tip
For more information, check out our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart/).
:::

