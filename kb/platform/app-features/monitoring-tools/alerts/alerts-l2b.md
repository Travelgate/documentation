---
title: L2B Alerts
sidebar_position: 5
---

# L2B Alerts

## How to Configure a New L2B Alert

1. **Select Connection(s)**

   ![alerts-error-code-1](https://storage.travelgate.com/kbase/alerts-error-code-1.jpg)
2. **Configure the Alert**: Define the conditions and set up the fields for your alert.  
**Example:** "Check if my L2B exceeds 1,000,000 in the last 24 hours, and evaluate it every 24 hours. The alert should only trigger if there are at least 3,000,000 requests in the time window."
   - **L2B (Look-To-Book):** The value to be monitored by the alert. (In this example: 1,000,000)
   - **Time Window:** The period over which the alert evaluates data (e.g., 24 hours = 1,440 minutes).
   - **Frequency:** How often the alert checks conditions:
     - 24 hours → Evaluates traffic every 24 hours.
     - 12 hours → Evaluates traffic every 12 hours.
   - **Minimum Number of Requests:** Ensures the alert only triggers if there is sufficient data (e.g., at least 3,000,000 transactions in 24 hours).

   ![alerts-l2b-2](https://storage.travelgate.com/kbase/alerts-l2b-2.jpg)

3. **Set Up Notifications**: Configure how you want to receive alert notifications.
   ![alerts-error-code-6](https://storage.travelgate.com/kbase/alerts-error-code-6.jpg)
   - Alert name and description
   - Email recipients (TO and BCC)
   - Notification frequency
   - Alert creation options:
     - Unique global alert
     - Alert for each selected connection
     - Alert for each selected access