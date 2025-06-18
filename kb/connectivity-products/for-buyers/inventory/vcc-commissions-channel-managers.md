---
sidebar_position: 4
---

# VCC and Commissions with Channel Managers

## How to Check if a Channel Manager Supports VCC Payment

To determine whether a specific Channel Manager allows **VCC payment**, contact them directly. Only Channel Managers that have implemented the **ReservationNotif** method can enable VCC payment.

## Negotiating Credit Arrangements with Suppliers

If the Channel Manager supports card payment, Travelgate accepts all payment options. You can configure **BookingDatePayment** and **ArrivalDatePayment** at the rate level in the **Inventory Extranet**, allowing payment after arrival instead of VCC on arrival. However, Travelgate does not mediate payment terms between the Channel Manager and the Client. It is recommended to confirm payment arrangements directly with your Channel Manager.

## Channel Managers Offering VCC Payment via Travelgate

Below is a list of some Channel Managers (Push Suppliers) connected via Travelgate that support **VCC payment** by implementing a booking notification system. For the latest information, please contact the Channel Manager directly.

- Allotz
- Connectycs
- D-EDGE / Availpro
- BoccoGroup / Hotel Spider
- Busy Rooms
- Cubilis
- E-GDS
- Ericsoft
- TravelClick
- Hermes Hotels
- Hotel Availabilities
- Hoteliers Guru
- Hotetec
- Iperbooking
- Passepartout
- Phobs
- Primal-RES
- Prestige
- RoomCloud (Parity Rate)
- RateGain
- RateTiger
- Shiji
- Siteminder
- SmartHotel
- Spider Hotels
- STAAH
- Synxis
- Travelline
- Omnibees
- VerticalBooking
- WuBook
- YieldPlanet

## Commission Handling by Channel Managers

In the Travelgate system, the **Channel Manager** (CM) loads availability and prices. You have the flexibility to set a commission at the **rate level** in the **Inventory Extranet**. If the CM loads net prices, you can add a **commission percentage** in the rate configuration. The API will then return the price both with and without commission.

:::info **Discover More!**

Explore our **[Documentation](/docs/apps/inventory/extranet/overview)** to maximize the benefits of the **Inventory Extranet**, learn about its features, and enhance your expertise!
:::

