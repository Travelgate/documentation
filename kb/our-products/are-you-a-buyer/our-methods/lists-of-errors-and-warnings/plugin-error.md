---
sidebar_position: 21
---

# PLUGIN_ERROR

### What does a "PLUGIN_ERROR" mean?💡
A "PLUGIN_ERROR" occurs when our system cannot validate the plugin information added to a Hotel-X request.

### What can I do if I receive a "PLUGIN_ERROR" in my response?🔎
1. **"PLUGIN_ERROR";"WRONG_FIELD"**  
	It mostly occurs when there is an issue with the input or structure of the plugin. To resolve this, make sure that the Plugin format you have set up aligns with our Hotel-X API [Specifications](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview).   

	Another scenario where you might encounter this warning is when the integration doesn't receive commission details from the Seller. In such cases, you may see a warning message saying "commission: commission not found".
	1. If this happens during a Search, we will inform the Buyer to upload the [commission file to our FTP](/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/wrong-field-plugin-error) so that accurate results can be obtained.
	1. If commission information is not received through other methods, the Buyer will be notified through the aforementioned "commission: commission not found" warning.
			
			```
			"warnings":[{"external":null,"type":"PLUGIN_ERROR","code":"WRONG_FIELD","description":"commission: commission not found"}]
			```
1. **"PLUGIN_ERROR";"BLACKLIST"**
A "PLUGIN_ERROR" warning with the code "BLACKLIST" is returned whenever the hotels or accesses in your request have been [blacklisted](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist). To **resolve** the issue, you should make sure the information in your blacklist files is correct and matches the data in your request criteria.
 
:::tip
Don't forget to check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/errors-and-warnings/booking-flow) for further information on Hotel-X errors and warnings⚠️
:::