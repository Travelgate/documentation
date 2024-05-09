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

### STUDY CASE OF PRICE CALCULATION FOR A STANDARD OCCUPANCY OF 3🔎
1. Under Standard Occupancy:

	![how_to_load_free_of_charge_children_babies_2](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_2.jpg)

1. Equal to Standard Occupancy:

	![free_of_charge_babies_equal_standard](https://storage.travelgate.com/kbase/free_of_charge_babies_equal_standard.jpg)


1. Above Standard Occupancy:

	![how_to_load_free_of_charge_children_babies_4](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_4.jpg)
	![how_to_load_free_of_charge_children_babies_5](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_5.jpg)


### Pax Supplements💡
If the free of charge checkbox is selected, the passenger supplement will always be treated as an **Exclusive** type, regardless of whether the supplement is specified as an **Amount or Percent**.

For example, for a Standard Occupancy of 3:

- The Standard Occupancy value is  3
- 3-0-0 = 300€
- Child Supplement = 50€
- Baby Supplement = 10€

![how_to_load_free_of_charge_children_babies_6](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_6.jpg)
![how_to_load_free_of_charge_children_babies_7](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_7.jpg)
![how_to_load_free_of_charge_children_babies_8](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_8.jpg)



### Channel Manager Updates💡
When the Channel Manager updates a product for a specific rate that has Free of Charge configured, the set Free of Charge value will always prevail over the update. This means that our system will always treat the particular passenger as a free passenger, **regardless of any updates made by the Channel Manager**.

### DETAILED PRICE CALCULATION STUDY CASE🔎

**For the following room occupations:**  
![how_to_load_free_of_charge_children_babies_9](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_9.jpg)


**And the same occupancy price for all the rates:**
![how_to_load_free_of_charge_children_babies_10](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_10.jpg)


**The following price calculation logic will be applied:** 

**Occupancy 1-2-0**

![how_to_load_free_of_charge_children_babies_11](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_11.jpg)

**Occupancy 1-3-0**

![how_to_load_free_of_charge_children_babies_12](https://storage.travelgate.com/kbase/how_to_load_free_of_charge_children_babies_12.jpg)
![free_of_charge_babies_1_3_0](https://storage.travelgate.com/kbase/free_of_charge_babies_1_3_0.jpg)

 
:::info
Discover more by diving into our Inventory [Documentation](/docs/apps/inventory/extranet/overview) 🚀
:::
 
