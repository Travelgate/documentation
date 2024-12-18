---
sidebar_position: 2
---

# How to Activate Traffic Optimizer

### How do I activate Traffic Optimizer?

1. Log onto [Travelgate](https://www.travelgate.com/)
2. Click on APPs > [Traffic Optimizer](https://app.travelgate.com/traffic-optimizer). This will take you to your Traffic Optimizer Dashboard, where you can review the connections and accesses currently active on Traffic Optimizer, as well as those that were previously optimized.
3. Click on the "Optimize a connection" button.
![to_updated_2](https://storage.travelgate.com/kbase/to_updated_2.jpg)
1. Select the connection or access to optimize: Connections or accesses that were already configured will not be displayed in the menu. If you can’t find the connection/access, check the dashboard and review the filters. They may have been configured previously.

    ![traffic_optimizer_3](https://storage.travelgate.com/kbase/traffic_optimizer_3.jpg)

    :::info
    Traffic Optimizer can work in two modes:
    - **By connection:** It optimizes all current accesses from a Partner connection. If new accesses are added to the connection, they will also be automatically optimized.
    - **By access:** It optimizes only a specific access or accesses for a particular Partner connection. If new accesses are added to the connection, they won't be automatically optimized.

    Choose the option that best fits your needs!
    :::

1. Configure the optimization criteria (s), which include the connection or access details and the criteria you want to use for optimization, and you're good to go!

    ![traffic_optimizer_4](https://storage.travelgate.com/kbase/traffic_optimizer_4.jpg)

:::info
The activation for the 'No availability' and 'Zero booking' criteria will be automatic. As for the 'Not in portfolio' criteria, our team will handle it and inform you as soon as it's up and running!
:::

### Is it possible to edit the configuration?

To edit the optimization criteria for connections or access, click on the three dots under 'Actions' and then choose “Edit configuration”. To change the configuration from access to connection, or from connection to access, it is necessary to open a [Case](https://app.travelgate.com/support).

![TO_edit_actions](https://storage.travelgate.com/kbase/TO_edit_actions.jpg)
![TO_edit_actions_2](https://storage.travelgate.com/kbase/TO_edit_actions_2.jpg)

### Why can't I find a specific connection/access on my Traffic Optimizer dashboard or in the optimization dropdown?
If a connection/access is not visible in the Traffic Optimizer, it could be because the Buyer is not connected to Travelgate via our **Hotel-X API**. Remember, only connections made through the Hotel-X API will be displayed in the Traffic Optimizer.  

Additionally, if a connection or access was activated in the past but later disconnected, it will not appear on the dashboard nor in the dropdown to optimize a new connection. To reactivate it in the Traffic Optimizer, make sure to **uncheck the "Show only active"** option on the left side of the Traffic Optimizer dashboard screen. With this option unchecked, you will be able to view both currently active connections/accesses and those activated in the past, and reactivate them if necessary.


### What kind of information is displayed in the Traffic Optimizer Dashboard?

At the top of the page, you will find three cards that summarize the performance of the Traffic Optimizer across all active connections.

- **Searches 100% blocked (yesterday)**: Searches completely blocked and saved the day before.
- **Δ L2B Improvement (yesterday)**: This metric estimates the improvement in the Look-to-Book (L2B) ratio thanks to the activation and the reduction in search traffic. Accompanying this metric is the L2B value, recalculated exclusively for connections where the App is active. Note that this L2B figure is distinct from the one you see in the Stats section.
- **Δ Search NOK improvement (yesterday)**: This metric indicates the improvement in %Searches NOK  as a result of blocking hotels that matched the criteria (no availability, no bookings, not in portfolio).long with this metric, the total number of Searches with no availability is presented, again calculated only for connections with the active app. It is important to remember that the value of this metric differs from the one visible in the Stats section.
- **Connection/Access Name**: By default, only active connections or accesses will appear in results.
- **Last Update (UTC) and Requester**: This indicates the date and time of the latest configuration update (UTC). 'Requester' identifies who made the last change, whether it was the Buyer, the Seller, or an automated optimization process (Auto opt).
- **Criteria**: a list of all the active criteria for this connection or access.
- **Hotels blocked (today)**: Number of hotels blocked today.
- **Searches 100% blocked (yesterday)**.
- **Active**: Check and change your Traffic Optimizer status (active/inactive).
- **Actions**:
    - View blocked hotels: review the complete list of hotels blocked today.
    - View performance: examine how search traffic is being optimized.
    - Edit configuration: add or delete specific criteria for this connection or access.

![to_updated_4](https://storage.travelgate.com/kbase/to_updated_4.jpg)

### How can I know which hotels are being blocked by Traffic Optimizer?
To maintain transparency, we offer a list detailing the hotels blocked by Traffic Optimizer each day and the criteria met to be on that list.  
To view the list of hotels blocked during that specific period, simply follow the steps below:
1. Select the connection or access you wish to review.
2. Then, click on the 'Actions' menu > **'View blocked hotels.'** You'll have the option to filter the list by hotel name or code and by optimization criteria. Use the filters to search for specific hotels.

    ![traffic_optimizer_5](https://storage.travelgate.com/kbase/traffic_optimizer_5.jpg)
### How is Traffic Optimizer improving my Search traffic? 🔎
You can also monitor the performance of your optimized connections directly from our APP—clear and transparent. Simply select the connection or access you wish to review and click on the 'Actions' menu > **'View performance.'** There, you'll find more detailed information on the Search traffic saved in the last 24 hours. 

![traffic_optimizer_6](https://storage.travelgate.com/kbase/traffic_optimizer_6.jpg)
 
### Can I exclude some hotels from being blocked by Traffic Optimizer?🗒️
Of course! You have the flexibility to exclude hotels from the blacklist for specific connections. Simply [open a Case](/kb/tickets/guidelines-for-submitting-a-ticket-to-our-support-team) with our Customer Support team, and we will be happy to assist!

Additionally, each hotel on the blacklist can be made temporarily available for a preset amount of time to re-check conversion. This grace period is automatically activated by default for the "Zero bookings" criteria.  

Use cases:
1. **Buyer X activates Traffic Optimizer for n connections with the "No Availability" criteria**"
    - Day 1: "Hotel A" shows 100% no availability.
    - Day 2: "No Availability" criteria is applied for "Hotel A," and it gets blocked, not receiving any requests.
    - Day 3: "Hotel A" is automatically removed from the blacklist, so it starts receiving requests again.
    - Day 4: If "Hotel A" returns 100% no availability on day 3, it will be blocked again.
2. **Buyer X activates Traffic Optimizer for n connections with the "Zero bookings" criteria**
    - Day 1: Traffic Optimizer notifies that "Hotel A" has never been booked by any Buyers connected to that specific Seller.
    - Day 2: "Zero bookings" criteria is applied for "Hotel A," and it gets blocked, except for a limited time (temporary whitelist) that day, when it can receive requests.
    - Day 3: "Hotel A" remains blacklisted but temporarily whitelisted to give it a chance to convert.
    - Day _n_: If "Hotel A" gets booked during the temporary whitelisted window or receives a booking from any other Buyer in Travelgate the previous day, it is automatically removed from the blacklist. 


:::info
- All criteria ("No Availability," "Zero bookings," and "Not in portfolio") can apply simultaneously, but we recommend **starting with one at a time**.
- To activate the "no_book" criterion, the connection/access must have a **minimum of one booking per month in the last 6 months** (excluding the current month).
- Once Traffic Optimizer is activated, the Buyer will receive the following **error and warning** when requesting all blacklisted hotels:
```
{
    "code" : "BLACKLIST",
    "type" : "TRAFFIC_OPTIMIZATION_ERROR",
    "description" : "Access: xxx has no codes left after filter hotel codes."
}
```
:::