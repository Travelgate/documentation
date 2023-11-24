---
sidebar_position: 4
---

# Price Changes in Booking Flow

### Price changes from Search to Quote🔎
In certain instances, there may be variations in the prices displayed from Search to Quote. These changes occur when a Seller updates the prices previously returned in Search, ensuring that the Quote reflects the latest and most up-to-date price available.

:::warning Important
Please note that the booking price to consider as correct is always the **value returned in Quote**, since this is the price that the Buyer accepts before confirming the booking.
:::

### Price changes from Quote to Book🔎
1. **Case 1: The price in Book is lower than the price in Quote**  
The selling price to consider is the one returned in Quote, as it reflects the price that was accepted by the Buyer during the reservation process.
1. **Case 2: The price in Book is higher than the price in Quote**  
    - The *Seller allows Delta Price and the Buyer allows a price change through the deltaPrice* parameter: The Buyer has the flexibility to allow a price change of up to n through the DeltaPrice parameter. Therefore, during the booking process, the Buyer is expected to pay the Seller the price returned in the book response. It's important to note that an error will be returned if the new price does not comply with the DeltaPrice..
    - The *Seller allows DeltaPrice and the Buyer does not allow price change*: In this scenario, we will return an error since the Buyer does not allow a price higher than the one already provided in the Quote.
    - The *Seller does not allow DeltaPrice*: If the Seller provides a higher price in the Book response compared to the one returned in the Quote, it is necessary to report the difference since the price change was not specified. In such cases, the Seller is responsible for covering the price difference.

### Is the price of the reservation always included in Book response?
Please keep in mind that **TravelgateX cannot guarantee the return of the price in Book**, as it depends on the Seller. Unless the Seller provides us with the price in their response, we have no means of returning it to you.

 
:::info What is the Delta Price?
The [Delta Price](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book) represents the allowed price variation set by the Buyer. If the DeltaPrice is not sent and the integration supports it, we assume a price range of 0, and the process will proceed as long as the price is lower or equal to the one returned in the Quote.

The implementation of this field depends on whether it is native to the Seller or if another Search/Quote request needs to be made in Book. For more information, please refer to our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book).
:::

