---
sidebar_position: 8
---

# Hotel-X Credentials

## Review your API Key, Clients, Accesses and Contexts.

Once you have configured your account, you can access our App and check your Hotel-X credentials and accesses by following this simple guide:

### Apikey☑️
1. **Log onto our website**: Log in with your credentials [here](https://www.travelgatex.com/).
1. **Connections**: Click on "Connections" in the top menu. Then, click on "[Connections Settings](https://www.travelgatex.com/)".
1. **API Settings**: Your Apikey will be displayed in a yellow box at the top of the page.
	![hotelx_credentials_1](https://storage.travelgate.com/kbase/hotelx_credentials_1.jpg)

	:::info
	**Please keep in mind that the Apikey will remain consistent across both test and production environments for all Sellers.**
	:::

### Access☑️
An access refers to the combination of credentials and authentication configuration that allows a Buyer to establish a connection with a Seller. It serves the purpose of distinguishing between different Sellers and filtering different credentials and configurations from the same Seller (e.g., B2B and B2C feeds). You can check this information in [My Connections](https://app.travelgatex.com/connections/myconnections).

For **Hotel-X implementation and testing**, we recommend using the following accesses (they have already been activated on your account and are ready to use):
* TravelgateX Test Seller (tgx): Access 2 with context HOTELTEST
* Smyrooms Test: Access 5647 with context LOGITEST

**How can I obtain an access code from an actual Seller?**
To get your access code, simply establish a commercial agreement with the desired Partner and request activation through our website using the [Auto-Activations Form](/kb/connections/my-connections/auto-activations-process).

::: note
It is advisable to avoid making live bookings during the Hotel-X implementation process until your development has been certified by TravelgateX.
:::

### Client☑️

A client refers to a Party that buys accommodation services through the Hotel-X API implementation. Client codes remain consistent throughout all TravelgateX implementations and they are used to identify the business that is making the request and to confirm that they have a configuration assigned to it.

It is possible to have multiple client codes, for instance, in order to differentiate traffic between B2B and B2C credentials (e.g., client_b2b, client_b2c). As all accesses are compatible with any of your client codes, it is important to use the appropriate one according to your needs. You can find this information in your [Connections Settings](/kb/connections/api-settings/connections-settings).

### Context☑️

Context refers to the content codes utilized by both Buyers and Sellers. Each Seller has its own unique context, which may differ between test and production environments. The context includes specific codes for hotels, boards, rooms, etc.

Buyers have the flexibility to either use their own codes or choose content providers. In either case, they can create their own context using our [Mapping Plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping). This allows Buyers to align their own context with the Suppliers' context. 

To access the context, simply navigate to the Connections menu and click on "My Connections".
![hotelx_credentials_2](https://storage.travelgate.com/kbase/hotelx_credentials_2.jpg)

Then, select the Seller and the information will be displayed.

![hotelx_credentials_3](https://storage.travelgate.com/kbase/hotelx_credentials_3.jpg)

When you activate a new Seller, the context information will be provided to you along with the credentials in the confirmation email.

### What is the difference between access and context?💡
The distinction between the two is that an access holds your credentials for a specific connection, while a context is the internal TravelgateX code required to request either the original supplier hotel codes or your own hotel codes (previously mapped and uploaded to our FTP).

:::info 
Feel free to check our [Hotel-X Buyers API Documentation](/docs/get-started/key-concepts) for additional information on Hotel-X credentials.
:::