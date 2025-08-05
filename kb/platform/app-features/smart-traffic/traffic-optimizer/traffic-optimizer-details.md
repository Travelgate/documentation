---
sidebar_position: 2
---

# How to Use Traffic Optimizer

## Traffic Optimizer: Reduce Unnecessary Search Traffic and Improve Your L2B

Searching for availability in hotels that don't convert isn't just inefficient—it’s a waste of resources. This challenge is widespread in the travel industry, yet many accept it as "normal."

At Travelgate, we understand the impact of handling **useless traffic** across the entire connectivity chain. That’s why we’ve developed **Traffic Optimizer**, an intelligent solution that enhances connection efficiency within our Marketplace.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3383vV-Ggu8?si=G9pmQ_bw72KeMmUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Who Can Benefit from Traffic Optimizer and How

Traffic Optimizer is available for all Buyers, connections using the **Hotel-X API** and connections using the **Legacy API**.

### Key Benefits:
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
    - Example: If searches for January 13th return 100% no availability, the hotel will be blacklisted on the following day (January 14th).
  - If a hotel wasn’t searched the previous day, it will **not** be considered.
  - Hotels blocked under this criteria receive a **grace period** to accept new searches, and will be **unblocked automatically** when availability is detected (following day).
      - Example:
          - Day 1: "Hotel A" reports 100% no availability.
          - Day 2:  "Hotel A" is marked as blocked, but a **grace period** allows it to still respond to searches.
          - Day 3: If "Hotel A" returns availability during any of the grace periods on Day 2 it will not remain blocked. Otherwise, it will be blocked again.

- **Zero Bookings:**
  - Blocks hotels that have **never recorded a booking** with Travelgate.
  - Hotels blocked under this criteria receive a **grace period** to accept new searches, and will be **unblocked automatically** when a Booking is detected.

- **Not in Portfolio:**
  - Identifies and blocks hotel codes that are **no longer offered by the Seller**.
  - A hotel must be requested before it becomes eligible for blocking. As a result, there may be a time gap between the first request and the actual blocking.
  - Once a hotel is blocked, it will never be unblocked unless it is included again by the Seller in the HotelList.

Hotels that match these criteria are **blacklisted**, meaning searches for those properties will be blocked, reducing unnecessary traffic.

🚀 **Daily Updates:** The blacklist is refreshed **every 24 hours**, ensuring optimization is always up to date!
