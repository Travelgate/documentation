---
sidebar_position: 3
---

# Key concepts

In order to successfully embark on the journey of finding and booking hotel rooms through the Travelgate APIs and APPs, it is essential to familiarize yourself with a few important concepts. By understanding these fundamental ideas, you will gain the necessary knowledge and skills to navigate through this process effortlessly.

### Seller
A Seller uses the TravelgateX platform to sell travel services such as hotels for their customers. Sellers include DMCs, channel managers, hotels, tour operators, niche travel service providers.

### Supplier
A Supplier refers to the API integration used by the Seller to establish a connection, enabling the Seller to offer accommodation services. Each Supplier is assigned a unique Supplier code, which serves as a distinct identifier. It's important to note that one Seller can have multiple Supplier codes. For instance, a Seller might have separate Supplier codes if they provide their product via both PULL and PUSH integrations at the same time.

### Buyer
A Buyer uses the TravelgateX platform to book travel services such as hotels for their customers. Buyers include online travel agents, tour operators, niche travel service providers, and travel and pricing apps.

### Client
A "client" is a tag or label that Buyers use to categorize their traffic. The client is the entity that purchases accommodation services via the Hotel-X API. These codes also ensure that the business has a designated configuration assigned to it.

You can have multiple client codes, for instance, to separate traffic for B2B and B2C (e.g., client_b2b, client_b2c). All accesses work with any client code, so choose according to your needs. You can check this information in your [Connections Settings](https://app.travelgatex.com/connections/settings).

### Context
Context is a term used to describe the content codes used by both Buyers and Sellers. Every Supplier has their own unique context, which consists of specific codes for items like hotels, boards, and rooms. Buyers can either adopt their own context or the ones provided by the Supplier. When employing their own context, Buyers can either apply their own codes or engage a content provider (e.g. GIATA), in both cases creating their own context using our [Mapping Plugin](../apis/hotel-x-pull-buyers-api/plugins/mapping).

### Access
An access is the set of credentials and the authentication configuration that enables a Buyer to connect to a Seller. It is used to differentiate among Sellers and also to filter different credentials and configurations from the same Seller (e.g. B2B and B2C feeds). 

For Hotel-X implementation and testing purposes, we recommend using the following 
accesses:

* **TGX Test Seller**: Access 2 with context HOTELTEST
* **Smyrooms Test**: Access 5647 with context LOGITEST

These have already been activated on your account and are ready to use.

### API Key

An API Key is a unique alphanumeric code that serves as a form of authentication required for accessing Hotel-X API. This key must be included in the HTTP Authorization request header to verify and authenticate the user agent with the server. It acts as a secure identifier, ensuring that only authorized users can make requests and access the API's functionalities. You can check this information in your [Connections Settings](https://app.travelgatex.com/connections/settings).
