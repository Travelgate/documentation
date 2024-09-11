---
sidebar_position: 3
---

# What is the difference between Pull and Push Sellers?


### But first things first: what's an XML integration?💡
An XML integration is basically a **connector** that acts as a "translator" between the systems of Buyers and Sellers, allowing different formats or programming languages ​​(usually XML) to be compatible. This way, the information from a hotel provider, a Rent a Car, an airline, a railway company, or a shipping company is available on the website of an online travel agency, even if the information in their databases is structured differently.

### Pull Integration⬅️

#### What are Pull integrations?
Pull integrations (like Pull integrations), always involve **two agents**:

1. A Seller
1. A Buyer

The Pull integration functions as a **two-way system** where Buyers, like OTAs (Online Travel Agencies), Tour Operators, and others, send availability requests to TravelgateX. Once we receive these requests, we query the Seller and they respond instantly.

**Static content information:**

In regards to static content information (portfolio, destination list, room list, etc.), it will also be downloaded from the Seller's API.  Please note the quantity and quality of this information will depend on the data returned by Sellers via the integration (TravelgateX acts as a bypass).

**Pull Connectivity Advantages**
- Real-time communication between Buyers and Sellers.
- Technically easier to develop.

**Pull Connectivity  Disadvantages**

These integrations need to be able to support higher traffic so they require a higher system investment than Push integrations.

### Push Integration➡️

**What are Push integrations?**  
A Push Integration is a connection where Channel Managers "push" their product to TravelgateX Database/System.

Once a Push connection is activated, the Buyer (Client) configures their SetUp in our Inventory Extranet according to what they have previously agreed with the hotels. The hotel SetUp is the structure of the hotel:

- Hotel
- Rates
- Rooms (and Offers/Derived Rates, if any)

Once the Client has finished the Hotel SetUp, they inform the Channel Manager so they can "push" their product (availability, rates), which will be immediately processed and offered to the Buyer.

:::info
Buyers, Hotels and Channel Managers should **always be in touch** in order to be aware of any updates in their SetUp (like modifications, new rates/rooms, etc.).
:::

**Static content information:**

In regards to static content information, it is generated and stored directly at TravelgateX system, which means that hotel codes and room codes will be TravelgateX' (and not the Sellers', as in Pull Connections), and they will be the same for any Channel Manager/Push Supplier connected to TravelgateX. For Push Connections, content like images, hotel descriptions, amenities is not provided.

**Push Connectivity Advantages:**
- Sellers aren't required to handle as much traffic, which means they don’t need to invest as heavily in their systems.
- Great response times.

**Push Connectivity Disadvantages:**
- Availability doesn't occur in real time. Once the Seller updates their availability, they do not communicate with the Buyer until the available products are sold.
- Push connections require more development time than Pull connections