---
sidebar_position: 3
---

# GraphQL API

Hotel-X is a travel API based on GraphQL. Unlike XML Soap APIs, GraphQL allows to request and receive only the necessary data. Our Gateway, written in NodeJS, is the sole endpoint for all our APIs.

# Queries and Mutations

There are two types of allowed operations in the TravelgateX GraphQL APIs:

### Queries

Queries are “read only” and are used to get data from our system. For example, getting a list of available hotel vacancies for a particular date and location is a Query.

This operation reads values from the server using a GraphQL Object and returns JSON text as a response.

### Mutations

Mutations change, add or delete the data in our system. For example, making a booking for a vacant hotel room is a Mutation.

This operation can include inserting a new object in a database, or deleting, or updating a data record.