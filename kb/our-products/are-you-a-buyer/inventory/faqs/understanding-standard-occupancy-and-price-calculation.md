---
sidebar_position: 2
---

# Standard Occupancy and Price Calculation in Inventory

### What does Standard Occupancy mean?💡
Standard Occupancy is the **standard number of adult paxes of the room**.

### How can I calculate prices according to the Standard Occupancy?💡
- **Case 1:**

	For a Standard Occupancy=2 and the following product loaded:

	```
	<BaseByGuestAmts>
	   <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax="50.00"/>
	   <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
	</BaseByGuestAmts>
	```

	The price of two paxes will be 100, and the price for one pax will be 50.

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
	   <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "50.00" AgeQualifyingCode = "10"/>
	</AdditionalGuestAmounts>
	``` 

	The price of one pax will be 50 (100⁄2), the price of two paxes will be 100, and the price for three paxes will be 200 = 100 + (100⁄2 + 50).

### How can I modify the Standard Occupancy in Inventory?
Our Inventory Extranet allows for prices to be loaded in 3 different ways:

- Price per Room
- Price based on Standard Occupancy
- Price per Occupancy

1. First of all, we need you to confirm that you are aware that modifying the Standard Occupancy without the Channel remapping and refreshing on their side may result in a price discrepancy. That is, if the Standard Occupancy is modified and the Channel does not map and load again, **price discrepancy is a distinct possibility**. 

	:::warning Important:
	⚠️Please make sure of informing the Channel Manager of this modification so that they can map again and refresh. 
	:::

2. Once you have informed the Channel, you just need to [contact](https://app.travelgatex.com/tickets) our Customer Care team and confirm exactLy for which **hotel, rate and room** you need us to modify the Standard Occupancy. That's it!

 
:::info
Discover more by diving into our [Inventory Documentation](/docs/apps/inventory/quickstart) 🚀
:::