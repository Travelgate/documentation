--- 
sidebar_position: 4
---

# How to Optimize Search Results

### Experiencing a High Percentage of No Availability in a Particular Connection?

If you are experiencing a high percentage of no availability in a particular connection, it is typically caused by a mapping issue. Ensure that you have mapped only those hotels that the supplier has enabled for you. Alternatively, the issue might arise from requesting dates when hotels are closed or requesting availability for markets not allowed for specific hotels.

:::tip
Check out [this article](/kb/connectivity-products/for-buyers/errors-and-warnings/error-no-results-found) to learn everything about 204 errors!
:::

### Tips to Convert "No Availability" into "Results"

To resolve availability issues, ensure the following with the Seller:

1. **Verify Total Hotels**  
   After confirming the expected number of hotels with the Seller, download the Seller’s Hotel List via Travelgate. If the number matches your expectations, we recommend unmapping all hotels and remapping only those you have just received. If there’s a [significant discrepancy](/kb/app-features/connections/connections-content/content-discrepancies), contact our Support team for assistance.

2. **Verify Seller Response**  
   Ensure the Seller is returning availability for your credentials via the integration. To analyze the Seller's response, you can audit your searches using the [Audit Search Logs Functionality](/kb/app-features/monitoring-tools/logging/audit-searches-functionality) or audit transactions for a specific Search (at a request level) by temporarily setting the `auditTransactions` field to true.

3. **Market-Specific Availability**  
   Check with the Seller if there are hotels or hotel chains in your portfolio that are available only to specific markets or nationalities. Consider this when addressing availability issues. For example, if a hotel does not cater to the Spanish market, setting the request with the "ES" market may result in no availability.

4. **Seasonal or Date-Specific Closures**  
   Confirm with the Seller whether any specific hotels or hotel chains are closed on certain dates or seasons. This could explain availability issues during those periods.

5. **Minimum Stay Requirements**  
   Inquire with the Seller about any minimum length of stay requirements for certain hotels or hotel chains. This could be another factor contributing to availability issues.

:::info How Can I Obtain the Seller Logs in Their Own Format?
To obtain Seller logs (in their own system format), use the `auditData` parameter in the Hotel-X Pull Buyers API or the `registerTransactions` feature in the Legacy Pull Buyers API. For detailed instructions on retrieving these transactions, please refer to the following [article](/kb/app-features/monitoring-tools/logging/audit-supplier-transactions).
:::

