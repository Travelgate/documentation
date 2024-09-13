---
sidebar_position: 5
---

# 104 error - Connection Timeout With Provider

This error occurs when the Seller's response time has exceeded the timeout set in the Buyer's request.

### Hotel-X Buyers API
You may find the timeout value at a request level (in your Settings) or at a Default Settings level (in our website>Conections>[Connections Settings](/kb/connections/connections-settings)).

### Legacy Buyers API
This timeout is included as a Common Element ("timeoutMilliseconds") in every request:

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

### What should I do as a Buyer if I detect an increase in timeout errors from a Seller?
1. **Increase the Seller's timeout allowed:** Adjust the timeout settings to give the Seller more time to respond.
2. **Contact the Seller directly:** Let the Seller know about your response time expectations. They might be able to optimize their system to respond more quickly.
3. **Reduce the number of hotels or destinations requested:** Requesting information for a large number of hotels or destinations at once could be slowing down the Seller's response time. Reducing the number of requests might help.
4. **Retry the operation:** Sometimes, network issues or temporary system problems can cause a timeout and retrying the operation might resolve the issue. Note that this action applies to Search. If you detect a timeout error in Quote or Book, you should start the booking flow from scratch.

### What should I do as a Seller if one of my Buyers reports timeout errors?
1. **Check System Performance:** Review your system's performance for any issues causing slow response times, such as server overload, network problems, or software inefficiencies.
2. **Optimize Your System:** Consider upgrading your system to boost response times.
3. **Communicate with the Buyer:** They might be able to increase the request timeout value or reduce the number of hotels or destinations in their request.
4. **Monitor Performance:** Utilize monitoring tools to track your system's performance over time, helping you identify any recurring issues or trends that cause delays. You can also access Travelgate’s monitoring tools ([Stats](/kb/apps/monitoring-apps/stats/stats-connectivity-dashboard), [Alerts](https://docs.travelgate.com/kb/apps/monitoring-apps/alerts/alerts-real-time-detection)) to help you keep track of the Buyer’s performance.

:::tip
If you’ve followed the above tips and the performance is still not optimal, consider activating **[Speed](/kb/apps/smart-traffic-apps/speed/speed-app)**, our caching solution. Enabling Speed can help improve response times and enhance the overall performance of the Seller's system.
:::