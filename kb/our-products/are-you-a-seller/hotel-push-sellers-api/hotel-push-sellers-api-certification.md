---
sidebar_position: 3
---

# Hotel Push Sellers Generic API Certification

Ensuring that our Partners fully understand our API, can make good use of it and that the information transmitted is correct, is essential for a successful collaboration. That's why all the Partners connecting to our Platform through the Hotel Push Sellers API are required to pass a certification process.

### When should I apply for certification?✔️
You should apply once you've finished the Hotel Push Sellers API development.

### How is it the certification structured and what do I need to provide?💡
The certification for the Hotel Push Sellers API is divided into two main blocks. You need to deliver both Certification Files and any additional files requested for each Certification Phase:
1. SetUp and Product Load ([Hotel Push Sellers API Certification file 1](https://f.hubspotusercontent20.net/hubfs/2825176/InventoryX%20Certification%20File%201.odt)).
1. Booking Management ([Hotel Push Sellers API Certification file 2](https://f.hubspotusercontent20.net/hubfs/2825176/InventoryX%20Certification%20File%202.docx)).

### What we will be checking?🔎
The Hotel Push Sellers API Certification aims to test and verify the following information: 

- Usage of general data structure of our API.
- Correct application of the Notif and Retrieve methods.
- Correct product loading.
- The correct handling of the prices and availability.
- The correct application of different distributions.
- Different rates.


## 1. SetUp🏨

The first step consists in performing the set up of the hotels, rooms and rates where all the testings will be conducted.

Depending on the methods implemented on your side, the SetUp can be done in two ways:

1. **XML SetUp:** In case you have implemented the "HotelRatePlanInventoryNotif" method.
1. **Extranet SetUp:** In case you haven't implemented the "HotelRatePlanInventoryNotif" method.

### XML SetUp🚀
Create one test hotel with two rates and one room per rate - fill in the hotel name in the [Inventory Certification file 1](https://f.hubspotusercontent20.net/hubfs/2825176/InventoryX%20Certification%20File%201.odt)).

- **Rates should include the following information:**

	![hotel_push_sellers_api_certification_1](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_1.jpg)

- **Rooms should specify the following details:**

	![hotel_push_sellers_api_certification_2](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_2.jpg)


- **Derived rates should have the following information:**

	![hotel_push_sellers_api_certification_3](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_3.jpg)

In case you perform the set-up through the "HotelRatePlanInventoryNotif" method, we will need you to provide, along the [Inventory Certification file 1](https://f.hubspotusercontent20.net/hubfs/2825176/InventoryX%20Certification%20File%201.odt), the complete request/response logs under the following names: 

- inventory_rq.xml
- inventory_rs.xml

### Extranet SetUp☑️
In order to create the SetUp for your hotels, simply follow the steps below:

1. Run your tests with TravelgateX "**Hotel Test Pruebas Travelgate (Andorra la Vella)" (hotel code 23).**
1. First of all, **add the aforementioned hotel to your Inventory SetUp** section and add its rates and rooms:

	![hotel_push_sellers_api_certification_4](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_4.jpg)

- **Rates should include the following information:**
	![hotel_push_sellers_api_certification_5](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_5.jpg)
	For instance:

	![hotel_push_sellers_api_certification_6](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_6.jpg)
	![hotel_push_sellers_api_certification_7](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_7.jpg)

- **Rooms should specify the following details:**

	![hotel_push_sellers_api_certification_8](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_8.jpg)
	For instance:

	![hotel_push_sellers_api_certification_9](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_9.jpg)
	![hotel_push_sellers_api_certification_10](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_10.jpg)


- **Derived rates should have the following information:**
	![hotel_push_sellers_api_certification_11](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_11.jpg)
 
Once the SetUp is done, we are ready to start with the Product Load and Booking Management phase.

## 2. Product Load📦
The Product Load phase is divided into two parts:

1. **Notif methods:** HotelRatePlanNotif and HotelAvailNotif.
1. **Retrieve methods:** HotelRatePlanRetrieve and HotelAvailRetrieve.

Once all the scenarios included in the Certification File have been performed, we will need you to check our Extranet (Calendar) in order to make sure that the availability and amounts pushed are correct and the ones expected on your side.
![hotel_push_sellers_api_certification_12](https://storage.travelgate.com/kbase/hotel_push_sellers_api_certification_12.jpg)

:::note
Once you have completed the SetUp and loaded your product, you just need to **apply for the Hotel Push Sellers API certification** option via our website and attach the Hotel Push Sellers API certification file 1.
:::

## 3. Booking Management📖
What is the goal of the Booking Management phase?☑️
The main objective of this phase is to confirm that the bookings and cancellations made through TravelgateX are correct.

It is divided into two parts:

1. **Confirmation**
1. **Cancellation**

### When can I apply to the Booking Management phase?💡
You can apply to the Booking Management phase once the SetUp and the product upload phases have been completed - you will find all the Certification cases required in the [Hotel Push Sellers API Certification file 2](https://f.hubspotusercontent20.net/hubfs/2825176/InventoryX%20Certification%20File%202.docx).

Once you have completed the second file, you can send it to us through the Onboarding screen in our website in order to certify that all reservations have been booked and cancelled successfully.

What comes next after getting certified?🌟
Congratulations on your certification! Let's explore the next steps you should take:
1. Request an activation for a new Buyer.
1. Map your inventory against their own codes.
1. Perform some final testing before going live.
1. Once you've confirmed that everything is working properly, then you are ready to go live!


:::info
Don't forget to check our [Inventory Documentation](/docs/apps/inventory/extranet/overview) and [YouTube video tutorials](/kb/our-products/are-you-a-buyer/inventory/how-tos/how-to-set-up-and-load-product-inventory) for further information on our Inventory Extranet!
:::