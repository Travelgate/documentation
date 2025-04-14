---
sidebar_position: 25
---

# Connector Errors

Below is a reference table mapping **Connector error codes** (errors logged during transactions made through our integration when directly interacting with the Seller’s API) to the corresponding error types received in the **Buyer-side API responses** (Hotel-X/Legacy).  

This equivalence table helps you quickly identify the cause of an error, enabling you to manage and resolve each case more efficiently.

## How to Use the Equivalence Table

1. Locate the **Connectors error code** in the first column of the table.
2. Move across to find the corresponding **Buyer API error code**.
3. Once you have the Buyer-side error, refer to the [error list documentation](/kb/connectivity-products/for-buyers/errors-and-warnings/overview) for:
   - A full explanation of the error  
   - Recommended review steps  
   - Resolution guidelines

:::tip
Keep this table handy during error troubleshooting to streamline the debugging process across Seller and Buyer APIs💡
:::

| **Connectors error code**                     |   **Connectors Error Name**               |     **Buyer API Error**               |  **Buyer API Error Name**               | 
| :--------------------------------: |  :------------------------------------: |  :------------------------------------: |   :------------------------------------: | 
|                  11302    |     ItemNotFoundInContent                                    |               302         |  Hotel Not Found  | 
|               12207        |             BadRequest                            |  207  |  Request XML Not Accepted by Supplier  | 
|                  22101     |           InternalError                              |  101 |  System Exception  | 
|                  11301     |                  ItemNotAvailable                       |  301 |  Option Not Found in Valuation  | 
|             11207          |                     SupplierBadRequest                    | 102 |  Provider Error  | 
|                11303       |              SupplierBookingNotConfirmed                           | 303 |  Booking Not Confirmed  | 
|              31105         |            SupplierConnectionError                             | 105 |  Communication Error  | 
|                    11102   |                    SupplierError                     | 102 |  Provider Error   | 
|                  11204     |           SupplierNoResultsFound                              |  204|  No Results Found  | 
|                     11205  |              SupplierSessionExpired                           | 102 |  Provider Error  | 
|         31104              |              SupplierTimeout                           |  104|  Connection Timeout With Provider  | 
|             31103          |         SupplierTooManyRequests                                | 103 |  Too Many Requests to the Supplier  | 
|      11304                 |                 PriceChanged                        | 102 |  Provider Error  |   
|          11206             |           SupplierResponseNotSerializable                        | 102 |  Provider Error   |   
|          12401             |    Unauthorized                                      | 102 |  Provider Error  |    
|              11305         |           BookingNotFound                                 | 102 |  Provider Error   |     
|                 22105      |           ExtraOperationConnectionError                          | 105 |  Communication Error   |     