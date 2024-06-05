---
sidebar_position: 1
---

# Hotel-X Development - Cancel Mutation

You can use Hotel-X Cancel Mutation to easily cancel a booking made through TravelgateX.

### How can I cancel a booking?💡
You have two options to cancel a reservation:
1. Using its booking reference.
1. Using its bookingID.

:::tip
Don't forget to check our article on [Book Mutation](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/hotel-x-development-book-mutation) for further details on the information returned in Book response🚀
:::

### What information can I expect in Cancel response?✔️
The information returned in Cancel response may vary between Sellers, so please check our [Hotel-X Playground Documentation](/playground) in order to add to your Cancel the fields expected on your side. Additionally, you may check the Sellers' [Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query) for further details on the specifications established on their side for this Method.

![cancel_mutation_1](https://storage.travelgate.com/kbase/cancel_mutation_1.jpg)


**Some of the fields returned once a booking is cancelled are:**
1. Booking status: more information on status in cancel response here.
1. Reference
1. Price
1. Holder

:::tip
Remember to check the Sellers' [Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query) for further details on their specifications and information returned on their side in Cancel response.🔎
:::

### How are cancellation costs calculated and displayed?🔢
Depending on the specifications provided by a Seller, cancellation costs can be calculated using three different penalty types. It is important to keep in mind that a booking may have more than one penalty type associated with it.

- **NIGHTS:** It indicates the number of nights to be penalized.
- **PERCENT:** It indicates the percentage to pay based on the option price (possible values between 0 and 100).
- **IMPORT:** It Indicates the exact amount payable.

:::warning important
To ensure seamless billing, **it's important that you handle all cancellations via our API**.  
Should you face any issues, please don't hesitate to get in touch with our [Customer Care team](https://app.travelgatex.com/tickets) for assistance. Additionally, please make sure to cancel any test bookings with Sellers and to check that such bookings are refundable.
:::

### Can I apply any filters to my Hotel-X Cancel Mutation?💡
Unfortunately, there are no filters in the Cancel Mutation.

### Is it possible to retrieve the cancellation costs without canceling the option?🔎
If the Seller provides cancel policies information, you can access it either through Hotel-X Quote Query or Hotel-X Booking Query.

### In a reservation for 2 rooms, if two rooms have the same cancellation policy, should the cancellation penalties be summed up in the node for the option?  
Yes, an option is a combination of rooms. Cancelling the option implies the cancellation of all rooms, and therefore, the charges for all the rooms are incurred.
 
:::tip
Don't forget to check our [Hotel-X API Playground](/playground) and [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel) for further information on Cancel Mutation. Interested in cancel penalties information as well? We've got you covered with some awesome [articles](/kb/faqs/faqs-cancel-policies/hotel-buyers-api-cancel-policies) that dive deep into the topic!🚀
:::
