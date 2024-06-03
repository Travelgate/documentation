---
sidebar_position: 5
---

# How to load free of charge rates for children and babies in Inventory Extranet

Currently, there are certain Channel Managers that cannot load their prices indicating free charges for child and baby occupancies. To address this issue, we have introduced a new feature that enables Buyers to specify rates that work with free child/baby. In this case, when you create or edit a rate, you will have the option to set passenger conditions in the contract terms.

### How can I configure free of charge rates for children and babies?🌟
To ensure a smooth transition for our existing product, **both check-boxes will be left unchecked by default**. This means that the system's behavior will remain unchanged by default.

![how_to_load_free_of_charge_children_babies_1](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_1.jpg)

### Price Calculation💡
As you may know, Inventory works with three different types of price, and each Channel Manager loads their product using one of them:

1. **Room Price**

	The Room Price is not going to be affected by this new feature: All the room occupancies have the same price unless there are pax supplements loaded.

1. **Occupancy Price**

	The Occupancy Price is not going to be affected by this new feature: This price already updates the final price for each occupancy with no additional calculations from the Inventory system.

1. **Standard Occupancy Price**

	This type of price will be affected. Child and baby passengers will be considered as free pax depending on the Free of Charge set value.

:::info
For clarity in the following cases, please use the occupancy distribution format of **Adult-Child-Baby**. For example, '2-0-0' represents 2 adults, zero children, and zero babies.
:::

### Study Case of Price Calculation for a Standard Occupancy of 3:
1. **Under Standard Occupancy:**

	| Occupancy  |  Comments  | Occupancy Price  |
	|-----------|-----------|-----------|
	| 1-0-0 | - |1-0-0 |
	| 1-0-1 | - | 1-0-0 |
	| 1-1-0 | If free child checked. | 1-0-0 |
	| 1-1-0 | If free child unchecked. | 2-0-0 |
	| 2-0-0 | - | 2-0-0 |


2. **Equal to Standard Occupancy:**

	| Occupancy  | Comments  | Occupancy Price |
	|-----------|-----------|-----------|
	| 1-1-1 | If free baby checked: Child is considered as an adult and the baby as a free pax. | 2-0-0 |
	| 1-1-1 | If free child checked: Both paxes are coing to be considered as a free pax. | 1-0-0 |
	| 1-1-1 | If both free child and free baby checked: Both paxes are coing to be considered as a free pax. | 1-0-0 |
	| 1-1-1 | If neither of them are checked as free: No changes. | 3-0-0 |
	| 3-0-0 | - | 3-0-0 |



