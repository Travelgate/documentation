---
sidebar_position: 2
---

# How to Use Traffic Optimizer

## Traffic Optimizer: Reduce Unnecessary Search Traffic and Improve Your L2B

Searching for availability in hotels that don't convert isn't just inefficient—it’s a waste of resources. This challenge is widespread in the travel industry, yet many accept it as "normal."

At Travelgate, we understand the impact of handling **useless traffic** across the entire connectivity chain. That’s why we’ve developed **Traffic Optimizer**, an intelligent solution that enhances connection efficiency within our Marketplace.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3383vV-Ggu8?si=G9pmQ_bw72KeMmUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Who Can Activate Traffic Optimizer?
Both **Buyers and Sellers** can enable Traffic Optimizer within Travelgate. However, this feature is **only available for Buyer connections using the Hotel-X API**. Connections using our Legacy API do not support this functionality.

If you're a Seller, you can check whether your Buyer is integrated via the Hotel-X API or the Legacy Pull Buyers API by **looking for the “Hotel-X” label on the connection in the “My Connections” screen**. If the Buyer is using the Hotel-X API, the [“Hotel-X” label](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details/#additional-access-information) will appear next to the “Buyer” label.

## What Are the Benefits of Traffic Optimizer?

- **Improve your Look-to-Book (L2B) ratio** by filtering out low-converting searches.
- **Reduce unnecessary search traffic**, optimizing API performance and saving costs.
- **Decrease response times**, improving efficiency for both Buyers and Sellers.

## How Does It Work?

Traffic Optimizer can be applied to either:
- A **specific connection** between a Buyer and a Seller.
- A **particular access** within a connection.

It uses a **data-driven approach** to analyze past transactions and **automatically blacklist hotels** that did not convert the previous day, based on selected optimization criteria:

### **Optimization Criteria:**

- **No Availability:**
  - Blocks hotels that returned **100% "no availability"** results the previous day for all requested dates.
  - Example: If searches for September returned **100% unavailability**, the hotel will be **blacklisted the next day**.
  - If a hotel had availability for December but wasn’t searched the previous day, it will **not** be considered.
  - Hotels blocked under this criteria receive a **grace period** to accept new searches, and will be **unblocked automatically** when availability is detected.

- **Zero Bookings:**
  - Blocks hotels that have **never recorded a booking** with Travelgate.

- **Not in Portfolio:**
  - Identifies and blocks hotel codes that are **no longer offered by the Seller**.

Hotels that match these criteria are **blacklisted**, meaning searches for those properties will be blocked, reducing unnecessary traffic.

🚀 **Daily Updates:** The blacklist is refreshed **every 24 hours**, ensuring optimization is always up to date!
