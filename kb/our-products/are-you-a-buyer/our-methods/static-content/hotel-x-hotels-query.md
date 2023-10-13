---
sidebar_position: 1
---

# Hotel-X Development - Hotels Query


### What is Hotel-X Hotels Query?🏨
Hotels Query returns a hotel list from a Supplier’s access, so that you are able to retrieve all the properties the Seller has configured for a given set of credentials.

### How can I retrieve the Seller's Hotel List through Hotel-X?💡
You just need to follow the specifications in our [Documentation](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/methods/staticcontent/hotel/) and [API Playground](https://api.travelgatex.com/) and build your own Hotels Query, as easy as that! Also, remember you are able to **personalize** the fields requested in order to receive only the information that matters to you in the response.

**Hotels Query example:**

```
{"query":"query ($criteria: HotelXHotelListInput!, $language: [Language!], $token: String) {\n hotelX {\n hotels(criteria: $criteria, token: $token, relay: {}) {\n count\n \n\t\t\tpageInfo{\n\t\t\t\thasNextPage\n\t\t\t\thasPreviousPage\n\t\t\t}\n token\n count\n edges {\n node {\n error {\n code\n type\n description\n \n }\n createdAt\n updatedAt\n \n hotelData {\n rooms{\n edges{\n node{\n roomData{\n medias{\n url\n }\n }\n }\n }\n }\n hotelCode\n hotelCodeSupplier\n hotelName\n categoryCode\n chainCode\n exclusiveDeal\n allAmenities{\n edges{\n cursor\n node{\n adviseMessage{\n code\n description\n \n }\n }\n }\n }\n checkIn{\n instructions{\n text\n language\n }\n specialInstructions{\n text\n language\n }\n minAge\n schedule{\n startTime\n endTime\n }\n }\n checkOut{\n instructions{\n text\n language\n }\n specialInstructions{\n text\n language\n __typename\n }\n }\n \n property {\n name\n code\n }\n exclusiveDeal\n location {\n address\n city\n country\n airports{\n code\n airportData{\n code\n name\n }\n }\n state\n coordinates {\n latitude\n longitude\n }\n closestDestination {\n code\n available\n texts(languages: $language) {\n text\n language\n }\n }\n }\n contact {\n email\n telephone\n fax\n web\n }\n rank\n cardTypes\n amenities {\n code\n type\n texts(languages: $language) {\n \n text\n language\n }\n }\n medias {\n code\n order\n type\n updatedAt\n url\n texts(languages: $language) {\n text\n \n language\n }\n }\n descriptions(types: GENERAL,languages:$language) {\n type\n __typename\n texts {\n text\n language\n }\n }\n }\n }\n }\n }\n }\n}\n","variables":{"criteria":{"access":"","maxSize":100,"destinationCodes":[""],"ranks":[]},"language":["en"],"token":""}}
```

### Can I search hotels by destination?🔎
Of course! You can also **search hotels by destination by adding the "destinationCodes"** field in your Query criteria:

```
image
```


### What can I expect to receive in Hotels Query response?✔️
Some of the fields returned are: 

- Hotel code
- Hotel name
- Location
- Amenities
- Medias
- Descriptions
- Room Information and max./min. occupancy and pax ranges (if provided)

:::info
Static content fetching is always sequential and **the amount of information and content returned may vary between Sellers**. You will find out all about mapping on TravelgateX [here](https://knowledge.travelgate.com/content-mapping).
:::

### How can I know the total amount of properties returned in Hotels Query?📑
Just add the "**count**" field to your Hotels Query in order to retrieve the total amount of properties in the list:

Query request:

```
image
```

Query response:

```
image
```

### Can I paginate content methods? 🔢
Sure! Make sure you check the following [article](https://knowledge.travelgate.com/content-pagination) for further information.

### What languages does Hotel-X Hotels Query support?🔠
Hotel-X supports all languages, but receiving hotel descriptions in one or another depends entirely on the languages supported by every Seller - **we recommend you confirm this information with the Seller prior to activating the connection**.

You can also check this information through our **[Metadata Query](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/methods/staticcontent/metadata/)**, though note that the information displayed is general and might be subject to changes depending on your agreement with the Seller.

### What is the difference between "hotelCode" and "hotelCodeSupplier"?☑️
Both "hotelCode" and "hotelCodeSupplier" are typically the same because we do not have our own hotel codes. However, there are instances where Sellers may return the same hotel code for different properties. In those cases, we concatenate the destination code with the hotel code to ensure a unique code (TravelgateX "hotelCode" vs. the Seller "hotelCodeSupplier").


### What hotel codes should I map as Buyer?❓
You should **always map the "hotelCode"** since it is the one you should use when performing Searches via our API.

### Will I receive availability results for all the properties within a Seller's portfolio?⚠️
No, the Hotel List response includes all the hotels that a Seller has configured for your account. However, it is possible that there may be no availability for the specific dates or distribution that you are requesting.

:::tip
More information on our Documentation and API Playground
:::