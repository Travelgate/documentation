---
sidebar_position: 2
---

# How to Use Speed

## Speed: Streamline Traffic with Our Smart Cache Solution

At Travelgate, we continuously evolve our technology to meet our Partners’ needs. One key challenge is reducing traffic and improving Search response times. Our **dynamic cache solution, Speed**, helps optimize performance by saving up to **80% of total hits** to the Seller's system, resulting in significantly faster Search responses.

<iframe width="560" height="315" src="https://www.youtube.com/embed/uZO0Wm74wMA?si=gWCRLuObK1RjvLJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Who Can Benefit from Speed and How

- **Sellers:**
  - Facing challenges with high traffic volumes or slow response times.
  - Looking to offer their product to Buyers more efficiently and increase sales opportunities.
  - Seeking to reduce traffic (hits) and minimize infrastructure costs.
- **Buyers:**
  - Requiring exceptionally fast Search response times (e.g., XML, B2B, metasearch Partners).
  - Needing quicker access to products beyond the limitations of the Seller’s system.

## Who Can Activate Speed?
Both **Buyers and Sellers** can activate Speed within Travelgate. However, **specific configurations are required**, such as selecting the operational mode and setting the cache storage time (TTL). Collaboration between Buyers and Sellers may be necessary to optimize Speed settings according to their needs.

:::tip Consistent Traffic, Optimal Results!
To maximize the benefits of Speed, maintain a **high volume of requests and a consistent flow of traffic**. Monitor Speed's performance after activation and **adjust the TTL** if needed.
:::

## How to Activate Speed
Once logged into [our Portal](https://www.travelgate.com/), navigate to **Smart Traffic > Speed**. The **Speed Dashboard** displays all active Speed accesses and those optimized previously.

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
To configure Speed for one of your accesses, click on **'Speed an Access'** and complete these three steps:

### 1. Select Connection and Access
Choose the connection and access where you want to activate caching.

![speed_2](https://storage.travelgate.com/kbase/speed_2.jpg)

### 2. Choose Speed Mode
Speed operates in two modes when the requested data is **not already cached**:
- **Standard:** If a search result is not stored in Speed, the request is sent to the Seller, and the response is returned to the Buyer. **(Recommended)**
- **Fast:** If a search result is not stored in Speed, no results are returned. However, the request is sent to the Seller to store the response for future searches. **(This mode increases the likelihood of "no availability" results.)**

![speed_3](https://storage.travelgate.com/kbase/speed_3.jpg)

### 3. Set Cache Storage Time (TTL)
By default, stored cache default value is **24 hours** (recommended), but Speed allows customization at the **booking window level**. For example, you can store searches for the next two days in cache for 6 hours.

- **Booking Window:** Defines the applicable date range. Default time ranges are available, or you can customize your own.
- **Storage Time (TTL - Time to Live):** Determines how long Supplier search results remain cached. Default TTL values are available, but you can adjust them as needed.

💡 **Automatic Updates:** If a quote error occurs, all cached searches for that hotel are automatically deleted to prevent future issues, ensuring your Speed cache remains up to date.

Once configured, click **'Activate Speed'**, and caching will begin immediately. Performance insights will be available shortly.

![speed_4](https://storage.travelgate.com/kbase/speed_4.jpg)

## How to Check Connection Performance
To monitor improvements in response time and traffic reduction, select **"View Detail"** from your Speed accesses list.

![speed_5](https://storage.travelgate.com/kbase/speed_5.jpg)

Choose a date range to compare:
- **Requests handled by Speed vs. requests sent to the Seller**
- **Time reduction achieved (Speed vs. Seller response times)**
