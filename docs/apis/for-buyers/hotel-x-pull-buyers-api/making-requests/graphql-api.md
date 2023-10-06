---
sidebar_position: 3
---

# GraphQL API

Hotel-X is a travel API based on GraphQL. Unlike XML Soap APIs, GraphQL allows to request and receive only the necessary data. Our Gateway, written in NodeJS, is the sole endpoint for all our APIs.

### Queries and Mutations

There are two types of allowed operations in the TravelgateX GraphQL APIs:

#### Queries

Queries are “read only” and are used to get data from our system. For example, getting a list of available hotel vacancies for a particular date and location is a `Query`.

This operation reads values from the server using a GraphQL Object and returns JSON text as a response.

#### Mutations

Mutations change, add or delete the data in our system. For example, making a booking for a vacant hotel room is a `Mutation`.

This operation can include inserting a new object in a database, or deleting, or updating a data record.

### GraphQL Playground

[API Playground](/playground/) is an interactive, enjoyable, and extremely fast way to familiarize yourself with our Hotel-X API.

In the API Playground, first, click on the "Seat Headers" button at the top left to add both the Gzip Compression header and API Key.

As you begin typing the query, the Playground will provide autocomplete suggestions for the available fields to complete your query parameters. You can also click on the "Docs" button at the top right to learn more about our data model and explore all the options for constructing your query.

You can customize the response you receive by setting Query variables in the bottom left pane of the Playground. This ensures that only the necessary fields are included in the response.

### GraphQL Resources

GraphQL is a powerful query language and it offers several advantages for developers when it comes to flexibility and efficiency.

**What is GraphQL?**

GraphQL is an open-source data query language and runtime for your API. It allows you to request only the data you need, making your API calls more efficient and reducing over-fetching or under-fetching of data.

**Advantages of GraphQL:**

- **Precise Data Retrieval:** With GraphQL, you can request specific fields and related data, avoiding overloading your app with unnecessary information.

- **Reduced API Calls:** GraphQL enables you to retrieve multiple types of data in a single request, reducing the number of API calls.

- **Flexibility:** Clients can define their data requirements, allowing for more flexible and dynamic applications.

- **Backward Compatibility:** Adding new fields or types won't break existing queries, ensuring backward compatibility.

**Resources to Learn GraphQL:**

1. **[Official GraphQL Documentation](https://graphql.org/learn/):** Start with the official documentation to understand the fundamentals of GraphQL. It provides a step-by-step guide and examples.

2. **[GraphQL Code Libraries](https://graphql.org/code/):** Choose the programming language that suits your project best and explore the available GraphQL libraries to simplify API integration.

3. **[How to GraphQL](https://www.howtographql.com/):** This comprehensive tutorial covers everything you need to know about GraphQL, from basic concepts to advanced techniques. It's a great resource to become a GraphQL pro.

By leveraging these resources, you can become proficient in GraphQL and make the most out of our Hotel-X Pull Buyers API based in GraphQL. Enjoy building efficient and powerful applications!