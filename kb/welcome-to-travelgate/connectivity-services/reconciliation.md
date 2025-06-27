---
sidebar_position: 6
---

# Reconciliation

## Streamlining Booking Validation & Reconciliation

Power your operations with a [Reconciliation API](/docs/apps/reconciliation/quickstart/) that instantly validates and reconciles your booking data. Say goodbye to manual work and keep processes running fast and seamlessly. Whether you are a Buyer or a Seller, get accurate, reliable data with a solution that grows with your business.

### How does the Reconciliation API work?
The Reconciliation API stores all bookings made by a Buyer through Travelgate and matches them with the bookings stored in the Seller’s system. This process ensures that **both Buyers and Sellers have aligned booking records**, reducing the need for manual checks between their systems and Travelgate.

#### Reconciliation API Workflow Overview

1. **Easy Data Ingestion**: Submit booking details seamlessly via our API.

2. **Smart Matching & Validation**: We cross-check bookings across Buyers, Sellers, and Travelgate, verifying:
    - Statuses & pricing
    - Cancellations & penalties
    - Optional property details

3. **Automated Reconciliation**: Validated bookings are reconciled instantly, ensuring:
    - Accurate records  
    - Quick dispute resolution  
    - Fewer billing errors  

4. **Alerts & Reports**: Stay informed with:
    - Real-time notifications
    - Custom reports
    - Insights to maintain accuracy

### Why is booking reconciliation important?
Booking reconciliation helps resolve discrepancies such as:  
- A Buyer makes a booking, but the Seller’s system returns a timeout, resulting in an “Unknown” status in Travelgate. Even if the Seller confirms the booking exists on their side, it remains unconfirmed in Travelgate.
- If a Buyer cancels directly with the Seller instead of using the API or Travelgate’s B2B Virtual Agency platform, the cancellation won’t be reflected in Travelgate.

Reconciliation ensures accurate booking status, prevents mismatches, and reduces manual intervention.

### Who can implement the Reconciliation API?
Both **Buyers and Sellers** can implement the Reconciliation API to streamline operations and improve data consistency.

### How does Travelgate obtain the booking status from the Seller’s system?
Sellers and Buyers can use the Reconciliation API to push booking status data (such as confirmed or canceled) to Travelgate. These updates are then compared with Travelgate’s internal records to ensure alignment.  

The **frequency** of these updates depends on each Partner’s implementation. Some send data every 24 hours, while others update in real-time.

### Why was the Reconciliation API developed?
Previously, reconciliation was a manual process requiring time from both Buyers and Sellers. The Reconciliation API automates this, allowing Sellers and Buyers to send up-to-date booking statuses (confirmed or canceled) directly to Travelgate, significantly reducing manual effort and improving operational efficiency.  

At the end of each month, Travelgate compares the reservation data from Sellers with its own records to ensure everything is correctly aligned for billing.

### Does the Reconciliation API replace the need to cancel bookings via API?
**No**. While the Reconciliation API is highly recommended for data alignment, **it does not replace the need to cancel bookings via API or B2B Virtual Agency**. If an error prevents cancellation via API, it’s crucial to:

1. Check the details provided in the [Errors and Warnings list](/kb/connectivity-products/for-buyers/errors-and-warnings/overview) to understand the issue.
2. Take corrective actions or contact the Support team if needed (according to each error).

Reconciliation helps ensure accuracy but **should be used in addition to, not instead of**, proper booking management through API.

### What else?
We have also begun implementing **anomaly detection** for reservations. This involves comparing data between parties to identify potential discrepancies. When inconsistencies are detected, alerts are triggered to highlight the specific differences.  

Currently, the system monitors changes in reservation prices, check-in and check-out dates, cancellation penalty deadlines, total prices and amounts, rooms count, and whether the reservation is refundable or non-refundable.


:::info
🚀 **Ready to start?** Check out our [API integration section](/docs/apps/reconciliation/quickstart/)!
:::
