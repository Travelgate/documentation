---
title: Status Error Code Alerts
sidebar_position: 3
---

# Status Error Code Alerts

## How to Create a New Status Error Code Alert

1. **Select Connection(s)**  

   ![alerts-error-code-1](https://storage.travelgate.com/kbase/alerts-error-code-1.jpg)
2. **Configure the Alert**: Define the conditions and fields to set up your alert. Choose the [appropriate options](/kb/apps/monitoring-apps/alerts/alerts-status-error#use-cases-of-status-error-code-alerts) based on your needs.
3. **Set Up Notifications**: Configure how you want to receive alert notifications
    - Alert name and description
    - Email recipients (TO and BCC)
    - Notification frequency
    - Alert creation options: 
        - Unique global alert
        - Alert for each selected connection
        - Alert for each selected access

    ![alerts-error-code-6](https://storage.travelgate.com/kbase/alerts-error-code-6.jpg)

## Use Cases of Status Error Code Alerts

### 1. Alert When a Status Code Exceeds a Specific Percentage of Total Traffic in the Last X Minutes

**Example:** "I want to check if status code 102 (provider error) exceeds 10% of my Search traffic in the last 60 minutes and check it every 60 minutes. The alert should only trigger if there are at least 1,000 requests in the time window."

![alerts-error-code-2](https://storage.travelgate.com/kbase/alerts-error-code-2.jpg)

- **Error Code to Check:** Defines the error codes monitored. (In this example: error code 102)
- **Deviation %:** Minimum threshold for triggering an alert (e.g., 10%).
- **Frequency:** How often the alert checks conditions:
  - 60 minutes → Evaluates the last 60 minutes of traffic every hour.
  - 30 minutes → Evaluates the last 60 minutes of traffic every 30 minutes.
- **Time Window:** Period over which the alert evaluates data (e.g., 60 minutes).
- **Minimum Number of Requests:** Ensures the alert only triggers if there is sufficient data (e.g., at least 1,000 requests).

### 2. Alert When a Specific Error Code Exceeds a Percentage of Total Traffic in the Last X Requests

**Example:** "Check if error code 102 (provider error) exceeds 10% of my Search traffic in the last 1,000 transactions."

![alerts-error-code-3](https://storage.travelgate.com/kbase/alerts-error-code-3.jpg)

- **Error Code to Check:** Defines the monitored error codes (e.g., error code 102).
- **Deviation %:** Minimum percentage to trigger the alert (e.g., 10%).
- **Minimum Number of Requests:** Number of transactions required for the alert to activate (e.g., 1,000 requests).

### 3. Alert When a Status Code Increases by a Specific Percentage Over a Set Period Compared to a Previous Period

**Example:** "Check if error code 102 (provider error) has increased by at least 10% over the last 60 minutes compared with the previous 60 minutes. The alert should check conditions every 60 minutes and only trigger if there are at least 1,000 requests."

![alerts-error-code-4](https://storage.travelgate.com/kbase/alerts-error-code-4.jpg)

- **Error Code to Check:** Defines the monitored error codes (e.g., error code 102).
- **Variation Type:** The comparison method (Increase, Decrease, or Both). In this example: Increase.
- **Deviation %:** Minimum percentage increase to trigger an alert (e.g., 10%).
- **Time Window:** The period over which data is analyzed (e.g., 60 minutes).
- **Comparison Window:** Defines the reference period (e.g., Last Period, Yesterday, or Last Week). In this example: Last Period.
- **Frequency:** How often the alert checks conditions:
  - 60 minutes → Evaluates the last 60 minutes of traffic every hour.
  - 30 minutes → Evaluates the last 60 minutes of traffic every 30 minutes.
- **Minimum Number of Requests:** Ensures the alert only triggers if there is enough data (e.g., at least 1,000 transactions).

## Traffic Trends

Use the **Traffic Trends** section to include or exclude specific transaction conditions:

![alerts-error-code-5](https://storage.travelgate.com/kbase/alerts-error-code-5.jpg)

- **Shopping Flow Steps:** Choose which shopping flow steps should be considered in the alert. For example, selecting "Search" ensures the alert only checks errors in Search transactions. By default, all steps are selected.
- **Status Code:** Specify which status codes should be included. For example, selecting "Communication" ensures the alert only monitors transactions with those codes. By default, all status codes are selected.