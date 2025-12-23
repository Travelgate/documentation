---
sidebar_position: 4
---

# Cancel Policies - Inventory

This section provides clear guidance on configuring cancellation policies as part of your [Inventory rate setup](/docs/apps/inventory/extranet/set-up/setup#rate), helping you understand how to effectively manage this crucial aspect of your inventory.

### How do I define a cancellation policy when creating a new rate in the Inventory Extranet?

When creating a new rate for a hotel using the **Add Rate** button in the Setup section, you also define the cancellation policies that apply to that rate.  

The Extranet allows for two primary Cancellation policy types:
  - **Cancellation Policy - Base:** This is the default policy applied to the entire rate and covers all dates unless overridden. If the **No refund** checkbox is selected, the rate will be non-refundable.
  - **Cancellation Policy - Calendar:** This option becomes available after you’ve created a rate with a base cancellation policy. It allows you to define specific cancellation rules for certain dates or date ranges, overriding the base policy—for example, applying a stricter policy during high-demand periods like holidays.

    :::info
    If you want to remove a cancel policy by date you can click the **Delete range** button and specify your dates. You can also delete or check the cancel policies by day clicking in the day's number of the month.
    :::



### Can I apply the same cancellation policy to a derived rate as the parent rate?

Yes. When a rate is configured as a **Derived Rate**, it typically inherits many properties from its *parent* (or *base*) rate—including the cancellation policy.

- **Clarification:** A derived rate is a child rate that automatically updates based on the parent rate. If the parent rate’s cancellation policy changes, the derived rate will also update accordingly—unless you explicitly override the inherited policy during setup.
- **Important Note:** When setting up a Derived Rate, you will see the specific option to use **Cancel policies from base rate**.
  - If this option is selected, the derived rate will adopt the parent rate’s cancellation policies.
  - If it’s unchecked, you’ll have the ability to **define a new cancellation policy**. This flexibility allows you to tailor cancellation rules for promotions, special offers, or unique booking conditions.

### What are the common penalty structures available for cancellation policies?

Common cancellation penalty structures offer flexibility in how you handle charges for cancellations or no-shows.

**Penalty Structures:**
    - **Import (Fixed Amount):** A specific monetary fee, regardless of the booking value (e.g., a $50 cancellation fee).
    - **Percentage (Percentage of Total):** A percentage of the total reservation cost (e.g., 25% of the total booking amount).
    - **Nights (Per Night Charge):** A penalty equal to the cost of a specified number of nights. For example, a 1-night penalty means the guest is charged the average price of one night, calculated from the entire stay.
    - **No refund (Non-Refundable):** The full booking amount is charged, and no refund is provided in case of cancellation.

### How can I define a non-refundable rate using the Extranet?

In the Extranet, you can easily configure a rate as **Non-Refundable** during setup.

**How to do it:** When adding or editing a rate, navigate to the cancellation penalty options. Select the Non-Refundable option to ensure that the full booking amount is charged to the guest, regardless of when they cancel.

:::warning Cancel Policies via the Inventory Extranet
Remember that if no cancellation policies are added or it is not explicitly stated that the rate is non-refundable, the rate will be considered 100% refundable until the check-in date.
After the check-in date, the cancellation cost will be equal to the total value of the reservation.
:::

### How are cancellation policies included when creating rates using the Inventory Push GraphQL API?

When using the **Inventory Push GraphQL API** with the `createRatesSetUp` mutation, cancellation policy details are specified within the [input structure](/api/types/inputs/cancel-policies-create-input) of your API call.  

You can define both `baseCancelPolicy` and `cancelPoliciesByDate` to cover general and date-specific cancellation rules.

:::warning Cancel Policies via Inventory Push GraphQL API

When you create or update a rate, we recommend always sending *cancelPolicies*, specifically *baseCancelPolicy*. Our API allows you to send *cancelPoliciesByDate* 
without a base policy; however, if any availability day is not covered, you must provide a *baseCancelPolicy*.  

For this reason, when you create or update a rate without a *baseCancelPolicy* our system automatically adds a base cancellation policy with `daysBeforeArrival: 999`, `penaltyType: PERCENTAGE` and `value: 100`, making the rate **non refundable**.

This prevents a [rate without cancellation policies](../../../../../apps/inventory/extranet/set-up/setup) from being considered 100% refundable.
:::

### Can I modify an existing rate’s cancellation policy using the GraphQL API?

Yes, you can update an existing rate’s cancellation policy using the `updateRatesSetUp` mutation in the Inventory Push GraphQL API. This allows you to modify specific fields, such as penalties, without needing to resend the full rate configuration.  

**How it works:** Reference the rate code of the rate you want to update, and include the revised cancellation policy details in the mutation input. These updates will replace the existing cancellation settings for that rate.

:::tip
Always ensure that your cancellation policy is clearly communicated to the guest *before* they complete their booking. Failure to do so can result in disputes and loss of revenue. We strongly recommend having clear terms and conditions on your booking channels.
:::