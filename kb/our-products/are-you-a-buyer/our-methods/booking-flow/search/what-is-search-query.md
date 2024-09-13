---
sidebar_position: 1
---

# Hotel-X Development - Search Query

## All about Hotel-X Search Query


Search is the first method in our Booking Flow. Search Query aims to return all the available options for a given date and itinerary (and for one or more Seller's accesses). You will find more information and examples in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search).

### Can I apply any filters to my Search request?


 Of course! You have the option to apply the following filters to your Search Query:

1. **Rate Rules:** You can specify the [rate rules](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-filter-hotel-x-search-requests) (such as package or honeymoon) to be included or excluded from the response.
1. **Status:** You can specify whether you want to include or exclude [OK and/or RQ status](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-filter-hotel-x-search-requests) in Search response.
1. **Access:** You can choose the Hotel-X acces codes to be included or excluded from your request. Please note that you can filter your Search by Hotel-X access code, or don't set any access at all. If you don't specify any accesses in your request, our system will request all the accesses available on your side, so please make sure you [use your own context code](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials) in order to avoid mapping errors.

Feel free to check this [article](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-filter-hotel-x-search-requests) for further information on How to filter Search requests.✔️

:::note
Remember to upload your mapping files to our SFTP in those cases you run requests with your own context codes. That way, you will receive results from all your Sellers with your own hotel codes. You will find more information about Mapping on TravelgateX here.
:::

### Can I search by destination?
Of course! You will find more information about our Search by Destination [plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination) here.

### What are the minimum recommended fields to be added to a Search Query?
Since the amount of information requested in Hotel-X Search Query will depend on your needs and preferences, our recommendation is to check all the the fields available in our [Hotel-X Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search). For instance:

- hotelCode
- hotelName
- boardCode
- paymentType
- occupancies
- rooms
- price
- rateRule
- cancelPolicy
- id

### How many hotel codes per request can I request in Search?
- If you are connected to Travelgate via our **Hotel-X Pull Buyers API**, we recommend a maximum of 200 hotels: the new aggregator will split these into batches to request them from each Supplier efficiently.
- If you are connected via our **Legacy Pull Buyers API**, our system does not automatically split the hotels according to the Supplier’s specifications. Therefore, you should adhere to the value assigned to the MaxNumberHotels node in the Supplier’s Metadata.

:::info 
Please take note the current formula and limit are subject to change.
:::

### Are there any limitations on the number of searches/minute?
Not from TravelgateX side - we don't have any limitations on the RPM in any of our methods. However, some Sellers may have some limitations so we suggest you contact directly with them in order to discuss this information.

### Does nationality or market affect the price returned?
Yes, nationality and market might affect the rates received in Search response. This depends on the Seller so if you consider that you should get (or not) different rates depending on the nationality or market, please contact them directly.

### Why there are so many fields with null value in the Search response?
The number of "null" values returned is determined by the information provided by Sellers. For example, if you include certain fields in your Search Query but the Seller does not have that information available on their side, the value will be returned in our response as "null".

For example, if the following data has been declared in your Search Query, the Seller may return the occupancyRefId, room description, refundable information and price but not the bed description. If that information is not available on their side, it would be returned as "null" in TravelgateX response:

```
{
  rooms {
    occupancyRefId
    code
    description
    refundable
    roomPrice {
      price {
        currency
        binding
        net
        gross
        exchange {
          currency
          rate
        }
      }
      breakdown {
        start
        end
        price {
          currency
          binding
          net
          gross
          exchange {
            currency
            rate
          }
          minimumSellingPrice
        }
      }
    }
    beds {
      type
      count
    }
    ratePlans {
      start
      end
      code
      name
    }
  }
}
```


### Can we define our own context for 2 or more Suppliers?
Certainly! You have the option to create your own [Context](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials). To do this, simply follow the instructions in our Documentation and upload the mapping files accordingly in order to use it in your requests. For more detailed information, please refer to our [Documentation on Mapping](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping).

### How can we differentiate a child from an infant? What is the age range of each of them?
The age range for children and infants may vary depending on the Seller's restrictions. To find out the specific age range restrictions for each of your Sellers, you can refer to our [Metadata](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata) Method or directly contact the Seller.

 ### Can I receive a specific rate in Search response?
 If you want to receive a specific rate in the Search response, you have the option to [filter the response](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-filter-hotel-x-search-requests) by using the tag "rateRules". This allows you to customize the results and get the rates that meet your specific requirements.

### Can I receive daily prices in Search response?
Yes, if the Seller provides the information, you can receive daily prices in Search response through the roomPrice>**breakdown**.

### Can I still get availability if the hotel code is not found in the Connections Content section?
Yes, in some cases you might still receive availability for a hotel even if its code isn’t listed in the Connections Content section, provided that the Supplier returns options based on your credentials and search criteria (hotel, dates, pax distribution, etc.).

This can occasionally happen when a Supplier has added new hotels to your portfolio, but the changes are not yet reflected in the Connections Content section because they did not coincide with the scheduled content update. During these times, a hotel may show availability through the integration, even though it is not yet reflected in the Connections Content section.

In these scenarios, we recommend using the [Force Update Now](/kb/connections/connections-content/how-to-check-my-connections-content#how-can-i-use-the-force-update-now-functionality) functionality to update your portfolio and reaching out to the Supplier for further information if needed.

### Can I get a hotel description in Search response?
It is not possible to obtain a hotel description using the Search Query in the Travelgate API. However, the detailed hotel description can be obtained through the [Hotels Query](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-hotels-query), which returns details about a hotel. The returned fields include images, descriptions, views, attributes, and more (as long as this information is provided by the Supplier via the integration).

### Can I filter the Hotel-X Search results by payment type?
Unfortunately, Hotel-X API does not currently offer the capability to filter search results by payment type. 

### Why am I not receiving cancellation policies in Search response?
Cancellation policies are not mandatory in Search, so some Sellers may choose not to include this information in their availability data. To learn more about each Seller's specific details, please refer to their [Metadata](https://docs.travelgate.com/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query).

### How many parallel requests can Travelgate handle from a single Buyer?
On Travelgate's side, there is no limitation regarding the maximum number of parallel requests per Buyer. We adjust this value at an integration level according to the recommendations provided by the Seller.

### What is the lifespan of the Search id?
Search ids do not expire, however, we **strongly recommend to transition from Search to Quote as quickly as possible**. This will ensure a smoother and more efficient booking process.

### What does the status in a Search response indicate?
When a Search query is successful and the Seller returns results, each option will include a status field indicating its current state. Status can be categorized into two possible values: OK and RQ:

1. **OK:** The option is available.
2. **RQ:** The option is still not available by the Seller, so it goes into a waiting list. You can filter which status (OK or RQ) is to be excluded or included in your Search response through the Hotel-X StatusFilterInput. More information can be found in this [article](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-filter-hotel-x-search-requests).