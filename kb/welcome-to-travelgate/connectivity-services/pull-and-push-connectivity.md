---
sidebar_position: 4
---

# Pull/Push Connection Types

## First Things First: What is an XML Integration? 💡

An XML integration acts as a **connector**, functioning as a "translator" between the systems of Buyers and Sellers. It allows different formats or programming languages (typically XML) to be compatible, ensuring that information from a hotel provider is accessible on an online travel agency’s portal—even if their databases are structured differently.

## Pull Integration ⬅️

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

## Push Integration ➡️

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

#### 1. Push Standard⭐

In the Push Standard model, all availability, rates, and booking requests are managed through Travelgate’s internal database. The Buyer receives pre-loaded availability and pricing information, with no need for real-time queries to the Seller.

**Advantages of Push Standard Connectivity**

    - Reduced traffic load for Sellers, minimizing the need for extensive system investment.
    - Faster response times for Buyers.

**Disadvantages of Push Standard Connectivity**

    - Availability updates are not in real-time; Sellers communicate changes only when products are sold.
    - Requires more development time compared to Pull integrations.

#### 2. Push Hybrid⭐

The Push Hybrid model is similar to the Push Standard but with one key difference: **it only uses the Inventory system up to the availability stage**. After that, all remaining booking flow requests function like a Pull connection, meaning Travelgate sends queries directly to the provider for real-time responses.

**Advantages of Push Hybrid Connectivity**

    - Prices in hybrid integrations tend to be more precise, as the provider returns the exact price, including offers and taxes if applicable.
    - Booking status verification: Reservations that remain in an "UN" (unknown) status can be checked against the provider in real time, ensuring up-to-date status.
    - AutoSetup available: Most hybrid integrations include the AutoSetup feature, eliminating the need for manual setup within Inventory.
    - Availability updates are not in real-time, but pricing accuracy is improved compared to Standard Push.

**Disadvantages of Push Hybrid Connectivity**

    - Requires more development effort than the Push Standard Model due to the mixed approach.
    - Hybrid integrations still involve some degree of Pull traffic, which may increase system complexity.

:::info Future Developments
The AutoSetup feature, currently a key advantage of the Push Hybrid model, is also being developed for some new Push Standard integrations. This enhancement will further streamline the onboarding process for Buyers using Standard Push connections.
:::