---
sidebar_position: 4
---

# Price Changes

## Price Changes from Search to Quote
Price variations may occur between the Search and Quote stages. These changes happen when a Seller updates the prices returned in Search, ensuring that the Quote reflects the most up-to-date price available.

:::warning Important
The **price returned in Quote** is always the correct booking price, as this is the amount the Buyer agrees to before confirming the booking.
:::

## Price Changes from Quote to Book
1. **Case 1: The price in Book is lower than in Quote**  
   The selling price to consider remains the one returned in Quote, as it reflects the price accepted by the Buyer during the reservation process.

2. **Case 2: The price in Book is higher than in Quote**  
   - **The Seller allows Delta Price, and the Buyer permits price changes via the `deltaPrice` parameter:** The Buyer can allow a price change of up to a specified amount using the `deltaPrice` parameter. In this case, the Buyer is expected to pay the Seller the price returned in the Book response. However, if the new price exceeds the allowed `deltaPrice`, an error will be returned.
   - **The Seller allows Delta Price, but the Buyer does not allow price changes:** Since the Buyer does not accept a higher price than quoted, an error will be returned.
   - **The Seller does not allow Delta Price:** If the Seller provides a higher price in the Book response than in the Quote, the difference must be reported, as the price change was not pre-approved. In such cases, the Seller is responsible for covering the price difference.

## Is the Reservation Price Always Included in the Book Response?
Travelgate cannot guarantee that the price will be returned in the Book response, as this depends on the Seller. If the Seller does not include the price in their response, Travelgate has no way of providing it.

:::info What Is the Delta Price?
The [Delta Price](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book) represents the allowed price variation set by the Buyer. If `deltaPrice` is not sent and the integration supports it, a default price range of 0 is assumed, meaning the process will only proceed if the price is equal to or lower than the one returned in Quote.

The implementation of this field depends on whether it is natively supported by the Seller or requires an additional Search/Quote request during the Book process. For more details, refer to our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book).
:::
