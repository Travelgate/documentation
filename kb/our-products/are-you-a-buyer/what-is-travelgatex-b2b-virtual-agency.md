---
sidebar_position: 6
title: B2B Virtual Agency
---

# B2B Virtual Agency

Welcome to our B2B Virtual Agency tool, your gateway to effortless booking experiences powered by our Hotel-X Pull Buyers API. But what exactly does that mean? Simply put, it's the user-friendly web interface through which you can access our API to manage everything from searching for available options to booking and even canceling reservations, all from one convenient platform.

### How to search availability and book with B2B Virtual Agency?

1. Begin by logging into [our Portal](https://www.travelgate.com/).

2. Navigate to the "Solutions" > "B2B Virtual Agency" section.

3. You'll then be directed to our intuitive search form. Here, specify details such as connection, supplier, access, destination (hotel or zone), dates, and occupancy to find available options.

	![b2b_virtual_agency_search_1](https://storage.travelgate.com/kbase/b2b_search_1.png)

4. After hitting "Search," if options match your criteria, you'll see hotel cards displayed. Each card showcases the cheapest options along with essential information like price, board, cancellation policies, and offers. 

	![b2b_virtual_agency_search_2](https://storage.travelgate.com/kbase/b2b_search_2.png)

	For more options from a particular hotel, simply click on "View all".

	![b2b_virtual_agency_search_4](https://storage.travelgate.com/kbase/b2b_search_4.png)

5. Once you've found the perfect option, click on "Book" to proceed. You'll then see updated details for that option, as we've initiated a quote to the supplier. Take a moment to review the price and cancellation policies, as these may vary. 


6. Be sure to provide all necessary details, including client reference, holder information, and passenger details. If you're unsure of passenger ages, you can set default ages, like 30 for adults or 12 for children. To finalize your booking, click on "Next: payment type". 

	![b2b_virtual_agency_search_5](https://storage.travelgate.com/kbase/b2b_search_5.png)

7. Depending on the payment method available, you may need to provide credit card information or simply confirm the booking.

	![b2b_virtual_agency_search_6](https://storage.travelgate.com/kbase/b2b_search_6.png)


8. Click "**Confirm booking**," and voilà! You'll receive a success message once the booking is confirmed, along with key booking information. Should you encounter a booking status other than "OK" or wish to review details later, easily access "**My Bookings**." Here, you can filter information by dates or reference to quickly locate or even cancel a specific booking if needed.

	![b2b_virtual_agency_search_7](https://storage.travelgate.com/kbase/b2b_search_7.png)



### How to check and cancel bookings with B2B Virtual Agency?

1. Start by logging into [our Portal](https://www.travelgate.com/).

2. Navigate to the "Solutions" > "B2B Virtual Agency" section.

3. Head over to the "My Bookings" tab. Here, you can select the connection, supplier, and access. Refine your search criteria based on:
   * Dates (arrival or booking creation)
   * Reference (supplier, client, and hotel)
   * Advanced inputs: Some suppliers may require specific data for booking information, such as hotel codes or currency, found in the "Show advanced search" section.

   ![b2b_virtual_agency_mybookings_1](https://storage.travelgate.com/kbase/b2b_mybookings_1.png)

4. After clicking "Search," if bookings match your criteria, a table with all bookings will be displayed.

	![b2b_virtual_agency_mybookings_2](https://storage.travelgate.com/kbase/b2b_mybookings_2.png)

5. Select the reservation you want to check or cancel, then click on "Actions" > "View details" to see updated reservation information.

6.  To cancel the reservation, simply click on "Cancel booking":

	![b2b_virtual_agency_cancel_2](https://storage.travelgate.com/kbase/b2b_cancel_2.png)

	To confirm the cancellation, click "Cancel." You'll see a message displaying associated costs. Click "Confirm" to proceed with canceling the booking.

	![b2b_virtual_agency_cancel_1](https://storage.travelgate.com/kbase/b2b_cancel_1.png)


### No results are showing in 'My Bookings', what can I do?
If you encounter the message "No results found! Try updating your search criteria" when accessing bookings in the My Bookings section of the B2B Virtual Agency, consider these two potential causes:
1. **Mismatched Filters:** There may be no bookings that match the filters you've applied. Review your filter settings to ensure they align with actual bookings.
2. **Supplier Restrictions:** The supplier might not support booking searches based on the filters you’ve applied, or might not allow booking searches at all (reservation read or reservation list). Check that your filter choices are supported by the supplier’s [Metadata](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata) for reservation read and reservation list, like searching bookings by creation date or client locator. If your needed filters or methods are unsupported, contact the supplier to explore the possibility of them making this data available.
