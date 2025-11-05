---
sidebar_position: 8
---

# Token-based Pagination

### What Is a Token (ContinuationToken)?

The token, also known as the **ContinuationToken** in the Hotel Buyers API (Legacy), plays a crucial role in downloading large lists of objects. It helps break down content into smaller segments, effectively preventing potential timeout errors.

### Which Queries Support Pagination?

Pagination is available for the following queries:

- **Hotels**
- **Destinations**
- **Rooms**

### What Is the Expiration Time for the Token (ContinuationToken)?

The token has an expiration time of **4 minutes**, but each time a page request is made, the timer resets. This means the total time allowed depends on the size of the list and the frequency of requests.

### Token-Based Pagination Guide for Hotel-X Pull Buyers API

To paginate content effectively, follow these steps:

1. **Include the token in your request**  
   Add the [`"token"`](/api/types/objects/hotel-connection) field to your query. You can also control the number of objects returned per page by using the `"maxSize"` in your Query input.

2. **Request subsequent pages**  
   Once you receive a response, only a portion of the total list will be returned. To get the next page, copy the `"token"` value from the response and include it in your next request.

3. **Repeat until completion**  
   Continue requesting pages until the `"token"` field is no longer included in the response.

:::info
The `"maxSize"` value must be between **1 and 10,000** for Hotels, Rooms, and Destinations queries.
:::

```json
{
    "criteria": {
        "access": "",
        "maxSize": 100
    },
    "language": "en",
    "token": ""
}
```

### A Quick Guide for Users of Legacy Pull Buyers API 

Follow these steps to paginate content using the Legacy API:

1. **Add the ContinuationToken tag to your request**  
   You can specify the maximum number of objects per page using the `"expectedRange"` attribute.

    ```xml
    <ContinuationToken expectedRange="1000"></ContinuationToken>
    ```

2. **Request subsequent pages**  
   After receiving a response, copy the `ContinuationToken` tag from the response and paste it into the next request to retrieve additional content.

3. **Repeat until completion**  
   Continue this process until the `ContinuationToken` is no longer present in the response. If you encounter a **11204 error**, it indicates that the entire list has been retrieved.  
   
Additional information on how to paginate content responses in the Legacy Pull Buyers API (deprecated) is available [here](/docs/apis/for-buyers/deprecated/legacy-pull-buyers-api/content/hotel-list#how-to-paginate-responses)

### Additional Considerations

- Sometimes, the number of hotels returned may exceed the `expectedRange` value. For example, if set to `1000`, the response may include anywhere from 1000 to 1999 hotels.  
- If the `expectedRange` attribute is not specified, the default maximum number of hotels in the list is **250,000**.  
- When using `expectedRange`, select values that are multiples of 1,000 (e.g., 1000, 2000, 3000) for efficient data retrieval.