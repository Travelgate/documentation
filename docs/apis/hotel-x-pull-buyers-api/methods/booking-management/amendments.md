---
sidebar_position: 3
---

# Amendments

The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:

* Amend Dates: allows to amend the checkin and/or the checkout of a booking.
* Amend Board: allows to amend the board of a booking.
* Amend Room: allows to amend the room of a booking.
* Amend Remarks: allows to add a special request (remark) on a booking.
* Amend Paxes: allows to amend the paxes of a booking.

Each amendment type must be performed in two steps: Query (simulates the amendment) and Mutation (commits the amendment). In both steps the returned fields include:

* The booking detail with the amendment applied
* Amendment fees if applicable
* AmendmentID (only returned in the query response)

### Criteria 

You can perform the query (simulation) of the amendment sending all the booking information (references, dates, hotel code)
or sending the bookingID got in the booking flow:

Booking information:
* accessCode
* language
* hotelCode
* reference
* dates

BookingID got in the booking flow:
* bookingID

You can perform the mutation (commit) of the amendment sending the amendmentID received in the previous response:
* amendmentID

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