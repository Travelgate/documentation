---
sidebar_position: 5
---

# FAQs

## Test Environment

### Why do I receive a status "ON_REQUEST" and holder name "test" in my test reservations?

In the test environment, some Sellers may consistently return an "ON_REQUEST" status. Additionally, as a standard practice, the holder and passenger names are automatically replaced with "test" during test reservations.

## Booking Details

### Do I have to provide real names and ages for all the passengers?

No, you are not required to provide real names and ages for all passengers. Default values can be used for each age group if actual information is unavailable (e.g., 30 for an adult or 12 for a child). The holder's details, however, should always be accurate.

:::info
**Infants and Children:** If ages are collected for infants and children, this data can be used to apply special rates or conditions, such as complimentary stays for babies, which some channel managers might not be able to process directly.

**Booking Holder as a Passenger:** If the booking holder is also a passenger, their details should be included in the list of passengers (ResGuests/Guests) to ensure they are accounted for in room occupancy.
:::

### Is there a maximum number of characters allowed for a guest's name and surname in a reservation?

Travelgate does not impose a character limit on guest names and surnames; however, some Sellers may have their own restrictions. It is recommended to contact the Seller directly for specific limitations.

### How can I add remarks to a Book request?

Remarks, which are customer comments for the Seller, can be included in the Book request if the Supplier supports them. For more information, refer to our [Hotel-X Schema](/playground/) and check the Seller's [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata).

### Can I change the guest details for an existing booking?

Yes, guest details can be modified, provided the Supplier allows it. You can check the Supplier's [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata) for supported changes. The number of rooms and guest distribution must match the original request, and modifications can be processed through Travelgate's [Amendments Operations](/kb/connectivity-products/for-buyers/hotel-x/booking-management/amendments/amendments-method).

## Payment Details

### What payment details should I add to my Book request?

The payment details required in your Book request depend on the payment type specified for the selected option. [Payment types](/kb/faqs/faqs-price/travelgate-payment-types) are determined by the commercial agreements established between Buyers and Sellers.

### Should I fill in the payment card input in the Book request when using the VCC plugin?

No, when using the Virtual Credit Card (VCC) plugin, payment card details should **not** be included in the [PaymentCardInput](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book/#1-input) of your Book request. However, if paying with a regular credit card, it is mandatory to provide the payment type and credit card details unless the VCC plugin is enabled to generate virtual credit cards. Learn more about VCC payments [here](/kb/faqs/faqs-price/vcc-payments).

## Currency and Transactions

### Will the currency in Book be the same as the currency in Quote?

Yes, the currency used during the transaction remains consistent throughout the entire booking flow, including cancellation policies.

