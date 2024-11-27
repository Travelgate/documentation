---
sidebar_position: 1
---

# Logging: Access your logs via Travelgate

### How can I use Logging? 🔍
1. Log into [our Portal](https://www.travelgate.com/).
1. Click on APPs > [Logging](https://app.travelgatex.com/logging).
1. Decide if you prefer to search by connection, reference or session ID.
1. Then, select the connection(s) and adjust the filters:
	- Time range (UTC)
	- Operation type: Search, Quote, Book, Cancel, Other (Booking List/Booking Read).
	- Status/Error code: list of errors.
1. Click on **Search**

	![new_logging_1](https://storage.travelgate.com/kbase/new_logging_1.jpg)

:::info
Please be aware that operation type “Search” will only return results when the search has been **audited first**
:::

### What information does Logging provide me? 📤
If your search criteria returns logs, Logging will display the following information:
- Timestamp
- Duration of the transaction
- Connection
- Client
- Access
- Status/Error Code
- Operation type
- Session ID (as unique identifier for this transaction)
- Traffic Type (Basic, Optimized, Scheduler, Speed)
- Actions: Book Download and Quote Download. You can directly download the Quote transactions used for a specific booking flow. You can also download the logs visible on your screen by clicking the "Download All" button above the table.
	![quotedownload_functionality](https://storage.travelgate.com/kbase/quotedownload_functionality.jpg)
- If your search returns many results, we recommend you use additional **filters** on the right: “Filter by Supplier”, “Filter by Access” or “Duration”:

	![new_logging_3](https://storage.travelgate.com/kbase/new_logging_3.jpg)

:::info Legacy Pull Buyers API information
Please remember that for Buyer connections through our Legacy Pull Buyers API, filtering by Hotel-X Access Code is not available. Connections will be identified through the Buyer's **clientname#suppliercode** relationship.  
Note that some Buyers may be transitioning from the Legacy Pull Buyers API to the Hotel-X API, which means they could have traffic via both APIs. If in doubt, we strongly encourage you to **reach out to your Buyers** for more detailed information.
:::