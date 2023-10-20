---
sidebar_position: 1
---

# Overview

The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:

* `amendDates` (Allows to amend the checkin and/or the checkout of a booking)
* `amendBoard` (Allows to amend the board of a booking)
* `amendRoom` (Allows to amend the room of a booking)
* `amendRemarks` (Allows to add a special request/remark on a booking)
* `amendPaxes` (Allows to amend the paxes of a booking)

Each amendment type must be performed in two steps, `Query` (quotes the amendment) and `Mutation` (commits the amendment). In both steps the returned fields include:

* The booking detail with the amendment applied
* Amendment fees if applicable
* AmendmentID (Only returned in the query response)

