---
sidebar_position: 4
---

# Pull/Push Connection Types

## First Things First: What is an XML Integration?

An XML integration acts as a **connector**, functioning as a "translator" between the systems of Buyers and Sellers. It allows different formats or programming languages (typically XML) to be compatible, ensuring that information from a hotel provider is accessible on an online travel agency’s portal—even if their databases are structured differently.

## Pull Integration

### What is a Pull Integration?

Pull integrations operate as a **two-way communication system** between two parties:

1. A Seller
2. A Buyer

In this setup, Buyers—such as OTAs (Online Travel Agencies) and Tour Operators—send availability requests to Travelgate. Travelgate then queries the Seller and returns the response instantly.

### Handling Static Content

Static content information (e.g., portfolio, destination list, room list) is retrieved from the Seller’s API. The quantity and quality of this data depend entirely on the information provided by the Seller through the integration. Travelgate functions as a bypass in this process.

### Advantages of Pull Connectivity
- Real-time availability updates between Buyers and Sellers.
- Technically easier to develop and implement.

### Disadvantages of Pull Connectivity
- Requires handling a higher volume of traffic, demanding a greater system investment compared to Push integrations.

## Push Integration

### What is a Push Integration?

A Push integration involves Channel Managers "pushing" their product data directly to Travelgate's database/system.

Once a Push connection is established, the Buyer configures their setup in our Inventory Extranet according to pre-agreed conditions with the hotels. The hotel setup includes:

- Hotel
- Rates
- Rooms (including offers and derived rates, if applicable)

After completing the hotel setup, the Buyer notifies the Channel Manager to "push" their product (availability, rates). This data is then processed and made available to the Buyer.

:::info
Buyers, Hotels, and Channel Managers should **maintain ongoing communication** to stay informed about updates, such as modifications, new rates, and room changes.
:::

### Handling Static Content

In Push integrations, static content is generated and stored within Travelgate's system. Hotel and room codes will follow Travelgate’s format instead of the Seller’s, ensuring consistency across all connected Channel Managers and Push suppliers. However, content such as images, descriptions, and amenities is **not** provided.

### Types of Push Integrations

#### 1. Push Standard

In the Push Standard model, availability, rates, and the entire booking flow are managed directly within Travelgate’s Inventory platform. Buyers access pre-loaded data, meaning no real-time API calls to the Seller's system are required during the booking flow process.

**Advantages of Push Standard Connectivity**

- Reduced Traffic Load: Minimizes server requests for Sellers, drastically reducing the need for expensive infrastructure and system investments.
- Lightning-Fast Responses: Buyers experience near-instant response times since data is queried locally from the Inventory.
- Total Portfolio Control: Empowers Buyers and Hoteliers to directly load, update, and manage their portfolio (hotels, rates, rooms, and availability) within the platform.

:::note
Channel managers usually work with full Push Standard flows, while Pull providers are the most common adopters of the Hybrid model.
:::

#### 2. Push Hybrid

The Push Hybrid model blends a Push-style setup with a Pull-style booking flow. While the initial setup, pricing,  and availability are loaded and maintained in the Inventory (Push), the other steps  (Quote, Book, Read, and Cancel) behave like a Pull integration where Travelgate executes real-time supplier calls  to validate updated cancellation policies and exact pricing right before confirmation.


**Advantages of Push Hybrid Connectivity**

    - Optimized Look-to-Book (L2B) Ratio: Drastically reduces the volume of massive availability requests sent to the Seller's servers that do not convert into bookings.
    - Real-Time Accuracy: Helps ensure that pricing, final availability, and cancellation policies are validated at the exact moment of booking for maximum accuracy.
    - Best of Both Worlds: Combines the high-speed search performance of the Push model (for availability) with the transactional reliability and up-to-date conditions of the Pull model (for booking).

:::info Future Developments
The AutoSetup feature, currently a key advantage of the Push Hybrid model, is also being developed for some new Push Standard integrations. This enhancement will further streamline the onboarding process for Buyers using Standard Push connections.
:::
