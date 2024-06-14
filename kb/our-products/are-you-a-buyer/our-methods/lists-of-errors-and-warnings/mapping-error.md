---
sidebar_position: 23
---

# MAPPING_ERROR

### What does a "MAPPING_ERROR" mean?💡
"MAPPING_NOT_FOUND" errors occur when our system cannot find a match between the requested hotel/s and the Seller information. It can also be returned in those cases there is some mismatch between the context code used in your request and the context code or data configured in the mapping files uploaded to your FTP (hotels, boards, rooms).

**Example:**

![mapping_error](https://storage.travelgate.com/kbase/mapping_error.jpg)

### What can I do if I receive a "MAPPING_ERROR" in my response?🔎
Since this error serves as an indication that there is a discrepancy or issue with the mapping validation, you should check the following information:

1. **Hotel codes**: Make sure that the hotels in your request are returned through the Hotels Query of that specific Seller.
1. **Context**: [content codes](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials) utilized by both Buyers and Sellers.
	1. **Supplier context**: make sure you use the Supplier's context if you are requesting the Seller's hotelcodes.
	1. **Buyer context**: make sure you use your Buyer context if you are requesting your own hotelcodes (previously mapped and uploaded to your FTP).

1. **FTP files and Mapping**: If you are using our Mapping plugin, make sure that the hotel requested have been added to your [mapping file](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) and it has been processed correctly.

:::tip
Don't forget to check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) for further information on Hotel-X Mapping plugin!🚀
:::