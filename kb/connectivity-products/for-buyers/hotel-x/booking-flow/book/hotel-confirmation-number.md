---
sidebar_position: 4
---

# Hotel Confirmation Number

## What Information Does the HCN Provide?

Once a booking has been successfully confirmed in Travelgate, you will have access to the following locators:

1. **Buyer's Locator:** The client reference.
2. **Seller's Locator:** The supplier reference.

Additionally, the Seller may provide a third type of locator, issued by the hotel upon booking confirmation. This is known as the **Hotel Confirmation Number (HCN)** or **Hotel Reference Booking (HRB)**, also referred to as `PropertyReservationNumber` in the [Legacy Pull Buyers API](/docs/apis/for-buyers/legacy-pull-buyers-api/booking-flow/reservation#success-response-data-breakdown).

Please note that Travelgate can only provide this code if the Seller includes it in their response. If available, the HCN will be included in the [Book Response](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/book/book-mutation) and/or the [Booking Query Response](/kb/connectivity-products/for-buyers/hotel-x/booking-management/booking-read-list/booking-query), which cover the Reservation and ReservationRead/List methods.

### Hotel-X Pull Buyers API

![hcn_1](https://storage.travelgate.com/kbase/hcn_1.jpg)

### Legacy Pull Buyers API (ReservationRS)

![hcn_2](https://storage.travelgate.com/kbase/hcn_2.jpg)

## How Can I Identify Sellers That Provide HCN Information?

You can verify if a Seller provides HCN information by reviewing their [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata).