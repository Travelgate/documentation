---
sidebar_position: 1
---

# Endpoint

The different methods from our API can be sent to 1 unique endpoint or to different enpoints. These endpoints will be set in the configuration TravelgateX receives from the buyer in each request. Endpoints have to be https for Reservation, Cancel, ReservationRead and ReservationList, for other request they can be http or https.

A Configuration element with the credentials, endpoints and extra needed parameters by the supplier will be received in the request from the buyer and will be sent to the supplier. In this configuration TravelgateX will receive the endpoints needed to send the request to the supplier (you can see the correlation between methods and enpoints used in the connectivity page).

```html
<Configuration>
    <UrlGeneric></UrlGeneric>
    <Parameters>
        <Parameter key = "" value = ""/>
    </Parameters>
</Configuration>
```  

Mandatory Elements:
* `UrlGeneric` (Supplier URL)
* `Parameter`
    * `key`
    * `value`