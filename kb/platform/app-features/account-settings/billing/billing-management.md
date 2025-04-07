---
sidebar_position: 2
---

# Billing Management

At Travelgate, we provide easy-to-use tools for managing your agreements, tracking usage, and checking your invoices. Here's a step-by-step guide to help you navigate these features effectively.

## Billing Key Definitions
   - **GMV (Gross Merchandise Value):** total value of all reservations made through the platform, based on check-ins. Canceled reservations are excluded (except non-refundable rates).
   - **STD (Standard Booking Fee):** rate applied to the GMV, monthly by check-in. It represents the shared cost between the parties involved in the connection.
   - **SUP (Supplement fee):** additional charge to the standard booking fee (STD) if either the Buyer or Seller decides to cover the cost for the other party (SUP), or if the supplier is a direct product such as Channel Manager, Switch or Hotel (SUP_DP).
   - **FREE:** The connection has no cost for you. The counterpart fully covers the cost of the connection.

:::warning important
To ensure seamless billing, **it's important that you handle all cancellations via our API**.  
Should you face any issues, please don't hesitate to get in touch with our [Customer Support team](https://app.travelgate.com/support) for assistance. Additionally, please make sure to cancel any test bookings with Sellers and to check that such bookings are refundable.
:::


## How to Access the Billing Section

1. Log into the [Travelgate Platform](https://www.travelgate.com/).
2. Click on your profile initials in the top right corner and select **Billing**.
3. Once in the Billing section, you can explore the following tabs:
   - **Agreements**
   - **Usage**
   - **Invoices**

   ![billing_03_1](https://storage.travelgate.com/kbase/billing_03_1.jpg)

## How to Manage Your Agreements

1. Click on the **Agreements** tab.
2. Here, you will be able to filter your agreements by:
   - **Active**
   - **Expired**
   - **All**

3. Click on "Options" (three dots) of a specific agreement and you will be able to visualize the following actions:
   - View your fiscal data
   - View your fees
   - Pdf: Download the signed agreement in Pdf format (only available for Commercial Agreement 2023)
   - Change history: View the history of payment type changes (only available for Commercial Agreement 2023)

	![billing_03_2](https://storage.travelgate.com/kbase/billing_03_2.jpg)

4. Click in the arrow beside the Agreement to review your connections and understand the payment types in more detail:
   - You can download a list of your connections and detailed descriptions for each payment type.
   - You can request a change of payment type to the other Partner

   ![billing_03_3](https://storage.travelgate.com/kbase/billing_03_3.jpg)

Remember that if both you and your Partner are under the **Commercial Agreement 2023 (CM 23)**, the [Auto-Activations form](/kb/platform/app-features/connections/my-connections/guick-guide-to-auto-activations) to request a new connection on our Platform will display these [available payment types](/kb/platform/app-features/account-settings/billing/billing-payment-types):

- **STD:** Rate applied to the GMV monthly by check in. You and your Partner share costs.
- **SUP:** Both standard booking fees and supplement apply to this connection for you. For your Partner, it will be free.
- **SUP_DP** (Supplement direct product): additional fee to the STD if the supplier is a direct product such as a Channel Manager, Switch or Hotel.
- **FREE:** This connection has no cost for you.The counterpart fully covers the cost of the connection.

:::info
Only **owner** and **admin** users have access to the complete menu.
:::

### How to Request a Payment Type Change for a Partner

It's possible that you and your Partner are currently splitting the cost of the connection under a Standard Payment Agreement (STD). If you're interested in switching to a free arrangement where your Partner takes on the payment responsibility, you'll need to **wait for their acceptance** before proceeding with the change. If needed, you can also cancel the request.

Changes between **Free to Standard** or **Standard to Supplement** payment types do not require Partner confirmation, as the cost is assumed by the parties involved. These changes are processed automatically.

![billing_03_4](https://storage.travelgate.com/kbase/billing_03_4.jpg)

![payment_change_5](https://storage.travelgate.com/kbase/billing_payment_change_5.jpg)

Additionally, you can access a **historical record** of changes made in each agreement.

![billing_03_5](https://storage.travelgate.com/kbase/billing_03_5.jpg)

#### 1.Received: requests of changes received from other Partners
	![billing_03_6](https://storage.travelgate.com/kbase/billing_03_6.jpg)

#### 2.Sent: requests of changes sent to other Partners
	![billing_03_7](https://storage.travelgate.com/kbase/billing_03_7.jpg)

:::info
- Remember, your Partner must log in to their Profile to accept the payment change request. They will receive a notification in the bell icon located on the right side of the settings menu.
- Any changes to the payment type will apply to all reservations with an entry date starting from the first day of the following calendar month after the notification.
- For **Commercial Agreement 2023**, you can select the payment type during the [auto-activation process](/kb/platform/app-features/connections/my-connections/guick-guide-to-auto-activations).
- Payment type changes are only available under the **Commercial Agreement 2023**.
:::

## How to Control Your Usage

At Travelgate, you can easily track your usage and evaluate costs for each connection. To do this:

1. Navigate to the **Usage** tab.
2. Filter by:
   - **Agreement**: Select the relevant agreement from the drop-down menu.
   - **Time range**: Usage is calculated monthly, based on the calendar month.

You can also download the usage data for further analysis.

![billing_aug_3](https://storage.travelgate.com/kbase/billing_aug_3.jpg)

## How to Check Your Invoices

Each monthly invoice provides comprehensive and relevant data specific to your contract type, enabling you to gain a more detailed understanding of your billing information.

To view your monthly invoices:
1. Go to the **Invoices** tab.
2. There, you will be able to visualize your monthly invoices, your current outstanding balance, and your upcoming overdue invoices:
![billing_03_8](https://storage.travelgate.com/kbase/billing_03_8.jpg)

Additionally, you can use various filters to search for specific information such as reference number, invoice date, agreement, and expired date.

	![billing_03_9](https://storage.travelgate.com/kbase/billing_03_9.jpg)

You can click on "Actions" (drop-down menu) in order to access the following information from a specific invoice:

1. View Details
1. Download PDF 
1. CSV bookings locator
1. Pay invoice

![billing_03_10](https://storage.travelgate.com/kbase/billing_03_10.jpg)

#### 1. View details
Review the full details of your invoice—including total GMV, booking fee (STD), and supplement fee (SUP)—with breakdowns provided for each connection.

![billing_03_11](https://storage.travelgate.com/kbase/billing_03_11.jpg)

#### 2. Download PDF invoice documents
You can download the PDFs of your invoices or credit note.
#### 3. Access CSV bookings locator
Download the booking list with their corresponding locator in CSV format.
#### 4. Pay Invoice
Find our bank information and pay your invoices by wire transfer.

## Frequently Asked Questions

### Does your system send payment reminders?

Our system doesn't send reminders, but it does automatically email invoices to you. To make sure you receive them, please keep your **billing contact information** up to date. You can easily update this information and add any additional contacts through the ['Users & Contact Management'](/kb/platform/app-features/account-settings/users-management/add-users) section.

### Can I pay Travelgate invoices by credit card?

Credit card payments are only available for amounts less than 500 EUR. Please raise a ticket to the [Billing department](https://app.travelgate.com/support) and request the corresponding payment link.

### Can I change the billing currency?

No, Travelgate processes all invoices in EUR, and we are unable to accommodate changes to the billing currency.
