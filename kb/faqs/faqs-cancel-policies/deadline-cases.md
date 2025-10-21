---
title: Deadline Cases
sidebar_position: 3
---

# Deadline Cases

## How We Calculate the Deadline Timezone

### Case 1 ✅
If the Seller provides a **complete deadline with timezone information in their API response**, we use that data to convert the deadline to UTC-0.

**Example:**
- For a rate with a check-in date of **25/08/2022**:
  - If the Seller returns the deadline as `2022-08-24T09:00:00.00+03`, we will convert and return it as `2022-08-24T06:00:00Z` in the `Deadline` node.
  - The `isCalculatedDeadline` value would be `false`.

### Case 2 ✅
If the Seller **does not provide a complete deadline with timezone information** in their API response but confirms their working timezone via a Support Case, we use that timezone to convert the deadline to UTC-0.

For a rate with a check-in date of **25/08/2022**, where the Seller operates in UTC+5:

- **Example 1:** If the Seller provides `2022-08-24T09:00:00.00`, we will return `2022-08-24T04:00:00Z` in the `Deadline` node.
- **Example 2:** If the Seller specifies `DaysBefore:1`, we will return `2022-08-23T19:00:00Z`.
- **Example 3:** If the Seller provides `23/08/2022`, we will return `2022-08-22T19:00:00Z`.
- **Example 4:** If the Seller provides `HoursPriorCheckIn:48`, we will return `2022-08-22T19:00:00Z`.

  - The `isCalculatedDeadline` value would be `false`.

### Case 3 ✅
If the Seller states (via a Support Case) that their **timezone is unknown or based on the Buyer’s timezone**, we apply a **+14-hour buffer** to the `Deadline` node as a precautionary measure to avoid penalties.

For a rate with a check-in date of **25/08/2022**:

- **Example 1:** If the Seller provides `2022-08-24T09:00:00.00`, we will return `2022-08-23T19:00:00Z`.
- **Example 2:** If the Seller specifies `DaysBefore:1`, we will return `2022-08-23T10:00:00Z`.
- **Example 3:** If the Seller provides `23/08/2022`, we will return `2022-08-22T10:00:00Z`.
- **Example 4:** If the Seller provides `HoursPriorCheckIn:48`, we will return `2022-08-22T10:00:00Z`.

- The `isCalculatedDeadline` value would be `true`.

## Example: Cancellation Policy Interpretation

The **deadline** is the specific date and time when a cancellation policy starts to apply. After this point, penalties will be charged if the booking is canceled.

Given the following cancellation policies for a booking with check-in on **2025-11-20**:

```json
"cancelPolicy": {
    "refundable": true,
    "cancelPenalties": [
        {
            "isCalculatedDeadline": "false",
            "deadline": "2025-11-02T09:00:01Z",
            "penaltyType": "IMPORT",
            "currency": "EUR",
            "value": 431.96
        },
        {
            "isCalculatedDeadline": "false",
            "deadline": "2025-11-16T09:00:01Z",
            "penaltyType": "IMPORT",
            "currency": "EUR",
            "value": 863.92
        }
    ]
}
```

- **Before 2025-11-02 09:00 UTC** → No penalty applies.
- **From 2025-11-02 09:00 UTC to 2025-11-16 09:00 UTC** → Penalty of **€431.96**.
- **From 2025-11-16 09:00 UTC onwards** → Penalty of **€863.92**.
