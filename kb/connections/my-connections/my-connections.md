---
sidebar_position: 1
---

# My Connections

Welcome to the **My Connections** section! Here, we'll guide you through all the essential information you need to fully leverage your connections and accesses at Travelgate.


### How can I check My Connections?
To check, activate, and keep track of your connections via Travelgate, simply follow the steps below:

1. Log in to our [website](https://www.travelgate.com/) and make sure you are browsing as either a Buyer or a Seller, depending on your Partner type and the information you need to check.
2. Click on Connections in the top menu, and then, click on My Connections:  
	![myconnections_aug_1](https://storage.travelgate.com/kbase/myconnections_aug_1.jpg)

### What can I find in My Connections?
In the [My Connections](https://app.travelgatex.com/connections/myconnections) section, you will find a list of all your connections and their accesses.

You can quickly **filter** your [Accesses](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials#access%EF%B8%8F) based on status, type, and whether they are active or not, or also filter directly by Hotel-X access Code, Supplier code, or Access name:

- **Access Status**:
	- Working: The activation process was completed successfully and the access is available for use.
	- Pending: The Access is in validation status and will switch to working or not working after validation.
	- Not Working: One or more processes in the activation have failed and our connectivity team needs to review it manually.
    	- Extended information on "Not Working" status: additional information to speed up the [Auto-Activation process](/kb/connections/my-connections/guick-guide-to-auto-activations):
        	- Informative popup: Hover over the 'Not working' status to see an informative popup explaining why the auto-activation could not be completed.
        	- Activation ticket: ticket information assigned to the activation of that access. You can open the ticket reference link to section "Tickets" for more details about the current status of the activation. 

				![myconnections_aug_4](https://storage.travelgate.com/kbase/myconnections_aug_4.jpg)
- **Access Type**:
	- Live: This is an access created with production credentials.
	- Test: This is an access created with test credentials.

:::warning Access Type information
The access type (live or test) is determined by the credentials agreed upon by both the Buyer and Seller. It is the responsibility of both the Buyer and the Seller to agree on the type of credentials to be used for a given access.
:::

- **Access Active:**  
	You can activate or deactivate your Hotel-X Accesses. Please note that you can only use Hotel-X Access Codes while they are active in our system.  
	- Yes: Active and operational access.
	- No: Inactive and non-operational access.  

:::tip
Still using our Legacy Pull Buyers API? **Connect to [Hotel-X API](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart)** and enjoy this functionality and many more!
:::

- **Hotel-X Access Code**: Id of a given access.
- **Supplier code**: Supplier code of a given access. Don't forget to check our article on [Hotel-X credentials](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials) for further information.
- **Access name**: The name identifier of a given access.
- **Partner name**: The name of the Partner connected through that access (either Seller or Buyer name).

	![myconnections_aug_2](https://storage.travelgate.com/kbase/myconnections_aug_2.jpg)
- **Buyer Integration Type**: If you are browsing as a Seller, you can identify if your Buyers are integrated with our Marketplace using the latest version of the Buyer API: Hotel-X.  

	![buyerintegrationtype_myconnections](https://storage.travelgate.com/kbase/buyerintegrationtype_myconnections.jpg)

In addition to the aforementioned information, you will also be able to view the following information at the access level:
- **Updated and Created date**: Information about the last modification made to a given access and its creation date.
- **Accomodations**: the number of properties available for a given access.
- **Context code**: [content codes](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials#context%EF%B8%8F) utilized.
- **Actions**:
  - Edit access: Edit your current credentials for an access.
  - Copy access: Copy a pre-existing access.
  - Delete access: Remove unnecessary or invalid accesses.
  - View Logs: View the history of changes made to an access.
  - Get form data: View your configuration in JSON or XML format, so you can easily consume or store it on your end.

![myconnections_aug_3](https://storage.travelgate.com/kbase/myconnections_aug_3.jpg)


### Connections via Legacy Pull Buyers API

Please remember that when Buyer connections are established through our Legacy Pull Buyers API, the management of credential disconnections must be addressed not only through My Connections (at the access level) but also **directly between the Buyer and Seller to ensure effectiveness** — it is not enough to merely deactivate the Hotel-X Access Code in My Connections.

- If you wish to permanently deactivate a Legacy connection on our Platform, please submit a ticket via our Portal - Remember, the deactivation of a Legacy connection would occur at the **connection level**, not at the credential level.  
- If you need to deactivate a **specific set of credentials**, the deactivation should be managed directly between Buyer and Seller. This ensures that the Buyer stops sending traffic from their system using those particular credentials - please make sure to activate/deactivate the Hotel-X Access Code as well, so that it reflects the actual traffic sent by the Buyer.