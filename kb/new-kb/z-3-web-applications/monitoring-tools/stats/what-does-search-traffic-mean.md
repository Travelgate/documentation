---
sidebar_position: 3
---

# Traffic Types

In the **Search** tab, you’ll find the "Search Traffic Type" filter, which is especially useful when you're using our **Speed Solution**. By default, traffic flows directly from the Buyer to the Seller systems, which we refer to as **Basic** traffic. However, when **Speed** is activated for a connection, the traffic is split into two types:

1. **Buyer-to-Speed traffic**  
2. **Traffic sent by Speed to the Seller system to populate its cache**  

To help you understand the different traffic types, we’ve provided the diagram below:

![stats_traffic_type_1](https://storage.travelgate.com/kbase/stats_traffic_type_1.jpg)

### Traffic Types

- **BASIC (Blue)**: This is the standard transaction. It represents the connection between a Buyer and a Seller without any additional solutions in place.
  
- **SPEED (Green)**: This traffic occurs when a Buyer’s connection uses the **Speed** feature. In this case, the request is intercepted by our cache and is not sent directly to the Seller’s system.

- **SCHEDULER (Red)**: This type applies to static content, such as Hotel Lists or Hotel Information. A transaction is tagged as "Scheduler" when the requested information is stored in Travelgate’s database (offline). 

- **OPTIMIZED (Gray)**: These are requests sent by Travelgate to update our internal databases. There are two sources:
    - **Speed**: When the requested information isn’t already stored in our database, Travelgate will request it from the Seller.
    - **Scheduler**: If retrieving static information from the Seller takes too long, Travelgate downloads it asynchronously to provide faster responses to Buyers.

### Viewing Traffic in Stats

By default, **Stats** shows the combined traffic sent by the Buyer, including both **Basic** and **Speed** traffic. If you'd prefer to view only the traffic that the Seller system actively manages (Basic Traffic and Optimized Traffic), you can use the filter to select the **'Optimize'** and **'Basic'** options.

![stats_traffic_type_2](https://storage.travelgate.com/kbase/stats_traffic_type_2.jpg)
