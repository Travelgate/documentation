---
sidebar_position: 2
---

# API Settings

Welcome to the API Settings section! Here, you'll find everything you need to manage your Hotel-X Pull Buyers API connection with ease. Let's walk through what you can expect to find and how to navigate through it.

### What's inside API Settings? 🔍

In API Settings, you have the power to view and tweak your Hotel-X Pull Buyers API account settings effortlessly. Here's a simple guide to get you started:

1. Begin by logging onto [TravelgateX](https://www.travelgatex.com/).

2. Navigate to the "Connections" > "API Settings" section.

3. Explore the following areas:

    - **Organization Settings**: Here, you set the baseline. It's where you define your default settings as a Buyer at the organization level. So, if you don't specify these settings in your queries or mutations from the Hotel-X Pull Buyers API, these defaults values will be used in automatically. Check our documentation to know more about [Hotel-X Settings](/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/settings).

	![apisettings_1](https://storage.travelgate.com/kbase/apisettings_1.png)

    - **Clients** tab: Here you can manage your Hotel-X clients, both existing ones and create new ones. Clients are like tags or labels that help you organize your traffic efficiently.

    	![apisettings_2](https://storage.travelgate.com/kbase/apisettings_2.png)

		* Adding a new client is as simple as hitting the **"Create new client"** button:

			![apisettings_3](https://storage.travelgate.com/kbase/apisettings_3.png)

			When creating a new client, just provide a name. By default, new clients inherit all connection accesses. So, if you don't specify any access in your Search query and solely rely on the client, all accesses will be applied:

			![apisettings_4](https://storage.travelgate.com/kbase/apisettings_4.png)

		* Want to fine-tune accesses for a specific client? No problem! Simply select the "Edit default accesses" option:

			![apisettings_5](https://storage.travelgate.com/kbase/apisettings_5.png)

			Uncheck the box to grant full access by default, then use the access boxes to specify particular ones:

			![apisettings_6](https://storage.travelgate.com/kbase/apisettings_6.png)

		
		* You can also specify default settings for a specific client. By selecting the "Edit default settings" option, you can tailor settings to suit individual clients. 
		
			![apisettings_7](https://storage.travelgate.com/kbase/apisettings_7.png)

			It's important to note that if a client has its own specific default settings, they will take precedence over the settings set at the organization level.

			![apisettings_8](https://storage.travelgate.com/kbase/apisettings_8.png)



:::info
Using our Legacy Pull Buyers API? Your clients (or 'hub users') come with an associated password. Retrieve it easily with the "Get password" option:

![api-settings-new-updated-7](https://storage.travelgate.com/kbase/apisettings_9.png)
:::

Now that you've got the hang of it, feel free to explore and customize your API settings to suit your needs. Happy configuring! 🎉