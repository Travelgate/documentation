---
sidebar_position: 1
---

# Hotel-X Development - Quote Query

## All about Hotel-X Quote Query
Quote is an operation used to assess and valuate the rate before the actual booking. It returns an updated information of the option previously selected from Search response: hotel rate with up-to-date price, along with additional information regarding the rate such as rate breakdown and cancellation policies, if available.

### What information can I expect in Quote response?✔️
The information returned in Quote response may vary between Sellers. For instance, some Sellers may return cancel policies only in Search whereas others only in Quote, or in both Search and Quote.

Please check our [Hotel-X API Schema](https://api.travelgatex.com/playground) in order to add to your Query the fields expected on your side (such as price, cancel policies, rooms, status, etc.) and check the [Metadata](https://knowledge.travelgate.com/hotel-x-development-metadata) of your Sellers for the specifications established on their side for this Method.



### Quote Query example📑
```
{"query":"# Example Quote - quote token  nquery ($criteriaQuote: HotelCriteriaQuoteInput!, $settings: HotelSettingsInput) {  n hotelX {  n quote(criteria: $criteriaQuote, settings: $settings) {  n auditData{  n  t  t  t  ttransactions{  n  t  t  t  t  trequest  n  t  t  t  t  tresponse  n  t  t  t  t}  n  t  t  t  ttimeStamp  n  t  t  t}  n  t  t  toptionQuote {  n optionRefId  n status  n price {  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n markups {  n channel  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n }  n }  n surcharges {  n chargeType  n price {  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n markups {  n channel  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n }  n }  n description  n }  n cancelPolicy {  n refundable  n cancelPenalties {  n hoursBefore  n penaltyType  n currency  n value  n }  n }  n cardTypes  n remarks  n }  n errors {  n code  n type  n description  n }  n warnings {  n code  n type  n description  n }  n }  n }  n}  n","variables":{"criteriaQuote":{"optionRefId":""},"settings":{"client":"","context":"","testMode":true,"auditTransactions":true}}}
```
### Do options get blocked in Hotel-X Quote Query?⚠️
Some Sellers may block the options when performing a Quote Query so we strongly recommend to contact them directly regarding this topic in order to prevent future issues.

### Are there any limitations on the number of Hotel-X Quote requests allowed per minute?🔢
Not from TravelgateX side - we don't have any limitations on the RPM in any of our methods. However, some Sellers may have some limitations so we suggest you contact directly with them in order to discuss this information.
### Do I have to perform a Quote Query in order to Book an option?
Yes, in order to confirm a reservation, it is necessary to complete all three Booking Flow methods: Search, Quote, and Book.

### Is there any possibility to obtain RoomCodes in Quote?🏨
If the Seller provides this information, you can obtain the room code by including the rooms node in the HotelOptionQuote node.

![quote_query_1](https://storage.travelgate.com/kbase/quote_query_1.jpg)


>Learn more about our Hotel-X Quote Query on our [Documentation](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/methods/bookingflow/quote/) and [Playground](https://api.travelgatex.com/playground)🚀


 