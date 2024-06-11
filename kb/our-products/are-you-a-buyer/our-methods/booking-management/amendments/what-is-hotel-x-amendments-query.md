---
sidebar_position: 1
---

# Hotel-X Development - Amendments

### What are Amendments and how can I use them?

The Amendment operations allow you to modify different aspects of a booking. There are currently five amendment operations available:

- amendDates: Allows to amend the checkin and/or the checkout of a booking
- amendBoard: Allows to amend the board of a booking
- amendRemarks: Allows to add a special request (remark) on a booking
- amendPaxes: Allows to amend the paxes of a booking


Each amendment type must be performend in two steps: a Query and a Mutation:

1. **Query**: it simulates the amendment - it's used to make a request to the Supplier in order to retrieve the new price of the booking and the cost of confirming the modification, if such cost exists. As an analogy, it would be the same as the Quote method in a Booking Flow. In addition, the Query will provide an amendmentID token to be sent in the second method, which should not be interpreted in any case by the Partner.
    * How can I run an Amendments Query?
        - Sending all the booking information (references, dates, hotel code)
        - Sending the bookingID received in the Book response (reservation response)


2. **Mutation**: it commits the amendment - it is used to confirm the booking modification in the Supplier’s system. In the Mutation, the amendmentID received in the Query response will be sent in order to provide all the required information.
    * How can I run an Amendments Mutation?
        - You can perform the mutation (commmit) of the amendment by sending the amendmentID received in the previous response.


### How can I know if a Seller supports Amendments?

To learn more about Amendments, including which modifications a Seller allows and what can or cannot be changed through mutations, please review the Seller's **[Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query)** response.

![amendments_upd](https://storage.travelgate.com/kbase/amendments_upd.jpg)

:::info
You will find further information and examples about booking modifications in our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/).
:::