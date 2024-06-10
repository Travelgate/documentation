---
sidebar_position: 2
---

# Connectivity products

At Travelgate, Partners can either be Buyers or Sellers. Depending on their role, they have the option to connect via a Pull or Push API or utilize our dedicated Apps for seamless integration.

## API Connections

Travelgate provides two main types of API connectivity for Buyers and Sellers, Pull APIs and Push APIs.

### For Buyers

* [Hotel-X Pull Buyers API](../apis/for-buyers/hotel-x-pull-buyers-api/quickstart.mdx) and
  [Legacy Pull Buyers API](../apis/for-buyers/legacy-pull-buyers-api/overview.mdx): Through Pull integration, Buyers send Availability requests to Travelgate. Upon receiving the request, Travelgate consults the Seller and gets an immediate response. This response also includes static data like Hotel Lists, Room Lists, etc., fetched from the Seller's API. Pull integrations emphasize real-time communication between Buyers and Sellers. They are relatively simple to develop but necessitate significant system resources due to potentially higher traffic, in contrast to Push integrations.

* [Channel-X Push Buyers API](../apis/for-buyers/inventory-buyers/channel-x-push-buyers-api/quickstart.mdx): Through Push integration, Buyers configure the Hotel Setup on our Inventory Extranet. Subsequently, the Seller pushes the availability and pricing data to our System. Channel-X extracts this data and sends it to the Buyer's system, allowing you to create and display price calendars and reducing network latency for availability searches. To enable bookings, it is essential to also develop the Pull API.

Whether your connectivity as a Buyer is Pull or Push, if you connect to a Push Seller, an initial set up in our Inventory Extranet will be required. In addition to the manual configuration the Extranet offers, Travelgate provides two newly APIs in order to automate this process: [Inventory Set Up GraphQL API](../apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/quickstart.mdx) and [Inventory Set Up CSV API](../apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/quickstart.mdx).

### For Sellers

* [Hotel Push Sellers API](../apis/for-sellers/inventory-sellers/hotel-push-sellers-api/quickstart.mdx): Through Push integration, Sellers transmit their product data to the TGX Database/System. Push integrations are characterized by reduced traffic demands and swifter response times. However, they don't support real-time interactions and demand more developmental effort.

* [Legacy Pull Sellers API](../apis/for-sellers/hotel-pull-sellers-api/overview): This works similarly to the Pull Buyers API, where the Seller receives real-time requests and sends back immediate responses.

## APP Connections

If an API isn't part of your tech stack, or you aren't integrated with any tech platform, worry not! Travelgate has user-friendly APPs tailored for you.

* [Inventory](../apps/inventory/quickstart) + [Distribution](../apps/distribution/quickstart): This combined solution empowers Sellers to effortlessly market their products to an extensive array of Travelgate Buyers. Sellers can straightforwardly establish their hotels on our Inventory Extranet and manually input data on availability and pricing. They also have the privilege of connecting with third-party vendors to broaden their product spectrum. Once everything's set up, Sellers can leverage our Distribution Extranet to engage with various Buyers and enforce bespoke business regulations. Although this mode of connectivity might demand more developmental and maintenance effort, it's a brilliant substitute for Sellers who don't have an API.
