---
sidebar_position: 4
---

# Free Child/Baby Rates

## Loading Free Child/Baby Rates in the Inventory Extranet

Some **Channel Managers** do not support indicating free charges for child and baby occupancies in their pricing structures. To address this, we have introduced a feature allowing **Clients** to define free-of-charge rates for children and babies when creating or editing a rate. This option can be set within the **passenger conditions** under contract terms.

## Configuring Free-of-Charge Rates

By default, **both checkboxes for free child and free baby will be unchecked** to maintain the system's standard behavior.

![how_to_load_free_of_charge_children_babies_1](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_1.jpg)

## Price Calculation Logic

The **Inventory system** operates with three pricing models, and each Channel Manager uses one of them:

1. **Room Price**  
   - This pricing model remains **unchanged** by this feature. All room occupancies have the same price unless **pax supplements** are applied.

2. **Occupancy Price**  
   - This model is **not affected** by this feature since it already calculates final prices based on occupancy (with no additional calculations from the Inventory system).

3. **Standard Occupancy Price**  
   - This model **is affected**. Child and baby passengers will be **treated as free pax** based on the **Free-of-Charge** settings.

:::info
When referencing occupancy distributions, use the format **Adult-Child-Baby** (e.g., **2-0-0** for 2 adults, 0 children, and 0 babies).
:::

## Price Calculation Scenarios

### Standard Occupancy of 3 Example

#### **Below Standard Occupancy:**

| Occupancy | Condition | Occupancy Price |
|-----------|-----------|-----------|
| 1-0-0 | - | 1-0-0 |
| 1-0-1 | - | 1-0-0 |
| 1-1-0 | If free child checked | 1-0-0 |
| 1-1-0 | If free child unchecked | 2-0-0 |
| 2-0-0 | - | 2-0-0 |

#### **Equal to Standard Occupancy:**

| Occupancy | Condition | Occupancy Price |
|-----------|-----------|-----------|
| 1-1-1 | If free baby checked: Child is considered as an adult and the baby as a free pax | 2-0-0 |
| 1-1-1 | If free child checked: Both paxes are coing to be considered as a free pax | 1-0-0 |
| 1-1-1 | If both free child and free baby checked: Both paxes are coing to be considered as a free pax | 1-0-0 |
| 1-1-1 | If neither of them are checked as free: No changes | 3-0-0 |
| 3-0-0 | - | 3-0-0 |

#### **Above Standard Occupancy:**

##### **Occupancy 3-0-1**

