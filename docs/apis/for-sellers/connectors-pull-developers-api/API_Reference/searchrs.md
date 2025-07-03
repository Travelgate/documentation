# SearchRs

Represents the response for a hotel Search operation. 
Contains the list of available options that match the client's Search criteria.
Additionally, it includes error or warning messages (AdviseMessages) and trace data (AuditData),
which logs the transactions sent to and received from the supplier.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **AuditData** | [ProviderAudit](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/provideraudit) | Contains the requests and responses exchanged with the supplier.This field is populated internally by the connector framework. Integrators do not need to handle this field manually. |
| **AuditData/Request** | Array&lt;[ProviderAuditRq](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/providerauditrq)&gt; | Collection of audit entries for provider requests.Each entry contains details about a specific request made to the provider. |
| **AuditData/Request/SendAt** | String | The timestamp indicating when the request was sent. |
| **AuditData/Request/Data** | String | The payload data included in the request. |
| **AuditData/Request/Url** | String | The URL of the provider endpoint to which the request is sent. |
| **AuditData/Request/Headers** | Object | A collection of headers included in the request. |
| **AuditData/Request/HttpMethod** | [HttpMethod](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/httpmethod) | The HTTP method used to send the request. |
| **AuditData/Request/HttpMethod**<br />**Method** | String | No description available. |
| **AuditData/Response** | Array&lt;[ProviderAuditRs](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/providerauditrs)&gt; | Collection of audit entries for provider responses.Each entry contains details about a specific response received from the provider. |
| **AuditData/Response/ReceivedAt** | String | The timestamp indicating when the response was received. |
| **AuditData/Response/Data** | String | The payload data contained in the provider's response. |
| **AuditData/Response/Headers** | Object | A collection of headers included in the provider's response. |
| **AuditData/Response/StatusCode** | Integer | The HTTP status code returned by the provider. |
| **AdviseMessages** | Array&lt;[AdviseMessage](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessage)&gt; | Collection of advice messages, which may include errors or warnings generated during the Search process. |
| **AdviseMessages/Code** | [AdviseMessageCode](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessagecode) | Gets the code that represents the message type. |
| **AdviseMessages/Level** | [AdviseMessageLevel](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessagelevel) | Gets the severity level of the message (e.g., Error, Warning, or Info). |
| **AdviseMessages/Description** | String | Gets the message description providing additional context. |
| **AdviseMessages/CorrelationId** | String | Gets a unique identifier for correlating the message with specific operations. |
| **AdviseMessages/External** | [External](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/external) | Gets additional external details associated with the message. |
| **AdviseMessages/External/Code** | String | The supplier's internal code for identifying the nature of the response or error. |
| **AdviseMessages/External**<br />**Message** | String | A descriptive message returned by the supplier. |
| **AdviseMessages/External**<br />**HttpStatusCode** | Integer | The HTTP status code of the supplier's response. |
| **Accommodations** | Array | List of accommodations, boards, and options returned by the Search.These represent the available (hotels-boards-options) that meet the client's criteria. |
| **Accommodations**<br />**AccommodationType** | [AccommodationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accommodationtype) | Gets or initializes the type of accommodation. |
| **Accommodations**<br />**AccommodationCode** | String | Gets the unique code identifying the accommodation. |
| **Accommodations**<br />**AccommodationName** | String | Gets or initializes the name of the accommodation. |
| **Accommodations/Boards** | Array&lt;[Board](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/board)&gt; | Gets the list of boards available for the hotel. |
| **Accommodations/Boards**<br />**BoardCode** | String | The unique code identifying the board. |
| **Accommodations/Boards/Name** | String | The name of the board. |
| **Accommodations/Boards/Options** | Array&lt;[Option](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/option)&gt; | The collection of options associated with this board. |
| **Accommodations/Boards/Options**<br />**FormId** | String | Internal field for FormTest. Not serialized. DO NOT USE! |
| **Accommodations/Boards/Options**<br />**Status** | [Status](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/status) | Indicates the availability status of the option. |
| **Accommodations/Boards/Options**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price details associated with the option, including net, gross and minimum selling price. |
| **Accommodations/Boards/Options**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Accommodations/Boards/Options**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Accommodations/Boards/Options**<br />**Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Accommodations/Boards/Options**<br />**Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Accommodations/Boards/Options**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Accommodations/Boards/Options**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **Accommodations/Boards/Options**<br />**PaymentTypes** | Array&lt;[PaymentType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/paymenttype)&gt; | Specifies the accepted payment types for the option. |
| **Accommodations/Boards/Options**<br />**Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/room)&gt; | The list of rooms included with the option, including type, description, and price. |
| **Accommodations/Boards/Options**<br />**Rooms/OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **Accommodations/Boards/Options**<br />**Rooms/Code** | String | Unique code assigned to this room. |
| **Accommodations/Boards/Options**<br />**Rooms/Description** | String | Description of the room's features or characteristics. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the room. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/Price**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/PriceBreakdown**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price for each day of the room during the specified period. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/PriceBreakdown**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/PriceBreakdown**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/PriceBreakdown**<br />**Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/PriceBreakdown**<br />**Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/PriceBreakdown**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/PriceBreakdown**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/PriceBreakdown**<br />**Start** | Integer | The starting day of the pricing period (inclusive). |
| **Accommodations/Boards/Options**<br />**Rooms/RoomPrice/PriceBreakdown**<br />**End** | Integer | The ending day of the pricing period (inclusive). |
| **Accommodations/Boards/Options**<br />**Rooms/Refundable** | Boolean | Indicates if the room is refundable based on the cancellation policy. |
| **Accommodations/Boards/Options**<br />**Rooms/RefundableSpecified** | Boolean | Indicates whether the refundable status has been explicitly specified. |
| **Accommodations/Boards/Options**<br />**Rooms/LegacyRoomId** | String | Legacy identifier for internal tracking. Automatically generated using OccupancyRefId and Code. |
| **Accommodations/Boards/Options**<br />**Rooms/Units** | Integer | Number of units available for this room type. |
| **Accommodations/Boards/Options**<br />**Rooms/RatePlan** | [RatePlan](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/rateplan) | Rate plan associated with this room. |
| **Accommodations/Boards/Options**<br />**Rooms/RatePlan/Code** | String | The unique code for the rate plan. |
| **Accommodations/Boards/Options**<br />**Rooms/RatePlan/Name** | String | The name of the rate plan. |
| **Accommodations/Boards/Options**<br />**Rooms/Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/promotion)&gt; | Promotions or discounts applicable to this room. |
| **Accommodations/Boards/Options**<br />**Rooms/Promotions/Code** | String | The unique code identifying the promotion. |
| **Accommodations/Boards/Options**<br />**Rooms/Promotions/Name** | String | The name of the promotion. |
| **Accommodations/Boards/Options**<br />**Rooms/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks or notes about this room. |
| **Accommodations/Boards/Options**<br />**Rooms/Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **Accommodations/Boards/Options**<br />**Rooms/Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/surcharge)&gt; | Additional surcharges applied to this room. |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges/Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges/Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges/Price**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges/Price**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Accommodations/Boards/Options**<br />**Rooms/Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Accommodations/Boards/Options**<br />**Rooms/CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpolicy) | Cancellation policy specific to this room. |
| **Accommodations/Boards/Options**<br />**Rooms/CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Accommodations/Boards/Options**<br />**Rooms/CancelPolicy**<br />**CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Accommodations/Boards/Options**<br />**Rooms/CancelPolicy**<br />**CancelPenalties/HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Accommodations/Boards/Options**<br />**Rooms/CancelPolicy**<br />**CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Accommodations/Boards/Options**<br />**Rooms/CancelPolicy**<br />**CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Accommodations/Boards/Options**<br />**Rooms/CancelPolicy**<br />**CancelPenalties/Value** | Double | Indicates the value of the penalty. |
| **Accommodations/Boards/Options**<br />**Rooms/CancelPolicy**<br />**CancelPenalties/Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Accommodations/Boards/Options**<br />**Rooms/CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Accommodations/Boards/Options**<br />**Rooms/Beds** | Array&lt;[Bed](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bed)&gt; | List of beds available in the room, including types and configurations. |
| **Accommodations/Boards/Options**<br />**Rooms/Beds/Type** | String | The type of the bed. |
| **Accommodations/Boards/Options**<br />**Rooms/Beds/Description** | String | A description of the bed. |
| **Accommodations/Boards/Options**<br />**Rooms/Beds/Count** | Integer | The number of beds of this type in the room. |
| **Accommodations/Boards/Options**<br />**Rooms/Beds/Shared** | Boolean | Indicates whether the bed is shared. |
| **Accommodations/Boards/Options**<br />**Rooms/Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenity)&gt; | Amenities included with this room, such as Wi-Fi or parking. |
| **Accommodations/Boards/Options**<br />**Rooms/Amenities/Code** | String | A unique code that identifies the amenity. |
| **Accommodations/Boards/Options**<br />**Rooms/Amenities/Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Accommodations/Boards/Options**<br />**Rooms/Amenities/Value** | String | The value associated with the amenity. |
| **Accommodations/Boards/Options**<br />**Rooms/Amenities/Texts** | String | Additional textual information or description for the amenity. |
| **Accommodations/Boards/Options**<br />**Rooms/UnitsSpecified** | Boolean | Indicates whether the number of units has been explicitly specified. |
| **Accommodations/Boards/Options**<br />**Rooms/Features** | Array&lt;[Feature](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/feature)&gt; | Features or custom attributes of the room, used for specific integrations. |
| **Accommodations/Boards/Options**<br />**Rooms/Features/Code** | String | The unique code identifying the feature of the room. |
| **Accommodations/Boards/Options**<br />**Parameters** | Array&lt;[Parameter](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parameter)&gt; | Parameters for transferring data between operations, such as from `Search` to `Quote` or `Quote` to `Book`. |
| **Accommodations/Boards/Options**<br />**Parameters/Key** | Integer | Identifies the parameter with a numeric key. |
| **Accommodations/Boards/Options**<br />**Parameters/Value** | String | Defines the value associated with the parameter. |
| **Accommodations/Boards/Options**<br />**Parameters/ParameterType** | [ParameterType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parametertype) | Specifies the type of the parameter (ParameterType), whether it is internal or supplier-related. |
| **Accommodations/Boards/Options**<br />**Parameters/Immutable** | Boolean | Indicates whether the parameter remains constant throughout operations (e.g., from Search to Quote and Book). In second searches or quotes, an immutable parameter is used to identify and match the same option. |
| **Accommodations/Boards/Options**<br />**Parameters/RoomId** | Integer | Associates the parameter with a specific room, identified by its ID. |
| **Accommodations/Boards/Options**<br />**CancelPolicy** | [OptionCancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/optioncancelpolicy) | The cancellation policy associated with the option, detailing penalties and conditions. |
| **Accommodations/Boards/Options**<br />**CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Accommodations/Boards/Options**<br />**CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Accommodations/Boards/Options**<br />**CancelPolicy/CancelPenalties**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Accommodations/Boards/Options**<br />**CancelPolicy/CancelPenalties**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Accommodations/Boards/Options**<br />**CancelPolicy/CancelPenalties**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Accommodations/Boards/Options**<br />**CancelPolicy/CancelPenalties**<br />**Value** | Double | Indicates the value of the penalty. |
| **Accommodations/Boards/Options**<br />**CancelPolicy/CancelPenalties**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Accommodations/Boards/Options**<br />**CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Accommodations/Boards/Options**<br />**CancelPolicy**<br />**RoomCancelPolicyDescriptions** | Array&lt;[RoomCancelPolicyDescriptions](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomcancelpolicydescriptions)&gt; | Gets or sets the list of room-specific cancellation policy descriptions. |
| **Accommodations/Boards/Options**<br />**CancelPolicy**<br />**RoomCancelPolicyDescriptions**<br />**OccupancyRefId** | Integer | Identifies the specific occupancy within the booking for which this cancellation policy applies. |
| **Accommodations/Boards/Options**<br />**CancelPolicy**<br />**RoomCancelPolicyDescriptions**<br />**Description** | String | Textual information detailing the cancellation policy applicable to the room associated with the OccupancyRefId. |
| **Accommodations/Boards/Options**<br />**Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/promotion)&gt; | The promotions applied to the option, such as discounts or special offers. |
| **Accommodations/Boards/Options**<br />**Promotions/Code** | String | The unique code identifying the promotion. |
| **Accommodations/Boards/Options**<br />**Promotions/Name** | String | The name of the promotion. |
| **Accommodations/Boards/Options**<br />**RateRules** | Array&lt;[RateRule2](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule2)&gt; | The rate rules for the option, specifying sales restrictions such as "Senior Discount" or "Resident Rate." |
| **Accommodations/Boards/Options**<br />**RateRules/RateRuleType** | [RateRule](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule) | Selling restrictions applied to the room. These define specific conditions or eligibility requirements that must be met to sell the room. Possible restrictions include: |
| **Accommodations/Boards/Options**<br />**RateRules/Code** | String | Represents a unique identifier for the rate rule, typically defined by the supplier.This code is used to reference and distinguish the rule from others. |
| **Accommodations/Boards/Options**<br />**RateRules/Name** | String | Provides a human-readable name or label for the rate rule.This name is typically used in user interfaces or reports to describe the rule. |
| **Accommodations/Boards/Options**<br />**RateRules/Restrictions** | Array&lt;[Restriction](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/restriction)&gt; | Defines a collection of additional restrictions that further specify the conditions of the rate rule.Restrictions can include age limits, regional requirements, or special eligibility conditions. |
| **Accommodations/Boards/Options**<br />**RateRules/Restrictions/Code** | String | A unique identifier for the restriction. |
| **Accommodations/Boards/Options**<br />**RateRules/Restrictions/Name** | String | A descriptive name for the restriction. |
| **Accommodations/Boards/Options**<br />**RateRules/Restrictions**<br />**RestrictionType** | [RestrictionType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/restrictiontype) | The type of the restriction, categorizing its purpose or application. |
| **Accommodations/Boards/Options**<br />**Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks associated with the option, such as special conditions or information. |
| **Accommodations/Boards/Options**<br />**Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **Accommodations/Boards/Options**<br />**Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Accommodations/Boards/Options**<br />**Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/surcharge)&gt; | Surcharges applied to the option, such as mandatory fees or taxes. |
| **Accommodations/Boards/Options**<br />**Surcharges/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Accommodations/Boards/Options**<br />**Surcharges/Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Accommodations/Boards/Options**<br />**Surcharges/Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Accommodations/Boards/Options**<br />**Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Accommodations/Boards/Options**<br />**Surcharges/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Accommodations/Boards/Options**<br />**Surcharges/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Accommodations/Boards/Options**<br />**Surcharges/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Accommodations/Boards/Options**<br />**Surcharges/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Accommodations/Boards/Options**<br />**Surcharges/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Accommodations/Boards/Options**<br />**Surcharges/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Accommodations/Boards/Options**<br />**Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Accommodations/Boards/Options**<br />**Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenity)&gt; | Amenities included with the option, such as "Free Wi-Fi" or "Parking." |
| **Accommodations/Boards/Options**<br />**Amenities/Code** | String | A unique code that identifies the amenity. |
| **Accommodations/Boards/Options**<br />**Amenities/Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Accommodations/Boards/Options**<br />**Amenities/Value** | String | The value associated with the amenity. |
| **Accommodations/Boards/Options**<br />**Amenities/Texts** | String | Additional textual information or description for the amenity. |
| **Accommodations/Boards/Options**<br />**Supplements** | Array&lt;[Supplement](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/supplement)&gt; | Supplements available with the option, such as activity passes. |
| **Accommodations/Boards/Options**<br />**Supplements/Code** | String | The unique code identifying the supplement. |
| **Accommodations/Boards/Options**<br />**Supplements/Name** | String | The descriptive name of the supplement. |
| **Accommodations/Boards/Options**<br />**Supplements/Description** | String | An optional textual description providing additional details about the supplement. |
| **Accommodations/Boards/Options**<br />**Supplements/Mandatory** | Boolean | Indicates whether the supplement is mandatory for the booking. |
| **Accommodations/Boards/Options**<br />**Supplements/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The Price associated with the supplement, including details such as currency and net price. |
| **Accommodations/Boards/Options**<br />**Supplements/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Accommodations/Boards/Options**<br />**Supplements/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Accommodations/Boards/Options**<br />**Supplements/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Accommodations/Boards/Options**<br />**Supplements/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Accommodations/Boards/Options**<br />**Supplements/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Accommodations/Boards/Options**<br />**Supplements/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Accommodations/Boards/Options**<br />**Supplements/SupplementType** | [SupplementType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/supplementtype) | The specific SupplementType of the supplement (e.g., board, additional service). |
| **Accommodations/Boards/Options**<br />**Supplements/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Defines how the supplement is charged using ChargeType (e.g., per person, per stay). |
| **Accommodations/Boards/Options**<br />**Supplements/DurationType** | [DurationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/durationtype) | Specifies whether the supplement applies to a specific duration (Open or Range). |
| **Accommodations/Boards/Options**<br />**Supplements/Quantity** | Integer | The quantity of the supplement included in the booking. |
| **Accommodations/Boards/Options**<br />**Supplements/StartDate** | String | The start date for the supplement (if applicable). |
| **Accommodations/Boards/Options**<br />**Supplements**<br />**StartDateAsDateTime** | String | The start date as a DateTime object for easier manipulation. |
| **Accommodations/Boards/Options**<br />**Supplements/EndDate** | String | The end date for the supplement (if applicable). |
| **Accommodations/Boards/Options**<br />**Supplements/EndDateAsDateTime** | String | The end date as a DateTime object for easier manipulation. |
| **Accommodations/Boards/Options**<br />**Supplements/Resort** | [Resort](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/resort) | The associated Resort where the supplement applies. |
| **Accommodations/Boards/Options**<br />**Supplements/Resort/Code** | String | Unique code that identifies the resort in the system. |
| **Accommodations/Boards/Options**<br />**Supplements/Resort/Name** | String | Name of the resort. |
| **Accommodations/Boards/Options**<br />**Supplements/Resort/Description** | String | Optional description providing additional details about the resort. |
| **Accommodations/Boards/Options**<br />**Supplements/Unit** | [UnitTimeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/unittimetype) | Specifies the unit of time for the supplement (e.g., per day, per stay) using UnitTimeType. |
| **Accommodations/Boards/Options**<br />**AddOns** | Object | Internal field for passing additional information across layers. |
| **Accommodations/Location** | [Location](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/location) | Gets the geographical location of the hotel. |
| **Accommodations/Location/Code** | String | The unique code identifying the location. |
| **Accommodations/Location**<br />**Country** | String | The ISO 3166-1 alpha-2 country code where the location is situated. |
| **Accommodations/Location**<br />**Longitude** | Double | The longitude coordinate of the location, expressed in decimal degrees. |
| **Accommodations/Location**<br />**Latitude** | Double | The latitude coordinate of the location, expressed in decimal degrees. |
| **GlobalOptionParameters** | Array&lt;[Parameter](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parameter)&gt; | Global parameters that the client must send in subsequent operations (e.g., in a Quote request). These parameters apply to all options returned in the response. |
| **GlobalOptionParameters/Key** | Integer | Identifies the parameter with a numeric key. |
| **GlobalOptionParameters/Value** | String | Defines the value associated with the parameter. |
| **GlobalOptionParameters**<br />**ParameterType** | [ParameterType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parametertype) | Specifies the type of the parameter (ParameterType), whether it is internal or supplier-related. |
| **GlobalOptionParameters**<br />**Immutable** | Boolean | Indicates whether the parameter remains constant throughout operations (e.g., from Search to Quote and Book). In second searches or quotes, an immutable parameter is used to identify and match the same option. |
| **GlobalOptionParameters/RoomId** | Integer | Associates the parameter with a specific room, identified by its ID. |
| **DiscardedItems** | Integer | Discarded items in the Search response, can be rooms or options depending on the connector. |
