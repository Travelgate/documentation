---
sidebar_position: 1
---

# Quickstart

## Introduction

Channel-X extracts the product loaded between the Buyer and the Channel Managers into our Inventory system and sends it to the Buyer's system. Buyers have two options for loading product into their system: they can select the Full Copy tab in Inventory's extranet to load all the product, or they can select specific hotels to copy.

When the Channel Manager makes an update, Channel-X sends a smaller product request (Delta) to notify buyers of the change. This is because Channel-X only sends information that has changed, and it is able to detect what information has changed and which is duplicated.

Please note that connecting with Channel Managers through TravelgateX requires a previous step in which the Buyer configures the setup of the hotels, rates, and rooms contracted with the hoteliers in the Inventory extranet. This configuration allows the Channel Manager to map all this information and push availability and prices for the Buyer.

:::caution

Channel-X Push Buyers API is a non-standalone API that exclusively retrieves products that have been previously pushed to the Buyer's system. To enable bookings, it is essential to also develop Hotel-X Pull Buyers API (if you already have the Legacy Pull Buyers API developed, it is also possible to work with it).

:::

[Añadir dibujo/esquema]

### Prerequisites

#### API Endpoint

In the case of Channel-X API, it is necessary for you to send the endpoint to Travelgate.

#### Request Headers

To interact with the API, you'll need to configure your system to accept the following headers:

* Content Type: Content-Type header provides with the actual content type of the returned content.

```html
Content-Type: text/xml;charset=UTF-8
``` 

* SOAPAction: SOAPAction header corresponding to the transmitted message, there are 3 different ones, one for each request.

```html
SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelRatePlanInventoryNotif
```

```html
SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelAvailNotif
```

```html
SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelRatePlanNotif
```

* Authentication: Combination of username and password, which you should have sent to us beforehand, encoded in Base64 format.

```html
Authorization: Basic aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1RWWg2bVlJSkcyWQ==
``` 

#### Supported Operations

### Step 1 Inventory Set Up

### Step 2 HotelRatePlanInventoryNotif

### Step 3 HotelAvailNotif

### Step 4 HotelRatePlanNotif

### Next steps
