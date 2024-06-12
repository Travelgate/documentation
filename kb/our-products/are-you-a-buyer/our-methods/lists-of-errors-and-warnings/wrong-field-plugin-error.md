---
sidebar_position: 22
---

# PLUGIN_ERROR - Commission Files

### Why do I receive this warning in my Hotel-X response?
You will receive a **commission warning "some of the options have been discarded because we don't know if price is gross or net"** in those cases a Seller does not return the price commission via the integration (it has been established at contractual level).

### What can I do if I receive a commission (some options discarded) warning?🛠️
In these cases, the Buyer should upload the FTP commission file in order to avoid the following warning in the response:

```
"warnings": [
{
"code": "WRONG_FIELD",
"type": "PLUGIN_ERROR",
"description": "some options [x] of access xxxx have been discarded because we don't
know if price is gross or net. Please, load your commission file in FTP"
}
]
```

### How do I upload the commission file to the FTP?🚀
1. Request your FTP credentials via [ticket](/kb/tickets/travelgatex-tickets) (if you dont' have them already). 
1. Check our Documentation on [Commission Plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision) and follow the file format specified.
	1. **Encoding**: UTF-8
	1. **File Name**: RequestContext_sequential_commission.csv
	1. **Headers** - Please ensure that you include at least the values from:
		1. ruleId
		1. supplierCodes
		1. percentage
		1. force
	1. **Delimiter**:  Comma (“,”)
	1. **Separator for multiples codes in the same row**: Semicolon (“;”)
1. Open your **FTP Client** (e.g. FileZilla) and connect to TravelgateX server with the credentials previously provided by our team.
1. Access your **Directory**: F0_0000/HotelX0000/BusinessRules
1. **Upload** your sequential commission file
1. That's it! Once the information has been loaded successfully to our system, the file name will change to RequestContext_sequential_commission_processed.csv

:::info
"RequestContext" on the file name depends on the context you use in your query:
- If you use your own **Buyer context** (multi mode search) you only need to load 1 file with your context in the name (BuyerContext_sequential_commission.csv).
- If you use the **Supplier context** (single mode search) you will need to load 1 file for each supplier with the Supplier context in the name (SupplierContext_sequential_commission.csv). 

You will find more information on how to upload your FTP commission file on our [API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision) and Plugins - [Format Files](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview).

:::