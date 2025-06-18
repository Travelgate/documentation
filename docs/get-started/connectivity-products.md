---
sidebar_position: 2
---

# Connectivity products

At Travelgate, Partners can either be Buyers or Sellers. Depending on their role, they have the option to connect via a Pull or Push API or utilize our dedicated Apps for seamless integration.

## API Connections

Travelgate provides two main types of API connectivity for Buyers and Sellers, Pull APIs and Push APIs.

### For Buyers

#### Hotel-X Pull Buyers API
* [Hotel-X Pull Buyers API](../apis/for-buyers/hotel-x-pull-buyers-api/quickstart.mdx): Through Pull integration, Buyers send requests to Travelgate. Upon receiving the request, Travelgate consults the Seller and gets response (in the case of Booking Flow and Management methods, this transaction takes place immediately.). Pull Buyer APIs also retrieve static data like Hotel Lists, Room Lists, etc., fetched from the Seller's API. Pull integrations emphasize real-time communication between Buyers and Sellers. They are relatively simple to develop but necessitate significant system resources due to potentially higher traffic, in contrast to Push integrations.


#### Channel-X Push Buyers API and Inventory 
* [Channel-X Push Buyers API](../apis/for-buyers/channel-x-push-buyers-api/quickstart.mdx): Through Push integration, Buyers configure the Hotel Setup on our Inventory Extranet. Subsequently, the Seller pushes the availability and pricing data to our System. Channel-X extracts this data and sends it to the Buyer's system, allowing you to create and display price calendars and reducing network latency for availability searches. To enable bookings, it is essential to also develop the Pull API.

* [Inventory Set Up GraphQL API](../apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/quickstart.mdx): Our solution allows buyers and sellers to efficiently configure, upload, and retrieve critical data essential for managing their inventory, including hotels, rates, rooms, and offers.
The API mirrors the functionalities of our Inventory Extranet, but with the added benefits of API integration, such as automation, improved efficiency, and a lower likelihood of human errors.

* [Inventory Set Up CSV API](../apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/quickstart.mdx): This API is designed to streamline the process of updating and maintaining large datasets, allowing clients to quickly integrate their information using a well-defined CSV file format. It supports various essential operations for effective hotel inventory management, all through the convenience of CSV file uploads.


### For Sellers

#### Connectors Pull Sellers Framework

* We have launched a new Pull Sellers API, in which Travelgate currently plays a proactive role in developing API integrations on behalf of the Seller. On this [website](https://app.travelgate.com/network/roadmap) you can find the roadmap and status of developments.


#### Inventory Push Sellers API
* [Inventory Push Sellers API](../apis/for-sellers/inventory-push-graphql-api/quickstart.mdx): We offer a comprehensive GraphQL API designed to optimize the management of static information and master data in the travel industry for our Push Suppliers. This API enables both Buyers and Sellers to efficiently set up, load, and retrieve crucial data necessary for establishing and maintaining their inventory, including the complete configuration of hotels, rates, rooms, and offers.
This API is particularly related to the loading of prices and availability, known as ARI updates. It reflects the capabilities of our existing Inventory Extranet, but with the added benefits of API integration, such as automation, improved efficiency, and a reduced likelihood of human errors.




## APP Connections

If an API isn't part of your tech stack, or you aren't integrated with any tech platform, worry not! Travelgate has user-friendly APPs tailored for you.

* [Inventory](../apps/inventory/quickstart) + [Distribution](../apps/distribution/quickstart): This combined solution empowers Sellers to effortlessly market their products to an extensive array of Travelgate Buyers. Sellers can straightforwardly establish their hotels on our Inventory Extranet and manually input data on availability and pricing. They also have the privilege of connecting with third-party vendors to broaden their product spectrum. Once everything's set up, Sellers can leverage our Distribution Extranet to engage with various Buyers and enforce bespoke business regulations. Although this mode of connectivity might demand more developmental and maintenance effort, it's a brilliant substitute for Sellers who don't have an API.
