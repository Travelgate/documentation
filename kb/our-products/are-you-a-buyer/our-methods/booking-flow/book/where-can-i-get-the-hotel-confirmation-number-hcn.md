---
sidebar_position: 3
---

# How to obtain the Hotel Confirmation Number (HCN)

### What information does the HCN return?💡
Once a booking has been successfully confirmed in TravelgateX you will have access to the following locators:
1. The Buyer's locator (client reference).
1. The Seller's locator (provider reference).

The Seller may also provide a third type of locator, issued by the hotel when it confirms the booking. This is known as the **Hotel Confirmation Number (HCN) or Hotel Reference Booking (HRB)**.

Please note we are only able to provide this code if the Seller returns it in their response, in which case it will be returned in [BookRS](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/hotel-x-development-book-mutation) and [BookingQueryRS](/kb/our-products/are-you-a-buyer/our-methods/booking-management/booking/what-is-hotel-x-booking-query) (Reservation and ReservationRead/List methods):

### Hotel-X Pull Buyers API:

![hcn_1](https://storage.travelgate.com/kbase/hcn_1.jpg)


### Legacy Pull Buyers API (ReservationRS):
![hcn_2](https://storage.travelgate.com/kbase/hcn_2.jpg)


### How can I identify the Sellers that return HCN information?🔎
You can check if your Seller returns HCN through their [Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query). These are **some of the Sellers** that currently return the HCN in BookRS:

- Allbeds
- GRN Connect
- Ostrovok
- Sabre Hospitality Solutions
- Veturis
- Smyrooms
- MagicRooms
- Expedia

:::info
The Seller has confirmed they return HCN information but you are still not receiving it? Please submit a [ticket](https://app.travelgatex.com/tickets) to our Customer Care team for further information.✔️
:::

 