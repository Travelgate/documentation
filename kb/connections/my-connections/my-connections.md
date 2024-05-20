---
sidebar_position: 1
---

# My Connections

View, activate and monitor your connections in TravelgateX


### How can I check My Connections?💡
To check, activate, and keep track of your connections via TravelgateX, simply follow the steps below:

1. Log onto our website - Make sure you **browsing either as Buyer or Seller** depending on the information you need to check.

2. Click on Connections>**My Connections**:

	![mmy_connections-1](https://storage.travelgate.com/kbase/my_connections-1.jpg)

### What can I find in My Connections?🔎
In [My Connections](https://app.travelgatex.com/connections/myconnections) section you will find a list of all your connections. You may filter your accesses based on their status, type, and whether they are active or not.

1. **Hotel-X access code**: Id of a given access.

1. **Supplier and Context code**: Supplier code and Supplier Context code of a given access. Don't forget to check our article on [Hotel-X credentials](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials) for further information.

1. **Access name**: The name of a given access.

1. **Last update and Creation date**: Last modification on a given access and its creation date.

1. **Actions**: Edit access, copy access, Delete access, View Logs and Get form data.

1. **Access Status**:
	- Working: The activation process was completed successfully and the access is available for use.
	- Pending: The access is in validation status and will switch to working or not working after validation.
	- Not Working: One or more processes in the activation have failed and our connectivity team needs to review it manually.
1. **Access Type**:
	- Live: This is an access created with production credentials.
	- Test: This is an access created with test credentials.

	:::info
	The type of access (live or test) is determined by the credentials agreed upon by both the Buyer and Seller. It is the responsibility of both the BUYER and the SELLER to agree on the type of credentials to be used for a given access.
	:::

1. **Access Active:**  
	You can enable or disable your Hotel-X connections and accesses. Please note that you can only use accesses while they are active in our system. Still using our Legacy API? Connect to [Hotel-X API](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart) and enjoy this functionality and many more!
	- Yes: Active and operational access
	- No: Active and non-operational access

	<img src="https://storage.travelgate.com/kbase/my_connections_2.jpg" width="200" />

	![my_connections_3](https://storage.travelgate.com/kbase/my_connections_3.jpg)

	:::warning Legacy Pull Buyers API
	Please remember that when Buyer connections are established through our Legacy Pull Buyers API, the management of credential disconnections must be addressed not only through My Connections (at the access level) but also directly between the Buyer and Seller to ensure effectiveness—it is not sufficient to merely disable the Hotel-X Access Code in My Connections.
	
	If you wish to permanently deactivate a Legacy connection on our Platform, please submit a ticket via our Portal - Remember, the deactivation of a Legacy connection would occur at the **connection level**, not at the credential level.  
	
	If you need to deactivate a **specific set of credentials**, the deactivation should be managed directly between Buyer and Seller. This ensures that the Buyer stops sending traffic from their system using those particular credentials - please make sure to activate/deactivate the Hotel-X Access Code as well, so that it reflects the actual traffic sent by the Buyer.
	
	**How can I determine if a Buyer’s connection is Legacy or Hotel-X?**  
	As a general guideline, you can verify if a given connection is Legacy or Hotel-X via our [Stats](/kb/apps/monitoring-apps/stats/stats-connectivity-dashboard) APP. Simply filter by the Buyer and select Actions > View Accesses. If you see **“clientname#suppliercode”** instead of a Hotel-X Access Code, the connection is utilizing our Hotel Pull Legacy API.
	
	**Important:**  
	Some Buyers may be transitioning from the Legacy Pull Buyers API to the Hotel-X API, which means they could have traffic via both APIs. **If in doubt, we strongly encourage you to reach out to your Buyers for more detailed information.**
	:::

2. **Accomodations**: the number of properties available for a given access.

	![my_connections_4](https://storage.travelgate.com/kbase/my_connections_4.jpg)

3. **APPs**: Links to the Stats, Logging, Alerts, Speed and Traffic Optimizer APPs for that specific access.

	![my connections_5](https://storage.travelgate.com/kbase/my_connections_5.jpg)

4. **Extended information on "Not Working" status:**
	We have also added the following information in order to speed up the Auto-Activation process:

	- Informative PopUp: To find out why the auto-activation could not be carried out, hover over the "Not working" status to see an informative PopUp explaining the error.

		![my_connections_6](https://storage.travelgate.com/kbase/my_connections_6.jpg)

	- Assigned ticket and link to it: You can view the ticket information assigned to the access and open the ticket in the MyTickets section for more details about the current status of the access. 

		<img src="https://storage.travelgate.com/kbase/my_connections_7.jpg" width="500" />
