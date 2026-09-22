---
sidebar_position: 2
---

# What is ChannelX?

**ChannelX** extracts product data loaded by Channel Managers into our [Inventory](/kb/connectivity-products/for-buyers/inventory/inventory-solution) tool and pushes it directly into the system of a Travelgate Partner, typically an OTA (Buyer).

With ChannelX, you have full control over when and what product data to refresh. This powerful tool ensures your prices, availability, and inventory stay up to date—acting as the perfect bridge between your system and the Channel Managers you're connected with!

:::info Real-time Inventory Updates   
ChannelX delivers **real-time Inventory updates**, keeping your system synchronized. However, if you prefer, you can also purchase from Channel Managers using our **HotelX Pull Buyers API**, giving you the flexibility to choose the best option for your needs.
:::

## Advantages of Using ChannelX 

1. **Enhanced Pricing Displays** – Store product data on your system to build and display **price calendars**.
2. **Full Product Synchronization** – Refresh product data whenever you need it.
3. **Improved Performance** – Reduce network latency during availability searches by avoiding external system requests.

Seamlessly consolidate contracted products from multiple Channel Managers into your system through a standardized API!

## How to Activate ChannelX 

To activate and use ChannelX, consider the following steps:

1. **HotelX Buyers API Integration**  
   - Before using ChannelX, you must be connected to our **HotelX Buyers API** (as Book mutation is performed through HotelX API).

2. **Setup via Inventory Extranet**  
   - Since ChannelX integrates with **Inventory**, you need to configure hotel, rate, and room setups using our Inventory Extranet. This enables Channel Managers to map the properties correctly.  
   - Find more details on **[Inventory setup](/kb/connectivity-products/for-buyers/inventory/set-up/overview)**.

3. **Inventory Data Reception & Storage**  
   - Once mapped, Channel Managers will load and update availability and pricing for the configured hotels and rates.

4. **ChannelX Data Push to Your System**  
   - Every update received from the Channel Manager is pushed directly into your system.

5. **Booking Flow Execution**  
   - Run your requests and enjoy the seamless functionality of ChannelX!

   ![channel_x](https://storage.travelgate.com/kbase/channel_x.jpg)

:::tip Learn More About ChannelX 📖  
For detailed information on ChannelX functionalities and API specifications, check out our [Documentation](/docs/apis/for-buyers/channel-x-push-buyers-api/quickstart)!
:::
