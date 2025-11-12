---
sidebar_position: 2
---

# Channel-X

## What is Channel-X? 

**Channel-X** extracts product data loaded by Channel Managers into our [Inventory](/kb/connectivity-products/for-buyers/inventory/inventory-solution) tool and pushes it directly into the system of a Travelgate Partner, typically an OTA (Buyer).

With Channel-X, you have full control over when and what product data to refresh. This powerful tool ensures your prices, availability, and inventory stay up to date—acting as the perfect bridge between your system and the Channel Managers you're connected with!

:::info Real-time Inventory Updates   
Channel-X delivers **real-time Inventory updates**, keeping your system synchronized. However, if you prefer, you can also purchase from Channel Managers using our **Hotel-X Pull Buyers API**, giving you the flexibility to choose the best option for your needs.
:::

## Advantages of Using Channel-X 

1. **Enhanced Pricing Displays** – Store product data on your system to build and display **price calendars**.
2. **Full Product Synchronization** – Refresh product data whenever you need it.
3. **Improved Performance** – Reduce network latency during availability searches by avoiding external system requests.

Seamlessly consolidate contracted products from multiple Channel Managers into your system through a standardized API!

## How to Activate Channel-X 

To activate and use Channel-X, consider the following steps:

1. **Hotel-X Buyers API Integration**  
   - Before using Channel-X, you must be connected to our **Hotel-X Buyers API** (as Book mutation is performed through Hotel-X API).

2. **Setup via Inventory Extranet**  
   - Since Channel-X integrates with **Inventory**, you need to configure hotel, rate, and room setups using our Inventory Extranet. This enables Channel Managers to map the properties correctly.  
   - Find more details on **[Inventory setup](/kb/connectivity-products/for-buyers/inventory/set-up/overview)**.

3. **Inventory Data Reception & Storage**  
   - Once mapped, Channel Managers will load and update availability and pricing for the configured hotels and rates.

4. **Channel-X Data Push to Your System**  
   - Every update received from the Channel Manager is pushed directly into your system.

5. **Booking Flow Execution**  
   - Run your requests and enjoy the seamless functionality of Channel-X!

   ![channel_x](https://storage.travelgate.com/kbase/channel_x.jpg)

:::tip Learn More About Channel-X 📖  
For detailed information on Channel-X functionalities and API specifications, check out our [Documentation](/docs/apis/for-buyers/channel-x-push-buyers-api/quickstart)!
:::
