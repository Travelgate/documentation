---
sidebar_position: 3
---

# Amendments

The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:

* `amendDates` (allows to amend the checkin and/or the checkout of a booking)
* `amendBoard` (allows to amend the board of a booking)
* `amendRoom` (allows to amend the room of a booking)
* `amendRemarks` (allows to add a special request/remark on a booking)
* `amendPaxes` (allows to amend the paxes of a booking)

Each amendment type must be performed in two steps, `Query` (simulates the amendment) and `Mutation` (commits the amendment). In both steps the returned fields include:

* The booking detail with the amendment applied
* Amendment fees if applicable
* AmendmentID (only returned in the query response)

[Añadir ejemplo]

### Criteria 

You can perform the `query` (simulation) of the amendment sending all the booking information (references, dates, hotel code) or sending the bookingID got in the booking flow:

* Booking information:
   * `accessCode`
   * `language`
   * `hotelCode`
   * `reference`
   * `dates`

* BookingID got in the booking flow:
   * `bookingID`

You can perform the `mutation` (commit) of the amendment sending the amendmentID received in the previous response:
* `amendmentID`

### Settings 

Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients.

Mandatory Settings:
* `context`
* `timeout` (timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)
* `businessRules`
* `language`
* `currency`
* `nationality`
* `markets`

Optional Settings:
* `group`
* `auditTransactions`
* `suppliers` (each one contains its own code, settings and accesses)
* `plugins`
* `testMode` (this flag allows only the accesses checked as test)
* `clientTokens` (used to identify the origin of the request, this is only used in plugins)