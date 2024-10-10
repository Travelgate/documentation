---
sidebar_position: 2
---

# GIATA Multicodes

### What is GIATA Multicodes?💡
GIATA Multicodes is a mapping solution offered by GIATA (previously offered by TravelgateX as GIATA universal hotel codes). There are no costs from TravelgateX for you to access your GIATA hotel codes - all we need is your credentials.

### Where can I expect to receive GIATA Multicodes?✔️
Hotel-X API fully supports GIATA Multicodes in **Hotel-X Hotels Query** response (only available at a hotel level).
### How can I activate GIATA Multicodes?🚀
1. In order to use this solution, you should first reach a commercial agreement with GIATA.
1. Then, contact our Customer Support team through our [Support Portal](https://app.travelgate.com/support) and provide them your GIATA credentials in order to verify your commercial agreement with GIATA in our system.
2. Once our Customer Support team has validated your account, you will be able to retrieve GIATA codes both in section [Connections Content](/kb/connections/connections-content/how-to-check-my-connections-content) and in your [Hotels Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels) response - Remember to add the giataData to your Hotels Query in order to receive this information in your response.

    ```
    {
    hotelData {
        hotelCode
        hotelCodeSupplier
        hotelName
        giataData {
        id
        source
        href
        }
    }
    }
    ```

:::tip
Are you interested in **GIATA Hotel Directory** as well?
Simply follow the easy steps outlined in the following [link](/kb/getting-started-with-travelgate/about-our-connectivity/explore-and-discover-giata-products-in-our-marketplace).
:::