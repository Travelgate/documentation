---
sidebar_position: 9
---

# 204 Error - No Results Found

## What Does a 204 Error Mean?
A **204 error** occurs when a Seller does not return any results for the specific search criteria in the Buyer's request (e.g., hotel, dates, market, etc.).

This error is primarily returned in **Search responses**, but it can also appear in **Quote** or **Book responses** if an additional search is required for the method.

As a Buyer, you can audit the Seller's response by setting `auditTransactions` to `true` in your Search request.

:::info
For more details on auditing Seller transactions, see [this article](/kb/web-features/monitoring-tools/logging/audit-searches-functionality).
:::

## For Buyers
### How to Handle 204 Errors in Search Responses

#### 1. **Verify Product in Seller's Portfolio**  
   - Ensure the requested product is included in the Seller's portfolio. If not, [force an update](/kb/web-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality) to receive the latest information.

#### 2. **Check Mapping File**  
   - If using the **Hotel-X Pull Buyers API** with your own [context](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials), ensure your mapping file is updated. More details on Hotel-X Mapping files can be found [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview).

#### 3. **Align Request Configurations**  
   - For **Legacy Pull Buyers API** users, confirm that your request configurations match the access configuration in [My Connections](/kb/web-features/connections/my-connections/managing-connections/connections-details).

#### 4. **Confirm Seller Availability**  
   - If the product is in the Seller's portfolio, check whether they provide availability for your credentials. Use the **[Audit Search Logs Functionality](/kb/web-features/monitoring-tools/logging/audit-searches-functionality)** or audit transactions for a specific search by setting `auditTransactions` to `true` temporarily.

#### 5. **Direct Seller Communication**  
   - If no results appear via integration, contact the Seller to verify that:
     - Your credentials are valid.
     - Your search criteria align with their availability.

#### 6. **Handling Persistent 204 Errors**  
   - If the Seller confirms availability but you still receive a 204 error, reach out to **Customer Support** with complete **request (RQ) and response (RS) logs**, along with the Seller’s successful availability transactions for further analysis.

:::info How to Obtain Seller Logs in Their Own Format 
Use the `auditData` parameter in the **Hotel-X Pull Buyers API** or `registerTransactions` in the **Legacy Pull Buyers API**. Detailed instructions can be found [here](/kb/web-features/monitoring-tools/logging/audit-supplier-transactions).
:::

### Why Do I Receive No Availability Through Travelgate When the Supplier's Portal Returns Results?
Travelgate displays results based on the Seller’s integration. A Supplier may return results in their own portal but not through Travelgate. If this happens, **contact the Supplier** directly to ensure product information for your credentials is correctly updated.

### How to Handle 204 Errors in Quote Responses

#### 1. **Shorten Interval Between Calls**  
   - Reduce the time between Search and Quote calls to minimize the risk of options becoming unavailable.

#### 2. **Check Seller Caching**  
   - Confirm whether the Seller uses caching mechanisms that could be causing no availability errors.

#### 3. **Consider Peak Dates**  
   - High-occupancy periods or last-minute searches may result in limited availability.

#### 4. **Review Speed Configuration**  
   - If using **Speed**, check the **TTL (Time to Live) settings** and adjust them if needed. More details on Speed configuration can be found [here](/kb/web-features/smart-traffic/speed/speed-details#how-does-it-work%EF%B8%8F).

## For Sellers

### How to Handle 204 Errors in Search Responses

#### 1. **Check Credentials**  
   - Verify that the Buyer’s credentials are correctly configured on your end and match what they are using.

#### 2. **Verify Product Availability**  
   - Ensure the requested product is available for the specified search criteria. If discrepancies exist, [force a portfolio update](/kb/web-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality) and ask the Buyer to remap.

#### 3. **Update Mapping File**  
   - If the Buyer is using **Hotel-X API**, they should ensure their mapping file is current. More details can be found [here](https://docs.travelgate.com/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping).

#### 4. **Confirm Request Validity**  
   - If your system shows availability but the Buyer does not receive it, they should audit their **Search logs** by setting `auditTransactions` to `true`. If discrepancies persist, they should provide:
     - Complete **request and response no-availability logs**.
     - Matching transactions from your side.
     - Identical product and search criteria.

