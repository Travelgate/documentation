---
sidebar_position: 2
---

# Essential Tech Requirements Before Connecting with TravelgateX as a Seller

Welcome aboard to TravelgateX!

We're beyond excited that you've chosen to partner with us for expanding your hotel inventory. Starting out on a new venture can be challenging, but fear not! Our team is dedicated to walking alongside you throughout the onboarding process.

Whether you have technical questions or need some guidance, we've got you covered. Just head over to [TGX Community](https://community.travelgatex.com/), where you can connect with other developers, or get ready to dig into our [Knowledge Base](https://knowledge.travelgate.com/), packed with awesome articles and [FAQs](https://knowledge.travelgate.com/faqs)! And for a deeper dive, our comprehensive [Documentation](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/) is at your fingertips.

### What do I need to have in place before joining TravelgateX?💡
TravelgateX is purely focused on connectivity so to be able to work with us via API and make the most of our Platform, you should ensure the following solutions are set up, whether in-house or outsourced:

1. **API:** It will be necessary to integrate with our Hotel Pull Sellers API or Hotel Push Sellers API and interact with your Buyers.
1. **Booking engine:** It will be necessary to manage the reservations of your Partners.
1. **Mapping (Hotel Pull Sellers Generic API):** TravelgateX works with your native codes* for transparency, allowing the [mapping](https://knowledge.travelgate.com/content-mapping) between Buyers and Sellers to be easily optimized without interference from TravelgateX. Our Buyers work with a variety of mapping providers and they can choose to load their mapping file to our system in order to receive their own codes in the response.



_*When a Seller returns the **same hotel id for different properties**, we concatenate those hotel ids with their destination code in order to make them unique. That will be the only exception where we modify the Seller information.  
In that case, the hotelCode will be the one returned through our API (concatenated if needed) and the hotelCodeSupplier will be the native code of the supplier._


:::info Resources.
- [Hotel Pull Sellers API Documentation](https://docs.travelgatex.com/legacy/hotel-suppliers/).
- [Hotel Push Sellers API Documentation](https://docs.travelgatex.com/inventory-x/).
:::