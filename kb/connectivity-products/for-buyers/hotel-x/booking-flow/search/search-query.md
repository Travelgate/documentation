---
sidebar_position: 1
---

# Search Query

[Search](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search) is the first step in our booking flow. The Search Query is designed to return all available options based on specified dates and search criteria, such as the number of guests, choice of hotels, etc. This applies across one or multiple Sellers' accesses.

An "option" refers to different combinations of rooms, prices, and policies available in a hotel. Each option has a unique identifier known as `id` (in Search) or `optionRefId` (in Quote and Book). This identifier is crucial for the booking flow and **must not be altered**.

:::info The Booking Flow at Travelgate
The booking flow consists of 3 sequential methods necessary to book a hotel room:
- **For the Hotel-X Pull Buyers API**, the methods are Search, Quote, and Book. Search finds all available options, Quote retrieves updated pricing for the selected option, and Book completes the reservation.
- **For the Legacy Pull Buyers API (deprecated)** and **Hotel Pull Sellers API (deprecated),** the methods are Avail, Valuation, and Reservation.
:::


## Single Mode and Multimode

Our Hotel-X Pull Buyers API offers a range of features, including the flexibility to choose between **Single Mode** and **Multimode** searches.

### Single Mode Search

* **What does Single Mode mean?**  
Single Mode allows Buyers to search the inventory of **one Seller at a time**. You can include several accesses from the same Seller in the same request, provided they share the same [configuration](/kb/platform/app-features/connections/api-settings#4-access-settings) and [context](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials#context). This mode is ideal for testing or when you want to query a specific Supplier connection.

* **How does Hotel-X Single Mode work?**  
Simply include the Seller’s access code in your `HotelXFilterSearchInput` to perform the request. More details on filtering your searches by Hotel-X access code can be found [here](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/search/search-filters).
  
  ```json
  "filterSearch": {
    "access": {
      "includes": ["5647"]
    }
  }
  ```

### Multimode Search

* **What does Multimode mean?**  
Multimode enables Buyers to search **different Sellers or multiple accesses from the same Seller, even if their contexts vary**.

* **How does Hotel-X Multimode work?**  
You can perform a Multimode search in two ways:
    1. **By specifying accesses in the request:** Only those connections are queried:

        ```json
        "filterSearch": {
            "access": {
                "includes": [
                    "2",
                    "5647"
                ]
            }
        }
        ```
    2. **Without specifying access codes:** HotelX automatically sends the query to all accesses linked to your `client` field. See [default access settings](/kb/platform/app-features/connections/api-settings) for more information.

## Status in Search response

### What does the status of an option indicate in Search response?
When a Search query is successful, and the Seller returns results, each option includes a status field indicating its current state. The status can be categorized into two possible values:

1. **OK:** The option is available.
2. **RQ:** The option is not yet available by the Seller and is placed on a waiting list.

You can use the StatusFilterInput to specify which status (OK or RQ) to include or exclude in your Search response. For more details, please refer to this [article](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/search/search-filters).
