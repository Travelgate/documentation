---
sidebar_position: 3
---

# How to Audit Search Logs

Given the massive volume of search transactions—exceeding **6 billion per day**—Travelgate **does not store search transaction logs by default**. However, if you need to review search logs for troubleshooting, you can manually activate **Search Auditing**.

## How Can I Retrieve Search Logs to Review an Error?

Follow these steps to audit Search logs:
    1. Log into [Travelgate](https://www.travelgate.com/).
    2. Go to **Monitoring > Logging**.
    3. Select the **"Audit Search Logs"** option.
    4. **Choose the connection or access** for which you need Search logs. You can also review your Audit Searches History to track previous audits.
    5. **Start the audit**—our system will begin saving **5% of your Search traffic for 5 minutes**.

    ![new_logging_4](https://storage.travelgate.com/kbase/new_logging_4.jpg)

6. **Wait a few minutes** for the logs to be processed, then retrieve them in the Logging screen.  
7. **Apply the correct filter** by selecting **“Search”** as the **Operation Type** to view the audited logs.

:::info
- Buyer connections using our **Legacy API** are audited at the **connection level** — access-level auditing is not available. This means that when retrieving logs using the Logging tool, you **should not use the Access Filter**, as it will return no results.
- If you're a Seller, you can check whether your Buyer is integrated via the Hotel-X API or the Legacy Pull Buyers API by looking for the “Hotel-X” label on the connection in the “My Connections” screen. If the Buyer is using the Hotel-X API, the [“Hotel-X” label](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details/#additional-access-information) will appear next to the “Buyer” label.
:::

## Requirements to Use the 'Audit Searches' Functionality
- Travelgate's system needs a **steady flow of traffic** (not just isolated requests) to accurately register Search transactions.  
- If you're in a **testing phase** or have **low traffic**, we recommend retrieving complete Search transactions **at the request level**. Follow the guidelines in this [article](/kb/platform/app-features/monitoring-tools/logging/audit-supplier-transactions) for more information.