| Occupancy | Supplements | Condition | Occupancy Price |
|-----------|-------------|-----------|------------|
| 3-0-1 | No | If free baby checked: The baby is considered as a free pax | 3-0-0 |
| 3-0-1 | No | If free baby unchecked: The baby is considered as an adult | 4-0-0 |
| 3-0-1 | Yes | If free baby checked: Check the [Pax Supplements section](/kb/our-products/are-you-a-buyer/inventory/how-tos/how-to-load-free-of-charge-rates/#pax-supplements) for further details | 3-0-1 |
| 3-0-1 | Yes | Free baby unchecked | 3-0-1 |

##### **Occupancy 3-1-0**

| Occupancy | Supplements | Condition | Occupancy Price |
|-----------|-------------|-----------|------------|
| 3-1-0 | No | If free child checked: The child is considered as a free pax | 3-0-0 |
| 3-1-0 | No | If free child unchecked: The child is considered as an adult | 4-0-0 |
| 3-1-0 | Yes | If free child unchecked: The child is considered as an adult | 3-1-0 |
| 3-1-0 | Yes | If free baby checked: Check the [Pax Supplements section](/kb/our-products/are-you-a-buyer/inventory/how-tos/how-to-load-free-of-charge-rates/#pax-supplements) for further details | 3-1-0 |

##### **Occupancy 3-1-1**

| Occupancy | Supplements | Condition | Occupancy Price |
|-----------|-------------|-----------|-----------|
| 3-1-1 | No | If free baby checked: The child is considered as an adult and the baby as a free pax | 4-0-0 |
| 3-1-1 | No | If free child checked: The child is considered as a free pax | 3-0-1 |
| 3-1-1 | No | If both free child and free baby checked: Both child and baby are free of charge | 3-0-0 |
| 3-1-1 | No | 	If neither of them are checked as free: All the paxes are considered as adults | 5-0-0 |
| 3-1-1 | Yes | Check the [Pax Supplements section](/kb/our-products/are-you-a-buyer/inventory/how-tos/how-to-load-free-of-charge-rates/#pax-supplements) for further details | 3-1-1 |

##### **Occupancy 4-0-0**

| Occupancy | Supplements | Condition | Occupancy Price |
|-----------|-------------|-----------|-------------|
| 4-0-0 | - | No changes | 4-0-0 |


## Pax Supplements

If **free-of-charge** is selected, the **passenger supplement** will always be treated as **exclusive**, whether specified as an **amount** or **percentage**.

For a **Standard Occupancy of 3**, where:
- **Base price:** 3-0-0 = 300€
- **Child supplement:** 50€
- **Baby supplement:** 10€

##### **Occupancy 3-0-1**

| Occupancy | Type | Pax | Condition | Supplement |
|-----------|------|-----|-----------|------------|
| 3-0-1 | Exclusive | Baby | Free baby checked | 10€ |
| 3-0-1 | Exclusive | Baby | Free baby unchecked | 10€ |

##### **Occupancy 3-1-0**

| Occupancy | Type | Pax | Condition | Supplement |
|-----------|------|-----|-----------|------------|
| 3-1-0 | Exclusive | Child | Free child checked | 50€ |
| 3-1-0 | Exclusive | Child | Free child unchecked | 50€ |

##### **Occupancy 3-1-1**

| Occupancy | Type | Pax | Condition | Supplement |
|-----------|------|-----|-----------|------------|
| 3-1-1 | Exclusive | Baby | Free baby checked | 10€ |
| 3-1-1 | Exclusive | Baby | Free baby unchecked | 10€ |
| 3-1-1 | Exclusive | Child | Free child checked | 50€ |
| 3-1-1 | Exclusive | Child | Free child unchecked | 50€ |

## Channel Manager Updates

If a Channel Manager updates a product for a specific rate that has 'Free of Charge' configured, the 'Free of Charge' setting will always take precedence. This means that our system will continue to treat the passenger as free, **regardless of any changes made by the Channel Manager**.

## Detailed Price Calculation Example

### **For the following room occupations:**  
![how_to_load_free_of_charge_children_babies_9](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_9.jpg)

### **Occupancy price applied to all rates:**  
![how_to_load_free_of_charge_children_babies_10](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_10.jpg)

### **Example Price Calculation Logic**

#### **Occupancy 1-2-0**

| Rate | Occupancy | Occupancy Price | Price | Comments |
|------|----------|----------------------|--------|----------|
| All Free | 1-2-0 | 1-0-0 | 10€ | Since the child is excluded from the price calculation and a price is already loaded for 1 adult, we use this price. If no price were set for 1 adult, there would be no availability for this occupancy. |
| Child Free | 1-2-0 | 1-0-0 | 10€ | Since the child is excluded from the price calculation and a price is already loaded for 1 adult, we use this price. If no price were set for 1 adult, there would be no availability for this occupancy. |
| Baby Free | 1-2-0 | 3-0-0 | 12€ | The rate does not include "Free children" so the price pushed for 3 adults is returned. |
| None Free | 1-2-0 | 3-0-0 | 12€ | The rate does not include "Free children" so the price pushed for 3 adults is returned. |

#### **Occupancy 1-3-0**

| Rate | Occupancy | Occupancy Price | Price | Comments |
|------|----------|----------------------|--------|----------|
| All Free | 1-3-0 | 1-0-0 | 10€ | Since the child is excluded from the price calculation and a price is already loaded for 1 adult, we use this price. In this case, we avoid the specific price calculation for standard occupancy and use the price loaded for 1 adult. |
| Child Free | 1-3-0 | 1-0-0 | 10€ | Since the child is excluded from the price calculation and a price is already loaded for 1 adult, we use this price. In this case, we avoid the specific price calculation for standard occupancy and use the price loaded for 1 adult. |
| Baby Free | 1-3-0 | 1-3-0* (with child supplement) | 19€ | The rate does not include "Free children" so the calculation uses the standard occupancy price and adds the child supplement. |
| None Free | 1-3-0 | 1-3-0* (with child supplement) | 19€ | 	The rate does not include "Free children" so the calculation uses the standard occupancy price and adds the child supplement. |

:::info
Explore more details in our **[Inventory Documentation](/docs/apps/inventory/extranet/overview)** 🚀
:::

