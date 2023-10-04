---
sidebar_position: 1
---

# Hotel-X Development - Book Mutation

## All about Hotel-X Book Mutation

Book operation requests a booking confirmation for the specified optionRefId returned in Quote. It returns a brief summary of the option plus the status of the reservation.

### What information can I expect in Book response?✔️
The information returned in Book response may vary between Sellers, so please check our [Hotel-X API Schema](https://api.travelgatex.com/playground) in order to add to your Book the fields expected on your side. Additionally, you may check the [Metadata](https://knowledge.travelgate.com/hotel-x-development-metadata) of your Sellers for further details on the specifications established on their side for this Method.

<ins>**Some of the fields to be declared/added to Book mutation request are:**</ins>

- Status - make sure you add this field in order to receive the reservation status in the response.
- Price
- Client reference: the booking locator in your system (alphanumerical value).
- Supplier reference: the booking locator in the Seller's system.
- BookingID
- Holder
- Hotel

### What is the DeltaPrice? Why should I use it?💡
The [Delta Price](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/methods/bookingflow/book/) indicates the price variation permitted by the Buyer (amount or percentage), so that an error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price returned in Quote).

This field is implemented if it’s native to the Seller or if another Search/Quote request needs to be done in Book - please note DeltaPrice should be implemented by a Seller in order to be available to a Buyer.

>**Interested in adding DeltaPrice in your requests? Feel free to access our [Hotel-X API Schema](https://api.travelgatex.com/) and [Documentation](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/methods/bookingflow/book/) for more information!🚀**

 

<ins>**What does DeltaPrice "applyBoth" mean?**</ins>

- applyBoth: false: It indicates that one of the conditions (amount or percentage) has to meet the DeltaPrice criteria before reservation.
- applyBoth: true: It indicates that the new price cannot exceed the amount and percentage indicated by the Buyer.  


<ins>**Example:**</ins>
```
hotelX {

book(

input: {

optionRefId: "11!11?1$230928?230929?1?14?0?ES?ES?es?EUR?0?2?1?14?1?0?06060824?BAR[%@BAR?100.0$0$false$EUR$$0$?1|30#30|1|2023-09-28|1|4132467|4132468|14|11|0?2269!2269?30$30??Double Standard?1??After$100.0!Before$100.0!ExpireDate$29/09/2023!mercado$ES!tgx_sess$804e6012-4b9f-47a3-83e2-75a126b8b812?OK?Sith?0?"

clientReference: "16729148477581"

deltaPrice: { amount: 10, percent: 10, applyBoth: true }

holder: { name: "Name1", surname: "Surname1" }

remarks: "In this valuation, the option price has changed to check the correct treatment of the price changes between the different & calls."

rooms: {

occupancyRefId: 1

paxes: [

{ name: "Name1", surname: "Surname1", age: 30 }

{ name: "Name2", surname: "Surname2", age: 30 }

]
 ``` 

### Why do I receive a status "ON_REQUEST" and a holder name "test" in my reservations the test environment? 💡
In the test environment, it is common for some Sellers to consistently return an ON_REQUEST status. Furthermore, as a standard practice in the test environment, we automatically replace the holder and passenger names with "test".

### Will the currency in Book be the same as the currency in Quote?💴
The currency used for the transaction will remain the same throughout the entire Booking Flow, including cancellation policies.

### Do I have to provide real names and ages for all the passengers?👦👧
No, you are not required to provide real ages and names for all passengers. You can use default values for each age group and name. The only information that should be real is the holder's information.

### How do I define the total number of rooms in my Book request?🏨
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
                        "age": 30
                    },
                    {
                        "name": "TestName",
                        "surname": "Surname",
                        "age": 30
                    }
                ]
            }
        ]
    }

```
### What payment details should I add to my Book request?☑️
The payment type and details to be added in your Book request depend on the payment type returned for the option to be booked - note that payment types depend on the commercial agreement established by a Buyer with their Sellers.

### How can I add the payment details to my Book request?📑
1. No Credit Card Details required:

    When the option to be booked was flagged as "paymentType": MERCHANT, no credit card details are required. E.g.:
    ```
    {"query":"mutation ($bookInput: HotelBookInput!, $settings: HotelSettingsInput) {\n hotelX {\n book(input: $bookInput, settings: $settings) {\n booking {\n\t\t\t\thotel {\n\t\t\t\t\thotelCode\n\t\t\t\t}\n price {\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n markups {\n channel\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n }\n }\n status\n remarks\n reference {\n client\n supplier\n }\n holder {\n name\n surname\n }\n hotel {\n creationDate\n checkIn\n checkOut\n hotelCode\n hotelName\n boardCode\n occupancies {\n id\n paxes {\n age\n }\n }\n rooms {\n code\n description\n occupancyRefId\n price {\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n markups {\n channel\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n }\n }\n }\n }\n }\n errors {\n code\n type\n description\n }\n warnings {\n code\n type\n description\n }\n }\n }\n}\n","variables":{"bookInput":{"optionRefId":"","clientReference":"","deltaPrice":{"amount":0,"percent":0,"applyBoth":true},"holder":{"name":"Test TGX","surname":"Test TGX"},"rooms":[{"occupancyRefId":1,"paxes":[{"name":"Test1","surname":"Test1","age":36},{"name":"Test2","surname":"Test2","age":36}]}]},"settings":{"client":"","testMode":true,"context":"","auditTransactions":true}}}
    ```
2. Credit Card Details required:

    When the option to be booked was flagged with any of the following payment types (DIRECT, CARD_BOOKING, CARD_CHECK_IN).
    ```
     {"query":"mutation ($bookInput: HotelBookInput!, $settings: HotelSettingsInput) {\n hotelX {\n book(input: $bookInput, settings: $settings) {\n\t\t\tauditData {\n\t\t\t\ttransactions {\n\t\t\t\t\trequest\n\t\t\t\t\tresponse\n\t\t\t\t}\n\t\t\t\ttimeStamp\n\t\t\t}\n booking {\n price {\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n markups {\n channel\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n }\n }\n status\n remarks\n reference {\n client\n supplier\n }\n holder {\n name\n surname\n }\n hotel {\n creationDate\n checkIn\n checkOut\n hotelCode\n hotelName\n boardCode\n occupancies {\n id\n paxes {\n age\n }\n }\n rooms {\n code\n description\n occupancyRefId\n price {\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n markups {\n channel\n currency\n binding\n net\n gross\n exchange {\n currency\n rate\n }\n }\n }\n }\n }\n }\n errors {\n code\n type\n description\n }\n warnings {\n code\n type\n description\n }\n }\n }\n}\n","variables":{"bookInput":{"optionRefId":"","clientReference":"","remarks":"","paymentCard":{"type":"","holder":{"name":"Test1","surname":"Test1"},"number":"","CVC":"","expire":{"month":3,"year":25}},"deltaPrice":{"amount":10,"percent":10,"applyBoth":true},"holder":{"name":"Test KL","surname":"Test KL"},"rooms":[{"occupancyRefId":1,"paxes":[{"name":"Test1","surname":"Test1","age":30},{"name":"Test1","surname":"Test1","age":30}]}]},"settings":{"client":"","testMode":true,"context":"","auditTransactions":true}}}
    ```

 Don't forget to check our [article](https://knowledge.travelgate.com/payment-types-travelgatex) on Payment Types at TravelgateX!🚀