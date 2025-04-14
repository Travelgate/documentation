---
sidebar_position: 2
---

# Product Setup

## Setting Up Your Product in Inventory

Follow these steps to configure your product in the **Travelgate Inventory** system:

1. Log into [Travelgate](https://www.travelgate.com/).
2. Navigate to **Solutions > Inventory**.
3. Click on **Inventory > SetUp**.
4. [Configure the Setup](/docs/apps/inventory/extranet/set-up/setup/) for your contracted hotels.
5. Once the setup is complete, the Channel Manager will be able to retrieve all the information and map it to begin loading allotment and prices.

<iframe width="560" height="315" src="https://www.youtube.com/embed/V_nJoDkMOTA?si=VHPDpuanWe5G8AmP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Room Combination & Booking Limits

### Room Combinations

Rooms with the same code are treated as the same room, regardless of associated rates. **It is not possible to share the allotment**. If the requested room capacity exceeds the available stock, it will be excluded from availability to prevent overbooking.

### Understanding Booking Limits: A Case Example

The **'Booking Limit'** is the maximum number of reservations allowed for a specific room type on a given day.  

For example, if you set a **'Booking Limit'** of **50** for the period from **January 15 to January 30**, it means you can accept up to **50 reservations per day** for that room type.  
- On **Wednesday**, you can have a maximum of **50** reservations.  
- On **Thursday**, you can have a maximum of **50** reservations.  
- On **Friday**, you can have a maximum of **50** reservations, and so on.  

Additionally, you can **remove availability** (by date range) based on conditions such as:  
- **Booking Limit** (allocation)  
- **Minimum or maximum stay duration**  
- **Minimum or maximum length of stay upon arrival**  
- **Minimum or maximum release**  

These limits apply to **each room type individually**, not to the hotel as a whole. If your hotel offers multiple room types, each can have its own **'Booking Limit'**.

## PMS & Channel Manager Integration

- Travelgate does **not** have direct access to a hotel's **PMS (Property Management System)** or the **Channel Manager’s** internal system. If a booking does not appear in the PMS, the hotelier should contact the Channel Manager directly.
- To check the status of your bookings via Travelgate, use the **[Logging Section](/kb/platform/app-features/monitoring-tools/logging/logging-details)**.


## Troubleshooting & Support

### Missing Booking Notifications

If you have not received a booking notification email, follow these steps:

1. **Check your Extranet setup:** Ensure that the **Hotel Email, CC Address, and From Address** are correctly configured. If needed, [update the information](/docs/apps/inventory/extranet/set-up/setup#how-to-add-a-hotel) to ensure notifications reach the right recipients. Keep in mind that changes to the notification email only apply to new reservations; prior bookings will still be sent to the previously set email.
2. **Check Spam and Trash folders:** Sometimes emails are accidentally filtered. Verify that booking notifications haven’t been blocked or redirected.
3. **Still not receiving emails?** If the issue persists, contact our **Customer Support Team** via the [Support Portal](https://app.travelgate.com/support) for further assistance.

### Currency Not Available in Rate Setup

While our **Inventory Extranet** offers an extensive list of currencies, if the one you need is missing, please reach out to us through our [Support Portal](https://app.travelgate.com/support). Our team will be happy to evaluate your request and assist you with the necessary configuration.


:::info
Explore our **[Inventory Documentation](/docs/apps/inventory/extranet/set-up/setup)** for more details! 🚀
:::

