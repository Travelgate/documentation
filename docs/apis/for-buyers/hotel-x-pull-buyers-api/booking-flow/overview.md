---
sidebar_position: 1
---

# Overview

In order to book a hotel room, booking flow methods must be executed sequentially: `search`, `quote` and `book`.

![Hotel-X Shopping Flow](../../../../../static/img/docs/hotel-x/hotel-x_shopping_flow.svg)

1. **`search`:** Start by checking availability for your desired dates and number of guests. You can search for one or multiple Sellers' access.

2. **`quote`:** This step allows you to evaluate the rate before making a final booking decision. It provides you with the same information as the Search response, including the most up-to-date pricing, rate details, and cancellation policies.

3. **`book`:** When you're ready, proceed with the Book operation. It requests a reservation confirmation using the specific optionId obtained from the Quote step.

