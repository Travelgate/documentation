---
sidebar_position: 1
---

# Quickstart

Hotel-X API is a powerful aggregation solution that allows you to get results from the largest network of Sellers in a single request. Whether it's at the hotel, room type, or rate plan level, you have the flexibility to aggregate data to meet your specific needs.

What sets Hotel-X API apart is its innovative plugin structure, which enhances connectivity and equips you with a competitive edge in your operations. This unique feature is complemented by Hotel-X's ability to provide pre-processed responses, ensuring your system tasks are efficient and hassle-free.

[Añadir esquema]

In this quickstart tutorial, you will create a basic sample booking. Along the way, you will grasp essential concepts and techniques that are foundational to using the API for various tasks, including:

* Retrieving static information
* Making a booking
* Managing reservations

### Let's start with a booking

#### Introduction

Hotel-X, being a GraphQL-based API, utilizes a single endpoint for all operations:

```html
https://api.travelgatex.com
```

To perform all request methods, you will need to include two request headers:

* Gzip Compression: 

```html
Accept-Encoding: gzip.
```

* API Key (For this basic sample booking, we provide you with a test API Key.): 

```html
Authorization: ApiKey 8626cf56-e364-4fd1-4fe0-311e23ac6355.
```

Lastly, please note that the API supports two types of operations:

* `Querie`, which are "read-only" and used for retrieving data from our system.

* `Mutation`, which allow for changes, additions, or deletions of data within our system.

#### 1. Search

#### 2. Quote

#### 3. Book

### Next steps
