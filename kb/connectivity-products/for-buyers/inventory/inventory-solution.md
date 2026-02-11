---
sidebar_position: 2
---

# Our Inventory Solution

## Boost Your Business with Travelgate 

Simplify your workflow with **Inventory**! Travelgate seamlessly connects you to leading **Channel Managers**, allowing you to focus on **contracting** while we handle the complexity.

Gain **direct access to hotel availability and the best rates**, giving your business a competitive edge. Your **contracting team** will appreciate the ease of use, and your **business performance** will improve significantly. Let’s make contracting effortless and watch your business grow! 🚀

## Why Work with Channel Managers via Travelgate? 

Partnering with **Travelgate** and **Channel Managers** offers key advantages:

- **Increase bookings** by leveraging Channel Managers’ reach.
- **Access competitive rates** directly from hotels and local providers.
- **Distribute your contracted inventory globally** with ease.
- **Quick setup:** Get connected within minutes instead of months.
- **Scale seamlessly** as your business grows, increasing your direct stock efficiently.

## Travelgate: Your Channel Manager Integration Partner
Travelgate provides essential features to optimize your connectivity:

- **User-friendly interface** for seamless navigation.
- **Comprehensive inventory management** within the back office.
- **Rapid go-to-market capabilities** to accelerate your sales.

## Using FastX Codes in Inventory

If you are managing your own product via Inventory, you will still need to manage your setup and Channel Manager mapping in the Inventory Extranet. However, for your API implementation, **you have the flexibility to use [FastX codes](/kb/platform/app-features/connections/fastx-codes) to simplify your integration logic during the booking process.**

### Are Inventory codes automatically mapped to FastX?
Yes. All the hotel codes within Travelgate Inventory are mapped to the FastX unified context. These mappings are validated internally by Travelgate to ensure consistency across the platform.

### Can I use FastX codes in the Booking Flow for Inventory?
Yes. Since the Hotel-X API supports FastX codes, you can use them during the Search, Quote, and Book mutations even if the underlying provider is an Inventory (Push) connection. By using the FastX context in your HotelX calls, you can maintain a single standard across both your Pull and Push suppliers.

### Can I use FastX codes in ChannelX?
Not yet, but we are currently working on a deeper integration to ensure FastX codes are also available for ChannelX. This will allow for a 100% unified experience from the moment the product is pushed until the booking is confirmed.