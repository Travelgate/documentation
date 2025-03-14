# Reference

Represents a reference for a hotel booking, including client, supplier, and hotel locators.
These locators are used to uniquely identify a booking in different contexts. 
It is mandatory to provide either the client or supplier locator.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **ClientLocator** | String | The booking locator provided by the client.This is typically used to match the booking in the client's internal systems. |
| **SupplierLocator** | String | The booking locator provided by the supplier.This identifier is used to reference the booking in the supplier's system. |
| **HotelLocator** | String | The booking locator specific to the hotel, provided by the supplier. (Optional)This may be required in cases where the hotel system uses its own unique identifiers. |
