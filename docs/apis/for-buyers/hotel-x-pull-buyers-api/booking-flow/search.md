---
sidebar_position: 2
---

# Search

Search serves as the initial step in our booking flow, with the objective of verifying availability within the specified date range and for the requested number of guests, either for specific hotels or for hotels in the desired destination. It provides a comprehensive list of available options based on your search criteria. The returned fields include:

* `hotelCode`
* `hotelName`
* `boardCode`
* `paymentType`
* `occupancies`
* `rooms`
* `price`
* `rateRule`
* `cancelPolicy`
* `id`

### Criteria 

This query offers versatility in search options, with certain fields marked as mandatory (checkIn, checkOut, hotels etc.) and others as optional (language, currency, nationality etc.). This flexibility empowers you to create a personalized Search Query, tailoring the requested fields to your specific needs. 

[ añadir ejemplo ]

Mandatory criteria:
* `checkIn` (Format: YYYY-MM-DD)
* `checkOut` (Format: YYYY-MM-DD)
* `hotels` (We recommend a maximum of 200 hotel codes per request)
* `destinations`
* `occupancies` (For multi-room bookings, this array will contain multiple elements, rooms. You will need to detail the occupancy for each room requested.)

Optional criteria:
* `language`
* `currency`
* `nationality`
* `markets`

### Filter

Filters allow you to precisely tailor the response according to your preferences. The available filters are:

* `plugin`: You can filter and specify which plugins need to be included or excluded.

* `rateRules`: This filter enables you to narrow down the options returned by the suppliers based on the desired rate rules you want to include or exclude.

* `status`: Use this filter to determine which status (OK and RQ) will be included or excluded in the response.

* `access`: By using the access filter, our system will exclusively include or exclude options from the selected accesses. If you opt not to set any access at all, requests will be made to all available accesses.

### Search Single Mode or Multi Mode

You have the possibility to chose between searching in a single mode vs searching in a multi mode.

#### Single Mode 

The default mode in Hotel-X allows our Partners to perform one search per Seller connected to their account at a time. When running your Search, you should add the Seller's access code you would like to query.

[ añadir ejemplo ]

#### Multimode Search

The multimode query allows our Partners to search multiple Sellers at the same time in just one request. To search in multimode, start by uploading your hotel mapping files to your FTP. Once the files are processed, you'll have the ability to search multiple Sellers simultaneously by using your own context and hotel codes.

Specifying the access codes in the filter node: the query will only be sent to the accesses specified.

[ añadir ejemplo ]

Not specifying any accesses: The query will be sent to all the accesses connected to your account (only the ones belonging to the Sellers where the mapping file has been uploaded). This query will also check the value of the "testMode" tag in order to request only the test or production accesses, accordingly.

[ añadir ejemplo ]

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

* Customize the `timeout` according to your needs, taking into consideration the maximum values in Search is 25,000ms.

* Set the `auditTransaction` to "false" in Search for better performance.

* The Search id remains valid for 24 hours, but transitioning quickly to the Quote phase is highly recommended for a smoother booking process.

:::