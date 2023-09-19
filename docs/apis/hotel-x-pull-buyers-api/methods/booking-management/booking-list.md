---
sidebar_position: 2
---

# Booking list

The Booking List operation allows to retrieve a booking (or bookings) with all its details from the booking reference locator. The returned fields for each booking in the list include:

* Holder
* Hotel
* Price
* Remarks
* Status

### Criteria 

This query offers versatility in booking search, with all fields marked as optional (accessCode, typeSearch, language etc.). This flexibility empowers you to create a personalized Booking List Query, tailoring the requested fields to your specific needs. 

Optional criteria
* accessCode (Necessary if your search if by references or by dates)
* typeSearch (Necessary if your search if by references or by dates)
language
* dates (To receive a list of all the reservations made in a specific type frame)
* bookingID (To receive the details of a specific reservation)
* references (To receive the details of a specific reservation)

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