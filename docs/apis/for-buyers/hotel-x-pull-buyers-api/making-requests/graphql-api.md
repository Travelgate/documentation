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

[API Playground](AÑADIR LINK AL PLAYGROUND) is an interactive, enjoyable, and extremely fast way to familiarize yourself with our Hotel-X API.

In the API Playground, first, click on the "Seat Headers" button at the top left to add both the Gzip Compression header and API Key.

As you begin typing the query, the Playground will provide autocomplete suggestions for the available fields to complete your query parameters. You can also click on the "Docs" button at the top right to learn more about our data model and explore all the options for constructing your query.

You can customize the response you receive by setting Query variables in the bottom left pane of the Playground. This ensures that only the necessary fields are included in the response.

### GraphQL Resources

DECIDIR QUE METO AQUÍ (https://docs.travelgatex.com/learning-graphql/tutorials_resources/)