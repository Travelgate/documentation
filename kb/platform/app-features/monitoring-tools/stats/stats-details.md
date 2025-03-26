---
sidebar_position: 2
---

# How to Use Stats

## How Can Stats Streamline My Choices?

Welcome to **Stats**, Travelgate's real-time connectivity performance dashboard and your ultimate tool for business success! Stats offers a user-friendly interface that allows you to easily monitor your performance and quickly address any traffic or connection issues. By providing valuable insights on a per-connection and per-method basis (Search, Quote, Book, Cancel, and Other), Stats gives you a comprehensive overview and detailed performance data.

Let [Stats](https://app.travelgate.com/apps/stats) help you make data-driven decisions and take your business to new heights! 🚀

![stats_dashboard_1](https://storage.travelgate.com/kbase/stats_dashboard_1.jpg)

## How Can I Use Stats?

To use Stats, simply log in to [our Portal](https://www.travelgate.com/), click on **Monitoring** in the top menu, and select **Stats**. By default, Stats will display your organization’s statistics for the past hour. However, you can easily adjust the time range using the selector in the top right corner.

**Time Range and Time Zone:**

- If the selected time period is *less than 7 days*, Stats will use your browser’s local time zone.
- If the selected period is *more than 7 days*, Stats will switch to the UTC time zone and display aggregated daily data.

Here’s an example to clarify how time zones work:
  
- **Current time**: June 25, 2024, 12:00 PM, located in Madrid (GMT+2 / UTC+2)
  - **Last hour**: Stats will use the browser's time zone, showing data from 11:00 AM to 12:00 PM (UTC+2).
  - **Yesterday between 10:00 AM and 3:00 PM**: Stats will use the browser's time zone (UTC+2).
  - **Last 7 days**: Stats will show data using the browser's time zone up until 12:00 PM today (UTC+2).
  - **Period older than 7 days (e.g., 2024-06-01 to 2024-06-12)**: Stats will show full-day data based on UTC.

![stats_dashboard_2](https://storage.travelgate.com/kbase/stats_dashboard_2.jpg)

### What Can I Find in Stats?

Stats organizes all the information you need into several tabs. The first tab, "**All**", provides an overview of your organization’s entire booking flow, displaying key insights via intuitive cards. For more detailed analysis, you can explore each connection individually using the table below. If you need even more data, click "**View accesses**" for specific access-level statistics.

![stats_dashboard_3](https://storage.travelgate.com/kbase/stats_dashboard_3.jpg)

Explore other tabs like "Search," "Quote," "Book," "Cancel," and "Other" for specific details on each step of the booking process. These tabs categorize information based on different error types encountered during each phase. The summary scorecards show data for your entire organization, while tables display data for each connection. A helpful temporal chart visualizes traffic patterns over time.

:::info OperationType 'Other'
The operation type 'Other' covers operations that don’t fall under Search, Quote, Book, or Cancel. These can include various operations such as:
- ReservationRead
- ReservationList
- DescriptiveInfo
- HotelList
- GeographicalTree
- RoomList
- MealPlanList
:::

### With Stats, You Can Easily Track:

- Total volume of requests for each booking flow step.
- Volume and percentage of successful requests (OK).
- Total and percentage of errors categorized by error type.
- Average response times.
- L2B (Look-to-Book) ratio.

:::info Download CSV Functionality
Above each table, you’ll find a **'Download CSV'** button, which allows you to download the Stats data that is most relevant to your business. Give it a try! 🚀
:::

![stats_dashboard_4](https://storage.travelgate.com/kbase/stats_dashboard_4.jpg)

Additionally, if any transactions result in errors, you can easily identify the specific error code and download the log transactions for the Quote, Book, and Cancel steps. Stats provides you with all the data you need to stay on top of your performance.

![stats_dashboard_5](https://storage.travelgate.com/kbase/stats_dashboard_5.jpg)

:::info Legacy Pull Buyers API Information
For Buyer connections via our Legacy Pull Buyers API, filtering by Hotel-X Access Code is **not available**. Instead, connections are identified using the **clientname#suppliercode** relationship.  
Some Buyers may be transitioning from the Legacy Pull Buyers API to the Hotel-X API, meaning they could have traffic through both APIs. If you're unsure, we recommend you **reach out to your Buyers** for more detailed information.
:::
