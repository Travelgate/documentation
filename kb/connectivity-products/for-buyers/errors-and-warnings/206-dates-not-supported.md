---
sidebar_position: 11
---

# 206 Error - Dates Not Supported

## What Does a 206 Error Mean?
A **206 error** occurs when the dates in your search request do not align with the Seller's date specifications.

### How Can I Check the Seller's Date Requirements and Avoid Errors?
To verify the Seller's date specifications and minimize errors and unnecessary traffic, we strongly recommend using our [Metadata Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata).

### Some Of The Fields Validated:
- Minimum number of days required between the booking date and check-in date (release).
- Minimum stay duration required for a booking (minimumStay).

:::info Date Format for Check-in and Check-out
Please ensure the date format for check-in and check-out follows these standards:

- **Legacy Pull Buyers API:** "StartDate" and "EndDate" must be in **dd/mm/yyyy** format.
- **Hotel-X Pull Buyers API:** "checkIn" and "checkOut" must be in **yyyy-mm-dd** format.
:::
