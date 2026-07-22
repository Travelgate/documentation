---
sidebar_position: 1
---

# Booking List and Price Details

## Booking List and Price Details in the Inventory Extranet

You can access booking information for a specific hotel through the Booking List and Booking Price Details tools, located in the `Product` tab of the Extranet.

### Booking List
Use this tool to view **all bookings made for a selected hotel**. Simply enter the client, Channel Manager, hotel, and any filters you’d like to apply.

You can filter by:
- Dates: Arrival, creation, departure, or last update
- Locator: Client (Buyer) locator, internal (Inventory) locator, or Channel Manager (provider) locator

Then, click Search to display matching bookings.

Each booking in the list shows these fields:

| Field | Description |
| --- | --- |
| **Hotel Name** | The name of the hotel the booking belongs to. |
| **Check In** | The arrival date of the booking. |
| **Check Out** | The departure date of the booking. |
| **Booking Date** | The date and time the booking was created. |
| **Status** | The current status of the booking (e.g. `CN` for confirmed / `CX` for cancelled). |
| **Provider Locator** | The reference/locator assigned by the Channel Manager (provider). |
| **Client Locator** | The reference/locator sent by the client (Buyer). |
| **Customer** | The name of the holder/lead passenger of the booking. |
| **Room Type** | The number of rooms booked and the room type code (e.g. `2 DBLSTD`). |
| **Board Name** | The board of the booking (e.g. `Room_only`). |
| **Price** | The total price of the booking. |
| **Currency** | The currency the price is expressed in (e.g. `EUR`). |

### Booking Price Details
This tool lets you view **the details of a specific booking**. After selecting the client and Channel Manager, choose the locator type and enter the corresponding locator. The results panel will display the booking details, including the price.

The results panel is grouped by room. For each room option you will find:

| Field | Description |
| --- | --- |
| **Option** | The room option: room type description, room type code and board (e.g. `Double Standard (DBLSTD) - Room_only`). |
| **Rate** | The rate plan applied to the booking, shown as its name and code (e.g. `TEST BAR (BAR)`). This value is only available through the Inventory Extranet — it is **not** returned by the Booking Read (Reservation Read) GraphQL query. |
| **Price** | The total price of the room option. |
| **Date (From / To)** | The stay dates (check-in and check-out) the room option covers. |

Within each room option, the **Detail Rates** table breaks the price down by night (date range) and, for each one, shows the per-pax detail: **Pax**, **Age**, **Base Price**, **Pax Supplement Type**, **Pax Supplement Price** and **Total**.

Please note that the Inventory Extranet displays only the essential booking information. To access complete booking details, run a **Booking Query** (Reservation Read method).

:::info
Explore our **[Inventory Documentation](/docs/apps/inventory/extranet/booking-management/booking-list-and-price-details)** for more details! 🚀
:::