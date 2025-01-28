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
- Client reference: the booking locator in your system (alphanumerical value). It should be unique to avoid errors on the Supplier's side.
- Supplier reference: the booking locator in the Seller's system.
- BookingID
- Holder
- Hotel


### What is the DeltaPrice? Why should I use it?💡

The [Delta Price](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book) indicates the price variation permitted by the Buyer (amount or percentage), so that an error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price returned in Quote).

This field is implemented if it’s native to the Seller or if another Search/Quote request needs to be done in Book.

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

### Is there a maximum number of characters allowed for a guest's name and surname in a reservation?
Travelgate does not impose a character limit on guest names and surnames in reservations. However, some Sellers may have their own restrictions. For more information, please contact the Seller directly.

### How can I add remarks to a Book request?
Remarks are comments from the customer for the Seller to take into account. They can be included in the Book request (details can be found in our [Hotel-X Schema](https://docs.travelgate.com/playground/)) provided that the Supplier allows for remarks in their reservations - you can check their [Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query) for further information.

### How do I define the total number of rooms and paxes in my Book request?
To define the number of rooms in your Book request, use the same "occupancies" data provided in your Search request. For instance, if your Search was for a room with two adults, the room information in your Book request should reflect that same Search data.

To define passenger details, simply add the "paxes" array in the "rooms" object of your "bookInput," matching the data from your Search request. Each passenger is represented as an object with "name," "surname,", "age" fields ("title" is optional). Remember, the number of rooms and pax distribution specified in your Book request should always match what was requested in the Search and it's not possible to extend the "paxes" array in the "rooms" object of your "bookInput".

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

### Can I change the guest details for an existing booking?
Yes, you can modify the guest details in a reservation, provided that the Supplier's [Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query) allows these changes. While the number of rooms and guest distribution specified in your Book request must match what was requested in the Search, modifications are still achievable through Travelgate's [Amendments operations](/kb/our-products/are-you-a-buyer/our-methods/booking-management/amendments/what-is-hotel-x-amendments-query).


### What payment details should I add to my Book request?
The payment type and details to be added in your Book request depend on the payment type returned for the option to be booked - note that [payment types](/kb/faqs/faqs-price/payment-types-at-tgx) depend on the commercial agreement established by a Buyer with their Sellers.

### Should I fill in the payment card input in the Book request when using the VCC plugin?
No, when using the Virtual Credit Card (VCC) plugin, you should not provide payment card information in the [PaymentCardInput](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book/#1-input) of your Book request. If the payment is made by a regular credit card, it is mandatory to specify the payment type and provide the credit card details, unless you are using our VCC plugin to generate virtual credit cards. Learn more about VCC payments [here](/kb/our-products/are-you-a-buyer/getting-started-as-a-new-buyer/how-to-activate-vcc-payments/).

 :::warning important
- Please note that Travelgate cannot make reservations or cancellations on behalf of our Partners; these actions should be carried out directly by the Partner.
- To ensure seamless billing, **it's important that you handle all cancellations via our API**.  
Should you face any issues, please don't hesitate to get in touch with our [Customer Support team](https://app.travelgate.com/support) for assistance. Additionally, please make sure to cancel any test bookings with Sellers and to check that such bookings are refundable.
:::
