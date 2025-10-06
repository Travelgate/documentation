# QuoteRs

Represents the response for a hotel Quote request.
This class provides details about the quoted price, status, rooms, and other relevant information for a hotel Quote operation.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **AuditData** | [ProviderAudit](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/provideraudit) | Contains the audit data detailing the requests and responses exchanged with the supplier.This field is populated internally by the connector framework. |
| **AuditData/Request** | Array&lt;[ProviderAuditRq](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/providerauditrq)&gt; | Collection of audit entries for provider requests.Each entry contains details about a specific request made to the provider. |
| **AuditData/Request/SendAt** | String | The timestamp indicating when the request was sent. |
| **AuditData/Request/Data** | String | The payload data included in the request. |
| **AuditData/Request/Url** | String | The URL of the provider endpoint to which the request is sent. |
| **AuditData/Request/Headers** | Object | A collection of headers included in the request. |
| **AuditData/Request/HttpMethod** | [HttpMethod](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/httpmethod) | The HTTP method used to send the request. |
| **AuditData/Request/HttpMethod/**<br />**Method** | String | No description available. |
| **AuditData/Response** | Array&lt;[ProviderAuditRs](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/providerauditrs)&gt; | Collection of audit entries for provider responses.Each entry contains details about a specific response received from the provider. |
| **AuditData/Response/ReceivedAt** | String | The timestamp indicating when the response was received. |
| **AuditData/Response/Data** | String | The payload data contained in the provider's response. |
| **AuditData/Response/Headers** | Object | A collection of headers included in the provider's response. |
| **AuditData/Response/StatusCode** | Integer | The HTTP status code returned by the provider. |
| **AdviseMessages** | Array&lt;[AdviseMessage](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/advisemessage)&gt; | Collection of advice messages, including errors or warnings encountered during the Quote process. |
| **AdviseMessages/Code** | [AdviseMessageCode](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/advisemessagecode) | Gets the code that represents the message type. |
| **AdviseMessages/Level** | [AdviseMessageLevel](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/advisemessagelevel) | Gets the severity level of the message (e.g., Error, Warning, or Info). |
| **AdviseMessages/Description** | String | Gets the message description providing additional context. |
| **AdviseMessages/CorrelationId** | String | Gets a unique identifier for correlating the message with specific operations. |
| **AdviseMessages/External** | [External](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/external) | Gets additional external details associated with the message. |
| **AdviseMessages/External/Code** | String | The supplier's internal code for identifying the nature of the response or error. |
| **AdviseMessages/External/**<br />**Message** | String | A descriptive message returned by the supplier. |
| **AdviseMessages/External/**<br />**HttpStatusCode** | Integer | The HTTP status code of the supplier's response. |
| **Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | Contains the price details for the quoted option. |
| **Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **Status** | [Status](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/status) | Indicates the status of the Quote. |
| **PaymentType** | [PaymentType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paymenttype) | Payment types available for the Option. |
| **Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/room)&gt; | List of rooms included in the quoted option. |
| **Rooms/OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **Rooms/Code** | String | Unique code assigned to this room. |
| **Rooms/Description** | String | Description of the room's features or characteristics. |
| **Rooms/RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **Rooms/RoomPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The total price of the room. |
| **Rooms/RoomPrice/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Rooms/RoomPrice/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Rooms/RoomPrice/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Rooms/RoomPrice/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Rooms/RoomPrice/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Rooms/RoomPrice/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Rooms/RoomPrice/PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **Rooms/RoomPrice/PriceBreakdown/**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The price for each day of the room during the specified period. |
| **Rooms/RoomPrice/PriceBreakdown/**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Rooms/RoomPrice/PriceBreakdown/**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Rooms/RoomPrice/PriceBreakdown/**<br />**Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Rooms/RoomPrice/PriceBreakdown/**<br />**Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Rooms/RoomPrice/PriceBreakdown/**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Rooms/RoomPrice/PriceBreakdown/**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **Rooms/RoomPrice/PriceBreakdown/**<br />**Start** | Integer | The starting day of the pricing period (inclusive). |
| **Rooms/RoomPrice/PriceBreakdown/**<br />**End** | Integer | The ending day of the pricing period (inclusive). |
| **Rooms/Refundable** | Boolean | Indicates if the room is refundable based on the cancellation policy. |
| **Rooms/RefundableSpecified** | Boolean | Indicates whether the refundable status has been explicitly specified. |
| **Rooms/LegacyRoomId** | String | Legacy identifier for internal tracking. Automatically generated using OccupancyRefId and Code. |
| **Rooms/Units** | Integer | Number of units available for this room type. |
| **Rooms/RatePlan** | [RatePlan](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/rateplan) | Rate plan associated with this room. |
| **Rooms/RatePlan/Code** | String | The unique code for the rate plan. |
| **Rooms/RatePlan/Name** | String | The name of the rate plan. |
| **Rooms/Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/promotion)&gt; | Promotions or discounts applicable to this room. |
| **Rooms/Promotions/Code** | String | The unique code identifying the promotion. |
| **Rooms/Promotions/Name** | String | The name of the promotion. |
| **Rooms/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remark)&gt; | Additional remarks or notes about this room. |
| **Rooms/Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **Rooms/Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Rooms/Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/surcharge)&gt; | Additional surcharges applied to this room. |
| **Rooms/Surcharges/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Rooms/Surcharges/Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Rooms/Surcharges/Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Rooms/Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Rooms/Surcharges/Price/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Rooms/Surcharges/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Rooms/Surcharges/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Rooms/Surcharges/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Rooms/Surcharges/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Rooms/Surcharges/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Rooms/Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Rooms/CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpolicy) | Cancellation policy specific to this room. |
| **Rooms/CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties/HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties/Value** | Double | Indicates the value of the penalty. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties/Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Rooms/CancelPolicy/**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Rooms/Beds** | Array&lt;[Bed](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bed)&gt; | List of beds available in the room, including types and configurations. |
| **Rooms/Beds/Type** | String | The type of the bed. |
| **Rooms/Beds/Description** | String | A description of the bed. |
| **Rooms/Beds/Count** | Integer | The number of beds of this type in the room. |
| **Rooms/Beds/Shared** | Boolean | Indicates whether the bed is shared. |
| **Rooms/Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amenity)&gt; | Amenities included with this room, such as Wi-Fi or parking. |
| **Rooms/Amenities/Code** | String | A unique code that identifies the amenity. |
| **Rooms/Amenities/Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Rooms/Amenities/Value** | String | The value associated with the amenity. |
| **Rooms/Amenities/Texts** | String | Additional textual information or description for the amenity. |
| **Rooms/UnitsSpecified** | Boolean | Indicates whether the number of units has been explicitly specified. |
| **Rooms/Features** | Array&lt;[Feature](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/feature)&gt; | Features or custom attributes of the room, used for specific integrations. |
| **Rooms/Features/Code** | String | The unique code identifying the feature of the room. |
| **CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpolicy) | Cancellation policy applicable to the quoted option. |
| **CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **CancelPolicy/CancelPenalties/**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **CancelPolicy/CancelPenalties/**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **CancelPolicy/CancelPenalties/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **CancelPolicy/CancelPenalties/**<br />**Value** | Double | Indicates the value of the penalty. |
| **CancelPolicy/CancelPenalties/**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **CancelPolicy/**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/surcharge)&gt; | Collection of surcharges applied to the quoted option. |
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
| **Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remark)&gt; | Additional remarks associated with the Quote. |
| **Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **PaymentInfo** | [PaymentInfo](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paymentinfo) | Payment information for the quoted option, such as accepted credit card types. |
| **PaymentInfo/**<br />**AcceptedCreditCards** | Array&lt;[CreditCardType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/creditcardtype)&gt; | A collection of accepted credit card types.This is required when the payment type requires a credit card. |
| **Parameters** | Array&lt;[Parameter](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/parameter)&gt; | Parameters associated with the quoted option for transferring data between operations. |
| **Parameters/Key** | Integer | Identifies the parameter with a numeric key. |
| **Parameters/Value** | String | Defines the value associated with the parameter. |
| **Parameters/ParameterType** | [ParameterType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/parametertype) | Specifies the type of the parameter (ParameterType), whether it is internal or supplier-related. |
| **Parameters/Immutable** | Boolean | Indicates whether the parameter remains constant throughout operations (e.g., from Search to Quote and Book). In second searches or quotes, an immutable parameter is used to identify and match the same option. |
| **Parameters/RoomId** | Integer | Associates the parameter with a specific room, identified by its ID. |
| **AddOns** | Object | Additional information provided by the supplier for the quoted option. |
