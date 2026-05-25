--- 
sidebar_position: 4
---

# How to Optimize Search Results

Proactive optimization strategies to reduce no-availability responses before they occur during your Search operations.

> **Terminology:** In this article, we use **Seller** (the accommodation provider connected through Travelgate) consistently. **No availability** means receiving zero results from a Seller, which may also appear as a **204 error**.

:::info When to Use This Article
**You want to prevent high no-availability rates** by identifying and fixing issues with your integration configuration. If you've already received a 204 error and need troubleshooting steps, see the [204 Error troubleshooting guide](/kb/connectivity-products/for-buyers/errors-and-warnings/error-no-results-found).
:::

:::note For Sellers
If you need to troubleshoot no-availability errors from your side, refer to the [204 Error troubleshooting guide](/kb/connectivity-products/for-buyers/errors-and-warnings/error-no-results-found#for-sellers) for detailed Seller guidance.
:::

## Optimization Scope

This article is a **continuous improvement playbook** for increasing your availability success ratio over time. If you are investigating a specific failed request right now, use the [204 Error troubleshooting guide](/kb/connectivity-products/for-buyers/errors-and-warnings/error-no-results-found) as your incident runbook.

## 1. Define Baseline and Targets

Create a baseline before changing settings. Use [Stats](/kb/platform/app-features/monitoring-tools/stats/stats-details) as your main source to monitor search performance trends over time.

| KPI | What It Tells You | How to Measure | Target Example |
|---|---|---|---|
| Availability success ratio | Percentage of searches returning valid availability | Successful search responses / total searches, monitored in [Stats](/kb/platform/app-features/monitoring-tools/stats/stats-details) | Improve week over week |
| No-availability ratio | Share of searches ending with no availability (204) | 204 search outcomes / total searches, monitored in [Stats](/kb/platform/app-features/monitoring-tools/stats/stats-details) | Reduce progressively |
| Mapped portfolio coverage | How much usable hotel inventory you request vs what Seller enables | Requested mapped hotels vs Seller portfolio | Increase usable mapped share |
| Restriction-aligned request ratio | How often your searches respect Seller metadata constraints | Requests aligned with metadata / total requests | Increase aligned requests |

## 2. Optimize High-Impact Levers

| Lever | What to Optimize | Source of Data | Improvement Action |
|---|---|---|---|
| Credentials and access hygiene | Ensure active and correct Buyer setup | [HotelX Credentials](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials), [My Connections details](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details) | Fix credential mismatches before other changes |
| Portfolio and mapping coverage | Request only valid enabled inventory | [Seller's Hotel List](/kb/connectivity-products/for-buyers/hotel-x/content/hotels), [Connections Content](/kb/platform/app-features/connections/connections-content/content-management) | Force update and remap valid hotels |
| Request parameter quality | Align market/date/stay with Seller rules | [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata), audit samples | Adjust search parameters to valid combinations |
| Speed mode strategy | Balance coverage and latency | [Speed Mode Settings](/kb/platform/app-features/smart-traffic/speed/speed-activation#2-choose-speed-mode) | Start from Standard mode baseline, then tune |

## 3. Run Controlled Optimization Cycles

1. Pick one lever and one segment (Seller, market, stay length, booking window).
2. Apply one change at a time.
3. Measure before/after using the same segment and period.
4. Keep the change only if availability success ratio improves without unacceptable performance impact.

## 4. Tune Speed as an Optimization Lever

After credential, mapping, and parameter quality are stable, tune Speed for performance.

- **Fast Mode:** Uses cache-only responses and can reduce availability coverage when data is not cached.
- **Standard Mode:** Uses live + cached flow, typically better as optimization baseline.

Recommendation:
Use **Standard mode** to stabilize availability first, then test Speed adjustments with KPI monitoring.

## 5. Seller Collaboration for Optimization

When collaborating with the Seller, provide trend-level evidence instead of single failures:

Use [Stats](/kb/platform/app-features/monitoring-tools/stats/stats-details) to identify recurring low-performance Sellers, markets, and date ranges before reaching out.

- Markets with lowest availability success ratio
- Date ranges with highest no-availability concentration
- Hotel chains with repeated low coverage
- Request patterns that improve after parameter alignment

This helps agree on portfolio scope, restriction rules, and joint optimization actions.

## When to Switch to 204 Troubleshooting

Move from optimization workflow to incident troubleshooting when:

- A specific production request fails and needs immediate recovery
- A new 204 spike appears suddenly after a recent change
- You need per-request root cause evidence for escalation

Use the [204 Error troubleshooting guide](/kb/connectivity-products/for-buyers/errors-and-warnings/error-no-results-found) for that case.

