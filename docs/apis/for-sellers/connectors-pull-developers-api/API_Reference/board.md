# Board

Represents a meal plan (board) option for accommodations in Search responses.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **BoardCode** | String | The unique code identifying the board. |
| **Name** | String | The name of the board. |
| **Options** | Array&lt;[Option](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/option)&gt; | The collection of options associated with this board. |
| **Options/FormId** | String | Internal field for FormTest. Not serialized. DO NOT USE! |
| **Options/Status** | [Status](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/status) | Indicates the availability status of the option. |
| **Options/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price details associated with the option, including net, gross and minimum selling price. |
| **Options/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Options/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Options/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Options/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Options/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Options/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Options/PaymentTypes** | Array&lt;[PaymentType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/paymenttype)&gt; | Specifies the accepted payment types for the option. |
| **Options/Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/room)&gt; | The list of rooms included with the option, including type, description, and price. |
| **Options/Rooms/OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **Options/Rooms/Code** | String | Unique code assigned to this room. |
| **Options/Rooms/Description** | String | Description of the room's features or characteristics. |
| **Options/Rooms/RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **Options/Rooms/RoomPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the room. |
| **Options/Rooms/RoomPrice/Price/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Options/Rooms/RoomPrice/Price/**<br />**Binding** | Boolean | Indicates whether the price is binding. |
| **Options/Rooms/RoomPrice/Price/**<br />**Net** | Double | The net price paid by the Buyer to the Seller. |
| **Options/Rooms/RoomPrice/Price/**<br />**Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Options/Rooms/RoomPrice/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Options/Rooms/RoomPrice/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Options/Rooms/RoomPrice/**<br />**PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **Options/Rooms/RoomPrice/**<br />**PriceBreakdown/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price for each day of the room during the specified period. |
| **Options/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Options/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Options/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Options/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Options/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Options/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Options/Rooms/RoomPrice/**<br />**PriceBreakdown/Start** | Integer | The starting day of the pricing period (inclusive). |
| **Options/Rooms/RoomPrice/**<br />**PriceBreakdown/End** | Integer | The ending day of the pricing period (inclusive). |
| **Options/Rooms/Refundable** | Boolean | Indicates if the room is refundable based on the cancellation policy. |
| **Options/Rooms/**<br />**RefundableSpecified** | Boolean | Indicates whether the refundable status has been explicitly specified. |
| **Options/Rooms/LegacyRoomId** | String | Legacy identifier for internal tracking. Automatically generated using OccupancyRefId and Code. |
| **Options/Rooms/Units** | Integer | Number of units available for this room type. |
| **Options/Rooms/RatePlan** | [RatePlan](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/rateplan) | Rate plan associated with this room. |
| **Options/Rooms/RatePlan/Code** | String | The unique code for the rate plan. |
| **Options/Rooms/RatePlan/Name** | String | The name of the rate plan. |
| **Options/Rooms/Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/promotion)&gt; | Promotions or discounts applicable to this room. |
| **Options/Rooms/Promotions/Code** | String | The unique code identifying the promotion. |
| **Options/Rooms/Promotions/Name** | String | The name of the promotion. |
| **Options/Rooms/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks or notes about this room. |
| **Options/Rooms/Remarks/**<br />**RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **Options/Rooms/Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Options/Rooms/Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/surcharge)&gt; | Additional surcharges applied to this room. |
| **Options/Rooms/Surcharges/**<br />**ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Options/Rooms/Surcharges/**<br />**Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Options/Rooms/Surcharges/**<br />**Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Options/Rooms/Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Options/Rooms/Surcharges/Price/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Options/Rooms/Surcharges/Price/**<br />**Binding** | Boolean | Indicates whether the price is binding. |
| **Options/Rooms/Surcharges/Price/**<br />**Net** | Double | The net price paid by the Buyer to the Seller. |
| **Options/Rooms/Surcharges/Price/**<br />**Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Options/Rooms/Surcharges/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Options/Rooms/Surcharges/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Options/Rooms/Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Options/Rooms/CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpolicy) | Cancellation policy specific to this room. |
| **Options/Rooms/CancelPolicy/**<br />**Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Options/Rooms/CancelPolicy/**<br />**CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Options/Rooms/CancelPolicy/**<br />**CancelPenalties/HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Options/Rooms/CancelPolicy/**<br />**CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Options/Rooms/CancelPolicy/**<br />**CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Options/Rooms/CancelPolicy/**<br />**CancelPenalties/Value** | Double | Indicates the value of the penalty. |
| **Options/Rooms/CancelPolicy/**<br />**CancelPenalties/Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Options/Rooms/CancelPolicy/**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Options/Rooms/Beds** | Array&lt;[Bed](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bed)&gt; | List of beds available in the room, including types and configurations. |
| **Options/Rooms/Beds/Type** | String | The type of the bed. |
| **Options/Rooms/Beds/Description** | String | A description of the bed. |
| **Options/Rooms/Beds/Count** | Integer | The number of beds of this type in the room. |
| **Options/Rooms/Beds/Shared** | Boolean | Indicates whether the bed is shared. |
| **Options/Rooms/Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenity)&gt; | Amenities included with this room, such as Wi-Fi or parking. |
| **Options/Rooms/Amenities/Code** | String | A unique code that identifies the amenity. |
| **Options/Rooms/Amenities/Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Options/Rooms/Amenities/Value** | String | The value associated with the amenity. |
| **Options/Rooms/Amenities/Texts** | String | Additional textual information or description for the amenity. |
| **Options/Rooms/UnitsSpecified** | Boolean | Indicates whether the number of units has been explicitly specified. |
| **Options/Rooms/Features** | Array&lt;[Feature](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/feature)&gt; | Features or custom attributes of the room, used for specific integrations. |
| **Options/Rooms/Features/Code** | String | The unique code identifying the feature of the room. |
| **Options/Parameters** | Array&lt;[Parameter](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parameter)&gt; | Parameters for transferring data between operations, such as from `Search` to `Quote` or `Quote` to `Book`. |
| **Options/Parameters/Key** | Integer | Identifies the parameter with a numeric key. |
| **Options/Parameters/Value** | String | Defines the value associated with the parameter. |
| **Options/Parameters/**<br />**ParameterType** | [ParameterType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parametertype) | Specifies the type of the parameter (ParameterType), whether it is internal or supplier-related. |
| **Options/Parameters/Immutable** | Boolean | Indicates whether the parameter remains constant throughout operations (e.g., from Search to Quote and Book). In second searches or quotes, an immutable parameter is used to identify and match the same option. |
| **Options/Parameters/RoomId** | Integer | Associates the parameter with a specific room, identified by its ID. |
| **Options/CancelPolicy** | [OptionCancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/optioncancelpolicy) | The cancellation policy associated with the option, detailing penalties and conditions. |
| **Options/CancelPolicy/**<br />**Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Options/CancelPolicy/**<br />**CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Options/CancelPolicy/**<br />**CancelPenalties/HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Options/CancelPolicy/**<br />**CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Options/CancelPolicy/**<br />**CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Options/CancelPolicy/**<br />**CancelPenalties/Value** | Double | Indicates the value of the penalty. |
| **Options/CancelPolicy/**<br />**CancelPenalties/Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Options/CancelPolicy/**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Options/CancelPolicy/**<br />**RoomCancelPolicyDescriptions** | Array&lt;[RoomCancelPolicyDescriptions](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomcancelpolicydescriptions)&gt; | Gets or sets the list of room-specific cancellation policy descriptions. |
| **Options/CancelPolicy/**<br />**RoomCancelPolicyDescriptions/**<br />**OccupancyRefId** | Integer | Identifies the specific occupancy within the booking for which this cancellation policy applies. |
| **Options/CancelPolicy/**<br />**RoomCancelPolicyDescriptions/**<br />**Description** | String | Textual information detailing the cancellation policy applicable to the room associated with the OccupancyRefId. |
| **Options/Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/promotion)&gt; | The promotions applied to the option, such as discounts or special offers. |
| **Options/Promotions/Code** | String | The unique code identifying the promotion. |
| **Options/Promotions/Name** | String | The name of the promotion. |
| **Options/RateRules** | Array&lt;[RateRule2](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule2)&gt; | The rate rules for the option, specifying sales restrictions such as "Senior Discount" or "Resident Rate." |
| **Options/RateRules/RateRuleType** | [RateRule](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule) | Selling restrictions applied to the room. These define specific conditions or eligibility requirements that must be met to sell the room. Possible restrictions include: |
| **Options/RateRules/Code** | String | Represents a unique identifier for the rate rule, typically defined by the supplier.This code is used to reference and distinguish the rule from others. |
| **Options/RateRules/Name** | String | Provides a human-readable name or label for the rate rule.This name is typically used in user interfaces or reports to describe the rule. |
| **Options/RateRules/Restrictions** | Array&lt;[Restriction](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/restriction)&gt; | Defines a collection of additional restrictions that further specify the conditions of the rate rule.Restrictions can include age limits, regional requirements, or special eligibility conditions. |
| **Options/RateRules/Restrictions/**<br />**Code** | String | A unique identifier for the restriction. |
| **Options/RateRules/Restrictions/**<br />**Name** | String | A descriptive name for the restriction. |
| **Options/RateRules/Restrictions/**<br />**RestrictionType** | [RestrictionType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/restrictiontype) | The type of the restriction, categorizing its purpose or application. |
| **Options/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks associated with the option, such as special conditions or information. |
| **Options/Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **Options/Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Options/Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/surcharge)&gt; | Surcharges applied to the option, such as mandatory fees or taxes. |
| **Options/Surcharges/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Options/Surcharges/Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Options/Surcharges/Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Options/Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Options/Surcharges/Price/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Options/Surcharges/Price/**<br />**Binding** | Boolean | Indicates whether the price is binding. |
| **Options/Surcharges/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Options/Surcharges/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Options/Surcharges/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Options/Surcharges/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Options/Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Options/Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenity)&gt; | Amenities included with the option, such as "Free Wi-Fi" or "Parking." |
| **Options/Amenities/Code** | String | A unique code that identifies the amenity. |
| **Options/Amenities/Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Options/Amenities/Value** | String | The value associated with the amenity. |
| **Options/Amenities/Texts** | String | Additional textual information or description for the amenity. |
| **Options/Supplements** | Array&lt;[Supplement](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/supplement)&gt; | Supplements available with the option, such as activity passes. |
| **Options/Supplements/Code** | String | The unique code identifying the supplement. |
| **Options/Supplements/Name** | String | The descriptive name of the supplement. |
| **Options/Supplements/**<br />**Description** | String | An optional textual description providing additional details about the supplement. |
| **Options/Supplements/Mandatory** | Boolean | Indicates whether the supplement is mandatory for the booking. |
| **Options/Supplements/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The Price associated with the supplement, including details such as currency and net price. |
| **Options/Supplements/Price/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Options/Supplements/Price/**<br />**Binding** | Boolean | Indicates whether the price is binding. |
| **Options/Supplements/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Options/Supplements/Price/**<br />**Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Options/Supplements/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Options/Supplements/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Options/Supplements/**<br />**SupplementType** | [SupplementType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/supplementtype) | The specific SupplementType of the supplement (e.g., board, additional service). |
| **Options/Supplements/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Defines how the supplement is charged using ChargeType (e.g., per person, per stay). |
| **Options/Supplements/**<br />**DurationType** | [DurationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/durationtype) | Specifies whether the supplement applies to a specific duration (Open or Range). |
| **Options/Supplements/Quantity** | Integer | The quantity of the supplement included in the booking. |
| **Options/Supplements/StartDate** | String | The start date for the supplement (if applicable). |
| **Options/Supplements/**<br />**StartDateAsDateTime** | String | The start date as a DateTime object for easier manipulation. |
| **Options/Supplements/EndDate** | String | The end date for the supplement (if applicable). |
| **Options/Supplements/**<br />**EndDateAsDateTime** | String | The end date as a DateTime object for easier manipulation. |
| **Options/Supplements/Resort** | [Resort](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/resort) | The associated Resort where the supplement applies. |
| **Options/Supplements/Resort/**<br />**Code** | String | Unique code that identifies the resort in the system. |
| **Options/Supplements/Resort/**<br />**Name** | String | Name of the resort. |
| **Options/Supplements/Resort/**<br />**Description** | String | Optional description providing additional details about the resort. |
| **Options/Supplements/Unit** | [UnitTimeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/unittimetype) | Specifies the unit of time for the supplement (e.g., per day, per stay) using UnitTimeType. |
| **Options/AddOns** | Object | Internal field for passing additional information across layers. |
