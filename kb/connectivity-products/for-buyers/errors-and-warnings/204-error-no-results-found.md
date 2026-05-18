---
sidebar_position: 9
---

# 204 Error - No results found

This comprehensive guide covers how to troubleshoot and resolve 204 'no results found' errors in your integrations, with dedicated sections for both Buyers and Sellers.

> **Terminology:** In this article, **204 error**, **no results**, and **no availability** refer to the same condition: the Seller returns zero results for a request.

:::info When to Use This Article
**You received a 204 error** in your Search, Quote, or Book response and need to troubleshoot the issue. If you're trying to prevent high no-availability rates before they occur, see [How to Optimize Search Results](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/search/how-to-optimize-search-results).
:::

## What Does a 204 Error Mean?
A **204 error** occurs when a Seller does not return any results for the specific search criteria in the Buyer's request (e.g., hotel, dates, market, etc.).

#### Example:
```json
"errors": [
            {
              "code": "",
              "description": "No results found",
              "type": "204"
            }
          ]
```

This error is primarily returned in **Search responses**, but it can also appear in **Quote** or **Book responses** if an additional search is required for the method.

As a Buyer, you can audit the Seller's response by setting `auditTransactions` to `true` in your Search request.

:::info
For more details on auditing Seller transactions, see [Audit Search Logs Functionality](/kb/platform/app-features/monitoring-tools/logging/audit-searches-functionality).
:::

## For Buyers
### How to Handle 204 Errors in Search Responses

This section is an **incident runbook** for active 204 failures. It is designed for fast root-cause isolation and recovery on specific failing searches.

For long-term availability improvement planning, use [How to Optimize Search Results](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/search/how-to-optimize-search-results).

Start with Buyer credentials before reviewing portfolio, mapping, or cache behavior. If credentials are not active or not aligned, the rest of the checks are not reliable.

