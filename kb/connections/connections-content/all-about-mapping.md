---
sidebar_position: 5
---

# All about Mapping at TravelgateX

To maintain transparency, there are no TravelgateX hotel codes. Instead, we always provide the **Seller native codes** to ensure easy optimization of the mapping between Buyers and Sellers. This allows both parties to optimize the process without any interference from TravelgateX: Buyers are in charge of mapping each of their Sellers.

:::info
When a Seller returns the same hotel id for different properties, we *concatenate* those hotel ids with their destination code in order to make them unique. That will be the only exception where we modify the Seller information. In that case, the hotelCode will be the one returned through our API (concatenated if needed) and the hotelCodeSupplier will be the native code of the supplier.  
You should always map the **"hotelCode"** since it will be the one used in TravelgateX methods.
:::

### How many properties should I map?💡
Please keep in mind that you have the flexibility to choose the number of hotels to be mapped. We recommend reaching out to the Seller directly to confirm which hotels should be mapped based on your specific business needs. This approach helps avoid unnecessary requests and reduces your L2B (Look-to-Book) ratio.

### Can I obtain the total count of rooms, boards and categories at a hotel level?🏨
Unfortunately, this is not possible. Please note that content Queries provide static information from Sellers as a whole, rather than at a hotel level. This means that you will receive the total count of rooms, boards, destinations, and categories associated with your credentials for a specific Seller.

### How can I use my own hotel codes?🚀
If you are a Buyer connected to our Hotel-X Buyers API, you have the option to upload your own mapping files to our FTP and use your own hotel codes. To access the necessary credentials, please reach out to our Customer Care team - you can find more detailed information on **Hotel-X Mapping** [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping).

### Can we use Universally Unique Identifier Codes (UUIDs) in our mapping?☑️
Yes! We don't have any limitation on the amount (and type) of characters used to map the Seller's hotel codes.

### Can I map different portfolios for the same Seller?💡
Absolutely! You can map multiple portfolios for the same Seller (B2B, B2C, different markets, etc.) as long as **each portfolio is provided by the Seller through a specific Hotel-X Access Code**.

:::tip
And don't forget to check our Hotels Query article for further details on the hotel content returned!
:::