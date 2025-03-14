# Hotel

Represents a hotel accommodation in search responses.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **AccommodationType** | [AccommodationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accommodationtype) | Gets or initializes the type of accommodation. |
| **AccommodationCode** | String | Gets the unique code identifying the accommodation. |
| **AccommodationName** | String | Gets or initializes the name of the accommodation. |
| **Boards** | Array&lt;[Board](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/board)&gt; | Gets the list of meal plan options (Board) available for the hotel. |
| **Boards/BoardCode** | String | The unique code identifying the meal plan option. |
| **Boards/Name** | String | The name of the meal plan option. |
| **Boards/Options** | Array&lt;[Option](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/option)&gt; | The collection of options associated with this meal plan. |
| **Boards/Options/FormId** | String | Internal field for form test. Not serialized. DO NOT USE! |
| **Boards/Options/Status** | [Status](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/status) | Indicates the availability status of the option. |
| **Boards/Options/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price details associated with the option, including net, gross and minimum selling price. |
| **Boards/Options/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Boards/Options/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Boards/Options/Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Boards/Options/Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Boards/Options/Price**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Boards/Options/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Boards/Options/PaymentTypes** | Array&lt;[PaymentType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/paymenttype)&gt; | Specifies the accepted payment types for the option. |
| **Boards/Options/Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/room)&gt; | The list of rooms included with the option, including type, description, and price. |
| **Boards/Options/Rooms**<br />**OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **Boards/Options/Rooms/Code** | String | Unique code assigned to this room. |
| **Boards/Options/Rooms**<br />**Description** | String | Description of the room's features or characteristics. |
| **Boards/Options/Rooms/RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **Boards/Options/Rooms/RoomPrice**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the room. |
| **Boards/Options/Rooms/RoomPrice**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Boards/Options/Rooms/RoomPrice**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Boards/Options/Rooms/RoomPrice**<br />**Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Boards/Options/Rooms/RoomPrice**<br />**Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Boards/Options/Rooms/RoomPrice**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Boards/Options/Rooms/RoomPrice**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **Boards/Options/Rooms/RoomPrice**<br />**PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **Boards/Options/Rooms/RoomPrice**<br />**PriceBreakdown/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price for each day of the room during the specified period. |
| **Boards/Options/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Boards/Options/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Boards/Options/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Boards/Options/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Boards/Options/Rooms/RoomPrice**<br />**PriceBreakdown/Price**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Boards/Options/Rooms/RoomPrice**<br />**PriceBreakdown/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Boards/Options/Rooms/RoomPrice**<br />**PriceBreakdown/Start** | Integer | The starting day of the pricing period (inclusive). |
| **Boards/Options/Rooms/RoomPrice**<br />**PriceBreakdown/End** | Integer | The ending day of the pricing period (inclusive). |
| **Boards/Options/Rooms**<br />**Refundable** | Boolean | Indicates if the room is refundable based on the cancellation policy. |
| **Boards/Options/Rooms**<br />**RefundableSpecified** | Boolean | Indicates whether the refundable status has been explicitly specified. |
| **Boards/Options/Rooms**<br />**LegacyRoomId** | String | Legacy identifier for internal tracking. Automatically generated using OccupancyRefId and Code. |
| **Boards/Options/Rooms/Units** | Integer | Number of units available for this room type. |
| **Boards/Options/Rooms/RatePlan** | [RatePlan](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/rateplan) | Rate plan associated with this room. |
| **Boards/Options/Rooms/RatePlan**<br />**Code** | String | The unique code for the rate plan. |
| **Boards/Options/Rooms/RatePlan**<br />**Name** | String | The name of the rate plan. |
| **Boards/Options/Rooms**<br />**Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/promotion)&gt; | Promotions or discounts applicable to this room. |
| **Boards/Options/Rooms**<br />**Promotions/Code** | String | The unique code identifying the promotion. |
| **Boards/Options/Rooms**<br />**Promotions/Name** | String | The name of the promotion. |
| **Boards/Options/Rooms/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks or notes about this room. |
| **Boards/Options/Rooms/Remarks**<br />**RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType.This specifies the nature or purpose of the remark: Related to the hotel as a whole. Specific to the room being booked. Related to services provided by the accommodation. General remarks not tied to a specific entity. |
| **Boards/Options/Rooms/Remarks**<br />**Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Boards/Options/Rooms**<br />**Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/surcharge)&gt; | Additional surcharges applied to this room. |
| **Boards/Options/Rooms**<br />**Surcharges/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Boards/Options/Rooms**<br />**Surcharges/Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Boards/Options/Rooms**<br />**Surcharges/Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Boards/Options/Rooms**<br />**Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Boards/Options/Rooms**<br />**Surcharges/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Boards/Options/Rooms**<br />**Surcharges/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Boards/Options/Rooms**<br />**Surcharges/Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Boards/Options/Rooms**<br />**Surcharges/Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Boards/Options/Rooms**<br />**Surcharges/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Boards/Options/Rooms**<br />**Surcharges/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Boards/Options/Rooms**<br />**Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Boards/Options/Rooms**<br />**CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpolicy) | Cancellation policy specific to this room. |
| **Boards/Options/Rooms**<br />**CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Boards/Options/Rooms**<br />**CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Boards/Options/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Boards/Options/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Boards/Options/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Boards/Options/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**Value** | Double | Indicates the value of the penalty. |
| **Boards/Options/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Boards/Options/Rooms**<br />**CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Boards/Options/Rooms/Beds** | Array&lt;[Bed](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bed)&gt; | List of beds available in the room, including types and configurations. |
| **Boards/Options/Rooms/Beds/Type** | String | The type of the bed. |
| **Boards/Options/Rooms/Beds**<br />**Description** | String | A description of the bed. |
| **Boards/Options/Rooms/Beds**<br />**Count** | Integer | The number of beds of this type in the room. |
| **Boards/Options/Rooms/Beds**<br />**Shared** | Boolean | Indicates whether the bed is shared. |
| **Boards/Options/Rooms/Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenity)&gt; | Amenities included with this room, such as Wi-Fi or parking. |
| **Boards/Options/Rooms/Amenities**<br />**Code** | String | A unique code that identifies the amenity. |
| **Boards/Options/Rooms/Amenities**<br />**Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Boards/Options/Rooms/Amenities**<br />**Value** | String | The value associated with the amenity. |
| **Boards/Options/Rooms/Amenities**<br />**Texts** | String | Additional textual information or description for the amenity. |
| **Boards/Options/Rooms**<br />**UnitsSpecified** | Boolean | Indicates whether the number of units has been explicitly specified. |
| **Boards/Options/Rooms/Features** | Array&lt;[Feature](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/feature)&gt; | Features or custom attributes of the room, used for specific integrations. |
| **Boards/Options/Rooms/Features**<br />**Code** | String | The unique code identifying the feature of the room. |
| **Boards/Options/Parameters** | Array&lt;[Parameter](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parameter)&gt; | Parameters for transferring data between operations, such as from `Search` to `Quote` or `Quote` to `Book`. |
| **Boards/Options/Parameters/Key** | Integer | Identifies the parameter with a numeric key. |
| **Boards/Options/Parameters**<br />**Value** | String | Defines the value associated with the parameter. |
| **Boards/Options/Parameters**<br />**ParameterType** | [ParameterType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parametertype) | Specifies the type of the parameter (ParameterType), whether it is internal or supplier-related. |
| **Boards/Options/Parameters**<br />**Immutable** | Boolean | Indicates whether the parameter remains constant throughout operations (e.g., from Search to Quote and Book). In second searches or quotes, an immutable parameter is used to identify and match the same option. |
| **Boards/Options/Parameters**<br />**RoomId** | Integer | Associates the parameter with a specific room, identified by its ID. |
| **Boards/Options/CancelPolicy** | [OptionCancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/optioncancelpolicy) | The cancellation policy associated with the option, detailing penalties and conditions. |
| **Boards/Options/CancelPolicy**<br />**Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Boards/Options/CancelPolicy**<br />**CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Boards/Options/CancelPolicy**<br />**CancelPenalties/HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Boards/Options/CancelPolicy**<br />**CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Boards/Options/CancelPolicy**<br />**CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Boards/Options/CancelPolicy**<br />**CancelPenalties/Value** | Double | Indicates the value of the penalty. |
| **Boards/Options/CancelPolicy**<br />**CancelPenalties/Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Boards/Options/CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Boards/Options/CancelPolicy**<br />**RoomCancelPolicyDescriptions** | Array&lt;[RoomCancelPolicyDescriptions](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomcancelpolicydescriptions)&gt; | Gets or sets the list of room-specific cancellation policy descriptions. |
| **Boards/Options/CancelPolicy**<br />**RoomCancelPolicyDescriptions**<br />**OccupancyRefId** | Integer | Identifies the specific occupancy within the booking for which this cancellation policy applies. |
| **Boards/Options/CancelPolicy**<br />**RoomCancelPolicyDescriptions**<br />**Description** | String | Textual information detailing the cancellation policy applicable to the room associated with the OccupancyRefId. |
| **Boards/Options/Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/promotion)&gt; | The promotions applied to the option, such as discounts or special offers. |
| **Boards/Options/Promotions/Code** | String | The unique code identifying the promotion. |
| **Boards/Options/Promotions/Name** | String | The name of the promotion. |
| **Boards/Options/RateRules** | Array&lt;[RateRule2](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule2)&gt; | The rate rules for the option, specifying sales restrictions such as "Senior Discount" or "Resident Rate." |
| **Boards/Options/RateRules**<br />**RateRuleType** | [RateRule](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule) | Selling restrictions applied to the room. These define specific conditions or eligibility requirements that must be met to sell the room. Possible restrictions include: |
| **Boards/Options/RateRules/Code** | String | Represents a unique identifier for the rate rule, typically defined by the supplier.This code is used to reference and distinguish the rule from others. |
| **Boards/Options/RateRules/Name** | String | Provides a human-readable name or label for the rate rule.This name is typically used in user interfaces or reports to describe the rule. |
| **Boards/Options/RateRules**<br />**Restrictions** | Array&lt;[Restriction](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/restriction)&gt; | Defines a collection of additional restrictions that further specify the conditions of the rate rule.Restrictions can include age limits, regional requirements, or special eligibility conditions. |
| **Boards/Options/RateRules**<br />**Restrictions/Code** | String | A unique identifier for the restriction. |
| **Boards/Options/RateRules**<br />**Restrictions/Name** | String | A descriptive name for the restriction. |
| **Boards/Options/RateRules**<br />**Restrictions/RestrictionType** | [RestrictionType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/restrictiontype) | The type of the restriction, categorizing its purpose or application. |
| **Boards/Options/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks associated with the option, such as special conditions or information. |
| **Boards/Options/Remarks**<br />**RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType.This specifies the nature or purpose of the remark: Related to the hotel as a whole. Specific to the room being booked. Related to services provided by the accommodation. General remarks not tied to a specific entity. |
| **Boards/Options/Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Boards/Options/Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/surcharge)&gt; | Surcharges applied to the option, such as mandatory fees or taxes. |
| **Boards/Options/Surcharges**<br />**ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Boards/Options/Surcharges**<br />**Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Boards/Options/Surcharges**<br />**Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Boards/Options/Surcharges**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Boards/Options/Surcharges**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Boards/Options/Surcharges**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Boards/Options/Surcharges**<br />**Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Boards/Options/Surcharges**<br />**Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Boards/Options/Surcharges**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Boards/Options/Surcharges**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **Boards/Options/Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Boards/Options/Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenity)&gt; | Amenities included with the option, such as "Free Wi-Fi" or "Parking." |
| **Boards/Options/Amenities/Code** | String | A unique code that identifies the amenity. |
| **Boards/Options/Amenities/Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Boards/Options/Amenities/Value** | String | The value associated with the amenity. |
| **Boards/Options/Amenities/Texts** | String | Additional textual information or description for the amenity. |
| **Boards/Options/Supplements** | Array&lt;[Supplement](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/supplement)&gt; | Supplements available with the option, such as activity passes. |
| **Boards/Options/Supplements**<br />**Code** | String | The unique code identifying the supplement. |
| **Boards/Options/Supplements**<br />**Name** | String | The descriptive name of the supplement. |
| **Boards/Options/Supplements**<br />**Description** | String | An optional textual description providing additional details about the supplement. |
| **Boards/Options/Supplements**<br />**Mandatory** | Boolean | Indicates whether the supplement is mandatory for the booking. |
| **Boards/Options/Supplements**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The Price associated with the supplement, including details such as currency and net price. |
| **Boards/Options/Supplements**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Boards/Options/Supplements**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Boards/Options/Supplements**<br />**Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Boards/Options/Supplements**<br />**Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Boards/Options/Supplements**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Boards/Options/Supplements**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **Boards/Options/Supplements**<br />**SupplementType** | [SupplementType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/supplementtype) | The specific SupplementType of the supplement (e.g., meal plan, additional service). |
| **Boards/Options/Supplements**<br />**ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Defines how the supplement is charged using ChargeType (e.g., per person, per stay). |
| **Boards/Options/Supplements**<br />**DurationType** | [DurationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/durationtype) | Specifies whether the supplement applies to a specific duration (Open or Range). |
| **Boards/Options/Supplements**<br />**Quantity** | Integer | The quantity of the supplement included in the booking. |
| **Boards/Options/Supplements**<br />**StartDate** | String | The start date for the supplement (if applicable). |
| **Boards/Options/Supplements**<br />**StartDateAsDateTime** | String | The start date as a DateTime object for easier manipulation. |
| **Boards/Options/Supplements**<br />**EndDate** | String | The end date for the supplement (if applicable). |
| **Boards/Options/Supplements**<br />**EndDateAsDateTime** | String | The end date as a DateTime object for easier manipulation. |
| **Boards/Options/Supplements**<br />**Resort** | [Resort](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/resort) | The associated Resort where the supplement applies. |
| **Boards/Options/Supplements**<br />**Resort/Code** | String | Unique code that identifies the resort in the system. |
| **Boards/Options/Supplements**<br />**Resort/Name** | String | Name of the resort. |
| **Boards/Options/Supplements**<br />**Resort/Description** | String | Optional description providing additional details about the resort. |
| **Boards/Options/Supplements**<br />**Unit** | [UnitTimeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/unittimetype) | Specifies the unit of time for the supplement (e.g., per day, per stay) using UnitTimeType. |
| **Boards/Options/AddOns** | Object | Internal field for passing additional information across layers. |
| **Location** | [Location](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/location) | Gets the geographical location of the hotel. |
| **Location/Code** | String | The unique code identifying the location. |
| **Location/Country** | String | The ISO 3166-1 alpha-2 country code where the location is situated. |
| **Location/Longitude** | Double | The longitude coordinate of the location, expressed in decimal degrees. |
| **Location/Latitude** | Double | The latitude coordinate of the location, expressed in decimal degrees. |
