---
sidebar_position: 4
---

# The 'tgx_sess' parameter

### What is the “tgx_sess” parameter?💡
The “tgx_sess” parameter includes the sessionID value of a Reservation's corresponding Valuation. It can be found in your Legacy Pull Buyers API logs, both in your Valuation response and Reservation request. 

### How can I use the “tgx_sess” parameter in Logging?
You can use the “tgx_sess” to check the Valuation logs for a specific Reservation (for instance, to check its cancel policies). In order to do so, simply follow the steps below:

1. Download the Reservation logs through our [Stats](https://app.travelgatex.com/apps/stats) or [Logging](https://app.travelgatex.com/apps/logging) APPs.
1. Find the parameter **“tgx_sess”** in your Reservation request: it includes the sessionID value of its corresponding Valuation. For example:
	```
	<Parameter key="tgx_sess  value="c0c89c0c-29a3-40ff-8c7b-bd179c57faea"/>
	```
1. Click on **“Search by reference” or “Search by session ID”** and fill in the fields:
	1. Search by reference
		![new_logging_5](https://storage.travelgate.com/kbase/new_logging_5.jpg)
	1. Search by session ID
		![new_logging_6](https://storage.travelgate.com/kbase/new_logging_6.jpg)
1. Click on **Search** and Logging will return the Valuation logs for that specific Reservation.

:::info
Please be sure that you **select the correct time range** to which the reference or Session ID belongs; otherwise, results will not be displayed.
:::
