---
sidebar_position: 3
---

# Hotel-X Booking Flow Certification

### Find out what you need to do to get your Booking Flow step certified.

To ensure a successful collaboration, it is crucial that our Partners have a full understanding of our API, can effectively utilize it, and transmit accurate information. That's why we require all Partners connecting to our Platform, whether they are buying or selling in our Marketplace, to undergo a certification process.

### When to apply?💡
You should apply once you've finished the implementation of the Booking Flow methods.

### What we will be checking?🔎
In the Hotel-X Booking Flow certification, we will be checking the following points: 
- Usage of general data structure of our API
- Usage of the correct Booking Flow (Search, Quote, Book) and Management (Booking Query, Cancel).
- The arrival and departure dates.
- The correct handling of the prices (net price, gross price, commission, etc.).
- Possible cancellation policies applied to that booking (if you implement it).
- The information of the room selected (id, code, description, etc.).
- The board (meal plan) selected.
- Provide Seller's remarks on the entire booking flow.
- Enabled GZIP compression header.
- Understanding of the different payment types supported through Hotel-X.

### What information do you need to provide for the certification?

In order to proceed with the certification we will need:

- A cURL request and response of each of the Booking Flow methods and for all the cases detailed below:

    ![hotelx_booking_flow_certification_1](https://storage.travelgate.com/kbase/hotelx_booking_flow_certification_1.jpg)


- The resulting Hotel-X response interpretation screenshots of your system so we can ensure you are showing the information correctly. 

### What access code should I use throughout my development and certification?☑️

For Hotel-X implementation and testing purposes, we recommend using the following accesses (already activated in your account):

- TravelgateX Test: Access 2 with context HOTELTEST
- Smyrooms Test: Access 5647 with context LOGITEST

You can also activate any Seller you have an agreement with, even their production environment. However, please note that you should not make live bookings during the Hotel-X implementation process until your development has been certified by TravelgateX.

>**NOTE**  
> We recommend using access "2" or "5647" for your certification process as they will return all the information you need to complete your cases. 

### Additional notes and recommendations✔️
- Audit transactions in Search: Make sure you configure both your Query and Query variables according to this information:
    ```
    query ($criteriaSearch: HotelCriteriaSearchInput, $settings: HotelSettingsInput, $filterSearch: HotelXFilterSearchInput) {
      hotelX {
        search(criteria: $criteriaSearch, settings: $settings, filterSearch: $filterSearch) {
          auditData {
            transactions {
              request
              response
            }
          }
    ...
    ```

    ```
    "auditTransactions": xxxx,
    ```

- Make sure you do not modify paxes ages throughout the Booking Flow.
- More information in our [Documentation](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/methods/bookingflow/) and [Hotel-X API Schema](https://docs.travelgate.com/playground/).

### How to apply for the Hotel-X Booking Flow certification 
After completing all the cases, you must submit a ticket through the Booking Flow step certification in our Connectivity setup panel.
![onboarding_4](https://storage.travelgate.com/kbase/onboarding_4.jpg)

:::warning important
To ensure seamless billing, **it's important that you handle all cancellations via our API**.  
Should you face any issues, please don't hesitate to get in touch with our [Customer Care team](https://app.travelgatex.com/tickets) for assistance. Additionally, please make sure to cancel any test bookings with Sellers and to check that such bookings are refundable.
:::