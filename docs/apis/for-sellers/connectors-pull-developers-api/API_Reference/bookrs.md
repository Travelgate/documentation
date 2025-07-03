# BookRs

Represents the response for a hotel booking operation.

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
| **AdviseMessages** | Array&lt;[AdviseMessage](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessage)&gt; | The collection of advise messages associated with the booking response. |
| **AdviseMessages/Code** | [AdviseMessageCode](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessagecode) | Gets the code that represents the message type. |
| **AdviseMessages/Level** | [AdviseMessageLevel](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/advisemessagelevel) | Gets the severity level of the message (e.g., Error, Warning, or Info). |
| **AdviseMessages/Description** | String | Gets the message description providing additional context. |
| **AdviseMessages/CorrelationId** | String | Gets a unique identifier for correlating the message with specific operations. |
| **AdviseMessages/External** | [External](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/external) | Gets additional external details associated with the message. |
| **AdviseMessages/External/Code** | String | The supplier's internal code for identifying the nature of the response or error. |
| **AdviseMessages/External**<br />**Message** | String | A descriptive message returned by the supplier. |
| **AdviseMessages/External**<br />**HttpStatusCode** | Integer | The HTTP status code of the supplier's response. |
| **BookDetails** | [BookDetails](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookdetails) | The details of the booking. |
| **BookDetails/Status** | [BookStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookstatus) | The current status of the booking. |
| **BookDetails/Reference** | [Reference](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/reference) | A collection of locators that identify the booking. |
| **BookDetails/Reference**<br />**ClientLocator** | String | The booking locator provided by the client.This is typically used to match the booking in the client's internal systems. |
| **BookDetails/Reference**<br />**SupplierLocator** | String | The booking locator provided by the supplier.This identifier is used to reference the booking in the supplier's system. |
| **BookDetails/Reference**<br />**HotelLocator** | String | The booking locator specific to the hotel, provided by the supplier. (Optional)This may be required in cases where the hotel system uses its own unique identifiers. |
| **BookDetails/Holder** | [Holder](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/holder) | The personal details of the booking holder. |
| **BookDetails/Holder/Name** | String | The name of the holder. |
| **BookDetails/Holder/SurName** | String | The surname of the holder. |
| **BookDetails/Holder**<br />**PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the holder. |
| **BookDetails/Holder/ContactInfo** | [ContactInfo](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/contactinfo) | The contact information of the holder. |
| **BookDetails/Holder/ContactInfo**<br />**Email** | String | The email address of the passenger. |
| **BookDetails/Holder/ContactInfo**<br />**Phone** | String | The phone number of the passenger. |
| **BookDetails/Hotel** | [HotelDetail](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/hoteldetail) | The hotel details associated with the booking. |
| **BookDetails/Hotel/BookingDate** | String | The date when the booking was created. |
| **BookDetails/Hotel/CheckIn** | String | The check-in date for the booking. |
| **BookDetails/Hotel/CheckOut** | String | The check-out date for the booking. |
| **BookDetails/Hotel**<br />**CheckInAsDateTime** | String | The check-in date as a DateTime object. |
| **BookDetails/Hotel**<br />**CheckOutAsDateTime** | String | The check-out date as a DateTime object. |
| **BookDetails/Hotel/HotelCode** | String | The unique code identifying the hotel. |
| **BookDetails/Hotel/HotelName** | String | The name of the hotel associated with the booking. |
| **BookDetails/Hotel/BoardCode** | String | The board code for the booking. |
| **BookDetails/Hotel/Occupancies** | Array&lt;[BookOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookoccupancy)&gt; | The collection of occupancies associated with the booking. |
| **BookDetails/Hotel/Occupancies**<br />**OccupancyId** | Integer | The unique identifier for the occupancy. |
| **BookDetails/Hotel/Occupancies**<br />**Paxes** | Array&lt;[BookPaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookpaxinput)&gt; | The collection of passenger inputs (paxes) for the occupancy. |
| **BookDetails/Hotel/Occupancies**<br />**Paxes/Age** | Integer | The age of the passenger. |
| **BookDetails/Hotel/Occupancies**<br />**Paxes/Name** | String | The first name of the passenger. |
| **BookDetails/Hotel/Occupancies**<br />**Paxes/SurName** | String | The surname (last name) of the passenger. |
| **BookDetails/Hotel/Occupancies**<br />**Paxes/PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the passenger. |
| **BookDetails/Hotel/Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/room)&gt; | The collection of rooms included in the booking. |
| **BookDetails/Hotel/Rooms**<br />**OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **BookDetails/Hotel/Rooms/Code** | String | Unique code assigned to this room. |
| **BookDetails/Hotel/Rooms**<br />**Description** | String | Description of the room's features or characteristics. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the room. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/PriceBreakdown/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price for each day of the room during the specified period. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/PriceBreakdown/Price**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/PriceBreakdown/Price**<br />**Binding** | Boolean | Indicates whether the price is binding. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/PriceBreakdown/Price**<br />**Net** | Double | The net price paid by the Buyer to the Seller. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/PriceBreakdown/Price**<br />**Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/PriceBreakdown/Price**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/PriceBreakdown/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/PriceBreakdown/Start** | Integer | The starting day of the pricing period (inclusive). |
| **BookDetails/Hotel/Rooms**<br />**RoomPrice/PriceBreakdown/End** | Integer | The ending day of the pricing period (inclusive). |
| **BookDetails/Hotel/Rooms**<br />**Refundable** | Boolean | Indicates if the room is refundable based on the cancellation policy. |
| **BookDetails/Hotel/Rooms**<br />**RefundableSpecified** | Boolean | Indicates whether the refundable status has been explicitly specified. |
| **BookDetails/Hotel/Rooms**<br />**LegacyRoomId** | String | Legacy identifier for internal tracking. Automatically generated using OccupancyRefId and Code. |
| **BookDetails/Hotel/Rooms/Units** | Integer | Number of units available for this room type. |
| **BookDetails/Hotel/Rooms**<br />**RatePlan** | [RatePlan](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/rateplan) | Rate plan associated with this room. |
| **BookDetails/Hotel/Rooms**<br />**RatePlan/Code** | String | The unique code for the rate plan. |
| **BookDetails/Hotel/Rooms**<br />**RatePlan/Name** | String | The name of the rate plan. |
| **BookDetails/Hotel/Rooms**<br />**Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/promotion)&gt; | Promotions or discounts applicable to this room. |
| **BookDetails/Hotel/Rooms**<br />**Promotions/Code** | String | The unique code identifying the promotion. |
| **BookDetails/Hotel/Rooms**<br />**Promotions/Name** | String | The name of the promotion. |
| **BookDetails/Hotel/Rooms**<br />**Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks or notes about this room. |
| **BookDetails/Hotel/Rooms**<br />**Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType.This specifies the nature or purpose of the remark: Related to the hotel as a whole. Specific to the room being booked. Related to services provided by the accommodation. General remarks not tied to a specific entity. |
| **BookDetails/Hotel/Rooms**<br />**Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **BookDetails/Hotel/Rooms**<br />**Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/surcharge)&gt; | Additional surcharges applied to this room. |
| **BookDetails/Hotel/Rooms**<br />**Surcharges/ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **BookDetails/Hotel/Rooms**<br />**Surcharges/Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **BookDetails/Hotel/Rooms**<br />**Surcharges/Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **BookDetails/Hotel/Rooms**<br />**Surcharges/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **BookDetails/Hotel/Rooms**<br />**Surcharges/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **BookDetails/Hotel/Rooms**<br />**Surcharges/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **BookDetails/Hotel/Rooms**<br />**Surcharges/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **BookDetails/Hotel/Rooms**<br />**Surcharges/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **BookDetails/Hotel/Rooms**<br />**Surcharges/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **BookDetails/Hotel/Rooms**<br />**Surcharges/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **BookDetails/Hotel/Rooms**<br />**Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **BookDetails/Hotel/Rooms**<br />**CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpolicy) | Cancellation policy specific to this room. |
| **BookDetails/Hotel/Rooms**<br />**CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **BookDetails/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **BookDetails/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **BookDetails/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **BookDetails/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **BookDetails/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**Value** | Double | Indicates the value of the penalty. |
| **BookDetails/Hotel/Rooms**<br />**CancelPolicy/CancelPenalties**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **BookDetails/Hotel/Rooms**<br />**CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **BookDetails/Hotel/Rooms/Beds** | Array&lt;[Bed](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bed)&gt; | List of beds available in the room, including types and configurations. |
| **BookDetails/Hotel/Rooms/Beds**<br />**Type** | String | The type of the bed. |
| **BookDetails/Hotel/Rooms/Beds**<br />**Description** | String | A description of the bed. |
| **BookDetails/Hotel/Rooms/Beds**<br />**Count** | Integer | The number of beds of this type in the room. |
| **BookDetails/Hotel/Rooms/Beds**<br />**Shared** | Boolean | Indicates whether the bed is shared. |
| **BookDetails/Hotel/Rooms**<br />**Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenity)&gt; | Amenities included with this room, such as Wi-Fi or parking. |
| **BookDetails/Hotel/Rooms**<br />**Amenities/Code** | String | A unique code that identifies the amenity. |
| **BookDetails/Hotel/Rooms**<br />**Amenities/Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **BookDetails/Hotel/Rooms**<br />**Amenities/Value** | String | The value associated with the amenity. |
| **BookDetails/Hotel/Rooms**<br />**Amenities/Texts** | String | Additional textual information or description for the amenity. |
| **BookDetails/Hotel/Rooms**<br />**UnitsSpecified** | Boolean | Indicates whether the number of units has been explicitly specified. |
| **BookDetails/Hotel/Rooms**<br />**Features** | Array&lt;[Feature](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/feature)&gt; | Features or custom attributes of the room, used for specific integrations. |
| **BookDetails/Hotel/Rooms**<br />**Features/Code** | String | The unique code identifying the feature of the room. |
| **BookDetails/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the booking. |
| **BookDetails/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **BookDetails/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **BookDetails/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **BookDetails/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **BookDetails/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **BookDetails/Price**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **BookDetails/CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpolicy) | The cancellation policy associated with the booking. |
| **BookDetails/CancelPolicy**<br />**Refundable** | Boolean | Indicates whether the booking is refundable. |
| **BookDetails/CancelPolicy**<br />**CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **BookDetails/CancelPolicy**<br />**CancelPenalties/HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **BookDetails/CancelPolicy**<br />**CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **BookDetails/CancelPolicy**<br />**CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **BookDetails/CancelPolicy**<br />**CancelPenalties/Value** | Double | Indicates the value of the penalty. |
| **BookDetails/CancelPolicy**<br />**CancelPenalties/Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **BookDetails/CancelPolicy**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **BookDetails/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Additional remarks or notes related to the booking. |
| **BookDetails/Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType.This specifies the nature or purpose of the remark: Related to the hotel as a whole. Specific to the room being booked. Related to services provided by the accommodation. General remarks not tied to a specific entity. |
| **BookDetails/Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **BookDetails**<br />**BillingSupplierCode** | String | The code of the agency responsible for the booking. |
| **BookDetails/Payable** | String | Information about the entity responsible for payment of the booking. |
| **BookDetails/AddOns** | Object | Additional metadata provided by the supplier for internal use. |
| **AddOns** | Object | A dictionary containing supplier information for the option. |
