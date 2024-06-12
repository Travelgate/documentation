---
sidebar_position: 2
---

# TravelgateX Distribution Solution

### What can I expect from the TravelgateX Distribution solution and how will it boost my business?🚀
As a Seller, we know that your top priority is to reach multiple Buyers and **manage distribution channels seamlessly** while implementing diverse business rules. However, limited technical resources or system constraints can hinder your sales growth and your ability to apply customized business rules or aggregate Suppliers.
Without the appropriate tools, these tasks can be challenging to accomplish efficiently.  
If you are seeking to apply different mark-ups based on various conditions or consolidate direct contracts with hotels and third-party Suppliers, our Distribution solution provides a range of tools to **optimize your technical resources**. Let's explore some ideas and use cases together!

### Benefits and features of TravelgateX Distribution Solution:
- Expand your product offerings by buying from third-party Suppliers without the hassle of developing APIs. Sell these products using your own distribution rules.
- Seamlessly access and manage your contracted product with Channel Managers.
- Define both general and specific pricing rules, including commissions or markups.
- Customize currency exchange options, block specific currencies by country, and more.
- Set stop sales for hotels, hotel chains, markets, countries, cities, etc.
- Easily check and download your booking details through our user-friendly Distribution Extranet.

:::note
**Looking to dive deeper into currency exchange?** Check out these handy links for more information on how to work with it:
- [Distribution Extranet Documentation](/docs/apps/distribution/extranet/overview): Apply and configure currency business rules.
- [FTP files](/docs/apps/distribution/files/master-files/currencies): Create a file with your very own currency exchange and take control of your currency conversions!
:::

### How can I aggregate my direct contracts with hotel and third-party Suppliers?🏨
When combining buying from your contracted hotels and other Suppliers with no required API, your best alternative is combining our [Inventory](/kb/our-products/are-you-a-buyer/inventory/what-is-inventory) and Distribution solutions.

![distribution_soluion_1](https://storage.travelgate.com/kbase/distribution_solution_1.jpg)

 
### What are the different tools that are included in TravelgateX Distribution Solution?

- [Inventory](/docs/apps/inventory/extranet/overview): Our simple extranet facilitates connections with over 50 Channel managers, enabling you to manage manual rates and create user profiles for your contract/loading team or hotels.
- [Distribution](/docs/apps/distribution/quickstart): With our Distribution tool, you can consolidate your direct contracts and Channel Managers with other Pull Suppliers available on our Platform. Creating new connections and uploading master and [mapping files](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) via FTP makes the process seamless.

	Once your product setup is complete, you gain full control to manage your Agencies or Distribution Channels, apply specific or general business rules like markups, currency exchange, or blacklists, and conveniently check or download booking details. You can carry out these operations effortlessly using our **Distribution Extranet or rule files loaded via FTP**. 
- [Hotel-X Buyers API](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart): Hotel-X appears twice in our Distribution schema because it serves as our Buyers API, allowing your customers to connect with you (some Buyers may still use our old Legacy API). Moreover, it is the API you will also utilize to buy product from your Sellers. The good news is that you won't need to develop the Hotel-X API as a Buyer since our Distribution layer is already internally connected with it.

### How can I apply complex Business Rules to my Buyers?
Enhance your API connectivity with Buyers by utilizing Distribution as an extra layer. Load complex business rules such as markup conditions, currency rules, blacklists, and multiple selling rules through FTP files or manually via our user-friendly Distribution Extranet. Customize your business rules with ease!

![distribution_solution_2](https://storage.travelgate.com/kbase/distribution_solution_2.jpg)

### How can I create my own Bedbank by reselling third-party products without API integration?🏨
As we mentioned in our previous use case, you can combine multiple Suppliers in Distribution. However, in this case, you won't have your own system codes or hotel master files from our Inventory APP, so you should follow the steps below:

1. Generate your own master file.
1. Set up your connections, agencies, and business rules.

**How can I create a master file without one?💡**

You can utilize the structure of the largest Supplier you plan to aggregate through Distribution. By using their data as a foundation, you can align your own codes with your biggest Supplier.

Once you acquire new incremental product from other Suppliers that require aggregation, just follow these steps:
1. Create a new master file and add the new hotels.
1. Map the properties with those already existing in your mapping files.
1. Upload the new Supplier mapping file with your master ID and the Supplier code.
Once you've established your connections, agencies, and business rules, you're all set to start selling through your very own Bedbank without the hassle of API development! It's that simple!

### As a Seller using the Distribution solution, is there any way to control the currency that we return to our Buyers?

Yes, as a Seller using the Distribution solution, you have several ways to control the currency that you return to your Buyers/Agencies. Here are some of the rules you can set:

1. **Force Requested Currency:**  
   If the requested currency is forced to be returned, all the sellings of the response have to be returned with the currency received on the request. If a selling is not received from the supplier with the correct currency then it must be exchanged to it. If it cannot be exchanged then the selling will be discarded. By default, the requested currency is not forced. This rule can only be set by the agency. More details [here](/docs/apps/distribution/extranet/general-settings/configuration/currencies/#force-requested-currency).

2. **Allowed Currencies:**  
	With this rule, you can set a default currency and a list of currencies and so force all the sellings of the response to be returned with any of these currencies.  

	If a selling is not received from the supplier for a currency of the list then it will be exchanged to the default currency. If it cannot be exchanged then the selling will be discarded. 

	By default, this rule is not set for any currency. This rule can only be set by the agency. More details [here](/docs/apps/distribution/extranet/general-settings/configuration/currencies/#allowed-currencies).

3. **Allow Currency Exchange:**  
	This rule has two modes of operation - "Do not allow exchange and apply filters" and "Allow only custom exchange". The first mode allows you to set a list of currencies and force all the sellings of the response to be returned with any of these currencies. The second mode allows you to set a default currency and a list of admitted currencies.
	
	If a selling is received from the supplier with a currency not included on the admitted ones then this currency must be exchanged to the default currency. If it cannot be exchanged then the selling will be discarded.
	
	By default, this rule is not set for none of the modes. This rule can only be set by the agency. More details [here](/docs/apps/distribution/extranet/general-settings/configuration/currencies/#allow-currency-exchange).

	:::warning
	Remember to be careful when setting various currency rules as they can create a conflict and some sellings can be discarded unwittingly. It is strongly recommended to use only the 'Allow Currency Exchange' rule if possible.
	:::


### How can I start working as a Distribution Seller?🌟
By becoming a Distribution Seller and setting up your account, you'll have the opportunity to showcase your product to numerous Buyers within the vibrant TravelgateX Ecosystem. Get ready to unlock new possibilities and expand your reach!

If you're interested in our Distribution Solution, simply reach out to our **Onboarding Team** at client-onboarding@travelgate.com. They'll be more than happy to assist you and walk you through the process!

 
:::tip
Remember to check out our [Distribution Documentation](/docs/apps/distribution/quickstart) and learn all about our Distribution solution!📝🚀
:::
 