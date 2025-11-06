---
sidebar_position: 5
---

# FAQs

## Searching by Destination

### Can I search by destination?
Yes, you can search by destination using our Search by Destination [plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination).

## Request Limits

### How many hotel codes can I request per Search?
- For **Hotel-X Pull Buyers API**, we recommend a maximum of 200 hotels. Our aggregator will automatically split them into batches based on the Supplier's [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata) to efficiently distribute the requests across each Supplier.
- For **Legacy Pull Buyers API** (deprecated), our system does not automatically split hotels. You should adhere to the `MaxNumberHotels` value in the Supplier’s Metadata.

:::info
Please note that the current formula and limit are subject to change.
:::

### Are there any limitations on the number of searches per minute?
No, Travelgate does not impose limits on Queries Per Minute (QPM), Requests Per Minute (RPM), or Transactions Per Minute (TPM). However, some Sellers may have their own limitations, so it's recommended to check with them directly.

### How many parallel requests can Travelgate handle from a single Buyer?
On Travelgate's side, there are no limitations on the maximum number of parallel requests per Buyer. However, we adjust this value at an integration level based on the recommendations provided by the Seller.

## Search Results and Data Handling

### Why do I see many null values in the Search response?
Null values appear when the Seller does not provide certain data. If a field is requested but the Seller lacks the information, it will be returned as "null."

For example, if you declare the following data in your Search Query, the Seller may return the room description, refundable information, and price. However, the bed type will not be included if that information is unavailable on their side, in which case it would appear as 'null' in the Travelgate response:

```json
{
  rooms {
    occupancyRefId
    description
    refundable
    roomPrice {
      price {
        currency
        net
      }
    }
    beds {
      type
    }
  }
}
```
### Why am I not receiving cancellation policies in the Search response?
Cancellation policies are not mandatory in the Search response, and some Sellers may choose not to include this information in their availability data. To learn more about each Seller's specific policies, please refer to their [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata).

### Does nationality or market affect pricing?
Yes, nationality and market might impact the rates in the Search response. This depends on the Seller, so it's advisable to verify with them directly.

## Filtering Search Responses

### Can I receive a specific rate in the Search response?
Yes, you can filter responses using the `rateRules` tag to receive rates that match your requirements. Learn more [here](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/search/search-filters).

### Can I filter Search results by payment type?
No, Hotel-X API does not currently support filtering by payment type.

### Can I receive daily prices in the Search response?
Yes, if the Seller provides this information, you can receive daily prices in the Search response through the `roomPrice > breakdown` field.


## Room-Specific Queries

### What is the `occupancyRefID` in SearchRS?
It serves as the unique identifier for each room. When requesting a single room, `occupancyRefID` will be "1"; for multiple rooms, each will have a unique reference.

### Can I split rooms within an option and book them separately?
No, all rooms within an option must be booked together. To book separately, submit separate Search requests for each room.

### What is the maximum number of rooms and guests per reservation?
The limits vary by Seller and can be found in the `maxNumberRoomCandidates` and `maxPaxInRoomCandidates` nodes within the [Metadata Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata).

### How can we differentiate between a child and an infant? What is the age range for each?
The age range for children and infants may vary depending on the Seller's restrictions. To determine the specific age range for each of your Sellers, refer to our [Metadata](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata) method or contact the Seller directly.

### What does the "units" field indicate?
It represents the number of available rooms of the same type in the hotel, but its availability depends on the Seller.

## Booking Considerations

### Can I still get availability if the hotel code is not found in Connections Content?
No, in order to return availability, the hotels must be included in the **hotel list** of your requested access. If a Supplier has recently added new hotels to your portfolio, they might not yet appear in the **Connections Content** section because they were added outside the scheduled content update.

Don’t worry — if you know your Seller has added new hotels, you or the Supplier can use the [**Force Update Now**](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality) feature to refresh your portfolio immediately.

### What is the lifespan of the Search ID?
Search IDs do not expire, but transitioning from Search to Quote quickly is recommended for a smoother booking process.

## Additional Insights

### Can we define our own context for multiple Suppliers?
Yes! You have the option to create your own Buyer context. To do this, simply follow the instructions in our documentation and upload the necessary mapping files to use it in your requests. For more details, refer to our [Documentation on Mapping](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping).

### Can I map at an Hotel-X Access level using the CSV Mapping file?
No, [Mapping files](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) are used to convert between the Supplier's hotel codes and the Buyer's codes (or vice versa), but only at the Supplier level. Mapping at the Hotel-X Access level is not supported.

### Can I get a hotel description in the Search response?
No, descriptions are retrieved using the [Hotels Query](/kb/connectivity-products/for-buyers/hotel-x/content/hotels).

### Can I search for availability by board or room codes?
Board and room codes are not directly searchable in the Search query. You can use the Boards and Rooms Query to retrieve specific codes from the Supplier’s access.

If you need to focus your Search query results on specific board or room types, you should first conduct a general search, then filter the results to select only those options that meet your criteria for board or room type.

### Can I check the availability calendar of a Pull Supplier?
No, the calendar function is only available for Buyers connected to Sellers via the Push method. For Pull Suppliers, Buyers should instead use the Search Query to check hotel room availability within a specific date range.