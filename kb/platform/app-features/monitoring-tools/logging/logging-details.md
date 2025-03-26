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
   - Time range (UTC)
   - Operation type: Search, Quote, Book, Cancel, Other (Booking List/Booking Read)  
     - *Note:* The "Search" operation type will only return results if searches have been **[audited first](/kb/app-features/monitoring-tools/logging/audit-searches-functionality)**.
   - Status/Error code: Select specific errors to filter results.
5. Click on "Search" to retrieve the logs.

![new_logging_1](https://storage.travelgate.com/kbase/new_logging_1.jpg)

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
- **Actions**: Book Download and Quote Download: Download Quote transactions related to a specific booking flow.
- **Download All**: Export all logs visible on the screen.

![quotedownload_functionality](https://storage.travelgate.com/kbase/quotedownload_functionality.jpg)

If your search returns a large number of results, use additional filters on the right to refine your search:
- **Filter by Supplier**
- **Filter by Access**
- **Filter by Duration**

![new_logging_3](https://storage.travelgate.com/kbase/new_logging_3.jpg)

## Can I Download My Hotel-X Logs Through Logging?

Currently, **Hotel-X logs cannot be retrieved directly through Logging**. We recommend capturing them at the request level on your end if needed. Additionally, ensure that the ["auditTransactions"](/kb/app-features/monitoring-tools/logging/audit-supplier-transactions#application-and-recommendations-on-the-audittransactions-field) value is **not set to "true" by default**.

## Can I Retrieve Logs from a One Step Book Operation?

Yes! You can obtain **Quote and Book logs** for the **One Step Book** operation using Logging. Simply apply the appropriate filters (**connection, reference, or session ID**) to locate the relevant logs.

:::info Legacy Pull Buyers API Information  
For Buyer connections through our **Legacy Pull Buyers API**, filtering by **Hotel-X Access Code** is **not available**. Instead, connections are identified through the Buyer's **clientname#suppliercode** relationship.  

Some Buyers may be transitioning from the **Legacy Pull Buyers API** to the **Hotel-X API**, meaning they could have traffic on both APIs. If you're unsure, we strongly recommend **reaching out to your Buyers** for further details.
:::
