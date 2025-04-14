---
sidebar_position: 4
---

# Mapping at Travelgate

At Travelgate, we do not use our own hotel codes. Instead, we provide **Supplier native codes** to simplify the mapping process between Buyers and Sellers. This allows both parties to handle mapping independently, with Buyers responsible for mapping each Seller’s content.

:::warning Hotel code concatenation
When a Seller returns the same hotel ID for multiple properties, we **concatenate** those IDs with their destination code to make them unique. This is the only situation where we modify the Supplier's information. In this case, the `hotelCode` returned by our API will be the concatenated ID, while the `hotelCodeSupplier` will be the Seller's native code.  

Always map the **"hotelCode"**, as this is the code used in Travelgate methods.
:::

### How Many Properties Should I Map?

You have the flexibility to choose how many hotels to map. We recommend that you contact the Seller directly to confirm which hotels should be mapped based on your business needs. This approach helps avoid unnecessary requests and can reduce your L2B (Look-to-Book) ratio.

### Can I Obtain the Total Count of Rooms, Boards, and Categories at a Hotel Level?

Unfortunately, it’s not possible to retrieve this information at the hotel level. Content queries provide static information from Suppliers as a whole, rather than specific hotel details. You’ll receive the total count of rooms, boards, destinations, and categories associated with your credentials for a specific Seller.

### How Can I Use My Own Hotel Codes?

If you’re a Buyer connected to our Hotel-X Buyers API, you have the option to upload your own mapping files to our SFTP and use your own hotel codes. For more information, you can check our article on Hotel-X Mapping [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping).

### Can We Use Universally Unique Identifier Codes (UUIDs) in Our Mapping?

Yes! We do not impose any limitations on the number or type of characters used in mapping the Supplier's hotel codes.

### Can I Map Different Portfolios for the Same Connection?

Yes, you can map multiple portfolios for the same connection (e.g., B2B, B2C, or different markets). As long as **each portfolio is provided by the Seller through a specific Hotel-X Access Code** (a unique set of credentials), you can map them independently.

:::info Hotel-X Mapping 🚀
If you are a Buyer connected via the Hotel-X API, you have the option to **upload your own [mapping files](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping/) to our SFTP**. Take advantage of our SFTP mapping and make the Booking Flow truly your own!  
Note: Our Hotel-X Mapping feature allows you to set one mapping file per Supplier.
:::