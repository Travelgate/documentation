# HotelDetail

Represents detailed information about a hotel booking.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **BookingDate** | String | The date when the booking was created. |
| **CheckIn** | String | The check-in date for the booking. |
| **CheckOut** | String | The check-out date for the booking. |
| **CheckInAsDateTime** | String | The check-in date as a DateTime object. |
| **CheckOutAsDateTime** | String | The check-out date as a DateTime object. |
| **HotelCode** | String | The unique code identifying the hotel. |
| **HotelName** | String | The name of the hotel associated with the booking. |
| **BoardCode** | String | The board code for the booking. |
| **Occupancies** | Array&lt;[BookOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookoccupancy)&gt; | The collection of occupancies associated with the booking. |
| **Occupancies/OccupancyId** | Integer | The unique identifier for the occupancy. |
| **Occupancies/Paxes** | Array&lt;[BookPaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookpaxinput)&gt; | The collection of passenger inputs (paxes) for the occupancy. |
| **Occupancies/Paxes/Age** | Integer | The age of the passenger. |
| **Occupancies/Paxes/Name** | String | The first name of the passenger. |
| **Occupancies/Paxes/SurName** | String | The surname (last name) of the passenger. |
| **Occupancies/Paxes**<br />**PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the passenger. |
| **Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/room)&gt; | The collection of rooms included in the booking. |
| **Rooms/OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **Rooms/Code** | String | Unique code assigned to this room. |
| **Rooms/Description** | String | Description of the room's features or characteristics. |
| **Rooms/RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **Rooms/RoomPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the room. |
| **Rooms/RoomPrice/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Rooms/RoomPrice/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Rooms/RoomPrice/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Rooms/RoomPrice/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Rooms/RoomPrice/Price**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Rooms/RoomPrice/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Rooms/RoomPrice/PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **Rooms/RoomPrice/PriceBreakdown**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price for each day of the room during the specified period. |
| **Rooms/RoomPrice/PriceBreakdown**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Rooms/RoomPrice/PriceBreakdown**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Rooms/RoomPrice/PriceBreakdown**<br />**Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Rooms/RoomPrice/PriceBreakdown**<br />**Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Rooms/RoomPrice/PriceBreakdown**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Rooms/RoomPrice/PriceBreakdown**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **Rooms/RoomPrice/PriceBreakdown**<br />**Start** | Integer | The starting day of the pricing period (inclusive). |
| **Rooms/RoomPrice/PriceBreakdown**<br />**End** | Integer | The ending day of the pricing period (inclusive). |
| **Rooms/Refundable** | Boolean | Indicates if the room is refundable based on the cancellation policy. |
| **Rooms/RefundableSpecified** | Boolean | Indicates whether the refundable status has been explicitly specified. |
| **Rooms/LegacyRoomId** | String | Legacy identifier for internal tracking. Automatically generated using OccupancyRefId and Code. |
| **Rooms/Units** | Integer | Number of units available for this room type. |
| **Rooms/RatePlan** | [RatePlan](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/rateplan) | Rate plan associated with this room. |
| **Rooms/RatePlan/Code** | String | The unique code for the rate plan. |
| **Rooms/RatePlan/Name** | String | The name of the rate plan. |
| **Rooms/Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/promotion)&gt; | Promotions or discounts applicable to this room. |
| **Rooms/Promotions/Code** | String | The unique code identifying the promotion. |
| **Rooms/Promotions/Name** | String | The name of the promotion. |
| **Rooms/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks or notes about this room. |
| **Rooms/Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType.This specifies the nature or purpose of the remark: Related to the hotel as a whole. Specific to the room being booked. Related to services provided by the accommodation. General remarks not tied to a specific entity. |
| **Rooms/Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Rooms/Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/surcharge)&gt; | Additional surcharges applied to this room. |
| **Rooms/Surcharges/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Rooms/Surcharges/Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Rooms/Surcharges/Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Rooms/Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Rooms/Surcharges/Price**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Rooms/Surcharges/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Rooms/Surcharges/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Rooms/Surcharges/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Rooms/Surcharges/Price**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Rooms/Surcharges/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Rooms/Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Rooms/CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpolicy) | Cancellation policy specific to this room. |
| **Rooms/CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Rooms/CancelPolicy**<br />**CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Rooms/CancelPolicy**<br />**CancelPenalties/HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Rooms/CancelPolicy**<br />**CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Rooms/CancelPolicy**<br />**CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Rooms/CancelPolicy**<br />**CancelPenalties/Value** | Double | Indicates the value of the penalty. |
| **Rooms/CancelPolicy**<br />**CancelPenalties/Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Rooms/CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Rooms/Beds** | Array&lt;[Bed](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bed)&gt; | List of beds available in the room, including types and configurations. |
| **Rooms/Beds/Type** | String | The type of the bed. |
| **Rooms/Beds/Description** | String | A description of the bed. |
| **Rooms/Beds/Count** | Integer | The number of beds of this type in the room. |
| **Rooms/Beds/Shared** | Boolean | Indicates whether the bed is shared. |
| **Rooms/Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenity)&gt; | Amenities included with this room, such as Wi-Fi or parking. |
| **Rooms/Amenities/Code** | String | A unique code that identifies the amenity. |
| **Rooms/Amenities/Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Rooms/Amenities/Value** | String | The value associated with the amenity. |
| **Rooms/Amenities/Texts** | String | Additional textual information or description for the amenity. |
| **Rooms/UnitsSpecified** | Boolean | Indicates whether the number of units has been explicitly specified. |
| **Rooms/Features** | Array&lt;[Feature](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/feature)&gt; | Features or custom attributes of the room, used for specific integrations. |
| **Rooms/Features/Code** | String | The unique code identifying the feature of the room. |
