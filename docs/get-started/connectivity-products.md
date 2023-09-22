---
sidebar_position: 2
---

# Connectivity products

At TravelgateX, partners can either be Buyers or Sellers. Depending on their role, they have the option to connect via a Pull or Push API or utilize our dedicated Apps for seamless integration.

### API Connections

TravelgateX provides two main types of API connectivity for Buyers and Sellers, Pull APIs and Push APIs.

For Buyers:

* [Hotel-X Pull Buyers API](../apis/hotel-x-pull-buyers-api/overview) and
 [Legacy Pull Buyers API](../apis/legacy-pull-buyers-api/overview): Through Pull integration, Buyers send Availability requests to TravelgateX. Upon receiving the request, TravelgateX consults the Seller and gets an immediate response. This response also includes static data like Hotel Lists, Room Lists, etc., fetched from the Seller's API. Pull integrations emphasize real-time communication between Buyers and Sellers. They are relatively simple to develop but necessitate significant system resources due to potentially higher traffic, in contrast to Push integrations.

* [Channel-X Push Buyers API](../apis/channel-x-push-buyers-api/overview): Here, the Buyer configures the Hotel Setup on our Inventory Extranet. Subsequently, the Seller pushes the availability and pricing data to our System. This data is instantaneously processed and presented to the Buyer.

For Sellers:

* [Hotel Pull Sellers API](../apis/hotel-pull-sellers-api/overview): This works similarly to the Pull Buyers API, where the Seller receives real-time requests and sends back immediate responses.

* [Hotel Push Sellers API](../apis/hotel-push-sellers-api/overview): In the Push integration framework, Sellers transmit their product data to the TGX Database/System. Push integrations are characterized by reduced traffic demands and swifter response times. However, they don't support real-time interactions and demand more developmental effort.

### APP Connections

If an API isn't part of your tech stack or you aren't integrated with any tech platform, worry not! TravelgateX has user-friendly APPs tailored for you.

* [Inventory](../apps/inventory/overview) + [Distribution](../apps/distribution/overview): This combined solution empowers Sellers to effortlessly market their products to an extensive array of TravelgateX Buyers. Sellers can straightforwardly establish their hotels on our Inventory Extranet and manually input data on availability and pricing. They also have the privilege of connecting with third-party vendors to broaden their product spectrum. Once everything's set up, Sellers can leverage our Distribution Extranet to engage with various Buyers and enforce bespoke business regulations. Although this mode of connectivity might demand more developmental and maintenance effort, it's a brilliant substitute for Sellers who don't have an API.
