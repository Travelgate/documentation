---
title: Status error code Alerts
sidebar_position: 2
---

# Status error code Alerts

### How can I create a new status error code alert?💡

1. **Select Connection/s**
![alerts-error-code-1](https://storage.travelgate.com/kbase/alerts-error-code-1.jpg)
1. **Configure an alert:** define the conditions and configure the fields to set up your alert. Select which [options](/kb/apps/monitoring-apps/alerts/alerts-status-error#use-cases-of-status-error-code-alerts) suits your alert best.
2. **Configure your notifications**: configure how you want to receive Alerts notifications.
![alerts-error-code-6](https://storage.travelgate.com/kbase/alerts-error-code-6.jpg)
- Alert name and description
- E-mail address to which notifications will be sent (TO and BCC)
- Frequency of notification
- How to create the alert: unique global alert, alert for each connection selected in step 1 or alert for each access selected in step 

### Use cases of status error code alerts:

1. **Alert if a status code exceeds a specific % of the total traffic in the last X minutes**. E.g: "I want to check if status code 102 (Seller error) exceeds 10% of my Search traffic in the last 60 minutes and also I want to check it every 60 minutes. Only alert if there are at least 1000 requests in the time window to be reviewed."
    ![alerts-error-code-2](https://storage.travelgate.com/kbase/alerts-error-code-2.jpg)

    - **Error Code To Check:** Set the error codes to be checked by the alert. In our example: transactions with error code 102 will be checked.
    - **Deviation %:** The minimum percentage to consider status "alerting". In our example: 10%.
    - **Frequency:** How often the alert values will be checked, in minutes. In our example:
        - If we set 60 minutes, the alert will check the conditions each hour of the last 60 minutes of traffic (time window).
        - If we set 30 minutes, the alert will check the conditions each half hour of the last 60 minutes of traffic (time window).
    - **Time Window:** Period in the past (minutes) over which alert values are checked. In our example: 60 minutes.
    - **Minimum number of requests:** Minimum number of requests that should be in the window to be reviewed. In our example, there should be at least 1000 transactions in those 60 minutes for the alert to check the conditions.

1. **Alert if specific error results exceed a specific % of the total traffic in the last X requests**. E.g.: I want to check if status code 102 (Seller error) exceeds 10% of my Search traffic in the last 1000 transactions.
    ![alerts-error-code-3](https://storage.travelgate.com/kbase/alerts-error-code-3.jpg)
    - **Error Code To Check**: Set the error codes to be checked by the alert. In our example: transactions with error code 102 will be checked.
    - **Deviation %**: The minimum percentage to consider status "alerting". In our example: 10%.
    - **Minimum number of requests**: Number of requests that should be in the range to be reviewed. In our example: there should be 1000 transactions in those 60 minutes for the alert to check the conditions.

1. **Alert if, in the last X minutes, specific status codes exceed a specific % during the previous X minutes.** E.g.: I want to check if status code 105 (Seller error) has increased by at least 10% over the last 60 minutes compared with the previous 60 minutes. Check it every 60 minutes. Only alert if there are at least 1000 requests in the time window to be reviewed.
    ![alerts-error-code-4](https://storage.travelgate.com/kbase/alerts-error-code-4.jpg)
    - Error Code To Check: Set the error codes to be checked by the alert.In our example: transactions with error code 102 will be checked.
    - Variation: Comparative type for the alert, possible options: Increase, decrease or both. In our example: increase.
    - Deviation %: The minimum percentage to consider status "alerting". In our example: 10%.
    - Time Window: Period in the past (minutes) over which alert values are checked. In our example: 60 minutes.
    - Comparison window: Period to be used to compare with the alert time window. Possible values: last period, yesterday or last week. In our example: last period.
    - Frequency: How often the alert values will be checked, in minutes. In our example:
        - If we also set 60 minutes, the alert will check the conditions each hour of the last 60 minutes of traffic.
        - If we set 30 minutes, the alert will check the conditions each half hour of the last 60 minutes of traffic.
    - Minimum number of requests: Minimum number of requests that should be in the window to be reviewed. In our example: there should be at least 1000 transactions in those 60 minutes for the alert to check the conditions.

### Traffic Trends
Use the traffic trends section if you want to include or exclude the conditions of specific transactions:
![alerts-error-code-5](https://storage.travelgate.com/kbase/alerts-error-code-5.jpg)

- **Shopping flow steps:** Select which shopping flow steps do you want the alert to take into account to verify the configuration applied in the previous step. For example, if you select Search, the alert will only check errors in Search transactions. By default, all shopping flow steps are selected.
- **Status code:** Select which status code do you want the alert to take into account to verify the configuration applied in the previous step. For example, if you select all Seller status codes, the alert will only check errors in transactions with those codes. By default, all status codes are selected.