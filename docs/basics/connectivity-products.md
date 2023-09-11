---
sidebar_position: 2
---

# Connectivity products

At TravelgateX, you can connect either via API or manually through our APPs.

When it comes to API connections, TravelgateX offers two distinct options for 
connectivity: Pull APIs and Push APIs.

* [Hotel-X Pull Buyers API](../apis/hotel-x-pull-buyers-api/overview), 
[Legacy Pull Buyers API](../apis/legacy-pull-buyers-api/overview), and 
[Hotel Pull Sellers API](../apis/hotel-pull-sellers-api/overview): In 
Pull integration Buyers send Availability requests to TravelgateX. TravelgateX then 
queries the Seller and receives an instant response. Along with the response, static 
information such as Hotel Lists, Room Lists, and more is downloaded from the Seller's 
API. Pull integrations offer real-time communication between Buyers and Sellers, 
making it technically easier to develop. However, they require a higher system 
investment to handle potentially higher traffic compared to Push integrations.

* [Hotel Push Sellers API](../apis/hotel-push-sellers-api/overview) and 
[Channel-X Push Buyers API](../apis/channel-x-push-buyers-api/overview): In a Push integration, 
Sellers push their product to the TGX Database/System. The Buyer builds the Hotel 
Setup on our Inventory Extranet, and the Seller pushes the availability and prices 
to our System, which is immediately processed and offered to the Buyer. Push 
connectivity includes lower traffic support requirements and faster response times. 
However, Push connections lack real-time activity and are more complex, requiring 
more development time.

If you don't have an API or work with any integrated tech platform, you can still connect to TravelgateX through our 
user-friendly APPs.

* [Inventory](../apps/inventory/overview) + [Distribution](../apps/distribution/overview): By combining both APPs, Sellers can effortlessly 
sell their products to a wide range of TravelgateX Buyers. Sellers can easily 
set up their hotels on our Inventory Extranet and manually input availability 
and pricing. Additionally, they have the option to connect with third-party 
suppliers to expand their product offerings. Once the setup is complete, 
Sellers can utilize our Distribution Extranet to connect with different 
Buyers and apply customized business rules. While this type of connectivity 
may require more development and maintenance time, it serves as an excellent 
alternative for Sellers without an API.
