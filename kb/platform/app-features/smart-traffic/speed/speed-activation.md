---
sidebar_position: 3
---

# Speed Activation

Once logged into [our Platform](https://www.travelgate.com/), navigate to **Smart Traffic > Speed**. The **Speed Dashboard** displays all active Speed accesses and those optimized previously.

![speed_1](https://storage.travelgate.com/kbase/speed_1.jpg)

### Available Dashboard Information:
- Connection name and code
- Access name and code
- Last Speed configuration update
- **Time Reduction:** Percentage of response time reduction in the last 24 hours
- **Traffic Reduction:** Percentage of traffic saved from the Seller’s system in the last 24 hours
- **Active Status:** Toggle Speed access on/off
- **Actions:** Edit Speed configurations or check detailed performance data

## How Does Speed Work?
To configure Speed for a connection or one of your accesses, click on **'Speed a connection'** and complete these three steps:

### 1. Select Connection or Access
Choose the **connection**/**access** where you want to activate caching.

- For **Hotel-X Buyers**, you must always select by **Access**.
- For **Legacy Buyers**, you must always select by **Connection**.

![speed_2](https://storage.travelgate.com/kbase/speed_2.jpg)

### 2. Choose Speed Mode
Speed operates in two modes when the requested data is **not already cached**:
- **Standard:** If a search result is not stored in Speed, the request is sent to the Seller, and the response is returned to the Buyer. **(Recommended)**
- **Fast:** If a search result is not stored in Speed, no results are returned. However, the request is sent to the Seller to store the response for future searches. **(This mode increases the likelihood of "no availability" results.)**

![speed_3](https://storage.travelgate.com/kbase/speed_3.jpg)

### 3. Set Cache Storage Time (TTL)
By default, stored cache default value is **24 hours**, but Speed allows customization at the **booking window level**. For example, you can store searches for the next two days in cache for 6 hours.

- **Booking Window:** Defines the applicable date range. Default time ranges are available, or you can customize your own.
- **Storage Time (TTL - Time to Live):** Determines how long Supplier search results remain cached. Default TTL values are available, but you can adjust them as needed.

💡 **Automatic Updates:** If a quote error occurs, all cached searches for that hotel are automatically deleted to prevent future issues, ensuring your Speed cache remains up to date.

Once configured, click **'Activate Speed'**, and caching will begin immediately. Performance insights will be available shortly.

![speed_4](https://storage.travelgate.com/kbase/speed_4.jpg)

## How to Check Connection Performance
To monitor improvements in response time and traffic reduction, select **"View Detail"** from your Speed accesses list.

![speed_5](https://storage.travelgate.com/kbase/speed_5.jpg)

- **Requests handled by Speed vs. requests sent to the Seller**
- **Time reduction achieved (Speed vs. Seller response times)**

## Can I skip cache for a specific request when Speed is active?

Yes, the Buyer can choose to skip the cache for a specific request by setting the `useCache` parameter to `false` in the request configuration. 

    | Parameter Key | Type    | Possible Values  | Description                          |
    |---------------|---------|------------------|--------------------------------------|
    | `useCache`   | string | `false` | If set to `false`, skip the cache and forwards the request to the Seller. |

:::warning Mandatory
To enable this feature for a connection, please open a **case** in our [Support Portal](https://app.travelgate.com/support). Otherwise, the parameter will have no effect.
:::

:::info Hotel-X Buyers
Buyers using the **Hotel-X Buyers Pull API** must use the `AddParameter` plugin. More information [here](../../../../../docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter).
:::


