---
sidebar_position: 3
---

# Booking Management

## Booking Search through the B2B Virtual Agency

To check or manage existing reservations, follow these steps:

1. **Log in** to [our Platform](https://www.travelgate.com/).
2. Navigate to **Solutions > B2B Virtual Agency**.
3. Go to the **My Bookings** tab.
4. Apply search filters based on:
   - **Dates** (arrival or booking creation)
   - **Reference** (supplier, client, or hotel)
   - **Advanced filters** (some suppliers require specific details, such as hotel codes or currency)

   ![b2b_virtual_agency_mybookings_1](https://storage.travelgate.com/kbase/b2b_mybookings_1.png)

5. Click **Search**. If bookings match your criteria, they will be displayed in a table.

   ![b2b_virtual_agency_mybookings_2](https://storage.travelgate.com/kbase/b2b_mybookings_2.png)

6. To view details of a booking, select it and click **Actions > View details**.

### CSV Booking Reports
You can download your booking list reports directly from the **'My Bookings'** screen. First, perform a booking search. Then, click the 'Download CSV' button located above the booking results.

![bb2b_virtual_agency_booking_report](https://storage.travelgate.com/kbase/b2b_virtual_agency_booking_report.jpg)


### No Results in "My Bookings" 

If you see the message _"No results found! Try updating your search criteria"_ in 'My Bookings' consider the following causes:

1. **Mismatched Filters**: There may be no bookings matching the filters you’ve applied. Please review your filter settings to ensure they reflect any existing bookings.
2. **Supplier Restrictions**: Some suppliers do not support certain filters, such as searching by booking creation date or client locator. Check the supplier’s **[Metadata](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata)** to confirm supported filters.

If the necessary filters are unsupported, contact the supplier to explore the possibility of them making this data available.

### The message “Multiple Warnings (click to see)” appears when searching for reservations on the 'My Bookings' screen — what should I do?
[Warnings](/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/errors-and-warnings/booking-flow#warning-list) indicate potentially problematic situations or errors that do not require the service to be terminated. These warnings can originate either from the Hotel-X layer or from the Seller’s system.

To better understand and resolve the warnings in your 'My Bookings' screen, follow these steps:
1. **Click on the “Multiple Warnings (click to see)” notification**. A list of all received warnings will be displayed. Review the details and refer to our documentation on [errors and warnings](/kb/connectivity-products/for-buyers/errors-and-warnings/overview) for more information and resolution steps.
2. **Retrieve the relevant logs by clicking “View Booking Logs” in the left-hand menu**. These logs provide detailed insights to help you analyze the cause of the warnings and determine how to address them.

:::warning Important:
Be sure to **check the suppliers’ [Metadata](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata)** for the [Booking Read method](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read) to confirm the supported search type. For example, using a date filter with a supplier that only allows reference-based booking searches will result in an error.
:::

### Why does "My Bookings" show reservations not made through Travelgate?
When Travelgate retrieves booking data from a supplier, it displays **all reservations the supplier returns based on your credentials**. This may include bookings made outside of Travelgate. If you'd rather not see those, you can ask the supplier to filter the list to show only Travelgate bookings.

:::info **Hotel Information Not Available**
If the supplier does not provide hotel information when retrieving a booking, you will see a message stating: _"Hotel information not available. Please contact your supplier. Hotel code: Not available."_

You can still check the **status** of your reservations on the **My Bookings** screen by referring to the _Status_ label.
:::

## How to Cancel a Booking through the B2B Virtual Agency

1. Find the booking you wish to cancel.
2. Click **Cancel booking**.

   ![b2b_virtual_agency_cancel_2](https://storage.travelgate.com/kbase/b2b_cancel_2.png)

3. A pop-up will display the cancellation costs. Click **Confirm** ('Yes, cancel booking') to proceed.

   ![b2b_virtual_agency_cancel_1](https://storage.travelgate.com/kbase/b2b_cancel_1.png)
