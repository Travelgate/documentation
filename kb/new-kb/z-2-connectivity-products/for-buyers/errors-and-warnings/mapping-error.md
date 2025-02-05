---
sidebar_position: 23
---

# MAPPING_ERROR

### What does a "MAPPING_ERROR" mean?💡
"MAPPING_NOT_FOUND" errors occur when our system cannot find a match between the requested hotel/s and the Seller information. It can also be returned in those cases there is some mismatch between the context code used in your request and the context code or data configured in the mapping files uploaded to your SFTP (hotels, boards, rooms).

**Example:**

```
[
    {
        "code" : "MAPPING_NOT_FOUND",
        "type" : "MAPPING_ERROR",
        "description" : "Access: 'xxx' couldn't process hotel codes [123456] due to not finding mapping codes for supplier context [xxx]"
    }
]
```

### What can I do if I receive a "MAPPING_ERROR" in my response?🔎
Since this error serves as an indication that there is a discrepancy or issue with the mapping validation, you should check the following information:

1. **Hotel codes**: Make sure that the hotels in your request are returned through the Hotels Query of that specific Seller.
2. **Context**: [Content codes](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials#context%EF%B8%8F) utilized by both Buyers and Sellers. You can check the context codes of your connected suppliers in the [My Connections](/kb/connections/my-connections/#what-can-i-find-in-my-connections) section.
	1. **Supplier context**: Make sure you use the Supplier's context if you are requesting the Seller's hotelcodes.
	2. **Buyer context**: Make sure you use your Buyer context if you are requesting your own hotelcodes (previously mapped and uploaded to your SFTP).

3. **SFTP files and Mapping**: If you are using our Mapping plugin, make sure that the hotel requested have been added to your [mapping file](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) and it has been processed correctly.

:::tip
Don't forget to check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) for further information on Hotel-X Mapping plugin!🚀
:::