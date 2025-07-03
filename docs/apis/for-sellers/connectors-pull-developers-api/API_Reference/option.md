# Option

Represents an option for a hotel accommodation in Search responses.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **FormId** | String | Internal field for FormTest. Not serialized. DO NOT USE! |
| **Status** | [Status](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/status) | Indicates the availability status of the option. |
| **Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price details associated with the option, including net, gross and minimum selling price. |
| **Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **PaymentTypes** | Array&lt;[PaymentType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/paymenttype)&gt; | Specifies the accepted payment types for the option. |
| **Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/room)&gt; | The list of rooms included with the option, including type, description, and price. |
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
| **Rooms/Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
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
| **Parameters** | Array&lt;[Parameter](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parameter)&gt; | Parameters for transferring data between operations, such as from `Search` to `Quote` or `Quote` to `Book`. |
| **Parameters/Key** | Integer | Identifies the parameter with a numeric key. |
| **Parameters/Value** | String | Defines the value associated with the parameter. |
| **Parameters/ParameterType** | [ParameterType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parametertype) | Specifies the type of the parameter (ParameterType), whether it is internal or supplier-related. |
| **Parameters/Immutable** | Boolean | Indicates whether the parameter remains constant throughout operations (e.g., from Search to Quote and Book). In second searches or quotes, an immutable parameter is used to identify and match the same option. |
| **Parameters/RoomId** | Integer | Associates the parameter with a specific room, identified by its ID. |
| **CancelPolicy** | [OptionCancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/optioncancelpolicy) | The cancellation policy associated with the option, detailing penalties and conditions. |
| **CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **CancelPolicy/CancelPenalties**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **CancelPolicy/CancelPenalties**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **CancelPolicy/CancelPenalties**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **CancelPolicy/CancelPenalties**<br />**Value** | Double | Indicates the value of the penalty. |
| **CancelPolicy/CancelPenalties**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **CancelPolicy**<br />**RoomCancelPolicyDescriptions** | Array&lt;[RoomCancelPolicyDescriptions](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomcancelpolicydescriptions)&gt; | Gets or sets the list of room-specific cancellation policy descriptions. |
| **CancelPolicy**<br />**RoomCancelPolicyDescriptions**<br />**OccupancyRefId** | Integer | Identifies the specific occupancy within the booking for which this cancellation policy applies. |
| **CancelPolicy**<br />**RoomCancelPolicyDescriptions**<br />**Description** | String | Textual information detailing the cancellation policy applicable to the room associated with the OccupancyRefId. |
| **Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/promotion)&gt; | The promotions applied to the option, such as discounts or special offers. |
| **Promotions/Code** | String | The unique code identifying the promotion. |
| **Promotions/Name** | String | The name of the promotion. |
| **RateRules** | Array&lt;[RateRule2](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule2)&gt; | The rate rules for the option, specifying sales restrictions such as "Senior Discount" or "Resident Rate." |
| **RateRules/RateRuleType** | [RateRule](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule) | Selling restrictions applied to the room. These define specific conditions or eligibility requirements that must be met to sell the room. Possible restrictions include: |
| **RateRules/Code** | String | Represents a unique identifier for the rate rule, typically defined by the supplier.This code is used to reference and distinguish the rule from others. |
| **RateRules/Name** | String | Provides a human-readable name or label for the rate rule.This name is typically used in user interfaces or reports to describe the rule. |
| **RateRules/Restrictions** | Array&lt;[Restriction](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/restriction)&gt; | Defines a collection of additional restrictions that further specify the conditions of the rate rule.Restrictions can include age limits, regional requirements, or special eligibility conditions. |
| **RateRules/Restrictions/Code** | String | A unique identifier for the restriction. |
| **RateRules/Restrictions/Name** | String | A descriptive name for the restriction. |
| **RateRules/Restrictions**<br />**RestrictionType** | [RestrictionType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/restrictiontype) | The type of the restriction, categorizing its purpose or application. |
| **Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks associated with the option, such as special conditions or information. |
| **Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/surcharge)&gt; | Surcharges applied to the option, such as mandatory fees or taxes. |
| **Surcharges/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Surcharges/Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Surcharges/Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Surcharges/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Surcharges/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Surcharges/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Surcharges/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Surcharges/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Surcharges/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenity)&gt; | Amenities included with the option, such as "Free Wi-Fi" or "Parking." |
| **Amenities/Code** | String | A unique code that identifies the amenity. |
| **Amenities/Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Amenities/Value** | String | The value associated with the amenity. |
| **Amenities/Texts** | String | Additional textual information or description for the amenity. |
| **Supplements** | Array&lt;[Supplement](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/supplement)&gt; | Supplements available with the option, such as activity passes. |
| **Supplements/Code** | String | The unique code identifying the supplement. |
| **Supplements/Name** | String | The descriptive name of the supplement. |
| **Supplements/Description** | String | An optional textual description providing additional details about the supplement. |
| **Supplements/Mandatory** | Boolean | Indicates whether the supplement is mandatory for the booking. |
| **Supplements/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The Price associated with the supplement, including details such as currency and net price. |
| **Supplements/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Supplements/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Supplements/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Supplements/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Supplements/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Supplements/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Supplements/SupplementType** | [SupplementType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/supplementtype) | The specific SupplementType of the supplement (e.g., board, additional service). |
| **Supplements/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Defines how the supplement is charged using ChargeType (e.g., per person, per stay). |
| **Supplements/DurationType** | [DurationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/durationtype) | Specifies whether the supplement applies to a specific duration (Open or Range). |
| **Supplements/Quantity** | Integer | The quantity of the supplement included in the booking. |
| **Supplements/StartDate** | String | The start date for the supplement (if applicable). |
| **Supplements**<br />**StartDateAsDateTime** | String | The start date as a DateTime object for easier manipulation. |
| **Supplements/EndDate** | String | The end date for the supplement (if applicable). |
| **Supplements/EndDateAsDateTime** | String | The end date as a DateTime object for easier manipulation. |
| **Supplements/Resort** | [Resort](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/resort) | The associated Resort where the supplement applies. |
| **Supplements/Resort/Code** | String | Unique code that identifies the resort in the system. |
| **Supplements/Resort/Name** | String | Name of the resort. |
| **Supplements/Resort/Description** | String | Optional description providing additional details about the resort. |
| **Supplements/Unit** | [UnitTimeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/unittimetype) | Specifies the unit of time for the supplement (e.g., per day, per stay) using UnitTimeType. |
| **AddOns** | Object | Internal field for passing additional information across layers. |
