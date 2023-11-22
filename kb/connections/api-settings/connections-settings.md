---
sidebar_position: 1
---

# API Settings


### What can I expect to find in API Settings?🔎
In API Settings, you can easily view and manage your account settings. Just follow the steps below:
1. Log onto TravelgateX
1. Click on Connections > API Settings
1. You will be able to find the following information:
	* Browsing as Buyer - You will find 2 tabs:
		- **API Settings**: it displays your [API Key](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials) as Buyer, Business Settings and Timeout Settings. Both Business and Timeout settings displayed are the ones configured by default for your account, regardless of the folder, client and access - please note Settings set at request level override default settings.
			![api-settings-new-updated](https://storage.travelgate.com/kbase/api-settings-new-updated.jpg)

		- **Clients**: here you are able to check the Hotel-X clients already created for your account, as well as generate new ones:
			![api-settings-new-updated-2](https://storage.travelgate.com/kbase/api-settings-new-updated-2.jpg)
			
			* Adding new clients is as easy as clicking on "Create new client":	
			![api-settings-new-updated-3](https://storage.travelgate.com/kbase/api-settings-new-updated-3.jpg)		 
			When creating a new client, you'll be required to provide a client name. By default, all new clients will be granted full access. This means that if your Search query doesn't specify any access, and you only use the client, all accesses will be applied:
			![api-settings-new-updated-4](https://storage.travelgate.com/kbase/api-settings-new-updated-4.jpg)
			If you wish to assign specific accesses to a particular client, you can make adjustments by selecting the "Edit default accesses" option:
			![api-settings-new-updated-5](https://storage.travelgate.com/kbase/api-settings-new-updated-5.jpg)
			Simply uncheck the checkbox to grant the client full access by default, and then use the access boxes to choose only specific ones:
			![api-settings-new-updated-6](https://storage.travelgate.com/kbase/api-settings-new-updated-6.jpg)
	* Browsing as Seller - You will find 1 tab:
		- **API Settings**: it displays your [API Key](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials) as Seller.


:::info
1. If you are using our Buyer Legacy API, your clients (or "hub users") have a password associated. You can check this password with the "Get password" option.
![api-settings-new-updated-7](https://storage.travelgate.com/kbase/api-settings-new-updated-7.jpg)
1. Please be aware that you will have **separate API Keys for your roles as a Seller and as a Buyer** in our Platform. For example, if you are currently browsing as a Buyer and require access to your Seller API Key, you can easily switch your Partner profile type to Seller.
:::
