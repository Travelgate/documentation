---
title: Cancel Policies and Deadlines
sidebar_position: 3
---

# Cancel Policies and Deadlines: A Closer Look

### Case 1 ✅
If the Seller provides a **complete deadline with Timezone information in their API Response**, we will utilize that data to convert the deadline to UTC-0.
Example:  
Given a rate with Check-In date on 25/08/2022:
- If the Supplier returns the deadline 2022-08-24T09:00:00.00+03, this is what we will return in the “Deadline” node in TravelgateX response: 2022-08-24T06:00:00Z

### Case 2 ✅
In cases where **we do not receive a complete deadline (including the Timezone)** from the Seller via API Response, **but they confirm their working Timezone** via ticket, we will establish and utilize that specific Timezone to convert the deadline to UTC-0.

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
If the Seller indicates (via ticket) that their **Timezone is unknown or based on the Buyer's Timezone**, we will apply a buffer of +14 hours to the Deadline node. This precautionary measure is taken to prevent any potential issues or charges.  

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
Interested in learning more about cancel penalties in TravelgateX? Don't forget to explore our informative articles dedicated to this topic!🌟
:::


 