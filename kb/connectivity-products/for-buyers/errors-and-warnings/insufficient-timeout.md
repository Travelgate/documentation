---
sidebar_position: 26
---

# INSUFFICIENT_TIMEOUT

## What Does "INSUFFICIENT_TIMEOUT" Mean?
An **"INSUFFICIENT_TIMEOUT"** warning is returned in **Search** when the timeout set for a HotelX request is too low to receive a response. The message shows the timeout that was applied, in milliseconds. It is a **warning at access level**, so only the affected access fails while the other accesses can still return results.

#### Example:

```json
{
  "warnings": [
    {
      "type": "CONNECTION_ERROR",
      "code": "INSUFFICIENT_TIMEOUT",
      "message": "Insufficient timeout to integration: X ms"
    }
  ]
}
```

## Why Does This Happen?
Main causes:
- **The Seller took too long to respond**, so the response did not arrive within the HotelX timeout.
- **The timeout is too small** for the operation or for the size of the request.
- **Both** of the above.

## What Can I Do If I Receive "INSUFFICIENT_TIMEOUT"?

#### 1. Increase the Timeout
Increase the [timeout](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/timeout-settings) so the Seller has more time to respond:

- **General timeout:** increase the timeout defined for your requests.
- **Settings timeout:** if the timeout is defined in the access Settings, increase that one instead.

#### 2. Reduce the Request Size
Large requests may slow down the Seller's response time. Try requesting fewer hotels or destinations per Search.

#### 3. Retry the Operation
Occasional network or system issues can cause delays, and retrying may resolve the issue.

:::info
If the warning persists after increasing the timeout, the Seller's response time may be too high. See [104 Error - Connection timeout with supplier](/kb/connectivity-products/for-buyers/errors-and-warnings/connection-timeout-provider) for further troubleshooting steps.
:::