3. **Above Standard Occupancy:**
   
	**Occupancy 3-0-1**

	| Occupancy | Supplements  |Comments  | Occupancy Price  |
	|-----------|-----------|-----------|-----------|
	| 3-0-1 | No | If free baby checked: The baby is considered as a free pax. | 3-0-0 |
	| 3-0-1 | No | If free baby unchecked: The baby is considered as an adult. | 4-0-0 |
	| 3-0-1 | Yes | If free baby checked: Check the [Pax Supplements section](/kb/our-products/are-you-a-buyer/inventory/how-tos/how-to-load-free-of-charge-rates#pax-supplements) for further details. | 3-0-1 |
	| 3-0-1 | Yes | If free child unchecked: No changes. | 3-0-1 |

	**Occupancy 3-1-0**

	 Occupancy  | Supplements  |Comments  | Occupancy Price  |
	|-----------|-----------|-----------|-----------|
	| 3-1-0 | No | If free child checked: The child is considered as a free pax. | 3-0-0 |
	| 3-1-0 | No | If free child unchecked: The child is considered as an adult. | 4-0-0 |
	| 3-1-0 | Yes | If free child unchecked: The child is considered as an adult. | 3-1-0 |
	| 3-1-0 | Yes | If free child checked: Check the [Pax Supplements section](/kb/our-products/are-you-a-buyer/inventory/how-tos/how-to-load-free-of-charge-rates#pax-supplements) for further details. | 3-1-0 |


	**Occupancy 3-1-1**

	 Occupancy  | Supplements  |Comments  | Occupancy Price  |
	|-----------|-----------|-----------|-----------|
	| 3-1-1 | No | If free baby checked: The child is considered as an adult and the baby as a free pax. | 4-0-0 |
	| 3-1-1 | No | If free child checked: The child is considered as a free pax. | 3-0-1 |
	| 3-1-1 | No | If both free child and free baby checked: Both child and baby are free of charge. | 3-0-0 |
	| 3-1-1 | No | If neither of them are checked as free: All the paxes are considered as adults. | 5-0-0 |
	| 3-1-1 | Yes | Check the [Pax Supplements section](/kb/our-products/are-you-a-buyer/inventory/how-tos/how-to-load-free-of-charge-rates#pax-supplements) for further details. | 3-1-1 |


	**Occupancy 4-0-0**

	 Occupancy  | Supplements  |Comments  | Occupancy Price  |
	|-----------|-----------|-----------|-----------|
	| 4-0-0 | - | No changes | 4-0-0 |

### Pax Supplements💡
If the free of charge checkbox is selected, the passenger supplement will always be treated as an **Exclusive** type, regardless of whether the supplement is specified as an **Amount or Percent**.

For example, for a Standard Occupancy of 3:

- The Standard Occupancy value is  3
- 3-0-0 = 300€
- Child Supplement = 50€
- Baby Supplement = 10€


	**Occupancy 3-0-1**

	| Type  | Pax  |Comments  | Supplement  |
	|-----------|-----------|-----------|-----------|
	| Exclusive | Baby | If free baby checked. | 10 |
	| Exclusive | Baby | If free baby unchecked. | 10 |


	**Occupancy 3-1-0**

	| Type  | Pax  |Comments  | Supplement  |
	|-----------|-----------|-----------|-----------|
	| Exclusive | Child | If free child checked. | 50 |
	| Exclusive | Child | If free child unchecked. | 50 |


	**Occupancy 3-1-1**

	| Type  | Pax  |Comments  | Supplement  |
	|-----------|-----------|-----------|-----------|
	| Exclusive | Baby | If free baby checked. | 10 |
	| Exclusive | Baby | If free baby unchecked. | 10 |
	| Exclusive | Child | If free child checked. | 50 |
	| Exclusive | Child | If free child unchecked. | 50 |


### Channel Manager Updates💡
When the Channel Manager updates a product for a specific rate that has Free of Charge configured, the set Free of Charge value will always prevail over the update. This means that our system will always treat the particular passenger as a free passenger, **regardless of any updates made by the Channel Manager**.

### DETAILED PRICE CALCULATION STUDY CASE🔎

**For the following room occupations:**  
![how_to_load_free_of_charge_children_babies_9](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_9.jpg)


**And the same occupancy price for all the rates:**
![how_to_load_free_of_charge_children_babies_10](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_10.jpg)


**The following price calculation logic will be applied:** 

	**Occupancy 1-2-0**

	| Rate  | Occupancy  | Occupancy Price  | Price  | Comments  |
	|-----------|-----------|-----------|-----------|-----------|
	| All Free | 1-2-0 | 1-0-0 | 10€ | Since the child is excluded from the price calculation and a price is already loaded for 1 adult, we use this price. If no price were set for 1 adult, there would be no availability for this occupancy. |
	| Child Free | 1-2-0 | 1-0-0 | 10€ | Since the child is excluded from the price calculation and a price is already loaded for 1 adult, we use this price. If no price were set for 1 adult, there would be no availability for this occupancy. |
	| Baby Free | 1-2-0 | 3-0-0 | 12€ | The rate does not include "Free children" so the price pushed for 3 adults is returned. |
	| None Free | 1-2-0 | 3-0-0 | 12€ | The rate does not include "Free children" so the price pushed for 3 adults is returned. |

	**Occupancy 1-3-0**

	| Rate  | Occupancy  | Occupancy Price  | Price  | Comments  |
	|-----------|-----------|-----------|-----------|-----------|
	| All Free | 1-3-0 | 1-0-0 | 10€ | Since the child is excluded from the price calculation and a price is already loaded for 1 adult, we use this price. In this case, we avoid the specific price calculation for standard occupancy and use the price loaded for 1 adult. |
	| Child Free | 1-3-0 | 1-0-0 | 10€ | Since the child is excluded from the price calculation and a price is already loaded for 1 adult, we use this price. In this case, we avoid the specific price calculation for standard occupancy and use the price loaded for 1 adult. |
	| Baby Free | 1-3-0 | 1-3-0* (with child supplement) | 19€ | The rate does not include "Free children" so the calculation uses the standard occupancy price and adds the child supplement. |
	| None Free | 1-3-0 | 1-3-0* (with child supplement) | 19€ | The rate does not include "Free children" so the calculation uses the standard occupancy price and adds the child supplement. |
 
:::info
Discover more by diving into our Inventory [Documentation](/docs/apps/inventory/extranet/overview) 🚀
:::
 
