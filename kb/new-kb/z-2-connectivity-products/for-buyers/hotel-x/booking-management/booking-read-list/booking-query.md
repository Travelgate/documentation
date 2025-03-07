---
sidebar_position: 1
---

# Booking Query

The Hotel-X **Booking Query** operation allows you to retrieve specific reservation details (Booking Read) or a list of reservations made within a specified time frame (Booking List).

## What Information Can I Expect in the Booking Query Response?

Some of the key fields returned in the Booking Query response include:

- **Holder**
- **Hotel**
- **Price**
- **Remarks**
- **Status**

:::info
- For a complete list of available fields, please visit our [Hotel-X Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read) and explore the GraphQL Playground.  
- Keep in mind that the information provided in the Booking Query response can vary by Seller. If you require specific fields, we encourage you to contact the Seller directly.
:::

## Verifying Accepted Booking Queries by Sellers

The fields available for querying may vary across Sellers. You can verify the fields supported and any restrictions applied by a Seller through our [Metadata Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata):

- **"queryableBy"** – Specifies if the Seller allows searching via a specific field.
- **"requires"** – Indicates if the field is mandatory for the Seller's API.
- **"value"** – Confirms if the Seller allows or requires a particular field.
- **"reviewDate"** – Shows the last date the field value was verified against the Seller.

:::info
If you are not using the Hotel-X `bookingID` input, ensure you specify your **accessCode** in the `HotelCriteriaBookingInput`. While the language parameter is optional, including it is recommended for optimal results.
:::


## Booking Query: Booking Details

### How Can I Retrieve the Details of a Booking?

To obtain the details of a specific reservation, you can use the Booking Query by either **`bookingID`** (returned in the Book response, highly recommended) or **`REFERENCES`** (to be deprecated):

![bookingquery1](https://storage.travelgate.com/kbase/bookingquery1.jpg)

## Booking Query: Booking List

### How Can I Retrieve a List of All Bookings Made Within a Specific Time Frame? 💡

To obtain a list of all reservations made within a specific time frame, perform the Booking Query using **`typeSearch: "DATES"`**. Then, specify if your `dateType` is either **`BOOKING`** (booking date) or **`ARRIVAL`** (check-in date), along with the `start` and `end` dates of the query (format: yyyy-MM-dd).

![bookingquery2](https://storage.travelgate.com/kbase/bookingquery2.jpg)

:::tip
Don't forget to check our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read#booking-list-by-arrival-date-range) for a full example of a Hotel-X Booking Query!🚀
:::
