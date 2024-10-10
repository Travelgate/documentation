---
sidebar_position: 3
---

# How to obtain the Hotel Confirmation Number (HCN)

### What information does the HCN return?💡
Once a booking has been successfully confirmed in TravelgateX you will have access to the following locators:
1. The Buyer's locator (client reference).
1. The Seller's locator (provider reference).

The Seller may also provide a third type of locator, issued by the hotel when it confirms the booking. This is known as the **Hotel Confirmation Number (HCN) or Hotel Reference Booking (HRB)** (`PropertyReservationNumber` in [Legacy Pull Buyers API](http://localhost:4200/docs/apis/for-buyers/legacy-pull-buyers-api/booking-flow/reservation#success-response-data-breakdown)).

Please note we are only able to provide this code if the Seller returns it in their response, in which case it will be returned in [Book Response](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/hotel-x-development-book-mutation) and/or [Booking Query Response](/kb/our-products/are-you-a-buyer/our-methods/booking-management/booking/what-is-hotel-x-booking-query) (Reservation and/or ReservationRead/List methods):

### Hotel-X Pull Buyers API:

![hcn_1](https://storage.travelgate.com/kbase/hcn_1.jpg)


### Legacy Pull Buyers API (ReservationRS):
![hcn_2](https://storage.travelgate.com/kbase/hcn_2.jpg)


### How can I identify the Sellers that return HCN information?🔎
You can check if your Seller returns the HCN through their [Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query).

:::info
The Seller has confirmed they return HCN information but you are still not receiving it? Please [submit a Case](https://app.travelgate.com/support) to our Customer Support team for further information.✔️
:::

 