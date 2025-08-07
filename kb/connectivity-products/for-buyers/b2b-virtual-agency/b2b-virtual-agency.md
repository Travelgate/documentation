---
sidebar_position: 2
---

# B2B Virtual Agency

The **B2B Virtual Agency** is a web-based tool powered by the **Hotel-X Pull Buyers API**, designed to simplify the booking process for travel professionals. This intuitive platform allows users to search for hotel availability, book reservations, and manage cancellations—all from a single interface.

## How to Search and Book with B2B Virtual Agency

Follow these steps to search for availability and make a booking:

1. **Log in** to [our Platform](https://www.travelgate.com/).
2. Navigate to **Solutions > B2B Virtual Agency**.
3. The search form will appear. Enter the following details:
   - **Connection, supplier, and access**
   - **Destination (hotel or destination), dates, and occupancy**

   ![b2b_virtual_agency_search_1](https://storage.travelgate.com/kbase/b2b_search_1.png)

4. Click **Search** to view available hotel options. The results display:
   - Cheapest available rates by hotel
   - Essential details such as **price, board type, cancellation policies, and offers**

   ![b2b_virtual_agency_search_2](https://storage.travelgate.com/kbase/b2b_search_2.png)

   To explore additional options from a specific hotel, click **View all**.

   ![b2b_virtual_agency_search_4](https://storage.travelgate.com/kbase/b2b_search_4.png)

   :::info B2B Virtual Agency Search Logs
   You can access the logs of your availability requests through the B2B Virtual Agency, directly from the "Search Availability" screen. After clicking Search, a **"View Search Logs"** option will appear in the left-hand menu. Click it to open a new window where you can view both the request and response logs. To copy them, simply click the "Copy Logs button".  

   ![b2b-virtual-agency-logs](https://storage.travelgate.com/kbase/b2b-virtual-agency-logs.jpg)
   :::

5. Select the best option and click **Book**. The system will retrieve an updated quote from the supplier.
   - **Review the final price and cancellation policy before proceeding.**

6. Enter all required details:
   - **Client reference**
   - **Holder information**
   - **Passenger details** (default ages: **30 for adults, 12 for children**)

   ![b2b_virtual_agency_search_5](https://storage.travelgate.com/kbase/b2b_search_5.png)

7. Depending on the option's payment type, you may need to:
   - **Enter credit card details**
   - **Confirm the booking** without additional payment steps

   ![b2b_virtual_agency_search_6](https://storage.travelgate.com/kbase/b2b_search_6.png)

8. Click **Confirm booking**:
    - **If successful**, you will receive a success message and key booking details.
    - **If unsuccessful**, make sure to run a Booking Query to check the latest status of the reservation. Contact the Seller if needed.

9. To review a booking, navigate to **My Bookings**.

   ![b2b_virtual_agency_search_7](https://storage.travelgate.com/kbase/b2b_search_7.png)

### I can’t find a hotel in the dropdown menu on the "Search Availability" screen in the B2B Virtual Agency. What can I do?

If a hotel (or destination) doesn’t appear in the dropdown menu on the Search Availability screen, it may be due to outdated static content for that Supplier. To resolve this, go to the Connections > Content section and click the ["Force Update Now"](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality) button to **refresh the static content**.

:::info Force Content Updates
When performing a "Force Content Now" update to refresh a Seller's portfolio, keep in mind that the duration of the update depends on the **size of the content**. The update is processed through a **queue system** and will begin once it reaches its turn. This could take anywhere from a few minutes to 72 hours.

- If the update hasn't completed after 72 hours, you may attempt the update again.
- Updates within the 72-hour window are considered normal, and there’s no need to contact support until this period has passed.
- **Large updates** (e.g., updating multiple accesses for a Supplier across all Buyers) will result in a longer queue and may take additional time.

If you've followed all the steps and still do not have the most up-to-date content, feel free to [contact our Support Team](/kb/platform/support-portal/case-guidelines). We’re here to ensure you have the best possible experience!
:::

### The message “Multiple Warnings (click to see)” appears in my Search response — what should I do?
[Warnings](/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/errors-and-warnings/booking-flow#warning-list) indicate potentially problematic situations or errors that do not require the service to be terminated. These warnings can originate either from the Hotel-X layer or from the Seller’s system.

To better understand and resolve the warnings in your Search response, follow these steps:
1. **Click on the “Multiple Warnings (click to see)” notification**. A list of all received warnings will be displayed. Review the details and refer to our documentation on [errors and warnings](/kb/connectivity-products/for-buyers/errors-and-warnings/overview) for more information and resolution steps.
2. **Retrieve the Search logs by clicking “View Search Logs” in the left-hand menu**. These logs provide detailed insights to help you analyze the cause of the warnings and determine how to address them.