| Priority | What to Review | Source of Data | What Good Looks Like | Action if Fails |
|---|---|---|---|---|
| 1 | Buyer credentials and access setup | [HotelX Credentials](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials), [My Connections details](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details) | Active credentials and access configuration aligned with Seller setup | Fix credentials or access configuration first |
| 2 | Seller raw response vs Travelgate response | [Audit Search Logs Functionality](/kb/platform/app-features/monitoring-tools/logging/audit-searches-functionality), [audit transactions](/kb/platform/app-features/monitoring-tools/logging/audit-supplier-transactions) | Seller response and Travelgate output are consistent for tested criteria | Identify where availability is being filtered |
| 3 | Portfolio and mapping coverage | [Connections Content](/kb/platform/app-features/connections/connections-content/content-management), [HotelX Mapping File Overview](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview) | Requested hotels are enabled and mapped correctly | Force update content and remap valid hotels |
| 4 | Request constraints (market, dates, stay) | Seller Metadata and test searches | Search criteria match Seller restrictions | Adjust request parameters to valid values |
| 5 | Speed/cache behavior | [Speed Mode Settings](/kb/platform/app-features/smart-traffic/speed/speed-activation#2-choose-speed-mode) | Standard mode used for troubleshooting baseline | Switch from Fast to Standard and re-test |
| 6 | Seller validation with evidence | Audit logs, request/response samples, credential context | Seller confirms credentials, portfolio scope, and criteria compatibility | Align Seller-side configuration or request rules |
| 7 | Support escalation package | Request/response logs, audit evidence, successful Seller references | Support receives complete reproducible case details | Open support case with full evidence package |

#### 1. **Verify Buyer Credentials First**
- Confirm your Buyer credentials are active and correctly configured in your connection.
- For **Legacy Pull Buyers API**, ensure request configuration matches [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details).
- If credentials are incorrect, stop and fix this first.

#### 2. **Audit the Seller Response**
Auditing lets you inspect the Seller response in its original format before Travelgate processing.

- **For HotelX API users:** Set `auditTransactions: true` in your Search request.
- **For Legacy API users:** Set `registerTransactions: true` in your Search request.

Use [Audit Search Logs Functionality](/kb/platform/app-features/monitoring-tools/logging/audit-searches-functionality) for log-level analysis, or [audit transactions](/kb/platform/app-features/monitoring-tools/logging/audit-supplier-transactions) for request-level raw payloads.

**Example (HotelX API):**
```graphql
query {
  hotelSearch(
    criteria: {...}
    auditTransactions: true
  ) {
    errors { code description type }
  }
}
```

#### 3. **Verify Portfolio and Mapping Coverage**
- Ensure requested products/hotels are in the Seller portfolio.
- If needed, [force an update](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality).
- If using **HotelX Pull Buyers API** with your own context, confirm mapping is current in [HotelX Mapping File Overview](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview).

#### 4. **Validate Request Constraints**
- Confirm market, nationality, date, and stay parameters are valid for Seller rules.
- Re-test using criteria known to be allowed for your credentials.

#### 5. **Review Speed Configuration**
- If your connection/access uses [Speed](/kb/platform/app-features/smart-traffic/speed/speed-activation#2-choose-speed-mode), review current mode.
- **Fast mode** can increase no-availability outcomes because only cached responses are returned.
- Use **Standard mode** for troubleshooting and baseline validation.

#### 6. **Contact Seller With Evidence**
- Share audited request/response examples and ask the Seller to confirm credential permissions and portfolio scope.

#### 7. **Escalate Persistent 204 Cases**
- If 204 persists after completing the checks above, contact **Customer Support** with:
  - Request/response logs
  - Audit evidence
  - Seller successful availability references for matching criteria

After incident recovery, continue with the [optimization playbook](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/search/how-to-optimize-search-results) to reduce future no-availability rates.

:::info How to Obtain Seller Logs in Their Own Format 
Use the `auditData` parameter in the **HotelX Pull Buyers API** or `registerTransactions` in the **Legacy Pull Buyers API**. Detailed instructions are available in [Audit Supplier Transactions](/kb/platform/app-features/monitoring-tools/logging/audit-supplier-transactions).
:::

### Why Do I Receive No Availability Through Travelgate When the Seller's Platform Returns Results?
Travelgate displays results based on the Seller’s integration. A Seller may return results in their own platform but not through Travelgate. If this happens, **contact the Seller** directly to ensure product information for your credentials is correctly updated.

### How to Handle 204 Errors in Quote Responses

#### 1. **Shorten Interval Between Calls**  
   - Reduce the time between Search and Quote calls to minimize the risk of options becoming unavailable.

#### 2. **Check Seller Caching**  
   - Confirm whether the Seller uses caching mechanisms that could be causing no availability errors.

#### 3. **Consider Peak Dates**  
   - High-occupancy periods or last-minute searches may result in limited availability.

#### 4. **Review Speed Configuration**  
   - If using **Speed**, check the **TTL (Time to Live) settings** and adjust them if needed. More details are available in [How Speed Works](/kb/platform/app-features/smart-traffic/speed/speed-activation#how-does-speed-work).

## For Sellers

### How to Handle 204 Errors in Search Responses

#### 1. **Check Credentials**  
   - Verify that the Buyer’s credentials are correctly configured on your end and match what they are using.

#### 2. **Verify Product Availability**  
   - Ensure the requested product is part of your portfolio and is available based on the Buyer's specified search criteria. If discrepancies exist, [force a portfolio update](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality) and ask the Buyer to remap.

#### 3. **Speed Configuration**  
   - If your connection/access is enabled through the [Speed](/kb/platform/app-features/smart-traffic/speed/speed-activation#2-choose-speed-mode) cache feature, review your current Speed mode settings.
      - The **"Fast" mode increases the likelihood of no availability results** because it only displays cached responses.
      - If the data isn’t already stored, no results will appear—though the request is still forwarded to the Seller for future caching.
   - Switch to the Standard speed mode (recommended) and monitor whether the availability ratio improves.

#### 4. **Update Mapping File**  
   - If the Buyer is using **HotelX API**, they should ensure their mapping file is current. More details are available in [HotelX Mapping Plugin Documentation](https://docs.travelgate.com/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping).

#### 5. **Confirm Request Validity**  
   - If your system shows availability but the Buyer does not receive it, they should audit their **Search logs** by setting `auditTransactions` to `true`. If discrepancies persist, they should provide:
     - Complete **request and response no-availability logs**.
     - Matching transactions from your side.
     - Identical product and search criteria.

