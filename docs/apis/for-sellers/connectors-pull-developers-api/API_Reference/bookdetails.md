# BookDetails

Represents the details of a hotel booking.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Status** | [BookStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookstatus) | The current status of the booking. |
| **Reference** | [Reference](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/reference) | A collection of locators that identify the booking. |
| **Reference/ClientLocator** | String | The booking locator provided by the client.This is typically used to match the booking in the client's internal systems. |
| **Reference/SupplierLocator** | String | The booking locator provided by the supplier.This identifier is used to reference the booking in the supplier's system. |
| **Reference/HotelLocator** | String | The booking locator specific to the hotel, provided by the supplier. (Optional)This may be required in cases where the hotel system uses its own unique identifiers. |
| **Holder** | [Holder](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/holder) | The personal details of the booking holder. |
| **Holder/Name** | String | The name of the holder. |
| **Holder/SurName** | String | The surname of the holder. |
| **Holder/PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the holder. |
| **Holder/ContactInfo** | [ContactInfo](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/contactinfo) | The contact information of the holder. |
| **Holder/ContactInfo/Email** | String | The email address of the passenger. |
| **Holder/ContactInfo/Phone** | String | The phone number of the passenger. |
| **Hotel** | [HotelDetail](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/hoteldetail) | The hotel details associated with the booking. |
| **Hotel/BookingDate** | String | The date when the booking was created. |
| **Hotel/CheckIn** | String | The check-in date for the booking. |
| **Hotel/CheckOut** | String | The check-out date for the booking. |
| **Hotel/CheckInAsDateTime** | String | The check-in date as a DateTime object. |
| **Hotel/CheckOutAsDateTime** | String | The check-out date as a DateTime object. |
| **Hotel/HotelCode** | String | The unique code identifying the hotel. |
| **Hotel/HotelName** | String | The name of the hotel associated with the booking. |
| **Hotel/BoardCode** | String | The board code for the booking. |
| **Hotel/Occupancies** | Array&lt;[BookOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookoccupancy)&gt; | The collection of occupancies associated with the booking. |
| **Hotel/Occupancies/OccupancyId** | Integer | The unique identifier for the occupancy. |
| **Hotel/Occupancies/Paxes** | Array&lt;[BookPaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookpaxinput)&gt; | The collection of passenger inputs (paxes) for the occupancy. |
| **Hotel/Occupancies/Paxes/Age** | Integer | The age of the passenger. |
| **Hotel/Occupancies/Paxes/Name** | String | The first name of the passenger. |
| **Hotel/Occupancies/Paxes**<br />**SurName** | String | The surname (last name) of the passenger. |
| **Hotel/Occupancies/Paxes**<br />**PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the passenger. |
| **Hotel/Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/room)&gt; | The collection of rooms included in the booking. |
| **Hotel/Rooms/OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **Hotel/Rooms/Code** | String | Unique code assigned to this room. |
| **Hotel/Rooms/Description** | String | Description of the room's features or characteristics. |
| **Hotel/Rooms/RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **Hotel/Rooms/RoomPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the room. |
| **Hotel/Rooms/RoomPrice/Price**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Hotel/Rooms/RoomPrice/Price**<br />**Binding** | Boolean | Indicates whether the price is binding. |
| **Hotel/Rooms/RoomPrice/Price**<br />**Net** | Double | The net price paid by the Buyer to the Seller. |
| **Hotel/Rooms/RoomPrice/Price**<br />**Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Hotel/Rooms/RoomPrice/Price**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Hotel/Rooms/RoomPrice/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Hotel/Rooms/RoomPrice**<br />**PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price for each day of the room during the specified period. |
| **Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Start** | Integer | The starting day of the pricing period (inclusive). |
| **Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/End** | Integer | The ending day of the pricing period (inclusive). |
| **Hotel/Rooms/Refundable** | Boolean | Indicates if the room is refundable based on the cancellation policy. |
| **Hotel/Rooms**<br />**RefundableSpecified** | Boolean | Indicates whether the refundable status has been explicitly specified. |
| **Hotel/Rooms/LegacyRoomId** | String | Legacy identifier for internal tracking. Automatically generated using OccupancyRefId and Code. |
| **Hotel/Rooms/Units** | Integer | Number of units available for this room type. |
| **Hotel/Rooms/RatePlan** | [RatePlan](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/rateplan) | Rate plan associated with this room. |
| **Hotel/Rooms/RatePlan/Code** | String | The unique code for the rate plan. |
| **Hotel/Rooms/RatePlan/Name** | String | The name of the rate plan. |
| **Hotel/Rooms/Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/promotion)&gt; | Promotions or discounts applicable to this room. |
| **Hotel/Rooms/Promotions/Code** | String | The unique code identifying the promotion. |
| **Hotel/Rooms/Promotions/Name** | String | The name of the promotion. |
| **Hotel/Rooms/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks or notes about this room. |
| **Hotel/Rooms/Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType.This specifies the nature or purpose of the remark: Related to the hotel as a whole. Specific to the room being booked. Related to services provided by the accommodation. General remarks not tied to a specific entity. |
| **Hotel/Rooms/Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Hotel/Rooms/Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/surcharge)&gt; | Additional surcharges applied to this room. |
| **Hotel/Rooms/Surcharges**<br />**ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Hotel/Rooms/Surcharges**<br />**Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Hotel/Rooms/Surcharges**<br />**Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Hotel/Rooms/Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Hotel/Rooms/Surcharges/Price**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Hotel/Rooms/Surcharges/Price**<br />**Binding** | Boolean | Indicates whether the price is binding. |
| **Hotel/Rooms/Surcharges/Price**<br />**Net** | Double | The net price paid by the Buyer to the Seller. |
| **Hotel/Rooms/Surcharges/Price**<br />**Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Hotel/Rooms/Surcharges/Price**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Hotel/Rooms/Surcharges/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Hotel/Rooms/Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Hotel/Rooms/CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpolicy) | Cancellation policy specific to this room. |
| **Hotel/Rooms/CancelPolicy**<br />**Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Hotel/Rooms/CancelPolicy**<br />**CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Hotel/Rooms/CancelPolicy**<br />**CancelPenalties/HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Hotel/Rooms/CancelPolicy**<br />**CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Hotel/Rooms/CancelPolicy**<br />**CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Hotel/Rooms/CancelPolicy**<br />**CancelPenalties/Value** | Double | Indicates the value of the penalty. |
| **Hotel/Rooms/CancelPolicy**<br />**CancelPenalties/Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Hotel/Rooms/CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Hotel/Rooms/Beds** | Array&lt;[Bed](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bed)&gt; | List of beds available in the room, including types and configurations. |
| **Hotel/Rooms/Beds/Type** | String | The type of the bed. |
| **Hotel/Rooms/Beds/Description** | String | A description of the bed. |
| **Hotel/Rooms/Beds/Count** | Integer | The number of beds of this type in the room. |
| **Hotel/Rooms/Beds/Shared** | Boolean | Indicates whether the bed is shared. |
| **Hotel/Rooms/Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenity)&gt; | Amenities included with this room, such as Wi-Fi or parking. |
| **Hotel/Rooms/Amenities/Code** | String | A unique code that identifies the amenity. |
| **Hotel/Rooms/Amenities/Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Hotel/Rooms/Amenities/Value** | String | The value associated with the amenity. |
| **Hotel/Rooms/Amenities/Texts** | String | Additional textual information or description for the amenity. |
| **Hotel/Rooms/UnitsSpecified** | Boolean | Indicates whether the number of units has been explicitly specified. |
| **Hotel/Rooms/Features** | Array&lt;[Feature](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/feature)&gt; | Features or custom attributes of the room, used for specific integrations. |
| **Hotel/Rooms/Features/Code** | String | The unique code identifying the feature of the room. |
| **Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the booking. |
| **Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpolicy) | The cancellation policy associated with the booking. |
| **CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **CancelPolicy/CancelPenalties**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **CancelPolicy/CancelPenalties**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **CancelPolicy/CancelPenalties**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **CancelPolicy/CancelPenalties**<br />**Value** | Double | Indicates the value of the penalty. |
| **CancelPolicy/CancelPenalties**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks or notes related to the booking. |
| **Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType.This specifies the nature or purpose of the remark: Related to the hotel as a whole. Specific to the room being booked. Related to services provided by the accommodation. General remarks not tied to a specific entity. |
| **Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **BillingSupplierCode** | String | The code of the agency responsible for the booking. |
| **Payable** | String | Information about the entity responsible for payment of the booking. |
| **AddOns** | Object | Additional metadata provided by the supplier for internal use. |
