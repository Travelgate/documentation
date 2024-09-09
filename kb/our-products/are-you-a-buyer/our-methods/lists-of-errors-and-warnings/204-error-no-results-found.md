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

### What can I do as a Buyer if I receive a 204 error in my response?
1. First of all, you should check that the **product requested** is returned within your Seller's portfolio, otherwise, please [force an update](/kb/connections/connections-content/how-to-check-my-connections-content#how-can-i-use-the-force-update-now-functionality) in order to receive their latest information.
1. If you're connected to TravelgateX via our Hotel-X API and use your own [context](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials), it's important you ensure that your **mapping file** is updated (more information on Hotel-X Mapping files, [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview)).
1. If the product requested is included within the Seller's portfolio, you should then check that the Seller returns **availability for your credentials** via the integration. For further information about the Seller's response, remember to set the auditTransactions to true in your Search request (more information on retrieving Seller transactions, [here](/kb/apps/monitoring-apps/logging/how-can-i-download-search-logs)).
1. If the Seller **does not return results for your credentials** via the integration (auditData information), please contact them directly to confirm that your request is valid for both:		
	1. Your credentials
	1. The Search criteria set in your request
1. Should the Seller confirm that **they are returning results** (for your credentials and specific Search criteria) but you are still receiving a 204 error, please do not hesitate to contact our [Customer Care team](https://app.travelgatex.com/tickets) and provide us the complete RQ/RS logs run on your side, plus the availability OK transactions by the Seller for further investigation.

### What can I do as a Seller if one of my Buyers reports no availability errors?
1. **Check Credentials:** Verify that the Buyer’s credentials are properly configured on your side and confirm with the Buyer that they match the ones being used on their end.
2. **Verify Product Availability:** Ensure the requested product is available on your end for the specific search criteria provided by the Buyer. If content discrepancies exist, [force a portfolio update](/kb/connections/connections-content/how-to-check-my-connections-content#how-can-i-use-the-force-update-now-functionality) through our website and inform the Buyer to remap to access the latest content.
3. **Update the Mapping File:** If the Buyer is connected to TravelgateX via our Hotel-X API and uses their own context, they should make sure their mapping file is up-to-date. For more information on Hotel-X Mapping files, refer to this [link](https://docs.travelgate.com/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping). You can see if one of your Buyers is connected via our Hotel-X Pull Buyer API in the "My Connections" section.
4. **Confirm Request Validity:** If, after the above checks, your system shows availability but the Buyer still doesn't receive it, the Buyer should audit their Search logs by setting auditTransactions to “true” for a complete verification at the integration level. They should contact us directly via “Tickets” and provide the complete RQRS no-availability logs from their end, along with the corresponding matching transactions that show results on your side (ensure both requests use the exact same product and search criteria).
