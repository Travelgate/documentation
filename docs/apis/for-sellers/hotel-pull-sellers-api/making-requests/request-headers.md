---
sidebar_position: 2
---

# Request Headers

The following HTTP request headers are essential for all request methods and must be included in every POST request.

### Mandatory Request Headers

**Content Type**: Content-Type header provides with the actual content type of the returned content. In this case, the header is set to:

```html
Connection: text/xml; charset=utf-8
```  

**Gzip Compression**: In order to increase performance and save bandwidth, all the live traffic must enable GZIP compression in the HTTP header. 

```html
Accept-Encoding: gzip
```                           

**A**: A.

```html
Accept: application/xml
```              

### Optional Request Headers

**Keep Alive**: In order to increase performance and improve response times (in Search), you can add the keep-alive header to all our transactions. 

```html
Connection: keep-alive 
```  