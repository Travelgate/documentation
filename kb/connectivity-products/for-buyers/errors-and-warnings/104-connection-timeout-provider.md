---
sidebar_position: 5
---

# 104 Error - Connection Timeout With Provider

## What Does a 104 Error Mean?
A **104 error** occurs when the Seller's response time exceeds the timeout set in the Buyer's request.

## Timeout Configuration by API

### Hotel-X Buyers API
The timeout value can be set at either the request level (in your **Settings**) or at the **Default Settings** level via our website under **Connections > [Connections Settings](/kb/connections/connections-settings)**.

### Legacy Buyers API
In the **Legacy Buyers API** (deprecated), the timeout is defined in every request as a Common Element (`timeoutMilliseconds`):

![104_error](https://storage.travelgate.com/kbase/104_error.jpg)

In the example above, the Buyer sets a timeout of **24,700 milliseconds (24.7 seconds)**. Travelgate will wait for the Seller's response within this period. If no response is received before the timeout, a **104 error** is returned:

```xml
<applicationErrors>
    <code/>
    <type>104</type>
    <description>Connection Timeout With Provider</description>
    <httpStatusCode>0</httpStatusCode>
</applicationErrors>
```

## Troubleshooting Timeout Errors

### Actions for Buyers
1. **Increase the Seller's timeout limit:** Adjust the timeout settings to allow more time for the Seller to respond.
2. **Contact the Seller:** Inform the Seller about your response time expectations so they can optimize their system.
3. **Reduce the number of hotels or destinations requested:** Large requests may slow down the supplier’s response time. Try requesting fewer hotels or destinations.
4. **Retry the operation:** Occasional network or system issues can cause timeouts. Retrying the operation may resolve this, especially for Search. For timeouts occurring in Book, ensure you restart the booking flow beginning at Search. Similarly, if you encounter an error in Book response, ensure to consult the guidelines in the 'Status in Book Response' article.

### Actions for Sellers
1. **Check system performance:** Investigate server load, network stability, and software efficiency to identify potential delays.
2. **Optimize system performance:** Consider upgrades or optimizations to improve response times.
3. **Communicate with the Buyer:** Buyers may adjust their timeout settings or reduce the size of their requests.
4. **Monitor performance:** Use monitoring tools to track system behavior over time and detect issues. Travelgate offers monitoring tools like **[Stats](/kb/apps/monitoring-apps/stats/stats-connectivity-dashboard)** and **[Alerts](https://docs.travelgate.com/kb/apps/monitoring-apps/alerts/alerts-real-time-detection)** to help track Buyer performance.

:::tip
If performance issues persist despite following these steps, consider activating **[Speed](/kb/apps/smart-traffic-apps/speed/speed-app)**, our caching solution. Speed can improve response times and enhance overall system efficiency.
:::
