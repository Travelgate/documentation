---
sidebar_position: 2
---

# How to Differentiate between Speed's Traffic Types

There are **4 types** of traffic in TravelgateX: Basic, Speed, Optimized and Scheduler. 

```
image
```

1. **BASIC** (Blue): It is the standard transaction. A Buyer is connected to a Seller without any other solutions to the connection.
1. **SPEED** (Green): It is the transaction sent by a Buyer when their connection uses our Speed solution. Our cache solution blocks this request from reaching the Seller's system. 
1. **SCHEDULER** (Red): This kind of transaction only refers to static content (Hotel List, Descriptive Info, etc). A transaction is tagged as "Scheduler" when the information requested is stored in TravelgateX' Database (Offline).
1. **OPTIMIZED** (Gray): These are the requests sent by TravelgateX to feed our internal databases. There are two sources:
	- **Speed:** When the information the Buyer requests in a Speed connection is not already stored in our DB, TravelgateX sends a request to the Seller in order to obtain it.
	- **Scheduler:** When the time it takes to get all the static information from a Seller is too high, TravelgateX downloads it asynchronously in order to return it to the Buyers in a shorter, more acceptable time period.

:::note
You can also target your Search by Traffic Type in our [Stats APP](https://knowledge.travelgate.com/stats-app).
:::
 