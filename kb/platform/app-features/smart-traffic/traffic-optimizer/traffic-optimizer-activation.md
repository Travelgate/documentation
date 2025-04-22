---
sidebar_position: 3
---

# Traffic Optimizer Activation

## How Do I Activate Traffic Optimizer?

1. Log into [Travelgate](https://www.travelgate.com/).
2. Navigate to **Smart Traffic > [Traffic Optimizer](https://app.travelgate.com/traffic-optimizer)**. This will take you to the **Traffic Optimizer Dashboard**, where you can review connections and accesses currently active or previously optimized.
3. Click on the **"Optimize a Connection"** button.
   ![to_updated_2](https://storage.travelgate.com/kbase/to_updated_2.jpg)
4. **Select the connection or access to optimize**: Only unconfigured connections or accesses will appear in the menu. If you can't find a connection/access, check the dashboard and review the filters.

   ![traffic_optimizer_3](https://storage.travelgate.com/kbase/traffic_optimizer_3.jpg)

   :::info Traffic Optimizer Modes
   Traffic Optimizer can operate in two modes:
   - **By Connection:** Optimizes all current and future accesses under a Partner connection. If new accesses are added to the connection, they will also be automatically optimized.
   - **By Access:** Optimizes only specific accesses under a Partner connection. Future accesses will not be automatically optimized.
   :::

5. **Configure the optimization criteria**: Define the connection/access details and select the optimization criteria.
   ![traffic_optimizer_4](https://storage.travelgate.com/kbase/traffic_optimizer_4.jpg)

   :::info
   - 'No Availability' and 'Zero Bookings' criteria can be activated automatically.
   - The 'Not in Portfolio' criteria requires manual activation by our team. We will notify you once it's set up.
   :::

## Can I Edit the Configuration?

Yes! To edit optimization criteria for connections or accesses:
1. Click the **three dots** under 'Actions'.
2. Select **"Edit Configuration"**.

If you need to switch from **access-level to connection-level optimization (or vice versa),** please open a [Case](https://app.travelgate.com/support).

![TO_edit_actions](https://storage.travelgate.com/kbase/TO_edit_actions.jpg)
![TO_edit_actions_2](https://storage.travelgate.com/kbase/TO_edit_actions_2.jpg)

## Why Can’t I Find a Specific Connection or Access?

If a connection or access is missing from Traffic Optimizer, consider the following:
- The Buyer must be connected via **Hotel-X API**—only these connections appear in Traffic Optimizer.
- If a connection or access was previously activated but later deactivated, it will be hidden. To view and reactivate it, **uncheck "Show only active"** on the left side of the Traffic Optimizer dashboard.

## What Information is Displayed in the Traffic Optimizer Dashboard?

At the top, three performance summary cards display:

- **Searches 100% Blocked (Yesterday):** Total searches completely blocked and saved.
- **Δ L2B Improvement (Yesterday):** Estimated Look-to-Book (L2B) improvement due to reduced search traffic. This L2B figure is distinct from the one you see in the Stats section.
- **Δ Search NOK Improvement (Yesterday):** Percentage of searches blocked due to the set criteria (**No Availability, No Bookings, Not in Portfolio**). This value is distinct from the one you see in the Stats section.

Additional details available in the dashboard:
- **Connection/Access Name:** By default, only active connections/accesses appear.
- **Last Update (UTC) & Requester:** Shows the latest configuration update and the user who made the change (Buyer, Seller, or Auto Opt.).
- **Criteria:** Lists all active criteria for the connection/access.
- **Hotels Blocked (Today):** Number of hotels blocked today.
- **Searches 100% Blocked (Yesterday):** Total searches blocked the previous day.
- **Active Status:** Toggle optimization on/off.
- **Actions:**
  - **View Blocked Hotels:** See a list of hotels currently blocked.
  - **View Performance:** Analyze search traffic optimization.
  - **Edit Configuration:** Modify optimization criteria.

![to_updated_4](https://storage.travelgate.com/kbase/to_updated_4.jpg)

## How Can I See Which Hotels Are Blocked?

To ensure transparency, a daily list of blocked hotels and their blocking criteria is available.

To view blocked hotels:
1. Select the connection or access.
2. Click on **'Actions' > 'View Blocked Hotels'**.
3. Use filters to search by hotel name, code, or optimization criteria.

![traffic_optimizer_5](https://storage.travelgate.com/kbase/traffic_optimizer_5.jpg)

## How is Traffic Optimizer Improving My Search Traffic?

To monitor performance:
1. Select the connection or access.
2. Click on **'Actions' > 'View Performance'**.
3. View the number of searches saved in the last 24 hours.

![traffic_optimizer_6](https://storage.travelgate.com/kbase/traffic_optimizer_6.jpg)

## Can I Exclude Hotels from Being Blocked?

Yes! You can exclude specific hotels from the blacklist.

- Open a [Case](/kb/platform/support-portal/case-guidelines) with our Customer Support team.
- Some hotels are **temporarily whitelisted** to re-check conversion. This grace period is activated by default for the "Zero bookings" criteria.

### Use Cases:

1. **Traffic Optimizer with "No Availability" Criteria:**
   - **Day 1:** "Hotel A" reports 100% no availability.
   - **Day 2:** "No Availability" criteria is applied, blocking "Hotel A."
   - **Day 3:** "Hotel A" is automatically removed from the blacklist.
   - **Day 4:** If "Hotel A" still reports 100% no availability on day 3, it is blocked again.

2. **Traffic Optimizer with "Zero Bookings" Criteria:**
   - **Day 1:** "Hotel A" has never been booked by any Buyer connected to the Supplier.
   - **Day 2:** "Zero Bookings" criteria is applied, blocking "Hotel A."
   - **Day 3:** "Hotel A" is temporarily whitelisted to allow new requests.
   - **Day _n_:** If "Hotel A" receives a booking, it is removed from the blacklist.

:::info
- All criteria (**No Availability, Zero Bookings, and Not in Portfolio**) can be applied together. However, we recommend **starting with one at a time**.
- To activate the "Zero Bookings" criterion, the connection/access must have **at least one booking per month for the past six months** (excluding the current month).
- When a Buyer requests a blacklisted hotel, the following **error/warning** appears:
  ```json
  {
      "code": "BLACKLIST",
      "type": "TRAFFIC_OPTIMIZATION_ERROR",
      "description": "Access: xxx has no codes left after filter hotel codes."
  }
  ```
:::
