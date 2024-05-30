---
sidebar_position: 1
---

# Hotel-X Development - Book Mutation

## All about Hotel-X Book Mutation

Book operation requests a booking confirmation for the specified optionRefId returned in Quote. It returns a brief summary of the option plus the status of the reservation.

### What information can I expect in Book response?✔️
The information returned in Book response may vary between Sellers, so please check our [Hotel-X Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart) in order to add to your Book the fields expected on your side. Additionally, you may check the [Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query) of your Sellers for further details on the specifications established on their side for this Method.

**Some of the fields to be declared/added to Book mutation request are:**

- Status - make sure you add this field in order to receive the reservation status in the response.
- Price
- Client reference: the booking locator in your system (alphanumerical value).
- Supplier reference: the booking locator in the Seller's system.
- BookingID
- Holder
- Hotel

:::warning important
To ensure seamless billing, **it's important that you handle all cancellations via our API**.  
Should you face any issues, please don't hesitate to get in touch with our [Customer Care team](https://app.travelgatex.com/tickets) for assistance. Additionally, please make sure to cancel any test bookings with Sellers and to check that such bookings are refundable.
:::

### What is the DeltaPrice? Why should I use it?💡

The [Delta Price](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book) indicates the price variation permitted by the Buyer (amount or percentage), so that an error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price returned in Quote).

This field is implemented if it’s native to the Seller or if another Search/Quote request needs to be done in Book - please note DeltaPrice should be implemented by a Seller in order to be available to a Buyer.

:::info
**Interested in adding DeltaPrice in your requests?** Feel free to access our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book) for more information!🚀
:::
 

#### What does DeltaPrice "applyBoth" mean?

- applyBoth: false: It indicates that one of the conditions (amount or percentage) has to meet the DeltaPrice criteria before reservation.
- applyBoth: true: It indicates that the new price cannot exceed the amount and percentage indicated by the Buyer.  

Example: Consider that the deltaPrice sets the price tolerance between Quote and Book. For instance, if the Quote stage displays a price of 100€ and the deltaPrice is 5, a change up to 105€ will still secure a confirmed booking.


### Why do I receive a status "ON_REQUEST" and holder name "test" in my test reservations?💡

In the test environment, it is common for some Sellers to consistently return an ON_REQUEST status. Furthermore, as a standard practice in the test environment, we automatically replace the holder and passenger names with "test".
### Will the currency in Book be the same as the currency in Quote?
The currency used for the transaction will remain the same throughout the entire Booking Flow, including cancellation policies.

### Do I have to provide real names and ages for all the passengers?
No, you are not required to provide real ages and names for all passengers. You can use default values for each name and age group if the actual information is not available (e.g., 30 for an adult or 12 for a child). The only information that should be real and accurate is the holder's details.

:::info
**Infants and Children:** If you do collect ages for infants and children, this information can be utilized to apply any relevant rates or conditions, such as complimentary stays for babies or children, which some channel managers might not be able to load directly.

**Booking Holder as a Passenger:** If the holder of the booking is also a passenger, their details should be included in the list of passengers (ResGuests/Guests) to ensure they are accounted for in room occupancy.
:::

### How can I add remarks to a Book request?
Remarks are comments from the customer for the Seller to take into account. They can be included in the Book request (details can be found in our [Hotel-X Schema](https://docs.travelgate.com/playground/)) provided that the Supplier allows for remarks in their reservations - you can check their [Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query) for further information.

### How do I define the total number of rooms in my Book request?
To define the number of rooms in your reservation, you need to utilize the occupancyRefId previously returned in Search response.
For instance, for a room of two adults:
```
"rooms": [
            {
                "occupancyRefId": 1,
                "paxes": [
                    {
                        "name": "TestName",
                        "surname": "Surname",
                        "title": "Title",
                        "age": 30
                    },
                    {
                        "name": "TestName",
                        "surname": "Surname",
                        "title": "Title",
                        "age": 30
                    }
                ]
            }
        ]
    

```

### What payment details should I add to my Book request?
The payment type and details to be added in your Book request depend on the payment type returned for the option to be booked - note that payment types depend on the commercial agreement established by a Buyer with their Sellers.

### How can I add the payment details to my Book request?
You will be able to find an example of HotelBookInput both for a "paymentType": MERCHANT (no credit card details needed) and for a "paymentType": DIRECT, CARD_BOOKING or CARD_CHECK_IN (credit card details required) in the following links to our Documentation.
- [**No Credit Card Details** - "paymentType": MERCHANT](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book#1-input)
- [**Credit card details required** - "paymentType": DIRECT, CARD_BOOKING or CARD_CHECK_IN](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book#payment-card)

 :::tip
 Don't forget to check our [article](/kb/faqs/faqs-price/payment-types-at-tgx) on Payment Types at TravelgateX!🚀
 :::