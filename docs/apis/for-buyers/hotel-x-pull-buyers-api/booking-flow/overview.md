---
sidebar_position: 1
---

# Overview

In order to book a hotel room, booking flow methods must be executed sequentially: Search, Quote and Book.

![Hotel-X Shopping Flow](../../../../../static/img/docs/hotel-x/hotel-x_shopping_flow.svg)

Search is the first step in our booking flow, the goal is to check availability in the date range and pax specified for the requested hotels or for the hotels in the destination requested. The call can search one or more sellers’ accesses. Quote is an operation used to assess and valuate the rate before the actual booking. It returns the same information as the Search response for a hotel rate with up-to-date price, along with additional information regarding the rate: rate breakdown and cancellation policies. Finally, Book operation requests a reservation confirmation for the specified optionId returned in Quote.


