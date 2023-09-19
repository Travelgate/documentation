---
sidebar_position: 3
---

# Quote

The Quote operation evaluates the rate before booking, providing the same information as the Search response for a hotel rate, including up-to-date pricing. Additionally, it offers further details such as rate breakdown and cancellation policies. The returned fields include:

* Status
* Price
* Cancel Policy
* Rooms
* Surcharges

### Criteria 

This query offers versatility in quote options, with certain fields marked as mandatory (optionRefId) and others as optional (language). This flexibility empowers you to create a personalized Quote Query, tailoring the requested fields to your specific needs. 

Mandatory criteria
* optionRefId (Identifier of the option chosen in Search)
Optional criteria
* language

### Filter

Filters allow you to precisely tailor the response according to your preferences. The available filter is:

* Plugin: You can filter and specify which plugins need to be included or excluded.

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
* Context
* Timeout (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)
* BusinessRules
* Language
* Currency
* Nationality
* Markets

Optional Settings:
* Group
* AuditTransactions 
* Suppliers (Each one contains its own code, settings and accesses)
* Plugins
* TestMode (This flag allows only the accesses checked as test)
* ClientTokens (Used to identify the origin of the request, this is only used in plugins)

[ añadir ejemplo ]

### Key Recommendations

* Customize the timeout according to your needs, taking into consideration the maximum values in Quote is 180,000ms.

* Set the audit transaction to "true" in "Quote" when investigating errors.
