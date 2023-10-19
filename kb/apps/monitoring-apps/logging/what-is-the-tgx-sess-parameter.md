---
sidebar_position: 4
---

# Understanding the Purpose of the 'tgx_sess' Parameter

### What is the “tgx_sess” parameter in Logging (Legacy Pull Buyers API)?💡
The “tgx_sess” parameter that can be found in your Reservation request and it includes the sessionID value of its corresponding Valuation.

### How can I use the “tgx_sess” parameter in Logging?
You can use the “tgx_sess” to check the Valuation logs for a specific Reservation (for instance, to check its cancel policies). Just follow the steps below:

1. Download the **Reservation logs** through our [Stats](https://app.travelgatex.com/apps/stats) or [Logging](https://app.travelgatex.com/apps/logging) APPs.
1. Find the parameter **“tgx_sess”** in your Reservation request: it includes the sessionID value of its corresponding Valuation. For example:

	```
	<Parameter key="tgx_sess  value="c0c89c0c-29a3-40ff-8c7b-bd179c57faea"/>
	```

1. Click on **Search logs by ID or Reference** and fill in the session ID information.
1. Click on **Search ID** and Logging will return the Valuation logs for that specific Reservation.

	```
	image
	```
