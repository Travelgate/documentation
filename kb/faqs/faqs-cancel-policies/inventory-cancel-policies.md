---
sidebar_position: 4
---

# Cancel Policies - Inventory

This section provides clear answers and examples concerning the configuration of cancellation policies as part of your rate setup, ensuring you understand how to manage this crucial aspect of your inventory.

### How do I define a cancellation policy when creating a new rate in the Extranet?

When you create a new rate using the Extranet's **How to add a Rate** feature, you define the cancellation policy in the section dedicated to penalties.

- **Example:** You have the option to set up different types of cancellation penalties, such as a fee for late cancellations (Penalty for cancellations made after the deadline) or a no-show penalty. You can specify whether the penalty is a fixed amount, a percentage of the total stay, or based on the cost of a certain number of nights. For instance, a policy might be "Cancellation within 7 days of arrival results in a penalty equal to the cost of the first night."
- **Additional Clarification (Cancellation Policy Types):** The Extranet allows for two primary policy types:
    - **Cancellation Policy - Base:** This is the default or standard policy applied to the entire rate, covering all dates unless overridden.
    - **Cancellation Policy - Calendar:** This allows you to set specific cancellation rules for certain dates or date ranges, overriding the Base policy for those periods (e.g., a stricter policy for a high-demand holiday period).

### Can I apply the same cancellation policy to a derived rate as the parent rate?

Yes, when a rate is set up as a **Derived Rate**, it inherits many properties from its *parent* or *base* rate, and this typically includes the cancellation policy.

- **Clarification:** A derived rate is a child rate that is automatically updated based on the parent rate. If the parent rate's cancellation policy is updated, the derived rate's policy will also update automatically, unless you explicitly override the inherited policy during the derived rate setup.
- **Important Note:** When setting up a Derived Rate, you will see a specific option to **Use Parent Cancellation Policy** or to **Define a New Policy**. This flexibility is key to managing promotions or special offers that may require a different cancellation rule.

### What are the common penalty structures available for cancellation policies?

The common penalty structures for cancellations allow for flexibility in how you charge for cancellations or no-shows.

- **Example Structures:**
    - **Fixed Amount:** A specific monetary amount regardless of the booking value (e.g., $50 cancellation fee).
    - **Percentage of Total:** A percentage of the total booking amount (e.g., 25% of the total price).
    - **Per Night Charge:** The cost equivalent to a specified number of nights (e.g., 1-night penalty).
    - **Non-Refundable:** The full amount is charged and there is no refund upon cancellation. (Cancellation results in a charge of the full amount, and no refund will be issued.)

### How can I define a non-refundable rate using the Extranet?

In the Extranet, when setting up a rate, you can explicitly configure it as **Non-Refundable**.

- **Instruction:** When adding or editing a rate, look for the penalty options related to cancellation. Selecting the non-refundable option ensures that the entire amount is charged to the guest regardless of when they cancel.

### How are cancellation policies included when creating rates using the Inventory Push GraphQL API?

When using the **Inventory Push GraphQL API** with the `createRatesSetUp` mutation to create or update rates, the cancellation policy details are included within the input structure of your API call. Specifically, the mutation requires you to provide data that defines the penalties.

- **API Context:** You will use fields within the rate structure to specify the type of penalty (e.g., `CANCELLATION` or `NOSHOW`), the penalty structure (e.g., amount, percentage, or nights), and the deadlines associated with those penalties (e.g., a penalty applies if cancelled X days prior to check-in).
- **Example API Structure Snippet:**

```graphql
input RateSetUpInput {
  ...
  penalties: [PenaltyInput!]
}

input PenaltyInput {
  type: PenaltyType! # e.g., CANCELLATION
  structure: PenaltyStructureInput!
  # Deadline fields for when the penalty applies
  appliesUntilDaysBeforeCheckin: Int
  ...
}
```

### Is it possible to modify an existing rate's cancellation policy using the GraphQL API?

Yes, you can modify an existing rate's cancellation policy using the **Inventory Push GraphQL API** by utilizing the `updateRatesSetUp` mutation.

*   **Process:** You must reference the unique identifier of the existing rate you wish to change. In the mutation's input, you will send the new, updated cancellation policy details, which will overwrite the previous settings for that rate.
*   **API Context:** The `updateRatesSetUp` mutation operates on the existing rate setup, allowing for targeted updates to fields like penalties without needing to re-send all rate data.

:::warning
Always ensure that your cancellation policy is clearly communicated to the guest *before* they complete their booking. Failure to do so can result in disputes and loss of revenue. We strongly recommend having clear terms and conditions on your booking channels.
:::