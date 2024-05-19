---
sidebar_position: 5
---

# 104 error - Connection Timeout With Provider

This error occurs when the Seller's response time has exceeded the timeout set in the Buyer's request.

### Hotel-X Buyers API
You may find the timeout value at a request level (in your Settings) or at a Default Settings level (in our website>Conections>[Connections Settings](/kb/connections/connections-settings)).

### Legacy Buyers API
This timeout is included as a [Common Element]8v) ("timeoutMilliseconds") in every request:

![104_error](https://storage.travelgate.com/kbase/104_error.jpg)

In the aforementioned example, the Buyer sets a timeout of 24700 milliseconds (24.7 seconds) so that will be the time that TravelgateX will wait for a response by the Seller. Error 104 will be returned if we are not able to obtain a response from the Seller's system before the established timeout:

```
<applicationErrors>
    <code/>
    <type>104</type>
    <description>Connection Timeout With Provider</description>
    <httpStatusCode>0</httpStatusCode>
</applicationErrors>
```

### How can I solve timeout errors?💡
1. Increase the Seller's timeout allowed
1. Contact the Seller directly in order to let them know about your response time expectations
1. Reduce the number of hotels/destinations requested.
1. Retry the operation

:::tip
If you have followed the tips mentioned above and the Seller's performance is still not optimal, you can try activating **[Speed](/kb/apps/smart-traffic-apps/speed/speed-app)**, our caching solution. By enabling Speed, you may be able to improve the response time and overall performance of the Seller's system (learn more here).
:::