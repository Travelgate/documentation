---
sidebar_position: 3
---

# One-Shot Requests

## What Are "One-Shot" Requests in the Channel-X API?

As a **Buyer** using the [Channel-X Push Buyers API](https://docs.travelgate.com/docs/apis/for-buyers/inventory-buyers/channel-x-push-buyers-api/quickstart/), you already have **hotel availability data** from your suppliers stored in your system.

To complete a booking, you need to be connected to **Travelgate** via the **Hotel-X Pull Buyers API**. If you are already following the standard **Search, Quote, and Book** booking flow, you may continue using it. However, to improve efficiency and reduce redundant requests, we recommend implementing specialized methods designed to streamline the booking process.

To simplify bookings, we have introduced the **'oneStepQuote'** and **'oneStepBook'** methods. You can choose the one that best fits your operational needs.

## oneStepQuote

**Quote and Confirm**: If you prefer to secure a quote before finalizing to assess and confirm updated terms, use the **'oneStepQuote'** method. This method internally performs a **Search and Quote**, returning updated information such as:
- **Latest pricing**
- **Cancellation policies**

If you choose to proceed, simply execute a standard [Book mutation](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/hotel-x-development-book-mutation) using the **optionID** returned in the **'oneStepQuote'** response.

## oneStepBook

**Direct Booking**: If your workflow involves directly booking an option stored in your system, use the **'oneStepBook'** mutation. Provide the necessary option details, including:
- **Rate**
- **Room type**
- **Board type**
- **Price**

Our system will handle the **search, quote, and book** operations internally, confirming the booking only if the terms match your specified conditions and the final price is equal to or lower than your input.

:::info
To **cancel** or **check the status** of your bookings, refer to the [Booking Management](https://docs.travelgate.com/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/overview/) section.
:::