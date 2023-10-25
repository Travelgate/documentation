---
sidebar_position: 2
---

# Request Headers

The following request headers will be sent in all request methods. It is essential that you configure your system to accept these headers, as they will be included in the requests we will make to your system.

### Mandatory Request Headers

**Content Type**: Content-Type header provides information about the actual content type of the returned content. In this case, the header is set to:

```html
Content-Type: text/xml;charset=UTF-8
```                           

**SOAPAction**: All requests come with a SOAPAction header corresponding to the transmitted message:

In the case of `HotelRatePlanInventoryNotif` request:

```html
SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelRatePlanInventoryNotif
```

In the case of `HotelAvailNotif` request:

```html
SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelAvailNotif
```

In the case of `HotelRatePlanNotif` request:

```html
SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelRatePlanNotif
```

**Authentication**: Requests are authenticated using Base64 encoding. This means that the [username and password you have provided us](making-requests/endpoint) will be encoded and sent in a Base64 format, as demonstrated in the following example:

```html
Authorization: Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```              

### Optional Request Headers

**Compression**: By default, requests are not compressed. However, you can choose to compress requests using the following compression methods: `gzip`, `deflate`, and `br`. If you are interested in receiving compressed requests, please let us know by opening a [ticket](https://app.travelgatex.com/tickets) to our customer team.

In the case of `gzip`:

```html
Content-Encoding: gzip
```     

In the case of `dflate`:

```html
Content-Encoding: dflate
```  

In the case of `br`:

```html
Content-Encoding: br
```  