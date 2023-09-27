---
sidebar_position: 3
---

# Quote

The Quote operation evaluates the rate before booking, providing the same information as the Search response for a hotel rate, including up-to-date pricing. Additionally, it offers further details such as rate breakdown and cancellation policies. The returned fields include:

* `status`
* `price`
* `cancelPolicy`
* `rooms`
* `surcharges`

### Criteria 

This query offers versatility in quote options, with certain fields marked as mandatory (optionRefId) and others as optional (language). This flexibility empowers you to create a personalized Quote Query, tailoring the requested fields to your specific needs. 

[Añadir ejemplo]

Mandatory criteria:
* `optionRefId` (Identifier of the option chosen in Search)

Optional criteria:
* `language`

### Filter

Filters allow you to precisely tailor the response according to your preferences. The available filter is:

* `plugin`: You can filter and specify which plugins need to be included or excluded.

### Settings 

Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients, and as a result, the following configuration will be sent to the Seller:

	"settings": {
		"context": "",
		"language": "en",
		"currency": "EUR",
		"nationality": "ES",
		"market": "ES",
		"timeout": {
			"search": 25000,
			"quote": 180000,
			"book": 180000
		},
		"businessRules": {
			"optionsQuota": 0,
			"businessRulesType": "CHEAPER_AMOUNT"

Mandatory Settings:
* `context` (Your context code must be linked to the mapping files previously uploaded on your side to the FTP. By doing so, you will receive results from all your Sellers with your own Hotel Codes, ensuring a smooth and seamless process)
* `timeout` (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)
* `businessRules`
* `language`
* `currency`
* `nationality`
* `markets`

Optional Settings:
* `group`
* `auditTransactions` 
* `suppliers` (Each one contains its own code, settings and accesses)
* `plugins`
* `testMode` (This flag allows only the accesses checked as test)
* `clientTokens` (Used to identify the origin of the request, this is only used in plugins)

:::Key Recommendations

* Customize the `timeout` according to your needs, taking into consideration the maximum values in Quote is 180,000ms.

* Set the `audiTransaction` to "true" in Quote when investigating errors.

:::