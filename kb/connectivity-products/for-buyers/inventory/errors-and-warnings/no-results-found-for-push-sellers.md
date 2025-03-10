---
sidebar_position: 2
---

# 204 Error - No Results Found (Push Suppliers)

### What Does a 204 Error Mean? 
A 204 error occurs when a Supplier does not return any results for the specific Search criteria set in the Buyer's request (e.g., hotel, dates, market, etc.).

For more details, see our article on [204 error - No results found](/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-no-results-found).

### What Are the Typical Causes of a "No Availability" Error for Push Suppliers? 
Below are the possible reasons for availability not being displayed for Push Suppliers, along with their solutions:

#### 1. **Deactivated Hotel/Rates/Rooms**
   - Check the **SetUp** section to ensure that the hotel, rates, and rooms are not deactivated. Deactivated elements will be highlighted in red.
   
   ![204_error_inventory_1](https://storage.travelgate.com/kbase/204_error_inventory_1.jpg)

#### 2. **No Product Loaded for Requested Rates/Rooms/Occupancies**
   - If no product is loaded, availability results will not be obtained.

#### 3. **Ensure Room Setup Matches Desired Occupancies**
   - Verify that the [rooms](/docs/apps/inventory/extranet/set-up/setup#room) are properly configured for all desired occupancies.

#### 4. **Close Sales, Close on Arrival, or Close on Departure Enabled for Requested Dates**
   - Days with **Close Sales** will be highlighted in red.
   - Days with **Close on Arrival** or **Close on Departure** will be highlighted in a different shade of green with a checkmark.

   ![204_error_inventory_2](https://storage.travelgate.com/kbase/204_error_inventory_2.jpg)

#### 5. **Incorrectly Loaded Booking Limit**
   - Verify that the booking limit has been correctly set up.

#### 6. **Mismatch in Search Criteria**
   - Ensure that the search criteria in your request match the criteria previously loaded for those rates/rooms.

:::info
For further information, check our [Documentation](/docs/apps/inventory/extranet/overview) on the Inventory Extranet. 🚀
:::
