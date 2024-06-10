---
sidebar_position: 2
---

# Hotel Push Sellers API Development Roadmap and Timings

Starting a new development is always a tricky task due to the lack of information surrounding the project and the difficulty to estimate the resources and time required. That lack of information leads to an under or over estimation of the resources needed and consequently to the inefficiency and ineffectiveness of the project planning, as well as a waste of time and resources.  
At TravelgateX we want to ease that process by providing all the necessary information, roadmap and timings to effectively calculate the amount of resources and timing that will require to develop the Hotel Push Sellers API.

![hotel_push_sellers_api_development_roadmap_timings_1](https://storage.travelgate.com/kbase/hotel_push_sellers_api_development_roadmap_timings_1.jpg)


**The Hotel Push Sellers API onboarding process is composed of 4 milestones:**
1. Account configuration
2. Hotel Push Sellers API development
3. Hotel Push Sellers API certification
4. Buyer activation

### Account configuration
Learn how to edit and customize your Company's Profile [here](/kb/account-settings/company-profile/how-to-edit-and-customize-profile.md).

### Hotel Push Sellers API development
We've divided the Hotel Push Sellers API development into 3 main phases. Being the first one our set-up methods, second the product upload and third the booking management methods. Why this way? Because after accompanying our Partners through the development process, we've seen that when starting with the setup methods, they build a solid base to hold the product upload and booking management information and logic.

**Before starting:**

We've created a test client (you will find it on our Hotel Push Sellers API extranet as "ClientTest") and linked to your account, so you can test the methods as you implement them.

Note that the RequestorID will be always the same one, as it is your Hotel Push Sellers API code. CompanyNameCode, on the other hand will be changing depending on the buyer connected to your account. During the development and for testing purposes, you can use the following CompanyNameCode: "CTEST".

We've also added a hotel, so you can test the implemented methods with it:

- Name: Hotel Test 3
- Code: 23

1. **The Set-Up Phase**  
	This is the phase where the methods needed to retrieve or notify the set-up are implemented. 

	On average, the Sellers developing Hotel Push Sellers API spend approximately **9 days** in this phase.

	This is the phase where the Sellers needs to implement HotelRatePlanInventoryRetrieve messages to retrieve the hotelier inventory and map it into their system. Optionally, Sellers can set up the product using HotelRatePlanInventoryNotif messages.
	:::info
	Further information on our Hotel Push Sellers [API Documentation](/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/inventory/inventory-push).
	:::

2. **The Product Upload Phase**  
	Here, providers need to implement HotelRatePlanNotif and HotelAvailNotif messages in order to synchronize hotelier rates and availability. Optionally, Sellers can read all the properties of their product loaded on our system using HotelAvailRetrieve and HotelRatePlanRetrieve messages.

	:::info
	Further information on our Hotel Push Sellers [API Documentation](/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/rates/rates-push).
	:::

	The product upload phase takes, on average, **14 days** tour our Sellers.

3. **The Booking Management Phase**  
	In this final phase providers can receive an instant API notification from TGX through HotelResNotif message (for bookings) and CancelNotif message (for cancellations). If the Seller doesn'st allow Push notifications to their system, it is possible to implement HotelResRetrieve messages in order to obtain a list of bookings from the Hotel Push Sellers API system.

	:::info
	Further information on our Hotel Push Sellers [API Documentation](/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/booking-management/overview). 
	:::

Our booking management methods takes, on average, **7 days** to our Sellers.

 

Adding up the three phases, it takes **a total of 30 days** to develop our Hotel Push Sellers API. Obviously, the total time will depend on the amount of resources allocated to the project and the methods implemented.

### Hotel Push Sellers API certification
In order to certify that Hotel Push Sellers API has been developed and all the implemented methods work correctly we will need you to provide a specific set of information - more information [here](/kb/our-products/are-you-a-seller/hotel-push-sellers-api/hotel-push-sellers-api-certification.md).
On average, Sellers spend **15 days** approximately to certify Hotel Push Sellers API.

### Buyer activation
Thanks to our automatic activation process, connecting a new Buyer takes on average **2 days**.

Live
Here the Buyer should perform the mapping work and the testings prior going live, so it has a noticeable impact in the total onboarding time (more information [here](/kb/our-products/are-you-a-seller/hotel-push-sellers-api/hotel-push-sellers-api-already-certified)). It takes, on average, **7 days**

Adding up all the milestones timings, it makes, on average, a total of **54 days** to fully develop Hotel Push Sellers API and go live with the first Buyer.   