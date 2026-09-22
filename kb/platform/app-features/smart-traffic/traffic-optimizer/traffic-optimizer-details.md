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

It uses a **data-driven approach** to analyze past transactions and **automatically blacklist hotels** that are not converting, based on selected optimization criteria:


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
  - Hotels blocked under this criteria receive a **grace period** to accept new searches, and will be **unblocked automatically** when a booking is detected.

### Quote Error

  - Blocks hotels when their **quote requests return errors** at a rate that exceeds the configured threshold.
  - This criteria evaluates the **percentage of quote errors** over a defined time window and only triggers after a minimum number of requests are received.
  - You can customize the following settings:
    - **Percentage error**: maximum tolerated error rate before blocking.
    - **Minimum requests**: minimum number of quote requests needed before the rule is evaluated.
    - **Evaluation window hours**: period used to calculate the error ratio.
    - **Block duration hours**: how long the hotel remains blacklisted if the threshold is exceeded.


:::info Default configuration for Quote Error
- **Percentage error**: `50%`
- **Minimum requests**: `5`
- **Evaluation window hours**: `2h`
- **Block duration hours**: `2h`
:::

:::tip Need a different default?
If you need a specific default configuration for your setup, please [contact us](https://app.travelgate.com/support).
:::

### Booking Error

  - Blocks hotels when their **booking requests fail** at a rate that exceeds the configured threshold.
  - This criteria evaluates the **percentage of booking errors** over a defined time window and only triggers after a minimum number of requests are received.
  - You can customize the following settings:
    - **Percentage error**: maximum tolerated error rate before blocking.
    - **Minimum requests**: minimum number of booking requests needed before the rule is evaluated.
    - **Evaluation window hours**: period used to calculate the error ratio.
    - **Block duration hours**: how long the hotel remains blacklisted if the threshold is exceeded.


:::info Default configuration for Booking Error
- **Percentage error**: `50%`
- **Minimum requests**: `2`
- **Evaluation window hours**: `4h`
- **Block duration hours**: `2h`
:::


:::tip Need a different default?
If you need a specific default configuration for your setup, please [contact us](https://app.travelgate.com/support).
:::

### Not in Portfolio

  - Identifies and blocks hotel codes that are **no longer offered by the Seller**.
  - A hotel must be requested before it becomes eligible for blocking. As a result, there may be a time gap between the first request and the actual blocking.

### Price Increase

  - Blocks hotels whose **price increases from Avail to Quote** at a rate that exceeds the configured threshold.
  - The price returned in the **Avail** is compared against the price confirmed in the **Quote**. When a quote comes back more expensive than the Avail by at least the configured **price deviation**, that quote counts as an error.
  - This criteria evaluates the **percentage of affected quotes** over a defined time window and only triggers after a minimum number of requests are received.
  - A price increase means the Buyer is shown a higher price at Quote than at Avail, which can harm conversion and the end customer's experience.
  - You can customize the following settings:
    - **Price deviation**: how much more expensive the Quote must be than the Avail for that quote to count as an error.
    - **Percentage error**: maximum tolerated ratio of affected quotes before blocking.
    - **Minimum requests**: minimum number of quote requests needed before the rule is evaluated.
    - **Evaluation window hours**: period used to calculate the error ratio.
    - **Block duration hours**: how long the hotel remains blacklisted if the threshold is exceeded.

### Price Decrease

  - Blocks hotels whose **price decreases from Avail to Quote** at a rate that exceeds the configured threshold.
  - Same comparison as Price Increase in the opposite direction: a quote that comes back cheaper than the Avail by at least the configured **price deviation** counts as an error.
  - A large drop usually means the Avail price was not reliable, even though the final price favours the Buyer.
  - You can customize the same settings as Price Increase: **Price deviation**, **Percentage error**, **Minimum requests**, **Evaluation window hours** and **Block duration hours**.

:::info Configuring the price criteria
- Both criteria can be activated **without specifying a configuration**, in which case Travelgate's default thresholds are applied.
- **Price deviation is always expressed as a positive value**—the direction is given by the criteria itself. A 10% deviation means "10% more expensive" under Price Increase, and "10% cheaper" under Price Decrease.
- Each criteria keeps its **own independent thresholds**. For example, you can block a 10% price increase while still tolerating a 20% price decrease.
- The minimum deviation that can be configured is **1%**. Price Decrease is capped at **100%**, since a quote cannot get more than 100% cheaper, whereas Price Increase has **no upper limit**.

**Example:** block the hotel for **1 hour** when, over the last **24 hours** and with at least **80 requests**, **80%** of the quotes came back at least **10%** more expensive than the Avail.
:::

:::tip Need a different default?
If you need a specific default configuration for your setup, please [contact us](https://app.travelgate.com/support).
:::

Hotels that match these criteria are **blacklisted**, meaning searches for those properties will be blocked, reducing unnecessary traffic.

:::info
🚀 **Daily Updates:** The blacklist is refreshed **every 24 hours**, ensuring optimization is always up to date! Price-based criteria are re-evaluated more frequently, following the evaluation window and block duration you configure.
:::
