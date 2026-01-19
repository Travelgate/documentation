---
sidebar_position: 5
---

# Add Rate


## How to Create a New Rate
Follow these steps to [create a new rate](/docs/apps/inventory/extranet/set-up/setup#how-to-add-a-rate):

1. Navigate to the **Inventory** top menu and select **SetUp**.
2. Select a connection (Client + Provider) and hotel.
3. Click the **+ Add Rate** button to open the rate configuration form.

    <img src="https://storage.travelgate.com/docs/inventory_setup6.png" alt="inventory_setup6" width="500" />

### Rate Configuration Fields

#### General Rate Information

* **Rate Code:** A unique internal identifier for the rate.
* **Rate Name:** The descriptive name of the rate.
* **Included Board:** Specify the meal plan included.
* **Age Groups and Free Child:** Define age ranges for infants and children to ensure correct pricing calculation.
* **Currency:** Select the currency in which the rate will be loaded and sold.
* **Commission (%) and Binding:** Define the applicable rate commission percentage and binding option if applicable.
* **Rate Rule and Senior Rates:** Configure Rate Rules or Senior Rates if applicable.
* **Active:** Enable or disable the rate availability.

#### Booking Window

Select "All Dates" or define a specific booking window period for that rate.

#### Markets (Countries)

Define which geographic markets (countries) this rate applies to. Leaving this field blank means that it applies to all markets.

#### Payment Type

Specify the payment type required for this rate.

#### Card Type

Select the card types accepted for this rate.

#### Taxes

Rates have no taxes configured by default. To add taxes, check the "Taxes" checkbox and configure as needed.

#### Cancellation Policies

1. **Cancellation Policy - Base**  
   Define the default cancellation policy for the rate. Check the 'No refund' checkbox to make the rate non-refundable.

2. **Cancellation Policy - Calendar**  
   Available after creating your base rate with cancellation policies. This option allows you to create specific cancellation policies by date or date range.


#### Specific Clients

Restrict this rate to specific clients by checking this option. Add:
- **Code:** A unique identifier representing your client (must be unique within the same rate).
- **Description:** The client name.

#### Amendments Policy

Configure whether the rate is modifiable after booking and define any amendment fees that apply.

#### Business Rules

Configure advanced parameters for rate distribution. Note: Some parameters require configuration in the client's access. For Hotel-X Pull Buyer API users, use the "[Add parameters](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter)" Hotel-X plugin to modify these settings dynamically.

- **Billing Companies:** Inform the company with which this option is billed. In order to use this feature, billing companies must be pre-loaded into the Travelgate system.
- **Selling Clients:** Define which clients are included or excluded from this rate option.
- **Distribution Type:** Select your distribution channel type (B2B or B2C).

## What are Derived Rates?

[Derived rates](/docs/apps/inventory/extranet/set-up/setup#derived-rates) allow you to create discounts or supplements based on existing rates. These rates inherit properties from their base (parent) rate and can modify specific values such as cancellation policies or target markets. 

The primary use case for derived rates is to apply supplements or discounts to specific rooms while maintaining the base rate's core configuration.

## Free Night Offers

The Inventory extranet enables you to create [free night offers](/kb/connectivity-products/for-buyers/inventory/set-up/add-rate#free-night-offers) for rates and rooms. These offers reward customers with complimentary nights when they book a minimum number of nights.

:::info
Explore our **[Inventory SetUp Documentation](/docs/apps/inventory/extranet/set-up/setup)** for comprehensive documentation about Inventory Rates, Derived Rates, and Free Night Offers! 🚀
:::
