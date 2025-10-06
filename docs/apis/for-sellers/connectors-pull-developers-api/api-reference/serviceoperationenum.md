# ServiceOperationEnum

Defines the available service operations for hotel content operations.

## Enum Values

| Name | Descrption |
|------|-------|
| **HotelListBasicInfo** | **Not yet implemented.** Intended to return a minimal set of hotel data (e.g., name, location) and additional information to be retrieved separately with `HotelDetails`. |
| **HotelListFull** | Used when the supplier returns all the information in one call. |
| **HotelListDelta** | Returns only the hotel codes. Additional hotel details must be retrieved separately with `HotelDetails` making a request for each hotel code. This approach is typically used to minimize payload size and optimize performance. |
| **HotelDetails** | Standard HotelDetails operation that retrieves and updates all hotels individually from the database. |
| **HotelDetailsByDates** | Retrieves and updates hotels based on specified dates without relying on existing database entries. |
| **HotelDetailsMultiCodes** | Retrieves all hotel codes from the database but calls the integration in blocks of multiple hotels. |
| **HotelDetailsMultiLanguages** | **Not yet implemented.** Retrieves all hotel codes from the database and calls the integration with multiple languages simultaneously. |
| **HotelDetailsMultiLanguagesMultiCodes** | **Not yet implemented.** Retrieves all hotel codes from the database and calls the integration with multiple languages and multiple codes at once. |
| **Destinations** | Retrieves destinations from the supplier. |
| **Boards** | Retrieves board types from the supplier. |
| **Categories** | Retrieves hotel categories from the supplier. |
| **Rooms** | Retrieves rooms from the supplier. |
| **Currencies** | Retrieves currencies from the supplier. |
| **Markets** | Retrieves markets from the supplier. |
