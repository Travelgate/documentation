---
sidebar_position: 2
---

# How to Use Logging

## Logging: Monitor and Review Transactions at Travelgate

Travelgate’s **Logging** feature offers a powerful way to track and analyze transaction logs. Whether you need to review Booking Flow transactions or identify error codes, Logging provides access to critical data for troubleshooting and performance monitoring.

This guide will walk you through how to use Logging, the information it provides, and how to refine your search using filters. It also covers specific cases, such as retrieving One Step Book operation logs and important details for Legacy Pull Buyers API users.

By leveraging Logging, you can gain valuable insights into your connection activity, improve performance, and quickly resolve issues. Let’s dive in! 

## How Can I Use Logging?

1. Log into [our Platform](https://www.travelgate.com/).
2. Navigate to Monitoring (in the top menu) and select [Logging](https://app.travelgate.com/logging).
3. Choose your search method: You can search by **connection, reference, or session ID**.
4. Apply filters to refine your search:
   - Time range.
   - Access: Filter by Hotel-X Access (by Name or Code). This filter applies only to **Hotel-X connections**.
   - Operation type: Search, Quote, Book, Cancel, Other (Booking List/Booking Read).  
     - *Note:* The "Search" operation type will only return results if searches have been **[audited first](/kb/platform/app-features/monitoring-tools/logging/audit-searches-functionality)**.
   - Status/Error code: Select specific errors to filter results.
5. Click on "Search logs" to retrieve the logs.

![logging_new_1](https://storage.travelgate.com/kbase/logging_new_1.jpg)

## What Information Does Logging Provide?

When your search returns logs, Logging will display the following details:

- **Timestamp** (date and time of the transaction)
- **Transaction duration**
- **Connection**
- **Client**
- **Access**
- **Status/Error Code**
- **Operation type** (Search, Quote, Book, Cancel, Other)
- **Session ID** (unique identifier for the transaction)
- **Traffic Type** (Basic, Optimized, Scheduler, Speed)
- **Actions**: Logs available for download include Hotel-X Logs/Legacy Logs, and Connector Logs. For Book transactions, you can directly download the corresponding Quote logs used in that specific booking flow. Additionally, you can download all visible logs on your screen by clicking the 'Download All' button above the table.

![logging_new_2](https://storage.travelgate.com/kbase/logging_new_2.jpg)

If your search returns a large number of results, use additional filters on the right to refine your search:
- **Filter by Client/Supplier**
- **Filter by Access**
- **Filter by Duration**

![logging_new_3](https://storage.travelgate.com/kbase/logging_new_3.jpg)

:::info Reservation Status vs. Logging Status
The "Status/Error Code" displayed in the Logging screen only shows whether the transaction was processed without errors—it does **not** reflect the actual status of a reservation. For example, a reservation may appear as OK in the Logging screen, even if its actual [Book status](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/book/book-status) is UNKNOWN, as long as the transaction completed without errors.  

To determine the actual [status of a reservation](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/book/book-status), you should perform a [Booking Read](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read) operation.
:::

## Can I download my Hotel-X logs through Logging?
Yes, you can retrieve Hotel-X logs directly by selecting **'Hotel-X Logs'** under the Download options.

### What is the difference between Hotel-X Logs, Legacy Logs, and Connector Logs?

In the **Actions** section, you can download different types of transaction logs:

- **Hotel-X Logs**: Transactions made by **Buyers** through our **Hotel-X API**.
- **Legacy Logs**: Transactions made by **Buyers** through our **Legacy API**.
- **Connector Logs**: Transactions made through our **integration** when directly interacting with the **Seller’s API**.  

**Connector Logs** are always available, as they capture all activity between our integration and the Seller. However, you’ll see either **Hotel-X Logs or Legacy Logs**—never both—depending on which API the Buyer is using.

## Can I Retrieve Logs from a One Step Book Operation?

Yes, you can obtain **Quote and Book logs** for the **One Step Book** operation using Logging. Simply apply the appropriate filters (**connection, reference, or session ID**) to locate the relevant logs.

:::info Legacy Pull Buyers API Information  
For Buyer connections through our **Legacy Pull Buyers API**, filtering by **Hotel-X Access Code** is **not available**. Instead, connections are identified through the Buyer's **clientname#suppliercode** relationship.  

Some Buyers may be transitioning from the **Legacy Pull Buyers API** to the **Hotel-X API**, meaning they could have traffic on both APIs. If you're unsure, we strongly recommend **reaching out to your Buyers** for further details.
:::
