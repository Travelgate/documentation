---
sidebar_position: 9
---

# 204 error - No results found

### What does a 204 error mean?💡
The 204 error is returned whenever a Seller does not return any results for the specific Search criteria set in the Buyer's request (e.g. hotel, dates, market, etc.).

This error is mostly returned in Search response, but it can also be returned in Quote or Book response in those cases the integration requires an additional Search to the Seller for that specific method.

Remember that, as a Buyer, you can also check the Seller's response by setting the auditTransactions to "true" in your Search request.

:::info
You will find more information on how to audit Seller's transactions [here](/kb/apps/monitoring-apps/logging/how-can-i-download-search-logs).
:::

### What can I do as a Buyer if I receive 204 errors in Search response?
1. **Verify Product in Seller's Portfolio**  
Verify that the product requested is included in your Seller's portfolio; if not, please [force an update](/kb/connections/connections-content/how-to-check-my-connections-content#how-can-i-use-the-force-update-now-functionality) to receive the latest information.

2. **Check Mapping File**  
If you are connected via our Hotel-X Pull Buyers API and use your own [context](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials), ensure your mapping file is updated (find more on Hotel-X Mapping files, [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview)).

3. **Align Request Configurations**  
For connections through our Legacy Pull Buyers API, confirm that the configuration in your requests aligns with the access configuration for those credentials in [My Connections](/kb/connections/my-connections/).

4. **Confirm Seller Availability**  
If the product requested is present within the Seller's portfolio, ensure the Seller provides availability for your credentials through the integration. For more details on the Seller's response, you can use the [Audit Search Logs Functionality](/kb/apps/monitoring-apps/logging/how-can-i-download-search-logs) or [audit transactions for a specific search](/kb/apps/monitoring-apps/logging/how-can-i-receive-seller-transactions-in-their-api-format) (at a request level) by setting the auditTransactions field to true temporarily.

5. **Direct Seller Communication**  
If the Seller does not provide results for your credentials via the integration (auditData information), please contact them directly to ensure your request is valid for both:
   - Your credentials.
   - The search criteria in your request.

6. **Handling 204 Errors**  
If the Seller confirms returning results for your credentials and specific search criteria, yet you still encounter a 204 error, don't hesitate to reach out to our Customer Support team with complete request (RQ) and response (RS) logs conducted on your end and the Seller's successful availability transactions for further analysis.

:::info How can I obtain the Seller logs in their own format?
To obtain Seller logs (in their own system format), use the `auditData` parameter in the Hotel-X Pull Buyers API or the `registerTransactions` feature in the Legacy Pull Buyers API. For detailed instructions on retrieving these transactions, please refer to the following [article](/kb/apps/monitoring-apps/logging/how-can-i-receive-seller-transactions-in-their-api-format).
:::

### Why do I receive no availability through Travelgate when a Supplier's portal returns results?
The results delivered to our Buyers are based on the information Suppliers provide through the integration, so it's possible for a Supplier to return results on their own portal but not through Travelgate. If this occurs, you should **contact the Supplier** directly to have them review and potentially update the product information for your credentials through the Travelgate integration.


### What can I do as a Seller if my Buyers receive 204 errors in Search response?
1. **Check Credentials**  
Verify that the Buyer’s credentials are properly configured on your side and confirm with the Buyer that they match the ones being used on their end.

2. **Verify Product Availability**  
Ensure the requested product is available on your end for the specific search criteria provided by the Buyer. If content discrepancies exist, [force a portfolio update](/kb/connections/connections-content/how-to-check-my-connections-content#how-can-i-use-the-force-update-now-functionality) through our website and inform the Buyer to remap to access the latest content.

3. **Update the Mapping File**  
If the Buyer is connected to TravelgateX via our Hotel-X API and uses their own context, they should make sure their mapping file is up-to-date. For more information on Hotel-X Mapping files, refer to this [link](https://docs.travelgate.com/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping). You can see if one of your Buyers is connected via our Hotel-X Pull Buyer API in the "My Connections" section.

4. **Confirm Request Validity**  
If, after the above checks, your system shows availability but the Buyer still doesn't receive it, the Buyer should audit their Search logs by setting auditTransactions to “true” for a complete verification at the integration level. They should contact us directly through our “Support Portal” and provide the complete RQRS no-availability logs from their end, along with the corresponding matching transactions that show results on your side (ensure both requests use the exact same product and search criteria).

### What can I do as a Buyer if I receive 204 errors in my Quote response?

1. **Shorten Interval Between Calls**  
Reduce the time between Search and Quote calls to decrease the chance of options becoming unavailable.
   
2. **Check Seller Caching**  
Verify with the Seller if they use any caching mechanisms that might be causing increased no availability errors.
   
3. **Consider Peak Dates**  
Keep in mind that during high-occupancy dates or close to check-in dates, the availability of options may be more limited.

4. **Review Speed Configuration**  
If you have the "Speed" feature activated, review the TTL (Time to Live) settings and adjust them if necessary. (More information about configuring Speed can be found [here](/kb/apps/smart-traffic-apps/speed/speed-app#how-does-it-work%EF%B8%8F)).