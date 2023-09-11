---
sidebar_position: 3
---

# Key concepts

In order to successfully embark on the journey of finding and booking hotel rooms 
through the Travelgate APIs and APPs, it is essential to familiarize yourself with a 
few important concepts. By understanding these fundamental ideas, you will gain the 
necessary knowledge and skills to navigate through this process effortlessly.

### Seller
A Seller uses the TravelgateX platform to sell travel services such as hotels for 
their customers. Sellers include DMCs, channel managers, hotels, tour operators, niche 
travel service providers.

### Supplier
A Supplier refers to the API integration used by the Seller to establish a connection, 
it enables the Seller to offer accommodation services. Each Supplier is assigned a 
unique Supplier code, which serves as a distinct identifier.

### Buyer
A Buyer uses the TravelgateX platform to book travel services such as hotels for their 
customers. Buyers include online travel agents, tour operators, niche travel service 
providers, and travel and pricing apps.

### Client
The client is the entity that buys accommodation services through the implementation 
of the Hotel-X API. The client codes used in all TravelgateX implementations are unique 
and serve to identify the specific business making the request. These codes also ensure 
that the business has a designated configuration assigned to it.

You may have more than one client code, for instance, in order to differentiate 
traffic for your B2B/B2C credentials (e.g. client_b2b, client_b2c). Since all 
accesses work with any of your client codes you should make sure you use one or 
the other according to your needs. You can check this information in your 
*Connections Settings*.

### Context
Context is a term used to describe the content codes used by both Buyers and Sellers. 
Each Seller has their own unique context, which consists of specific codes for hotels, 
boards, rooms etc. Buyers have the option to utilize their own codes or choose content 
providers, in both cases creating their own context using our *Mapping Plugin*. This 
allows buyers to use their own context, mapping their own context against the Suppliers 
ones.

### Access
Access is the set of credentials and the authentication configuration that enables 
a Buyer to connect to a Seller. It is used to differentiate among Sellers and also to 
filter different credentials and configurations from the same Seller (e.g. B2B and 
B2C feeds). 

For Hotel-X implementation and testing purposes, we recommend using the following 
accesses:

* **TGX Test Seller**: Access 2 with context HOTELTEST
* **Smyrooms Test**: Access 5647 with context LOGITEST

These have already been activated on your account and are ready to use.