---
sidebar_position: 1
---

# Hotel-X Development - Booking Query

The Booking Query operation enables you to obtain either the specific details of a reservation (booking details) or a list of reservations made within a specified time frame (booking list).

### What can I expect to receive in the Booking Query response?

Some of the fields returned are: 

- Holder
- Hotel
- Price
- Remarks
- Status

:::tip
Feel free to explore our [Hotel-X Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read) and [GraphQL Playground](https://docs.travelgate.com/playground) for detailed information on all available fields.
:::

### How can I find out if a Seller only accepts a specific type of Booking Query?
Please note that **the queryable fields available by a Seller may vary between Sellers**. You can check the restrictions and fields returned/allowed for a specific Seller via our [Metadata Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata).

- **"queryableBy"** indicates that the Seller allows searching through a given field.
- **"requires"** indicates whether receiving this information is mandatory on the Seller's API.
- **"value"** indicates if that Seller requires or allows that specific field.
- **"reviewDate"** indicates the last time this value was checked against the Seller.


:::info
If you are not using Hotel-X bookingID input, you should indicate your **accessCode** in the HotelCriteriaBookingInput. Language is optional, but we recommend adding this information for optimal results.
:::