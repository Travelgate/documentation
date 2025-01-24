---
sidebar_position: 1
---

# Overview


## Search

[Search](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search) is the first step in our booking flow. The Search Query is designed to return all available options based on specified dates and search criteria, such as the number of guests, choice of hotels, etc. This applies across one or multiple Sellers' accesses.

An "option" refers to different combinations of rooms, prices, and policies available in a hotel. Each option has a unique identifier known as `id` (in Search) or `optionRefId` (in Quote and Book). This identifier is crucial for the booking flow and **must not be altered**.

:::info The Booking Flow at Travelgate
The booking flow consists of 3 sequential methods necessary to book a hotel room:
- **For the Hotel-X Pull Buyers API**, the methods are Search, Quote, and Book. Search finds all available options, Quote retrieves updated pricing for the selected option, and Book completes the reservation.
- **For the Legacy Pull Buyers API (deprecated)** and **Hotel Pull Sellers API (deprecated),** the methods are Avail, Valuation, and Reservation.
:::


## Single Mode and Multimode

Our Hotel-X Pull Buyers API offers a range of features, including the flexibility to choose between **Single Mode** and **Multimode** searches.

### Single Mode Search 🌟

* **What does Single Mode mean?**  
  Single Mode allows Partners to perform a search with a single Seller at a time. This is the default search mode in Hotel-X.

* **How does Hotel-X Single Mode work?**  
    1. Review the tags included in your Hotel-X Search Query and ensure you add the **HotelXFilterSearchInput**. More details on filtering your searches by Hotel-X access code can be found [here](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-filter-hotel-x-search-requests).
    2. **Add the access code** of the Seller you wish to query within your `HotelXFilterSearchInput`.

:::note
You should use the [Supplier context](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials) in your Search requests unless you have previously uploaded your [mapping files to our SFTP](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping).
:::

### Multimode Search 🚀

* **What does Multimode mean?**  
Multimode enables Partners to search across multiple Sellers simultaneously within a single request.

* **How does Hotel-X Multimode work?**  
    1. Begin by uploading your [hotel mapping files](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) to your SFTP.
    2. Once processed, you can search across multiple Sellers using your [own context](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials) and hotel codes. You can perform Multimode search in two ways:  

        1. **Specifying the Hotel-X access codes** in the `filterSearch` node. This sends queries only to the specified accesses:
            ```
            "filterSearch": {
                "access": {
                    "includes": [
                        "2"
                    ]
                }
            }
            ```
        2. **Without specifying access codes.** In this case, the query will be sent to all accesses connected to your Buyer account, considering the following:
            + Requests are only sent to Sellers whose mapping files you have already uploaded.
            + The query checks the value of the `testMode` tag to determine whether to request test or production accesses.


## Status in Search response

### What does the status of an option indicate in Search response?
When a Search query is successful, and the Seller returns results, each option includes a status field indicating its current state. The status can be categorized into two possible values:

1. **OK:** The option is available.
2. **RQ:** The option is not yet available by the Seller and is placed on a waiting list.

You can use the StatusFilterInput to specify which status (OK or RQ) to include or exclude in your Search response. For more details, please refer to this [article](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-filter-hotel-x-search-requests/).