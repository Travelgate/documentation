---
sidebar_position: 2
---

# One-Shot requests

### What are the "One-Shot" requests in Channel-X API?

As a Buyer utilizing our [Channel-X Push Buyers API](https://docs.travelgate.com/docs/apis/for-buyers/inventory-buyers/channel-x-push-buyers-api/quickstart/), you already possess the hotel availability data from your suppliers directly in your system.

To proceed with booking any of these options, you should be connected to TravelgateX via our Hotel-X Pull Buyers API. If you are currently connected and following the usual booking process (Search, Quote, and Book), you may continue in this manner. Nonetheless, we recommend implementing some specific methods designed to reduce redundant requests and enhance the efficiency of the booking process in your system.

To enable a more streamlined booking approach, we have developed the **'oneStepQuote' and 'oneStepBook'** methods. You may select the most appropriate one according to your own operational needs.

### oneStepQuote

**Quote and Confirm**: If you prefer to secure a quote before finalizing to assess and confirm updated terms, opt for the 'oneStepQuote' query. This query allows us to internally perform a search and quote, providing you with updated information such as price and cancellation policies. Should you decide to proceed with this option, simply perform a standard [Book mutation](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/hotel-x-development-book-mutation) with the optionID provided from the 'oneStepQuote' response.

### oneStepBook

**Direct Booking**: If your strategy involves directly booking an option listed in your system, you should utilize the 'oneStepBook' mutation. Simply provide all the option details (rate, room, board, price) and our system will manage the standard booking flow internally. This streamlined mutation means we will conduct the search, quote, and book operations, aiming to confirm only if the offered terms meet your specified conditions and the price is consistent or lower than your initial input.


:::info
To cancel or check the status of your bookings, refer to the various functions listed under the [Booking Management](https://docs.travelgate.com/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/overview/) section.
:::