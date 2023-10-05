---
sidebar_position: 2
---

# Request Headers

The following request headers are essential for all request methods and must be included in every API request.

### Mandatory Request Headers

**Content Type**: The Content-Type header is set to:

```html
text/xml;charset=UTF-8
```                           

**SOAPAction**: All requests come with a SOAPAction header corresponding to the transmitted message

```html
???: ???
```

**Authentication**: Requests are authenticated using Base64 encoding. The credentials can be found in the Authorization header tag.

```html
Authorization: Basic aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1RWWg2bVlJSkcyWQ==
```              

### Optional Request Headers

**Compression**: By default, requests are not compressed. However, you can choose to compress requests using the following compression methods: gzip, deflate, and br.

```html
???: gzip
```                                                          