---
sidebar_position: 1
---

# Logging: Access your logs via Travelgate

### How can I use Logging? 🔍
1. Log into [our Portal](https://www.travelgate.com/).
1. Click on APPs > [Logging](https://app.travelgate.com/logging).
1. Decide if you prefer to search by connection, reference or session ID.
1. Then, select the connection(s) and adjust the filters:
	- Time range
	- Access: works only for **Hotel-X Buyers** connections.
	- Operation type: Search, Quote, Book, Cancel, Other (Booking List/Booking Read). Please be aware that operation type “Search” will only return results when the searches have been [audited first](/kb/apps/monitoring-apps/logging/how-can-i-download-search-logs).
	- Status/Error code: list of errors.
1. Click on **Search logs**

	![logging_new_1](https://storage.travelgate.com/kbase/logging_new_1.jpg)

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
- Actions: Logs available to download (Hotel-X Log/Legacy Log and Connector Log). 
	On Book transactions you can directly download the Quote transactions used for a specific booking flow. You can also download the logs visible on your screen by clicking the "Download All" button above the table.
	![logging_new_2](https://storage.travelgate.com/kbase/logging_new_2.jpg)
- If your search returns many results, we recommend you use additional **filters** on the left: “Filter by Client/Supplier”, “Filter by Access” or “Duration”:

	![logging_new_3](https://storage.travelgate.com/kbase/logging_new_3.jpg)

### What is the difference between Hotel-X Logs, Legacy Logs, and Connector Logs?

In the **Actions** section, you can download different types of transaction logs:

- **Hotel-X Logs**: These logs represent transactions made by **Buyers** through our **Hotel-X API**.
- **Legacy Logs**: These logs correspond to transactions made by **Buyers** through our **legacy API**.
- **Connector Logs**: These logs are transactions made through our **integration**, which directly interact with the **Seller API**

The **Connector Logs** will always be present, as they record transactions of our integration interacting with the Seller. However, whether you see **Hotel-X Logs** or **Legacy Logs** depends on which API the Buyer is using, so only one of them will appear based on the API in use.

### Is it possible to download my Hotel-X logs through Logging?
Yes, it is possible to retrieve Hotel-X logs directly by download transactions in Donwload options **Hotel-X Logs**.

### Is it possible to obtain the logs from a One Step Book operation?
Yes, you can retrieve the Quote and Book logs for the One Step Book operation through Logging. Simply use the appropriate filters (connection, reference, or session ID) to locate the logs for the operations you performed.


:::info Legacy Pull Buyers API information
Please remember that for Buyer connections through our Legacy Pull Buyers API, filtering by Hotel-X Access Code is not available. Connections will be identified through the Buyer's **clientname#suppliercode** relationship.  
Note that some Buyers may be transitioning from the Legacy Pull Buyers API to the Hotel-X API, which means they could have traffic via both APIs. If in doubt, we strongly encourage you to **reach out to your Buyers** for more detailed information.
:::