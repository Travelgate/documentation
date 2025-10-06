# Room

Represents a room in a hotel Search response.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **Code** | String | Unique code assigned to this room. |
| **Description** | String | Description of the room's features or characteristics. |
| **RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **RoomPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The total price of the room. |
| **RoomPrice/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **RoomPrice/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **RoomPrice/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **RoomPrice/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **RoomPrice/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **RoomPrice/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **RoomPrice/PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **RoomPrice/PriceBreakdown/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The price for each day of the room during the specified period. |
| **RoomPrice/PriceBreakdown/Price/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **RoomPrice/PriceBreakdown/Price/**<br />**Binding** | Boolean | Indicates whether the price is binding. |
| **RoomPrice/PriceBreakdown/Price/**<br />**Net** | Double | The net price paid by the Buyer to the Seller. |
| **RoomPrice/PriceBreakdown/Price/**<br />**Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **RoomPrice/PriceBreakdown/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **RoomPrice/PriceBreakdown/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **RoomPrice/PriceBreakdown/Start** | Integer | The starting day of the pricing period (inclusive). |
| **RoomPrice/PriceBreakdown/End** | Integer | The ending day of the pricing period (inclusive). |
| **Refundable** | Boolean | Indicates if the room is refundable based on the cancellation policy. |
| **RefundableSpecified** | Boolean | Indicates whether the refundable status has been explicitly specified. |
| **LegacyRoomId** | String | Legacy identifier for internal tracking. Automatically generated using OccupancyRefId and Code. |
| **Units** | Integer | Number of units available for this room type. |
| **RatePlan** | [RatePlan](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/rateplan) | Rate plan associated with this room. |
| **RatePlan/Code** | String | The unique code for the rate plan. |
| **RatePlan/Name** | String | The name of the rate plan. |
| **Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/promotion)&gt; | Promotions or discounts applicable to this room. |
| **Promotions/Code** | String | The unique code identifying the promotion. |
| **Promotions/Name** | String | The name of the promotion. |
| **Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remark)&gt; | Additional remarks or notes about this room. |
| **Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/surcharge)&gt; | Additional surcharges applied to this room. |
| **Surcharges/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Surcharges/Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Surcharges/Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Surcharges/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Surcharges/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Surcharges/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Surcharges/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Surcharges/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Surcharges/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpolicy) | Cancellation policy specific to this room. |
| **CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **CancelPolicy/CancelPenalties/**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **CancelPolicy/CancelPenalties/**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **CancelPolicy/CancelPenalties/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **CancelPolicy/CancelPenalties/**<br />**Value** | Double | Indicates the value of the penalty. |
| **CancelPolicy/CancelPenalties/**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **CancelPolicy/**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Beds** | Array&lt;[Bed](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bed)&gt; | List of beds available in the room, including types and configurations. |
| **Beds/Type** | String | The type of the bed. |
| **Beds/Description** | String | A description of the bed. |
| **Beds/Count** | Integer | The number of beds of this type in the room. |
| **Beds/Shared** | Boolean | Indicates whether the bed is shared. |
| **Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amenity)&gt; | Amenities included with this room, such as Wi-Fi or parking. |
| **Amenities/Code** | String | A unique code that identifies the amenity. |
| **Amenities/Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Amenities/Value** | String | The value associated with the amenity. |
| **Amenities/Texts** | String | Additional textual information or description for the amenity. |
| **UnitsSpecified** | Boolean | Indicates whether the number of units has been explicitly specified. |
| **Features** | Array&lt;[Feature](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/feature)&gt; | Features or custom attributes of the room, used for specific integrations. |
| **Features/Code** | String | The unique code identifying the feature of the room. |
