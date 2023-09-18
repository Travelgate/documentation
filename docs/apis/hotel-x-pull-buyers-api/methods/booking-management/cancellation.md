---
sidebar_position: 4
---

# Cancellation

The cancellation operation allows you to cancel a booking made via TravelgateX. The returned fields include:

* Booking status: CANCELLED
* Cancellation fees if applicable
* Hotel, rooms and rates of the cancelled booking
* Holder name

> NOTE: Cancellation always takes into account the day and time of the destination in order to calculate what cancellation policy should be applied. UTC time.

### Input

This mutation offers versatility in cancellation, with all fields marked as optional (accessCode, language, hotelCode etc.). You can decide between the two options for cancellation, either by reference or by bookingID, empowering you with the choice that suits you best.

Optional criteria
* accessCode
* language
* hotelCode
* reference
* bookingID

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