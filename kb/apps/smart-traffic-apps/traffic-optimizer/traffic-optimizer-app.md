---
sidebar_position: 1
---

# Traffic Optimizer: Reduce unnecessary Search traffic and improve your L2B

Searching for availability in hotels that don't convert isn't just annoying; it's also a waste of money. This issue is one of the biggest challenges in the Industry, and sadly, it's often seen as "normal" by many Travel Industry players.

We fully grasp the impact handling "useless" traffic has on all parties involved in the connectivity chain. That's why we've devised a solution to address this concern, providing intelligent optimization of the connections in our Marketplace. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/3383vV-Ggu8?si=G9pmQ_bw72KeMmUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Who can benefit from Traffic Optimizer and what problems does it solve?✅
**Every connection through our Hotel-X Buyers API!**

Traffic Optimizer is available for connections that use Hotel-X API. Connections using our Legacy API do not have this functionality available.

- Improve your L2B ratio.
- Reduce search traffic and save costs.
- Even cut down on response times.
### How does it work? 🚦
Traffic Optimizer can be applied to a specific connection between Buyer and Seller or to a particular access. It conducts a thorough analysis of data collected from all transactions in our marketplace to identify and blacklist hotels that didn't convert the **previous day** based on various optimization criteria, such as:
- **No availability:** Blocks hotels with 100% "no availability" results during the previous day. This criteria will block hotels that have reported 100% “no availability” the previous day for all requested dates.  
  For example, if searches were performed for the month of September and the hotel has 100% non-availability, it will be blocked the next day. If the hotel had availability in December but that date was not searched the previous day, it will not be considered, and the searched dates with unavailability will prevail. However, on the day the hotel is blocked, it will be granted a grace period to receive new searches, and as soon as it shows availability, it will be unblocked.

- **Zero bookings:** Blocks a particular hotel offered by a Seller that has never recorded any bookings with Travelgate. 
- **Not in portfolio:** Identifies and blocks hotel codes that are no longer offered by the Seller. 
Hotels meeting the criteria will be added to the blacklist, and if requested, searches for those hotels will be blocked, reducing unnecessary traffic. The blacklist is updated daily, ensuring the optimization is always up to date!
