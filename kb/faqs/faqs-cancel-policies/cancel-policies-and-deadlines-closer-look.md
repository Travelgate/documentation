---
title: Cancel Policies and Deadlines
sidebar_position: 3
---

# Cancel Policies and Deadlines: A Closer Look

## How we calculate the deadline timezone

### Case 1 ✅
If the Seller provides a **complete deadline with Timezone information in their API Response**, we will utilize that data to convert the deadline to UTC-0.
Example:  
Given a rate with Check-In date on 25/08/2022:
- If the Supplier returns the deadline 2022-08-24T09:00:00.00+03, this is what we will return in the “Deadline” node in Travelgate's response: 2022-08-24T06:00:00Z

### Case 2 ✅
In cases where **we do not receive a complete deadline (including the Timezone)** from the Seller via API Response, **but they confirm their working Timezone** through a Support Case, we will establish and utilize that specific Timezone to convert the deadline to UTC-0.

Given a rate with Check-In date on 25/08/2022. If the Seller informs us that they always work in UTC+5:

- Example 1:  
    If the Seller provides the deadline as "2022-08-24T09:00:00.00", we will return it as "2022-08-24T04:00:00Z" in the "Deadline" node.

- Example 2:  
    If the Seller provides the Cancel Penalties as "DaysBefore:1", it will be represented as "2022-08-23T19:00:00Z" in the "Deadline" node.
- Example 3:  
    When the Seller provides the Cancel Penalties as "23/08/2022", it will be converted to "2022-08-22T19:00:00Z" in the "Deadline" node.
- Example 4:  
    If the Seller provides the Cancel Penalties as "HoursPriorCheckIn:48", it will be reflected as "2022-08-22T19:00:00Z" in the "Deadline" node.


### Case 3 ✅
If the Seller indicates (through a Support Case) that their **Timezone is unknown or based on the Buyer's Timezone**, we will apply a buffer of +14 hours to the Deadline node. This precautionary measure is taken to prevent any potential issues or charges.  

Given a rate with Check-In date on 25/08/2022:

- Example 1:
    If the Seller provides a deadline of 2022-08-24T09:00:00.00, we will display it in the "Deadline" node as "2022-08-23T19:00:00Z".
- Example 2:
    If the Seller returns the Cancel Penalties as "DaysBefore:1", we will display it in the "Deadline" node as "2022-08-23T10:00:00Z".

- Example 3:
    If the Seller returns the Cancel Penalties as "23/08/2022", we will display it in the "Deadline" node as "2022-08-22T10:00:00Z".

- Example 4:
    If the Seller returns the Cancel Penalties as "HoursPriorCheckIn:48", we will display it in the "Deadline" node as "2022-08-22T10:00:00Z".

:::info
Interested in learning more about cancel penalties in Travelgate? Don't forget to explore our informative articles dedicated to this topic!🌟
:::



## Example: Cancellation Policy Interpretation

The **deadline** is the specific date and time when the cancellation policy starts to apply. It marks the point after which a penalty will be charged if the booking is cancelled. 

Given the following cancellation policies for a booking with check-in on **2025-11-20**:

```json
 "cancelPolicy": {
                    "refundable": true,
                    "cancelPenalties": [
                        {
                            "deadline": "2025-11-02T09:00:01Z",
                            "penaltyType": "IMPORT",
                            "currency": "EUR",
                            "value": 431.96
                        },
                        {
                            "deadline": "2025-11-16T09:00:01Z",
                            "penaltyType": "IMPORT",
                            "currency": "EUR",
                            "value": 863.92
                        }
                    ]
                }
```

- **Before 2025-11-02 09:00 UTC**: No penalty
- **From 2025-11-02 09:00 UTC to 2025-11-16 09:00 UTC**: Penalty of €431.96
- **From 2025-11-16 09:00 UTC onwards**: Penalty of €863.92


