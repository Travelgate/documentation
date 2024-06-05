---
sidebar_position: 1
---

# Hotel-X Development - Quote Query

## All about Hotel-X Quote Query
Quote is an operation used to assess and valuate the rate before the actual booking. It returns an updated information of the option previously selected from Search response: hotel rate with up-to-date price, along with additional information regarding the rate such as rate breakdown and cancellation policies, if available.

### What information can I expect in Quote response?✔️
The information returned in Quote response may vary between Sellers. For instance, some Sellers may return cancel policies only in Search whereas others only in Quote, or in both Search and Quote.

Please check our [Hotel-X API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart) in order to add to your Query the fields expected on your side (such as price, cancel policies, rooms, status, etc.) and check the [Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query) of your Sellers for the specifications established on their side for this Method.


:::tip
Don't forget to check our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote#requests-examples) for a full example of a Hotel-X Quote Query!🚀
:::


### Do options get blocked in Hotel-X Quote Query?⚠️
Some Sellers may block the options when performing a Quote Query so we strongly recommend to contact them directly regarding this topic in order to prevent future issues.

### Are there any limitations on the number of Hotel-X Quote requests allowed per minute?🔢
Not from TravelgateX side - we don't have any limitations on the RPM in any of our methods. However, some Sellers may have some limitations so we suggest you contact directly with them in order to discuss this information.
### Do I have to perform a Quote Query in order to Book an option?
Yes, in order to confirm a reservation, it is necessary to complete all three Booking Flow methods: Search, Quote, and Book.

### In a reservation for 2 rooms, if two rooms have the same cancellation policy, should the cancellation penalties be summed up in the node for the option?  
Yes, an option is a combination of rooms. Cancelling the option implies the cancellation of all rooms, and therefore, the charges for all the rooms are incurred.

### Is there any possibility to obtain RoomCodes in Quote?
If the Seller provides this information, you can obtain the room code by including the rooms node in the HotelOptionQuote node.

![quote_1](https://storage.travelgate.com/kbase/quote_1.jpg)


:::tip
Learn more about our Hotel-X Quote Query on our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote) and [Playground](/playground)🚀
:::

 