---
sidebar_position: 3
---

# Traffic Types

You might have noticed a handy feature in the Search tab known as the "Search Traffic Type" filter. This filter comes into play when you're using our Speed Cache APP. By default, traffic flows directly from the Buyer to the Seller systems, which we refer to as "Basic" traffic. However, when Speed is activated for a specific connection, the traffic is split into two types: the traffic that the Buyer sends and the Speed cache handles, and the traffic that Speed sends to the Seller system to fill its cache.

To help you visualize these different traffic types, we created the diagram below:

![stats_traffic_type_1](https://storage.travelgate.com/kbase/stats_traffic_type_1.jpg)

- **BASIC** (Blue): It is the standard transaction. A Buyer is connected to a Seller without any other solution to the connection.
- **SPEED** (Green): It is the transaction sent by a Buyer when their connection uses Speed. Our cache solution blocks the request from reaching the Seller's system. 
- **SCHEDULER** (Red): This kind of transaction only refers to static content (Hotel List, Hotel Information, etc). A transaction is tagged as "Scheduler" when the information requested is stored in TravelgateX Database (Offline).
- **OPTIMIZED** (Gray): These are the requests sent by TravelgateX to feed our internal databases. There are two sources:
	- **Speed**: When the information requested by the Buyer in a Speed connection is not already stored in our DB. TravelgateX sends a request to the Seller to obtain it.
	- **Scheduler**: When the time it takes to get all the static information from a Seller is too high, TravelgateX downloads it asynchronously in order to return it to their Buyers in a shorter, more acceptable time frame.

- By default, Stats displays the combined traffic sent by the Buyer, regardless of whether it is handled by the Seller (Basic Traffic) or the Speed cache (Speed Traffic). However, if you're interested in viewing only the traffic that the Seller system actively manages, you can use the filter and select the 'Optimize' + 'Basic' options:

	![stats_traffic_type_2](https://storage.travelgate.com/kbase/stats_traffic_type_2.jpg)

