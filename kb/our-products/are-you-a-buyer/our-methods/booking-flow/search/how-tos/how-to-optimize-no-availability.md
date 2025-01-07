---
sidebar_position: 1
---

# How to optimize a large % of No Availability

### Experiencing a high percentage of no availability in a particular connection?

If you are experiencing a high percentage of no availability in a particular connection, this is typically caused by a mapping issue. First, ensure that you have mapped only those hotels that the supplier has enabled for you. Alternatively, the issue might arise from requesting dates when hotels are closed, or requesting availability for markets not allowed for specific hotels.

:::tip
Check out [this article](/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-no-results-found) to learn everything about 204 errors!
:::

### Tips to Convert "No Availability" into "Results"

Ensure the following with the Seller:

1. **Verify Total Hotels**  
After confirming the expected number of hotels with the Seller, download the Seller’s Hotel List via Travelgate. If the number matches your expectations, we recommend unmapping all hotels and remapping only those you have just received. If there’s a [significant discrepancy](/kb/connections/connections-content/i-am-not-receiving-the-static-content-expected), contact our Support team for assistance.

2. **Verify Seller response**  
Check that the Seller returns availability for your credentials via the integration. For further information about the Seller's response, you may audit your searches using the [Audit Search Logs Functionality](/kb/apps/monitoring-apps/logging/how-can-i-download-search-logs) or [audit transactions for a specific Search](/kb/apps/monitoring-apps/logging/how-can-i-receive-seller-transactions-in-their-api-format) (at a request level) by temporarily setting the `auditTransactions` field to true.
   
3. **Market-Specific Availability**  
Check with the Seller if there are hotels or hotel chains in your portfolio that are available only to specific markets or nationalities. Consider this when addressing availability issues. For instance, if a hotel does not cater to the Spanish market, setting the request with the “ES” market can result in no availability.

4. **Seasonal or Date-Specific Closures**  
Confirm with the Seller whether any specific hotels or hotel chains are closed on certain dates or seasons. This could explain availability issues during those periods.

5. **Minimum Stay Requirements**  
Inquire with the Seller about any minimum length of stay requirements for certain hotels or hotel chains. This could be another factor contributing to availability issues.

:::info How can I obtain the Seller logs in their own format?
To obtain Seller logs (in their own system format), use the `auditData` parameter in the Hotel-X Pull Buyers API or the `registerTransactions` feature in the Legacy Pull Buyers API. For detailed instructions on retrieving these transactions, please refer to the following [article](/kb/apps/monitoring-apps/logging/how-can-i-receive-seller-transactions-in-their-api-format).
:::