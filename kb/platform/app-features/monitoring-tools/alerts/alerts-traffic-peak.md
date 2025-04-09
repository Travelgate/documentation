---
title: Traffic Peak Alerts
sidebar_position: 4
---

# Traffic Peak Alerts

## How to Configure a New Traffic Peak Alert

1. **Select Connection(s)**

   ![alerts-error-code-1](https://storage.travelgate.com/kbase/alerts-error-code-1.jpg)
2. **Configure the Alert**: Define the conditions and set up the fields for your alert. Choose the [appropriate options](/kb/app-features/monitoring-tools/alerts/alerts-traffic-peak#use-cases-of-traffic-peak-alerts) based on your needs.
3. **Set Up Notifications**: Configure how you want to receive alert notifications:
    - Alert name and description
    - Email recipients (TO and BCC)
    - Notification frequency
    - Alert creation options:
        - Unique global alert
        - Alert for each selected connection
        - Alert for each selected access

   ![alerts-error-code-6](https://storage.travelgate.com/kbase/alerts-error-code-6.jpg)

## Use Cases of Traffic Peak Alerts

### 1. Alert When Traffic Increases or Decreases by a Specific Percentage Over a Given Timeframe

**Example:** "Check if, in the last hour, traffic has decreased by 20% compared to the previous hour. The alert should check conditions every 2 hours."
    - **Time Window:** Period over which the alert evaluates data (e.g., 60 minutes).
    - **Variation:** Comparison type (Increase, Decrease, or Both). In this example: Increase.
    - **Deviation %:** Minimum threshold for triggering an alert (e.g., 20%).
    - **Comparison Window:** Defines the reference period (Last Period, Yesterday, or Last Week). In this example: Last Period.
    - **Frequency:** How often the alert checks conditions:
        1 hour → Evaluates traffic every hour.
        2 hours → Evaluates traffic every 2 hours.

![alerts-traffic-peak-2](https://storage.travelgate.com/kbase/alerts-traffic-peak-2.jpg)

### 2. Alert When Traffic Volume Exceeds or Falls Below a Specified Threshold in a Given Timeframe

**Example:** "Check if traffic does not reach 1,000 transactions in the last 24 hours. The alert should check conditions every 2 hours."

- **Comparison Type:** Defines the condition (More Than or Less Than). In this example: Less Than.
- **Traffic Volume:** Threshold for triggering an alert (e.g., 1,000 transactions).
- **Time Window:** Period over which data is analyzed (e.g., 60 minutes).
- **Frequency:** How often the alert checks conditions:
  - 60 minutes → Evaluates the last 60 minutes of traffic every hour.
  - 30 minutes → Evaluates the last 60 minutes of traffic every 30 minutes.

![alerts-traffic-peak-3](https://storage.travelgate.com/kbase/alerts-traffic-peak-3.jpg)

## Traffic Trends

Use the **Traffic Trends** section to include or exclude specific transaction conditions:

![alerts-error-code-5](https://storage.travelgate.com/kbase/alerts-error-code-5.jpg)

- **Shopping Flow Steps:** Select which shopping flow steps should be considered in the alert. For example, selecting "Search" ensures the alert only monitors Search transactions. By default, all steps are selected.
- **Status Code:** Specify which status codes should be included. For example, selecting "Communication" ensures the alert only monitors transactions with those codes. By default, all status codes are selected.
