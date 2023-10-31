---
sidebar_position: 1
---

# Token-based Pagination for Hotels, Rooms, and Destinations

### What is a token (ContinuationToken)?🔄
The token, also referred to as the ContinuationToken in the Hotel Buyers API (Legacy), plays a crucial role in downloading large lists of objects.Its primary purpose is to divide the content list into smaller parts, effectively preventing any potential timeout errors that may arise.
### Which queries support pagination?💡
You can effortlessly paginate the Hotel, Destination, and Room Lists, making it a breeze to navigate through the content.

### What is the expiration time for the ContinuationToken?⏱️
The ContinuationToken has a time limit of 4 minutes, but each time a page request is made, the timer is reset, so the total time allowed will depend on the size of the list.

### A Quick Guide for Users of Hotel-X Pull Buyers API🚀

1. To include the token in your request, all you need to do is **add the "token" object** to the fields and arguments. Moreover, you have the flexibility to specify the number of objects returned per page by utilizing the "**maxSize**" tag in your arguments.
1. After receiving a response, you will only receive a portion of the full list. To access the next page, simply **copy the "token" tag** from the response and include it in your next request. This will allow you to obtain a new set of objects in the following response.
1. **Repeat** these steps until the "token" is no longer included in the response.


:::info
It's important to remember that the value assigned to "maxSize" must fall within the **range of 1 to 10000** for any of the three queries (Hotels, Rooms and Destinations).
:::

```

{
    "criteria": {
        "access": "",
        "maxSize": 100
    },
    "language": "en",
    "token": ""
}
```

### A Quick Guide for Users of Legacy Pull Buyers API 📑

1. **Add the ContinuationToken tag to your request**. Note that you have the flexibility to specify the maximum number of objects returned per page by utilizing the "**expectedRange**" tag attribute.
    ```
    <ContinuationToken expectedRange = "1000"></ContinuationToken>
    ```
1. Once you receive a response, it will only include a portion of the full list. To access the next page of content, all you need to do is **copy the ContinuationToken tag** from the response and paste it exactly as it is in the next request. By doing this, you will be able to obtain a fresh set of hotels in the subsequent response.
1. **Keep repeating these steps** until the ContinuationToken is no longer present in the response. Once you encounter a 11204 error, it indicates that you have successfully obtained the entire list of hotels.

:::info **Additional considerations:**
- Please be aware that there are instances where you might receive a higher number of hotels than the expectedRange value. For instance, if you set the expectedRange to "1000", the response may include anywhere from 1000 to 1999 hotels.
- In case the expectedRange attribute is not specified, the maximum number of hotels in the list will automatically default to 250,000. To efficiently manage large hotel lists, we strongly advise utilizing the ContinuationToken tag.
- When setting the expectedRange attribute, make sure to select values that are multiples of one thousand (e.g., 1000, 2000, 3000, 4000, 5000). This approach will facilitate the efficient retrieval of hotel data.
:::