---
sidebar_position: 6
---

# Hotel-X Development - Metadata Query

The Metadata query delivers a clear and summarized view of the Seller's main characteristics, as well as the methods implemented through their integration and the limitations and restrictions associated with their connection.

:::warning
Note that **TravelgateX API specifications will always prevail over the Seller's specifications**. For instance, nationality should always be sent in SearchRQ even though it may be optional for some Sellers.
:::
 

**Some of the information returned is:**

- Methods implemented
- Maximum/minimum stay
- Minimum release
- Supported payment types
- Maximum pax per room
- Maximum rooms per reservation
- Cancellation policies returned in Search or Quote
- “RequiredAllPassengers” (if name details for all the paxes are required in BookRQ)

:::note
The information returned depends on the Seller and might vary between Partners.
:::
 

**Example of Metadata query:**

```
{"query":"{\n hotelX {\n metadata(criteria: {supplierCodes: [\"\"]}, relay: {}) {\n adviseMessage {\n code\n level\n description\n }\n edges {\n node {\n code\n adviseMessage {\n code\n level\n description\n }\n metadataData {\n supplierCode\n search {\n destinations {\n maxNumberHotels {\n reviewDate\n value\n }\n recommendedNumberHotels {\n reviewDate\n value\n }\n }\n allowsCurrency {\n reviewDate\n value\n }\n implementsCombination {\n reviewDate\n value\n }\n numMarketsAllowed {\n reviewDate\n value\n }\n release {\n reviewDate\n value\n }\n minimumStay {\n reviewDate\n value\n }\n maxStay {\n reviewDate\n value\n }\n roomCandidates {\n maxNumberRoomCandidates {\n reviewDate\n value\n }\n paxTypeRangeInRoomCandidates {\n reviewDate\n candidates {\n min\n max\n type\n }\n }\n maxPaxInRoomCandidates {\n reviewDate\n value\n }\n maxPaxInAllRooms {\n reviewDate\n value\n }\n requiredRoomWithSamePaxConfiguration {\n samePaxAge {\n reviewDate\n value\n }\n samePaxNumber {\n reviewDate\n value\n }\n }\n rateRules {\n reviewDate\n value\n }\n beds {\n informNumberOfUnits {\n reviewDate\n value\n }\n informSharedBed {\n reviewDate\n value\n }\n informBedType {\n reviewDate\n value\n }\n informNumberOfBeds {\n reviewDate\n value\n }\n }\n ageRange {\n reviewDate\n ages {\n min\n max\n type\n }\n }\n }\n informBindingPrice {\n reviewDate\n value\n }\n informCancelPolicies {\n reviewDate\n value\n }\n informRoomCancelPolicies {\n reviewDate\n value\n }\n informRemarks {\n reviewDate\n value\n }\n paymentTypes {\n reviewDate\n value\n }\n languages {\n reviewDate\n value\n }\n informDailyPrice {\n reviewDate\n value\n }\n informDailyRatePlan {\n reviewDate\n value\n }\n informPromotions {\n reviewDate\n value\n }\n informNRFRateByRoom {\n reviewDate\n value\n }\n informSurcharges {\n reviewDate\n value\n }\n informRoomSurcharges {\n reviewDate\n value\n }\n informHotelName {\n reviewDate\n value\n }\n requiredNationality {\n reviewDate\n value\n }\n }\n quote {\n informBindingPrice {\n reviewDate\n value\n }\n informNRFRate {\n reviewDate\n value\n }\n informRemarks {\n reviewDate\n value\n }\n informCancelPolicies {\n reviewDate\n value\n }\n informCancelPoliciesDescription {\n reviewDate\n value\n }\n informSurcharges {\n reviewDate\n value\n }\n requiredNationality {\n reviewDate\n value\n }\n }\n book {\n allowsDeltaPrice {\n reviewDate\n value\n }\n requiredAllPassengers {\n reviewDate\n value\n }\n allowsRemarks {\n reviewDate\n value\n }\n informBillingSupplier {\n reviewDate\n value\n }\n informHotelReference {\n reviewDate\n value\n }\n informPrice {\n reviewDate\n value\n }\n requiredNationality {\n reviewDate\n value\n }\n }\n booking {\n queryableBySupplierReference {\n reviewDate\n value\n }\n queryableByClientReference {\n reviewDate\n value\n }\n queryableByCreationDate {\n reviewDate\n value\n }\n queryableByCheckinDate {\n reviewDate\n value\n }\n informHotelReference {\n reviewDate\n value\n }\n informCancelPolicies {\n reviewDate\n value\n }\n informPriceCancel {\n reviewDate\n value\n }\n }\n cancel {\n mutableBySupplierReference {\n reviewDate\n value\n }\n mutableByClientReference {\n reviewDate\n value\n }\n informPriceCancel {\n reviewDate\n value\n }\n }\n hotels {\n languages {\n reviewDate\n value\n }\n }\n destinations {\n languages{\n value\n }\n languages {\n reviewDate\n value\n }\n }\n rooms {\n languages {\n reviewDate\n value\n }\n }\n boards {\n languages {\n reviewDate\n value\n }\n }\n categories {\n languages {\n reviewDate\n value\n }\n }\n markets {\n languages {\n reviewDate\n value\n }\n }\n currencies {\n languages {\n reviewDate\n value\n }\n }\n amenities {\n languages {\n reviewDate\n value\n }\n }\n }\n createdAt\n updatedAt\n }\n }\n }\n }\n}"}
```

Since Metadata information may not be updated by our Sellers frequently (they update it whenever there is a major update on their APIs), we suggest you confirm directly with them whether the information is up to date.

 
:::tip
Learn more about Metadata Query on our Playground (DOCS tab) and Hotel-X Documentation. 
:::