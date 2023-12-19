---
title: L2B Alerts
sidebar_position: 4
---

# L2B Alerts

### How can I configure a new L2B Alert?💡

1. **Select Connection/s**
![alerts-error-code-1](https://storage.travelgate.com/kbase/alerts-error-code-1.jpg)
2. **Configure an alert:** define the conditions and configure the fields to set up your alert. E.g.: "I want to check if in the last 24 hours my L2B has exceeded 1.000.000, and also I want to check it every 24 hours. Only alert if there are at least 3.000.000 requests in the time window to be reviewed."
    - L2B: Set the L2B (Look-To-Book) value to be checked by the alert. In our example, the L2B is 1.000.000.
    - Time Window: Period in the past (minutes) over which alert values are checked. In our example, 24 hours (1440 minutes).
    - Frequency: How often the alert values will be checked (minutes). In our example:
        - If we set 24 hours: the alert will check the conditions every 24 hours of the last 24 hours of traffic (time window).
        - If we set 12 hours: the alert will check the conditions every 12 hours of the last 24 hours of traffic (time window).
    - Minimum number of requests: Minimum number of requests that should be in the window in order to be checked. In our example, there should be at least 3B transactions in those 24 hours for the alert to check the conditions.

    ![alerts-l2b-2](https://storage.travelgate.com/kbase/alerts-l2b-2.jpg)

3. **Configure your notifications**: configure how you want to receive Alerts notifications.
![alerts-error-code-6](https://storage.travelgate.com/kbase/alerts-error-code-6.jpg)
- Alert name and description
- E-mail address to which notifications will be sent (TO and BCC)
- Frequency of notification
- How to create the alert: unique global alert, alert for each connection selected in step 1 or alert for each access selected in step 