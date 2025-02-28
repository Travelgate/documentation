---
title: Traffic Peak Alerts
sidebar_position: 3
---

# Traffic Peak Alerts

### How can I configure a new Traffic Peak Alert?💡

1. **Select Connection/s**
![alerts-error-code-1](https://storage.travelgate.com/kbase/alerts-error-code-1.jpg)
1. **Configure an alert:** define the conditions and configure the fields to set up your alert. Select which [options](/kb/apps/monitoring-apps/alerts/alerts-traffic-peak#use-cases-of-traffic-peak-alerts) suits your alert best.
2. **Configure your notifications**: configure how you want to receive Alerts notifications.
![alerts-error-code-6](https://storage.travelgate.com/kbase/alerts-error-code-6.jpg)
- Alert name and description
- E-mail address to which notifications will be sent (TO and BCC)
- Frequency of notification
- How to create the alert: unique global alert, alert for each connection selected in step 1 or alert for each access selected in step 

### Use cases of Traffic Peak alerts:
1. **Alert if, in the last n minutes, traffic increases or decreases to a specific % compared to the previous n minutes.** E.g. "I want to check if in the last hour, traffic has decreased 20% compared to the previous hour, and also I want to check it every 2 hours."
    - **Time Window**: Period in the past (minutes) over which alert values are checked. In our example, 1 hour (60 minutes).
    - **Variation**: Comparative type for the alert. Possible options: Increase, decrease or both. In our example: increase.
    - **Deviation %**: The minimum percentage to consider status "alerting". In our example: 20%.
    - **Comparison window**: Period to be compared to the alert time window. Possible values: last period, yesterday or last week. In our example: last period.
    - **Frequency**: How often the alert values will be checked (minutes). In our example:
        - If we set 1 hour: the alert will check the conditions every hour of the last hour of traffic (time window).
        - If we set 2 hours: the alert will check the conditions every 2 hours of the last hour of traffic (time window).

    ![alerts-traffic-peak-2](https://storage.travelgate.com/kbase/alerts-traffic-peak-2.jpg)
1. **Alert if traffic exceeds or does not reach a specific number of requests in the last X minutes.** E.g. "I want to check if traffic doesn’t reach 1000 transactions in the last 24h hours and also I want to check it every 2 hours".
    - **Comparison type**: Limiting type (more than or less than) of traffic volume to check. In our example: Less than.
    - **Traffic Volume**: Limiting value of number of requests. In our example: 1000.
    - **Time Window**: Period in the past (minutes) over which alert values are checked. In our example: 60 minutes.
    - **Frequency**: How often the alert values will be checked, in minutes. In our example:
        - If we set 60 minutes, the alert will check the conditions every hour of the last 60 minutes of traffic.
        - If we set 30 minutes, the alert will check the conditions every 30 minutes of the last 60 minutes of traffic.
            ![alerts-traffic-peak-3](https://storage.travelgate.com/kbase/alerts-traffic-peak-3.jpg)

### Traffic Trends
Use the traffic trends section if you want to include or exclude the conditions of specific transactions:

- **Shopping flow steps:** Select which shopping flow steps do you want the alert to take into account to verify the configuration applied in the previous step. For example, if you select Search, the alert will only check errors in Search transactions. By default, all shopping flow steps are selected.
- **Status code:** Select which status codes should be checked by the alert in order to verify the configuration applied in the previous step. For example, if you select all Seller status codes, the alert will only check errors in transactions with those codes. By default, all status codes are selected

![alerts-error-code-5](https://storage.travelgate.com/kbase/alerts-error-code-5.jpg)