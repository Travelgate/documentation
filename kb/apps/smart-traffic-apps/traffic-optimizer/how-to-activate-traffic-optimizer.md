---
sidebar_position: 2
---

# How to Activate Traffic Optimizer

### How do I activate Traffic Optimizer?
After logging onto TravelgateX, navigate to "APPs" and click on "Traffic Optimizer." This will take you to your Traffic Optimizer dashboard, where you can review the connections and accesses currently active on Traffic Optimizer, as well as those that were previously optimized. 

```
image
```

### What kind of information is displayed in the Traffic Optimizer dashboard?
- Connection name and code
- Access name and code (when using the 'Optimized by access' section)
- Last update of the Traffic Optimizer configuration
- Criteria: a list of all the active criteria for this connection or access
- Number of hotels blocked today
- Searches completely blocked and saved by the APP in the last 24h
- Active: check and change your Traffic Optimizer status (active/inactive).
- Actions:
    - View blocked hotels: review the complete list of hotels blocked today.
    - View performance: examine how search traffic is being optimized.
    - Edit configuration: add or delete specific criteria for this connection or access.



:::info
Traffic Optimizer can work in two modes:
- **By connection:** It optimizes all current accesses from a Partner connection. If new accesses are added to the connection, they will also be automatically optimized.
- **By access:** It optimizes only a specific access or accesses for a particular Partner connection. If new accesses are added to the connection, they won't be automatically optimized.

Choose the option that best fits your needs!
:::


### Configuring a Traffic Optimizer connection or access 🖱️
To set up Traffic Optimizer for one of your connections or accesses, simply click on the **'Optimize a connection' or 'Optimize an access'** button.

```
image
```

Next, fill in the required fields in the form, which include the connection or access details and the criteria you want to use for optimization:

```
image
```
```
image
```

:::info
The activation for the 'No availability' and 'Zero booking' criteria will be automatic! As for the 'Not in portfolio' criteria, our team will handle it and inform you as soon as it's up and running!
:::

### How can I know which hotels are being blocked by Traffic Optimizer?
Transparency is essential in today's industry. To keep you informed about how Traffic Optimizer is enhancing your connections and accesses, we provide a list of hotels blocked each day and the criteria met to be on that list.

To view the list of hotels blocked during that specific period, simply follow the steps below:

1. Select the connection or access you wish to review.

2. Then, click on the 'Actions' menu > **'View blocked hotels.'** You'll have the option to filter the list by hotel name or code and by optimization criteria.

    ```
    image
    ```

### How is Traffic Optimizer improving my Search traffic? 🔎
You can also monitor the performance of your optimized connections directly from our APP—clear and transparent. Simply select the connection or access you wish to review and click on the 'Actions' menu > **'View performance.'** There, you'll find more detailed information on the Search traffic saved in the last 24 hours. 

    ```
    image
    ```
 
### Can I exclude some hotels from being blocked by Traffic Optimizer?🗒️
Of course! You have the flexibility to exclude hotels from the blacklist for specific connections. Additionally, each hotel on the blacklist can be made temporarily available for a preset amount of time to re-check conversion. This grace period is automatically activated by default for the "Zero bookings" criteria.

**Use cases:**

1. Buyer X activates Traffic Optimizer for n connections with the "No Availability" criteria".
    - Day 1: "Hotel A" shows 100% no availability.
    - Day 2: "No Availability" criteria is applied for "Hotel A," and it gets blocked, not receiving any requests.
    - Day 3: "Hotel A" is automatically removed from the blacklist, so it starts receiving requests again.
    - Day 4: If "Hotel A" returns 100% no availability on day 3, it will be blocked again.
2. Buyer X activates Traffic Optimizer for n connections with the "Zero bookings" criteria.
    - Day 1: Traffic Optimizer notifies that "Hotel A" has never been booked by any Buyers connected to that specific Seller.
    - Day 2: "Zero bookings" criteria is applied for "Hotel A," and it gets blocked, except for a limited time (temporary whitelist) that day, when it can receive requests.
    - Day 3: "Hotel A" remains blacklisted but temporarily whitelisted to give it a chance to convert.
    - Day n: If "Hotel A" gets booked during the temporary whitelisted window or receives a booking from any other Buyer in TravelgateX the previous day, it is automatically removed from the blacklist. 


### Important:
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
