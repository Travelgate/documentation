---
sidebar_position: 2
---

# How to Use Alerts

## Alerts: Real-Time Detection of Potential Issues
Monitoring your system's performance is crucial to ensuring smooth operations. Travelgate’s **Alerts** feature provides real-time detection of potential issues, helping you proactively manage disruptions. Whether it's error codes, traffic fluctuations, or L2B thresholds, setting up alerts enables you to stay informed and take immediate action when needed. This guide will walk you through the different alert types, how to configure them, and what to do when they are triggered.

## What Kinds of Alerts Can I Set Up?
- **Status Error Code**: Triggers an alert when the percentage of a specific error code exceeds the limit defined in your configuration.
- **L2B**: Triggers an alert if the L2B reaches or exceeds the configured threshold.
- **Traffic Peak**: Triggers an alert when traffic significantly increases or decreases compared to the configured levels.

## How Can I Use Alerts?
1. Log into [our Platform](https://www.travelgate.com/).
2. Navigate to **Monitoring > [Alerts](https://app.travelgate.com/alerts)**.
3. Access the **Alerts Dashboard**, where you can view all configured alerts for your organization and their details:
   - **ID**: Unique identifier for the alert.
   - **Status**: Indicates if the alert is **OK** or **Alerting**.
   - **Name**: The alert's designated name.
   - **Description**: Additional information about the alert, if provided.
   - **Alert Type**: Indicates whether the alert is for **Status Error Code**, **L2B**, or **Traffic Peak**.
   - **Active**: Allows activation or deactivation of an alert without deletion.
   - **Actions**: Provides options to edit or delete an alert.

![tg_alerts](https://storage.travelgate.com/kbase/tg_alerts.jpg)

## How Can I Create a New Alert?
To create and configure a new alert, click on the **'New Alert'** button. A pop-up form will appear, allowing you to set up your alert in three simple steps:

1. **Select Connection(s) and Access(es)**
2. **Configure the Alert**
3. **Set Up Notifications**

![alerts-real-time_2](https://storage.travelgate.com/kbase/alerts-real-time_2.jpg)

## What Happens If One of My Alerts Is Triggered?
If an alert condition is met, you will receive an instant email notification. You can also view and track alerts through the **Alerts Dashboard**, which enables you to search and filter alerts by status, name, description, and more.

:::info
For detailed instructions on configuring specific alert types, refer to the following guides: 🚀
- [How to Configure "Status Error Code" Alerts](/kb/platform/app-features/monitoring-tools/alerts/alerts-status-error)
- [How to Configure "Traffic Peak" Alerts](/kb/platform/app-features/monitoring-tools/alerts/alerts-traffic-peak)
- [How to Configure "L2B" Alerts](/kb/platform/app-features/monitoring-tools/alerts/alerts-l2b)
:::
