---
sidebar_position: 4
---

# Book

The Book operation requests a booking confirmation for the specified optionId obtained from the Quote. It provides a concise summary of the option, along with the reservation status. Please note that the returned information may vary depending on the Seller. The returned fields include:

* Holder
* Hotel
* Price
* Cancel Policy
* Status - make sure you add this field to your Query in order to receive the reservation status in BookRS.
* Client reference - the booking locator in your system (alphanumerical value).
* Supplier reference - make sure you add this field to your Query in order to receive the provider locator in BookRS.

### Input

This mutation offers versatility in book options, with certain fields marked as mandatory (optionRefId, clientReference, holder etc.) and others as optional (language, delta price, payment card etc.). This flexibility empowers you to create a personalized Book Multation, tailoring the requested fields to your specific needs. 

Mandatory criteria
* optionRefId (Identifier of the option used in Quote)
* clientReference (Booking ID in client's system)
* holder
* rooms

Optional criteria
* language
* deltaPrice (Indicates price variation permitted by the client)
* paymentCard (If the payment is done by credit card, it's mandatory to specify the payment type and the credit card information)
* remarks (Any customer comments for the supplier to consider)

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
* CommitRequired (Indicates if the book will be confirmed in 1 or 2 steps. It only should be used in Book)

[ añadir ejemplo ]

### Key Recommendations

* Customize the timeout according to your needs, taking into consideration the maximum values in Book is 180,000ms.

* Set the audit transaction to "true" in "Book" when investigating errors.

* Consider that the Delta Price sets the price tolerance between "Quote" and "Book". For instance, if the "Quote" stage displays a price of 100 and the Delta Price is 5, a change up to 105 will still secure a confirmed booking.