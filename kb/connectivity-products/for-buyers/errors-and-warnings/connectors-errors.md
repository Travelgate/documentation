---
sidebar_position: 28
---

# Connector Errors 

## What Are Connector Errors?
When a Buyer's request fails at the Seller, the Travelgate Connector receives a message describing what happened. Travelgate translates that message into the error you receive in **HotelX** or the **Legacy Buyers API**. Each error includes:

- **`type`:** the kind of error. Several Connector errors can share the same `type`.
- **`code` (HotelX only):** the Connector error id. It identifies the exact situation, so you can find the right fix faster.
- **`description`:** the standard description and, when the Seller provides it, the Seller's own message.

Look up your `type` and `code` in [Error Codes and What They Mean](#error-codes-and-what-they-mean). In the Legacy Buyers API there is no `code`, so the `description` is the only place with the error details.

#### Example (HotelX):
```json
"errors": [
  {
    "type": "301",
    "code": "11301",
    "description": "Option not found in quote External: Rooms not found"
  }
]
```

#### Example (Legacy Buyers API):
```xml
<applicationErrors>
  <type>301</type>
  <description>
Option not found in quote: Rooms not found
Total options to try to do match: 6
Hotel: 12345 - HotelsMatch=1
Board: BB - BoardsMatch=1
Parameters - OptionsMatch=6:
Payment Type: Merchant - OptionsMatch=6

Rooms count: 1 - OptionsMatch=0
Room 1 - RoomsMatch=0:
  OccupancyRefId=1
  Code=Superior Room
  Description=Superior Room
  LegacyRoomId=1#Superior Room
  </description>
</applicationErrors>
```

## Error Codes and What They Mean
Find your error `type` and `code` in the table. Follow the link on the `type` to read what it means and how to resolve it.

| Error `type`                                                                                                   | Error `code` (Connector Error id) | What it means |
| -------------------------------------------------------------------------------------------------------------: | -----------: | ---------------------------------------------- |
| [101](/kb/connectivity-products/for-buyers/errors-and-warnings/error-integration)                          |        22101 | Internal error |
| [101](/kb/connectivity-products/for-buyers/errors-and-warnings/error-integration)                          |        22107 | Maximum number of options exceeded |
| [102](/kb/connectivity-products/for-buyers/errors-and-warnings/error-provider)                             |        11102 | Seller error |
| [102](/kb/connectivity-products/for-buyers/errors-and-warnings/error-provider)                             |        11205 | Seller session expired |
| [102](/kb/connectivity-products/for-buyers/errors-and-warnings/error-provider)                             |        11206 | Seller request or response cannot be processed |
| [102](/kb/connectivity-products/for-buyers/errors-and-warnings/error-provider)                             |        11207 | Bad request to Seller |
| [102](/kb/connectivity-products/for-buyers/errors-and-warnings/error-provider)                             |        11304 | Price changed |
| [102](/kb/connectivity-products/for-buyers/errors-and-warnings/error-provider)                             |        11305 | Booking not found |
| [102](/kb/connectivity-products/for-buyers/errors-and-warnings/error-provider)                             |        12401 | Unauthorized |
| [103](/kb/connectivity-products/for-buyers/errors-and-warnings/too-many-requests)                          |        31103 | Too many requests to the Seller |
| [104](/kb/connectivity-products/for-buyers/errors-and-warnings/connection-timeout-provider)                |        31104 | Connection timeout with Seller |
| [105](/kb/connectivity-products/for-buyers/errors-and-warnings/communication-error)                        |        22105 | Internal connection error |
| [105](/kb/connectivity-products/for-buyers/errors-and-warnings/communication-error)                        |        22106 | Seller response exceeded the maximum size |
| [105](/kb/connectivity-products/for-buyers/errors-and-warnings/communication-error)                        |        31105 | Communication error |
| [106](/kb/connectivity-products/for-buyers/errors-and-warnings/request-aborted-by-client)                  |        12106 | Request aborted by client |
| [204](/kb/connectivity-products/for-buyers/errors-and-warnings/error-no-results-found)                     |        11204 | No results found |
| [207](/kb/connectivity-products/for-buyers/errors-and-warnings/error-request-xml-not-accepted-by-supplier) |        12207 | Request not accepted by Seller |
| [207](/kb/connectivity-products/for-buyers/errors-and-warnings/error-request-xml-not-accepted-by-supplier) |        12501 | Operation not implemented |
| [301](/kb/connectivity-products/for-buyers/errors-and-warnings/error-option-not-found)                     |        11301 | Option not found in quote |
| [302](/kb/connectivity-products/for-buyers/errors-and-warnings/hotel-not-found)                            |        11302 | Hotel not found |
| [303](/kb/connectivity-products/for-buyers/errors-and-warnings/error-booking-not-confirmed)                |        11303 | Booking not confirmed |

:::tip
A `301` error also includes a diagnostic trace in its `description` that pinpoints why the option was not found. See [301 Error](/kb/connectivity-products/for-buyers/errors-and-warnings/error-option-not-found#understanding-quote-subcodes-and-cascade-validation) to learn how to read it.
:::

## Seller Details in the Description
When the Seller provides details, they are added to the end of the error `description`:

- **HotelX:** appended after the standard description, preceded by `External:`.
- **Legacy Buyers API:** appended after the standard description, preceded by a colon.

These details are the Seller's own message, so their wording can vary between Sellers. They often explain the root cause and can help you resolve the issue faster.

## How to Troubleshoot Connector Errors

#### 1. Identify the Error
Check the `type` and `code` of the error you received in the [table above](#error-codes-and-what-they-mean).

#### 2. Read the Description
Check whether the `description` includes Seller details. They can contain context that is not part of the standard description.

#### 3. Apply the Recommended Steps
Open the article linked to your error `type` and apply every recommendation that corresponds to your case. These steps are designed to let you diagnose and fix most errors on your own, giving you the fastest path back to normal operation.

#### 4. Contact Travelgate Support
If the error persists after completing the recommended steps, our team is ready to help. Contact [Travelgate Support](https://app.travelgate.com/support) and include:

- The request and response logs of your transaction.
- The operation and the access or connection used.
- The timestamp of the request.
- The error `type`, `code`, and `description`.
