﻿---
sidebar_position: 2
---

# Standard Occupancy and Price Calculation in Inventory

### What does Standard Occupancy mean?💡
The Standard Occupancy is the **standard number of adult paxes of the room**.

### How can I calculate prices according to the Standard Occupancy?💡
- **Case 1:**

	For a Standard Occupancy=2 and the following product loaded:

	```
	<BaseByGuestAmts>
		<BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
	</BaseByGuestAmts> 
	```

	The price of two paxes will be 100 (2*(100⁄2) ), and the price for one pax won't be returned.

	:::warning Important:
	Note that prices per pax under the Standard Occupancy must be specified and prices for babies under the Standard Occupancy will be 0.
	:::

- **Case 2:**

	The Standard Occupancy is used for **calculating prices above it:**

	For a Standard Occupancy=2 and the following product loaded:

	```
	<BaseByGuestAmts>
		<BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
	</BaseByGuestAmts>
	<AdditionalGuestAmounts>
		<AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "10"/>
	</AdditionalGuestAmounts>
	``` 

	The price of one pax won't be returned, the price of two paxes will be 100 (2*(100⁄2)), and the price for three paxes will be 190 ((100⁄2) + (100⁄2) + ((100⁄2) + 40))

:::info
Don't forget to check our ['Availability and Price Load'](/docs/apps/inventory/extranet/availability-and-rates/manual-load/availability-and-price) section in the Inventory Documentation for more examples of price calculation.
:::

### Can I Modify the Standard Occupancy in Inventory?

No, **the Standard Occupancy in Inventory cannot be modified**. To make changes, follow these steps:

1. Delete the affected room(s).
2. Re-add the room(s) with the desired standard occupancy.
3. Contact the Channel Manager to request a remap and reload based on the updated information.

This ensures the changes are correctly applied and reflected in the system.

:::info
Discover more by diving into our [Inventory Documentation](/docs/apps/inventory/quickstart) 🚀
:::