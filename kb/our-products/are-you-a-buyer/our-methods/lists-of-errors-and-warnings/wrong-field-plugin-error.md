---
sidebar_position: 20
---

# "WRONG_FIELD" - "PLUGIN_ERROR" - Commission Files

### Why do I receive this warning in my Hotel-X response?💡
You will receive a commission warning "some of the options have been discarded because we don't know if price is gross or net" in those cases a Seller does not return the price commission via the integration (it has been established at contractual level).

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
1. Request your FTP credentials via [ticket](https://knowledge.travelgate.com/tickets-status) (if you dont' have them already). 
1. Check our Documentation on [Commission Plugin](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/net-price/) and follow the file format specified.
	1. **Encoding**: UTF-8
	1. **File Name**: [Context Source]_sequential_commission.csv
	1. **Headers** - Please ensure that you include at least the values from:
		1. ruleId
		1. supplierCodes
		1. percentage
		1. force
	1. **Delimiter**:  Comma (“,”)
	1. **Separator for multiples codes in the same row**: Semicolon (“;”)
1. Open your **FTP Client** (e.g. FileZilla) and connect to TravelgateX server with the credentials previously provided by our team.
1. Access your **Directory**: /F[folder code]_[unique code]/HotelX_[unique code]/
1. **Upload** your sequential commission file
1. That's it! Once the information has been loaded successfully to our system, the file name will change to [Context Source]_sequential_commission_processed.csv
 
:::info
You will find more information on how to upload your FTP commission file on our [API Documentation](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/net-price/) and Plugins - [Format Files](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/format-files/).
:::