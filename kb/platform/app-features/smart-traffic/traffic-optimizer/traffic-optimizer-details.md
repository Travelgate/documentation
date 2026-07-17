---
sidebar_position: 2
---

# How to Use Traffic Optimizer

## What is Traffic Optimizer?

**Traffic Optimizer** is an intelligent Travelgate tool that analyzes search data and automatically blocks non-converting hotels—eliminating unnecessary traffic, reducing overhead, and boosting marketplace connection efficiency.

## Who Can Activate Traffic Optimizer?

Both **Buyers and Sellers** can enable Traffic Optimizer within Travelgate. It’s available for every connection regardless of the API used by the Buyer—it works with both the **HotelX API and the Legacy API**.

## What Are the Benefits of Traffic Optimizer?
- **Improve your Look-to-Book (L2B) ratio** by filtering out low-converting searches.
- **Reduce unnecessary search traffic**, optimizing API performance and saving costs.
- **Decrease response times**, improving efficiency for both Buyers and Sellers.

## How Does It Work?

Traffic Optimizer can be applied to either:
- A **specific connection** between a Buyer and a Seller.
- A **particular access** within a connection.

It uses a **data-driven approach** to analyze past transactions and **automatically blacklist hotels** that did not convert the previous day, based on selected optimization criteria:


### No Availability

  - Blocks hotels that returned **100% "no availability"** results the previous day for all requested dates.
    - Example: If searches for January 13th return 100% no availability, the hotel will be blacklisted on the following day (January 14th).
  - If a hotel was not searched the previous day, it will not be considered for blocking. Only hotels that were requested are eligible to be blocked.
  - Hotels blocked under this criteria receive a **grace period** to accept new searches, and will be **unblocked automatically** when availability is detected (following day).
  - **Grace period**: Blocked hotels are given periodic opportunities to respond to searches:
    - Each hour, a subset of blocked hotels is allowed to be requested.
    - All blocked hotels are fully unblocked during **two grace periods per day**.
    - A hotel is **unblocked** if it returns availability during any grace period.

    **Example:**

    | Day | What happens |
    |-----|-------------|
    | Day 1 | "Hotel A" reports 100% no availability. |
    | Day 2 | "Hotel A" is blocked, but the grace period allows it to respond to searches. |
    | Day 3 | If "Hotel A" returned availability on Day 2 → stays unblocked. Otherwise → blocked again. |

### Zero Bookings

  - Blocks hotels that have **never recorded a booking** with Travelgate.
  - Hotels blocked under this criteria receive a **grace period** to accept new searches, and will be **unblocked automatically** when a Booking is detected.

### Not in Portfolio

  - Identifies and blocks hotel codes that are **no longer offered by the Seller**.
  - A hotel must be requested before it becomes eligible for blocking. As a result, there may be a time gap between the first request and the actual blocking.
  - Once a hotel is blocked, it will never be unblocked unless it is included again by the Seller in the HotelList.

Hotels that match these criteria are **blacklisted**, meaning searches for those properties will be blocked, reducing unnecessary traffic.

:::info
🚀 **Daily Updates:** The blacklist is refreshed **every 24 hours**, ensuring optimization is always up to date!
:::