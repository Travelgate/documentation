# CheckBookingsRs

Represents the response for checking hotel bookings.
This response includes detailed booking information, advice messages, and any additional metadata provided by the supplier.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **AuditData** | [ProviderAudit](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/provideraudit) | Provides detailed audit data for the supplier transactions, including request and response logs. |
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
| **AdviseMessages** | Array&lt;[AdviseMessage](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessage)&gt; | A collection of advice messages generated during the booking check operation. |
| **AdviseMessages/Code** | [AdviseMessageCode](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessagecode) | Gets the code that represents the message type. |
| **AdviseMessages/Level** | [AdviseMessageLevel](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessagelevel) | Gets the severity level of the message (e.g., Error, Warning, or Info). |
| **AdviseMessages/Description** | String | Gets the message description providing additional context. |
| **AdviseMessages/CorrelationId** | String | Gets a unique identifier for correlating the message with specific operations. |
| **AdviseMessages/External** | [External](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/external) | Gets additional external details associated with the message. |
| **AdviseMessages/External/Code** | String | The supplier's internal code for identifying the nature of the response or error. |
| **AdviseMessages/External**<br />**Message** | String | A descriptive message returned by the supplier. |
| **AdviseMessages/External**<br />**HttpStatusCode** | Integer | The HTTP status code of the supplier's response. |
| **Bookings** | Array&lt;[BookDetails](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookdetails)&gt; | A list of detailed booking information retrieved during the operation. |
| **Bookings/Status** | [BookStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookstatus) | The current status of the booking. |
| **Bookings/Reference** | [Reference](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/reference) | A collection of locators that identify the booking. |
| **Bookings/Reference**<br />**ClientLocator** | String | The booking locator provided by the client.This is typically used to match the booking in the client's internal systems. |
| **Bookings/Reference**<br />**SupplierLocator** | String | The booking locator provided by the supplier.This identifier is used to reference the booking in the supplier's system. |
| **Bookings/Reference**<br />**HotelLocator** | String | The booking locator specific to the hotel, provided by the supplier. (Optional)This may be required in cases where the hotel system uses its own unique identifiers. |
| **Bookings/Holder** | [Holder](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/holder) | The personal details of the booking holder. |
| **Bookings/Holder/Name** | String | The name of the holder. |
| **Bookings/Holder/SurName** | String | The surname of the holder. |
| **Bookings/Holder**<br />**PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the holder. |
| **Bookings/Holder/ContactInfo** | [ContactInfo](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/contactinfo) | The contact information of the holder. |
| **Bookings/Holder/ContactInfo**<br />**Email** | String | The email address of the passenger. |
| **Bookings/Holder/ContactInfo**<br />**Phone** | String | The phone number of the passenger. |
| **Bookings/Hotel** | [HotelDetail](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/hoteldetail) | The hotel details associated with the booking. |
| **Bookings/Hotel/BookingDate** | String | The date when the booking was created. |
| **Bookings/Hotel/CheckIn** | String | The check-in date for the booking. |
| **Bookings/Hotel/CheckOut** | String | The check-out date for the booking. |
| **Bookings/Hotel**<br />**CheckInAsDateTime** | String | The check-in date as a DateTime object. |
| **Bookings/Hotel**<br />**CheckOutAsDateTime** | String | The check-out date as a DateTime object. |
| **Bookings/Hotel/HotelCode** | String | The unique code identifying the hotel. |
| **Bookings/Hotel/HotelName** | String | The name of the hotel associated with the booking. |
| **Bookings/Hotel/BoardCode** | String | The board code for the booking. |
| **Bookings/Hotel/Occupancies** | Array&lt;[BookOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookoccupancy)&gt; | The collection of occupancies associated with the booking. |
| **Bookings/Hotel/Occupancies**<br />**OccupancyId** | Integer | The unique identifier for the occupancy. |
| **Bookings/Hotel/Occupancies**<br />**Paxes** | Array&lt;[BookPaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookpaxinput)&gt; | The collection of passenger inputs (paxes) for the occupancy. |
| **Bookings/Hotel/Occupancies**<br />**Paxes/Age** | Integer | The age of the passenger. |
| **Bookings/Hotel/Occupancies**<br />**Paxes/Name** | String | The first name of the passenger. |
| **Bookings/Hotel/Occupancies**<br />**Paxes/SurName** | String | The surname (last name) of the passenger. |
| **Bookings/Hotel/Occupancies**<br />**Paxes/PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the passenger. |
| **Bookings/Hotel/Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/room)&gt; | The collection of rooms included in the booking. |
| **Bookings/Hotel/Rooms**<br />**OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **Bookings/Hotel/Rooms/Code** | String | Unique code assigned to this room. |
| **Bookings/Hotel/Rooms**<br />**Description** | String | Description of the room's features or characteristics. |
| **Bookings/Hotel/Rooms/RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the room. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price for each day of the room during the specified period. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/Start** | Integer | The starting day of the pricing period (inclusive). |
| **Bookings/Hotel/Rooms/RoomPrice**<br />**PriceBreakdown/End** | Integer | The ending day of the pricing period (inclusive). |
| **Bookings/Hotel/Rooms**<br />**Refundable** | Boolean | Indicates if the room is refundable based on the cancellation policy. |
| **Bookings/Hotel/Rooms**<br />**RefundableSpecified** | Boolean | Indicates whether the refundable status has been explicitly specified. |
| **Bookings/Hotel/Rooms**<br />**LegacyRoomId** | String | Legacy identifier for internal tracking. Automatically generated using OccupancyRefId and Code. |
| **Bookings/Hotel/Rooms/Units** | Integer | Number of units available for this room type. |
| **Bookings/Hotel/Rooms/RatePlan** | [RatePlan](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/rateplan) | Rate plan associated with this room. |
| **Bookings/Hotel/Rooms/RatePlan**<br />**Code** | String | The unique code for the rate plan. |
| **Bookings/Hotel/Rooms/RatePlan**<br />**Name** | String | The name of the rate plan. |
| **Bookings/Hotel/Rooms**<br />**Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/promotion)&gt; | Promotions or discounts applicable to this room. |
| **Bookings/Hotel/Rooms**<br />**Promotions/Code** | String | The unique code identifying the promotion. |
| **Bookings/Hotel/Rooms**<br />**Promotions/Name** | String | The name of the promotion. |
| **Bookings/Hotel/Rooms/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks or notes about this room. |
| **Bookings/Hotel/Rooms/Remarks**<br />**RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType.This specifies the nature or purpose of the remark: Related to the hotel as a whole. Specific to the room being booked. Related to services provided by the accommodation. General remarks not tied to a specific entity. |
| **Bookings/Hotel/Rooms/Remarks**<br />**Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Bookings/Hotel/Rooms**<br />**Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/surcharge)&gt; | Additional surcharges applied to this room. |
| **Bookings/Hotel/Rooms**<br />**Surcharges/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Bookings/Hotel/Rooms**<br />**Surcharges/Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Bookings/Hotel/Rooms**<br />**Surcharges/Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Bookings/Hotel/Rooms**<br />**Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Bookings/Hotel/Rooms**<br />**Surcharges/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Bookings/Hotel/Rooms**<br />**Surcharges/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Bookings/Hotel/Rooms**<br />**Surcharges/Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Bookings/Hotel/Rooms**<br />**Surcharges/Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Bookings/Hotel/Rooms**<br />**Surcharges/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Bookings/Hotel/Rooms**<br />**Surcharges/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Bookings/Hotel/Rooms**<br />**Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Bookings/Hotel/Rooms**<br />**CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpolicy) | Cancellation policy specific to this room. |
| **Bookings/Hotel/Rooms**<br />**CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Bookings/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Bookings/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Bookings/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Bookings/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Bookings/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**Value** | Double | Indicates the value of the penalty. |
| **Bookings/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Bookings/Hotel/Rooms**<br />**CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Bookings/Hotel/Rooms/Beds** | Array&lt;[Bed](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bed)&gt; | List of beds available in the room, including types and configurations. |
| **Bookings/Hotel/Rooms/Beds/Type** | String | The type of the bed. |
| **Bookings/Hotel/Rooms/Beds**<br />**Description** | String | A description of the bed. |
| **Bookings/Hotel/Rooms/Beds**<br />**Count** | Integer | The number of beds of this type in the room. |
| **Bookings/Hotel/Rooms/Beds**<br />**Shared** | Boolean | Indicates whether the bed is shared. |
| **Bookings/Hotel/Rooms/Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenity)&gt; | Amenities included with this room, such as Wi-Fi or parking. |
| **Bookings/Hotel/Rooms/Amenities**<br />**Code** | String | A unique code that identifies the amenity. |
| **Bookings/Hotel/Rooms/Amenities**<br />**Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **Bookings/Hotel/Rooms/Amenities**<br />**Value** | String | The value associated with the amenity. |
| **Bookings/Hotel/Rooms/Amenities**<br />**Texts** | String | Additional textual information or description for the amenity. |
| **Bookings/Hotel/Rooms**<br />**UnitsSpecified** | Boolean | Indicates whether the number of units has been explicitly specified. |
| **Bookings/Hotel/Rooms/Features** | Array&lt;[Feature](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/feature)&gt; | Features or custom attributes of the room, used for specific integrations. |
| **Bookings/Hotel/Rooms/Features**<br />**Code** | String | The unique code identifying the feature of the room. |
| **Bookings/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the booking. |
| **Bookings/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Bookings/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Bookings/Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Bookings/Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Bookings/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Bookings/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Bookings/CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpolicy) | The cancellation policy associated with the booking. |
| **Bookings/CancelPolicy**<br />**Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Bookings/CancelPolicy**<br />**CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Bookings/CancelPolicy**<br />**CancelPenalties/HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Bookings/CancelPolicy**<br />**CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Bookings/CancelPolicy**<br />**CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Bookings/CancelPolicy**<br />**CancelPenalties/Value** | Double | Indicates the value of the penalty. |
| **Bookings/CancelPolicy**<br />**CancelPenalties/Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Bookings/CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Bookings/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks or notes related to the booking. |
| **Bookings/Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType.This specifies the nature or purpose of the remark: Related to the hotel as a whole. Specific to the room being booked. Related to services provided by the accommodation. General remarks not tied to a specific entity. |
| **Bookings/Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **Bookings/BillingSupplierCode** | String | The code of the agency responsible for the booking. |
| **Bookings/Payable** | String | Information about the entity responsible for payment of the booking. |
| **Bookings/AddOns** | Object | Additional metadata provided by the supplier for internal use. |
| **Parameters** | Array&lt;[Parameter](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parameter)&gt; | A collection of parameters used to transfer data across different operations. |
| **Parameters/Key** | Integer | Identifies the parameter with a numeric key. |
| **Parameters/Value** | String | Defines the value associated with the parameter. |
| **Parameters/ParameterType** | [ParameterType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parametertype) | Specifies the type of the parameter (ParameterType), whether it is internal or supplier-related. |
| **Parameters/Immutable** | Boolean | Indicates whether the parameter remains constant throughout operations (e.g., from Search to Quote and Book). In second searches or quotes, an immutable parameter is used to identify and match the same option. |
| **Parameters/RoomId** | Integer | Associates the parameter with a specific room, identified by its ID. |
| **AddOns** | Object | Additional metadata provided by the supplier for internal use. |
