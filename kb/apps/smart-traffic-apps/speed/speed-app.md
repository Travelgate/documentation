---
sidebar_position: 1
---

# Speed: Streamline traffic with our smart cache solution


At TravelgateX, we always strive to adapt our tech solutions to our Partners’ evolving needs, and one such need is to minimize traffic and improve response times. Thanks to our dynamic cache solution, Speed, you can now save up to 80% of total hits to the Seller's system and experience reduced response times.

### Who can benefit from Speed and what problems does it solve?✅
- **Sellers:**
	- Those with systems struggling to handle high traffic volumes or experiencing slow response times.
	- Those looking to offer their product to Buyers more efficiently, thereby increasing sales opportunities.
	- Those aiming to reduce traffic (hits) to mitigate additional infrastructure costs.
- **Buyers:** 
	- Those requiring exceptionally low response times for their business, such as XML, B2B, metasearch Partners, etc.
	- Those in need of faster access to products beyond the limitations of the Seller's system.

### How can I use Speed? ⚡
Once you're logged into [TravelgateX](https://www.travelgatex.com/), navigate to APPs > **Speed**. There, you'll find your Speed Dashboard, displaying the **accesses** currently active on Speed and those that were optimized at some point. 

![speed_1](https://storage.travelgate.com/kbase/speed_1.jpg)


Here's the information available: 

- Connection name and code
- Access name and code
- Last update of the Speed configuration
- Time Reduction: percentage of time response reduction in the last 24h.
- Traffic Reduction: percentage of traffic saved against Seller's system in the last 24h.
- Active: check and change your Speed access status (active/inactive).
- Actions: edit the Speed configuration for that access or check detailed performance data. If you have recently activated Speed, please come back in a few minutes, we are collecting your data.

### How does it work?🖱️
In order to configure Speed for one of your accesses, you should click on the **'Speed an access'** button and complete the 3 steps:

1. **Connection and access:** select the connection name and access you want to activate the cache.

	![speed_2](https://storage.travelgate.com/kbase/speed_2.jpg)


2. **Mode:** Speed can work in two different modes when the information requested by the Buyer is not already stored in our database:
	- **Standard:** If a search result is not stored in Speed, the request is sent to the Seller and then the response is returned to the Buyer - Recommended.
	- **Fast:** If a search result is not stored in Speed, no results will be returned. Internally, the request is sent to Seller to store it for future searches. This mode causes a higher ratio of no availability results.

	![speed_3](https://storage.travelgate.com/kbase/speed_3.jpg)

3. **Cache storage time (TTL):** Stored cache default value is 24 hours. However, Speed allows customization at a booking window level, for example: searches for the next two days, keep them 6 hours in cache. We always recommend to start using Speed with the default 24h and the use of this parameter is totally optional. 
	- **Booking window:** It indicates the days range for the booking window to be applied. You can use the default time ranges specified or customize your own.
	- **Storage time - TTL (Time to Live):** It indicates the amount of time the Seller search results will be stored in Speed for the previous time range selected. You can use the default TTL specified or customize your own. And don't worry about quote errors! If there is any error of this type, all searches stored in cache for that hotel will be automatically deleted to avoid future issues. Your Speed cache will be constantly updated!

	![speed_4](https://storage.travelgate.com/kbase/speed_4.jpg)

Once configured, click on **'Activate Speed'** and that's it! Our cache will start collecting data immediately and you will be able to check the Speed performance really soon.


### How can I check the improvement in my connections? 📊
You can check your performance and improvement in terms of time and search traffic reduction just by clicking on the **"View Detail"** option in your Speed accesses list.

![speed_5](https://storage.travelgate.com/kbase/speed_5.jpg)

Select the date range you want to check and see the number of requests handled by Speed vs. those sent to the Seller. You can also check the time reduction achieved with Speed comparing the average response times from Speed vs. Seller.