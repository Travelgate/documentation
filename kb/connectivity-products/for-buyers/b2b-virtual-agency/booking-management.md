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


### Why does "My Bookings" show reservations not made through Travelgate?
When Travelgate retrieves booking data from a supplier, it displays **all reservations the supplier returns based on your credentials**. This may include bookings made outside of Travelgate. If you'd rather not see those, you can ask the supplier to filter the list to show only Travelgate bookings.


## How to Cancel a Booking through the B2B Virtual Agency

1. Find the booking you wish to cancel.
2. Click **Cancel booking**.

   ![b2b_virtual_agency_cancel_2](https://storage.travelgate.com/kbase/b2b_cancel_2.png)

3. A pop-up will display the cancellation costs. Click **Confirm** ('Yes, cancel booking') to proceed.

   ![b2b_virtual_agency_cancel_1](https://storage.travelgate.com/kbase/b2b_cancel_1.png)

:::info **Hotel Information Not Available**
If the supplier does not provide hotel information when retrieving a booking, you will see a message stating: _"Hotel information not available. Please contact your supplier. Hotel code: Not available."_

You can still check the **status** of your reservations on the **My Bookings** screen by referring to the _Status_ label.
:::