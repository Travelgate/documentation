--- 
sidebar_position: 4
---

# How to Optimize Search Results

## Trouble with No Availability in a Connection?

If you are experiencing a high percentage of [no availability](/kb/connectivity-products/for-buyers/errors-and-warnings/error-no-results-found) in a particular connection, it is typically caused by a mapping issue. Ensure that you have mapped only those hotels that the supplier has enabled for you. Alternatively, the issue might arise from requesting dates when hotels are closed or requesting availability for markets not allowed for specific hotels.

:::tip
Check out [this article](/kb/connectivity-products/for-buyers/errors-and-warnings/error-no-results-found) to learn everything about 204 errors!
:::

### Tips to Convert "No Availability" into "Results"

To resolve availability issues, ensure the following with the Seller:

1. **Verify Total Hotels**  
   After confirming the expected number of hotels with the Seller, download the [Seller’s Hotel List](/kb/connectivity-products/for-buyers/hotel-x/content/hotels) via Travelgate. If the number matches your expectations, we recommend unmapping all hotels and [remapping](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality) only those you have just received. If there’s a [significant discrepancy](/kb/platform/app-features/connections/connections-content/content-discrepancies), contact our Support team for assistance.

2. **Verify Seller Response**  
   Ensure the Seller is returning availability for your credentials via the integration. To analyze the Seller's response, you can audit your searches using the [Audit Search Logs Functionality](/kb/platform/app-features/monitoring-tools/logging/audit-searches-functionality) or [audit transactions for a specific Search](/kb/platform/app-features/monitoring-tools/logging/audit-supplier-transactions) (at the request level) by temporarily setting the `auditTransactions` field to true.

3. **Market-Specific Availability**  
   Check with the Seller to see if any hotels or hotel chains in your portfolio are restricted to certain markets or nationalities. For example, if a hotel doesn’t serve the Spanish market, using the 'ES' market in your request may return no availability.

4. **Seasonal or Date-Specific Closures**  
   Confirm with the Seller whether any specific hotels or hotel chains are closed on certain dates or seasons. This could explain availability issues during those periods.

5. **Minimum Stay Requirements**  
   Inquire with the Seller about any minimum length of stay requirements for certain hotels or hotel chains. This could be another factor contributing to availability issues.

6. **Other Supplier Restrictions**
   For complete details on supplier restrictions, review the supplier's [metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata) in advance to identify any factors that could affect availability.

:::info How Can I Obtain the Seller Logs in Their Own Format?
To obtain Seller logs (in their own system format), use the `auditData` parameter in the Hotel-X Pull Buyers API or the `registerTransactions` feature in the Legacy Pull Buyers API. For detailed instructions on retrieving these transactions, please refer to the following [article](/kb/platform/app-features/monitoring-tools/logging/audit-supplier-transactions).
:::

