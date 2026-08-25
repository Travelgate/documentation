---
sidebar_position: 21
---

# PAYLOAD_TOO_LARGE

## What Does "PAYLOAD_TOO_LARGE" Mean?
A **"PAYLOAD_TOO_LARGE"** error appears when a HotelX Search would return more options than the platform can safely deliver in a single response. This is an **uncommon** error and appears only in unusually broad search scenarios.

Returning extremely large payloads can create high latency, memory pressure, and timeout risks on both the Travelgate side and the Buyer side. To protect platform stability, HotelX stops the response and returns a **"PROCESS_ERROR"** error type.

#### Example:

```json
{
  "data": {
    "hotelX": {
      "search": {
        "options": null,
        "errors": [
          {
            "code": "PAYLOAD_TOO_LARGE",
            "type": "PROCESS_ERROR",
            "description": "search response exceeded maximum allowed options"
          }
        ],
        "warnings": null
      }
    }
  }
}
```

## Why Does This Happen?
This is not a common day-to-day error. It usually occurs when the request scope is too broad and generates too many room/board combinations.

Main triggers:
- **Broad destination searches** (for example, large city-level destination codes) that expand to very large hotel sets.
- **Large hotel volumes in criteria** combined with broad distribution scope.
- **Unfiltered multi-supplier searches** executed across many accesses without aggregation or filtering rules.

## What Can I Do If I Receive "PAYLOAD_TOO_LARGE"?
Apply the following optimizations to reduce response size and improve performance.

#### 1. Narrow Destination Scope (When Using Destination Plugin)
If you are using the [Search by Destination Plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination), avoid very broad destination nodes when possible. Prefer smaller areas or more specific destination IDs to reduce the number of candidate hotels.

#### 2. Review Requested Hotel Volume
Review the total number of hotels requested in each search.

- As a baseline, we usually recommend around **200 hotels per search**.
- The optimal volume depends on your request design, especially whether the query runs against **one supplier** or **multiple suppliers/accesses**.
- If you query multiple suppliers in parallel, use smaller hotel batches to reduce payload peaks.

#### 3. Apply `filterSearch` to Reduce Noise
Use `filterSearch` to avoid unnecessary data from the start.

- Exclude statuses you do not want (for example, RQ).
- Restrict to specific accesses/suppliers instead of querying all active connections.
- More details: [Search Filters](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/search/search-filters).

#### 4. Send More Targeted Criteria
Include optional criteria such as currency, nationality, and markets whenever applicable, so suppliers can return more focused rates.

#### 5. Enable Traffic Optimization
Enable [Traffic Optimizer](/kb/connectivity-products/for-buyers/errors-and-warnings/traffic-optimization-error) strategies to reduce low-value or low-conversion traffic before large responses are generated.

:::info Best Practice
If your use case frequently targets large destinations or many suppliers, combine **aggregation plugin + optionsQuota + `filterSearch`** as a default Search baseline.
:::

:::tip
If you still receive this error after applying these recommendations, contact our [Customer Support team](https://app.travelgate.com/support) with your request sample and timestamp so we can help you tune your Search configuration.
:::
