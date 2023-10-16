---
sidebar_position: 21
---

# "MAPPING_ERROR"

### What does a "MAPPING_ERROR" mean?💡
"MAPPING_NOT_FOUND" errors occur when our system cannot find a match between the requested hotel/s and the Seller information. It can also be returned in those cases there is some mismatch between the context code used in your request and the context code or data configured in the mapping files uploaded to your FTP (hotels, boards, rooms).

**Example:**

```
image
```

### What can I do if I receive a "MAPPING_ERROR" in my response?🔎
Since this error serves as an indication that there is a discrepancy or issue with the mapping validation, you should check the following information:

1. **Hotel codes**: Make sure that the hotels in your request are returned through the Hotels Query of that specific Seller.
1. **Context**: [content codes](https://knowledge.travelgate.com/hotel-x-credentials) utilized by both Buyers and Sellers.
	1. **Supplier context**: make sure you use the Supplier's context if you are requesting the Seller's hotelcodes.
	1. **Client context**: make sure you use your Client context if you are requesting your own hotelcodes (previously mapped and uploaded to your FTP).

1. **FTP files and Mapping**: If you are using our Mapping plugin, make sure that the hotel requested have been added to your [mapping file](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/mapping/) and it has been processed correctly.

:::tip
Don't forget to check our [Documentation](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/mapping/) for further information on Hotel-X Mapping plugin!🚀
:::