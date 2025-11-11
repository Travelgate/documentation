---
sidebar_position: 4
---

# Amendments

### What Are Amendments and How Can I Use Them?

Amendments allow you to modify various aspects of an existing booking. Currently, the following five amendment operations are available:

- **amendDates**: Modify the check-in and/or check-out dates of a booking.
- **amendBoard**: Change the meal plan (board) associated with a booking.
- **amendRemarks**: Add special requests (remarks) to a booking.
- **amendPaxes**: Modify the number or details of guests in a booking.
- **amendRooms**: Nodify your booking's rooms.

Each amendment type is performed in two steps: **Query** and **Mutation**.

### Step 1: Amendment Query (Simulation)
The **Query** simulates the amendment by making a request to the Seller to obtain updated pricing and any applicable modification fees. This step is similar to the Quote method in the booking flow. The response includes an `amendmentID` token, which must be used in the Mutation step. This ID should not be interpreted in any case by the Partner.

#### How to Run an Amendment Query?
You can initiate an amendment query by providing one of the following:

- Complete booking details (e.g., references, dates, hotel code).
- The `bookingID` received in the Book response (reservation response).

### Step 2: Amendment Mutation (Commitment)
The **Mutation** step finalizes the amendment by confirming the changes in the Seller’s system. This requires the `amendmentID` obtained in the Query response.

#### How to Run an Amendment Mutation?
To confirm the amendment, send the `amendmentID` received in the previous query response.

## How Can I Check If a Seller Supports Amendments?

To determine whether a Seller supports amendments and which modifications are allowed, review their [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata). This metadata provides insights into the Seller’s capabilities and any restrictions related to amendments.

:::info
For more details and practical examples of booking modifications, refer to our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/).
:::
