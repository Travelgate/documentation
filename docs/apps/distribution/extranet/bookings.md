---
sidebar_position: 4
---

# Bookings

Bookings Panel tool empowers you to access a comprehensive list of your agency's bookings and cancellations while also providing access to more in-depth details for each booking.

* Booking Search: For specific bookings and their comprehensive details.
* Booking List Reports: for a streamlined .csv list with essential information.

In both panels, you have the flexibility to employ a range of filters for precise booking searches or personalized list generation. These filters allow you to define the booking date or check-in date, choose to include cancellations (both effective and canceled bookings), focus only cancellations or errors, specify the hotel name and code, and filter by agency and provider. The sole distinction lies in the fact that, with Booking Search (booking details), you can filter by locator.

![Distribution Bookings](https://storage.travelgate.com/docs/distribution_booking-panel2.jpg)

## Booking List

Booking list allows you to filter by different conditions:

* Dates:
    * Booking dates: The date range when the booking was confirmed by the agency.
    * Check-in date: The date range of the booking check-in. 
* Transaction type/status:
    * Include cancellations: List of both effective and cancelled bookings. 
    * Only cancellations: List of only cancelled bookings.
    * Only errors: List of bookings that failed and couldn't be confirmed successfully.
* Hotel:
    * Name: Filter bookings by hotel name.
    * Code: Filter bookings by hotel code.
* Agency: Filter bookings by agency/client.
* Provider: In case you work with different suppliers, you can filter by provider name.

![Distribution Bookings](https://storage.travelgate.com/docs/distribution_booking-panel3.jpg)

## Booking Read

In order to obtain more detailed information of a specific booking you can use the `Booking read` panel on the left and filter by one of the booking locators (Client, Provider or TGX).

For each booking you will find the following information:

* Locators: All booking locators.
* Context: 
    * Status: Booking status (success, cancelled, error)
    * Booking date
    * Agency 
    * Supplier
    * Access
* Configuration
    * Hotel: Hotel code and name
    * Check-in date
    * Check-out date
    * Mealplan
    * Market
    * Nationality
* Price & Conditions
* Payment type
    * Cancellation price
    * Selling price
    * Purchasing price
    * Currency exchange
    * Quote selling price
    * Quote purchasing price
    * Quote currency exchange
    * Quote selling cancel penalties
    * Quote purchasing cancel penalties
* Pricing
    * Type
    * Final Markup
    * Tax
* Breakdown
    * Base Markup
    * Base Rappel
    * Selling pricing rules: Total
* Rooms
    * Main Guest Name
    * Room: Room name, code, and number of pax
  
## Booking List Reports

Booking List Reports tool allows you to obtain a .csv file containing all the bookings that fall within the specified report parameters.

Important points to keep in mind:

* Please note that while you need to provide a valid name for the report in alphanumeric format, our system will also append a datetime format at the beginning of this name to ensure its uniqueness.

* Only one report can be generated every 15 minutes. Therefore, once a report generation request is made, users must wait for 15 minutes before requesting another.

* The report generation is not instantaneous and may take some time, depending on the volume of bookings to be processed. If the "Generation Status" reads "Executing," it means the file is still being processed and is not yet available for download.

![Distribution Bookings](https://storage.travelgate.com/docs/distribution_booking-panel4.jpg)

* When the status changes to "Finished ok," the download button will become accessible.

![Distribution Bookings](https://storage.travelgate.com/docs/distribution_booking-panel5.jpg)
