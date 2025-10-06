# QuoteRq

Represents a request for a hotel Quote.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **QuoteCriteria** | [QuoteCriteria](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/quotecriteria) | Criteria for the Quote request, such as dates, selected rooms, or other Search-related parameters. |
| **QuoteCriteria/CheckIn** | String | The check-in date for the operation, represented as a string in ISO 8601 format (YYYY-MM-DD). |
| **QuoteCriteria/CheckOut** | String | The check-out date for the operation, represented as a string in ISO 8601 format (YYYY-MM-DD). |
| **QuoteCriteria/**<br />**CheckInAsDateTime** | String | The check-in date parsed as a DateTime object. |
| **QuoteCriteria/**<br />**CheckOutAsDateTime** | String | The check-out date parsed as a DateTime object. |
| **QuoteCriteria/TotalNights** | Integer | The total number of nights for the stay, calculated as the difference between check-in and check-out dates. |
| **QuoteCriteria/Language** | String | The language code for the operation, represented as a 2-character ISO 639-1 code (e.g., "en", "es"). |
| **QuoteCriteria/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The preferred currency for the operation, defined as an optional Currency value. |
| **QuoteCriteria/Nationality** | String | The nationality code of the client, represented as a 2-character ISO 3166-1 alpha-2 country code (e.g., "US", "FR"). |
| **QuoteCriteria/Accommodation** | [AccommodationRQ](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accommodationrq) | Accommodation details for the Quote request, such as the hotel or rental being evaluated. |
| **QuoteCriteria/Accommodation/**<br />**Type** | [AccommodationType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accommodationtype) | Specifies the type of accommodation being requested, such as Hotel or Rental. |
| **QuoteCriteria/Accommodation/**<br />**Code** | String | Represents a unique code identifying the accommodation in the request. |
| **QuoteCriteria/BoardCode** | String | Board code indicating the meal plan for the Quote. |
| **QuoteCriteria/Occupancies** | Array&lt;[Occupancy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/occupancy)&gt; | Details about the occupancy for the Quote request, including rooms, passengers, and their ages. |
| **QuoteCriteria/Occupancies/**<br />**OccupancyId** | Integer | The unique identifier for the occupancy. |
| **QuoteCriteria/Occupancies/**<br />**Paxes** | Array&lt;[PaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paxinput)&gt; | The collection of passenger inputs (paxes) for the occupancy. |
| **QuoteCriteria/Occupancies/**<br />**Paxes/Age** | Integer | Age of the passenger. This value is required and plays a critical role in determining eligibility for child or adult pricing as defined by the supplier. |
| **QuoteCriteria/Market** | String | The market code associated with the Quote request. |
| **QuoteCriteria/Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/room)&gt; | List of selected rooms for the Quote request. |
| **QuoteCriteria/Rooms/**<br />**OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **QuoteCriteria/Rooms/Code** | String | Unique code assigned to this room. |
| **QuoteCriteria/Rooms/**<br />**Description** | String | Description of the room's features or characteristics. |
| **QuoteCriteria/Rooms/RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The total price of the room. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The price for each day of the room during the specified period. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Start** | Integer | The starting day of the pricing period (inclusive). |
| **QuoteCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/End** | Integer | The ending day of the pricing period (inclusive). |
| **QuoteCriteria/Rooms/Refundable** | Boolean | Indicates if the room is refundable based on the cancellation policy. |
| **QuoteCriteria/Rooms/**<br />**RefundableSpecified** | Boolean | Indicates whether the refundable status has been explicitly specified. |
| **QuoteCriteria/Rooms/**<br />**LegacyRoomId** | String | Legacy identifier for internal tracking. Automatically generated using OccupancyRefId and Code. |
| **QuoteCriteria/Rooms/Units** | Integer | Number of units available for this room type. |
| **QuoteCriteria/Rooms/RatePlan** | [RatePlan](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/rateplan) | Rate plan associated with this room. |
| **QuoteCriteria/Rooms/RatePlan/**<br />**Code** | String | The unique code for the rate plan. |
| **QuoteCriteria/Rooms/RatePlan/**<br />**Name** | String | The name of the rate plan. |
| **QuoteCriteria/Rooms/Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/promotion)&gt; | Promotions or discounts applicable to this room. |
| **QuoteCriteria/Rooms/Promotions/**<br />**Code** | String | The unique code identifying the promotion. |
| **QuoteCriteria/Rooms/Promotions/**<br />**Name** | String | The name of the promotion. |
| **QuoteCriteria/Rooms/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remark)&gt; | Additional remarks or notes about this room. |
| **QuoteCriteria/Rooms/Remarks/**<br />**RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **QuoteCriteria/Rooms/Remarks/**<br />**Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **QuoteCriteria/Rooms/Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/surcharge)&gt; | Additional surcharges applied to this room. |
| **QuoteCriteria/Rooms/Surcharges/**<br />**ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **QuoteCriteria/Rooms/Surcharges/**<br />**Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **QuoteCriteria/Rooms/Surcharges/**<br />**Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **QuoteCriteria/Rooms/Surcharges/**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **QuoteCriteria/Rooms/Surcharges/**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **QuoteCriteria/Rooms/Surcharges/**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **QuoteCriteria/Rooms/Surcharges/**<br />**Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **QuoteCriteria/Rooms/Surcharges/**<br />**Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **QuoteCriteria/Rooms/Surcharges/**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **QuoteCriteria/Rooms/Surcharges/**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **QuoteCriteria/Rooms/Surcharges/**<br />**Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **QuoteCriteria/Rooms/**<br />**CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpolicy) | Cancellation policy specific to this room. |
| **QuoteCriteria/Rooms/**<br />**CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **QuoteCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **QuoteCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties/**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **QuoteCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties/**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **QuoteCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **QuoteCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties/**<br />**Value** | Double | Indicates the value of the penalty. |
| **QuoteCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties/**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **QuoteCriteria/Rooms/**<br />**CancelPolicy/**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **QuoteCriteria/Rooms/Beds** | Array&lt;[Bed](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bed)&gt; | List of beds available in the room, including types and configurations. |
| **QuoteCriteria/Rooms/Beds/Type** | String | The type of the bed. |
| **QuoteCriteria/Rooms/Beds/**<br />**Description** | String | A description of the bed. |
| **QuoteCriteria/Rooms/Beds/Count** | Integer | The number of beds of this type in the room. |
| **QuoteCriteria/Rooms/Beds/**<br />**Shared** | Boolean | Indicates whether the bed is shared. |
| **QuoteCriteria/Rooms/Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amenity)&gt; | Amenities included with this room, such as Wi-Fi or parking. |
| **QuoteCriteria/Rooms/Amenities/**<br />**Code** | String | A unique code that identifies the amenity. |
| **QuoteCriteria/Rooms/Amenities/**<br />**Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **QuoteCriteria/Rooms/Amenities/**<br />**Value** | String | The value associated with the amenity. |
| **QuoteCriteria/Rooms/Amenities/**<br />**Texts** | String | Additional textual information or description for the amenity. |
| **QuoteCriteria/Rooms/**<br />**UnitsSpecified** | Boolean | Indicates whether the number of units has been explicitly specified. |
| **QuoteCriteria/Rooms/Features** | Array&lt;[Feature](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/feature)&gt; | Features or custom attributes of the room, used for specific integrations. |
| **QuoteCriteria/Rooms/Features/**<br />**Code** | String | The unique code identifying the feature of the room. |
| **QuoteCriteria/PaymentType** | [PaymentType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paymenttype) | Payment type selected for the Quote request. |
| **QuoteCriteria/Parameters** | Array&lt;[Parameter](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/parameter)&gt; | Additional parameters required for the Quote. |
| **QuoteCriteria/Parameters/Key** | Integer | Identifies the parameter with a numeric key. |
| **QuoteCriteria/Parameters/Value** | String | Defines the value associated with the parameter. |
| **QuoteCriteria/Parameters/**<br />**ParameterType** | [ParameterType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/parametertype) | Specifies the type of the parameter (ParameterType), whether it is internal or supplier-related. |
| **QuoteCriteria/Parameters/**<br />**Immutable** | Boolean | Indicates whether the parameter remains constant throughout operations (e.g., from Search to Quote and Book). In second searches or quotes, an immutable parameter is used to identify and match the same option. |
| **QuoteCriteria/Parameters/**<br />**RoomId** | Integer | Associates the parameter with a specific room, identified by its ID. |
| **QuoteCriteria/FromBookCriteria** | [FromBookCriteria](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/frombookcriteria) | Criteria used for creating a Quote from a book request. |
| **QuoteCriteria/FromBookCriteria/**<br />**BookPrice** | [BookPrice](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bookprice) | Contains the price details associated with the booking. |
| **QuoteCriteria/FromBookCriteria/**<br />**BookPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The price of the booking. |
| **QuoteCriteria/FromBookCriteria/**<br />**BookPrice/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **QuoteCriteria/FromBookCriteria/**<br />**BookPrice/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **QuoteCriteria/FromBookCriteria/**<br />**BookPrice/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **QuoteCriteria/FromBookCriteria/**<br />**BookPrice/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **QuoteCriteria/FromBookCriteria/**<br />**BookPrice/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **QuoteCriteria/FromBookCriteria/**<br />**BookPrice/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **QuoteCriteria/FromBookCriteria/**<br />**BookPrice/DeltaPrice** | [DeltaPrice](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/deltaprice) | The delta price, representing any allowable price changes or adjustments. |
| **QuoteCriteria/FromBookCriteria/**<br />**BookPrice/DeltaPrice/Amount** | Double | The fixed amount allowed for the delta price. |
| **QuoteCriteria/FromBookCriteria/**<br />**BookPrice/DeltaPrice/**<br />**Percentage** | Double | The percentage allowed for the delta price. |
| **QuoteCriteria/FromBookCriteria/**<br />**DateQuote** | String | Represents the date when the Quote is generated during the booking process. |
| **QuoteCriteria/FromBookCriteria/**<br />**CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpolicy) | Specifies the cancellation policy associated with the booking. |
| **QuoteCriteria/FromBookCriteria/**<br />**CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **QuoteCriteria/FromBookCriteria/**<br />**CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **QuoteCriteria/FromBookCriteria/**<br />**CancelPolicy/CancelPenalties/**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **QuoteCriteria/FromBookCriteria/**<br />**CancelPolicy/CancelPenalties/**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **QuoteCriteria/FromBookCriteria/**<br />**CancelPolicy/CancelPenalties/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **QuoteCriteria/FromBookCriteria/**<br />**CancelPolicy/CancelPenalties/**<br />**Value** | Double | Indicates the value of the penalty. |
| **QuoteCriteria/FromBookCriteria/**<br />**CancelPolicy/CancelPenalties/**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **QuoteCriteria/FromBookCriteria/**<br />**CancelPolicy/**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **Settings** | [Settings](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/settings) | Access settings for connecting with the provider during the Quote request. |
| **Settings/Supplier** | String | Identifies the supplier associated with the hotel operation. This is a unique code generated by Travelgate within its system to represent the supplier. |
| **Settings/Platform** | String | Represents the platform on which the hotel operation is performed.Platforms are collections of suppliers, and the platform code is generated by Travelgate to define the operational context. |
| **Settings/Client** | String | Represents the client performing the hotel operation.This is a unique client code assigned by Travelgate to identify the client within its system. |
| **Settings/Access** | [Access](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/access) | Contains access information required for the operation, including API credentials, endpoints, and other connection details specific to the supplier's integration. |
| **Settings/Access/Code** | Integer | The unique code identifying the access configuration. |
| **Settings/Access/User** | String | The username used for authentication with the supplier. |
| **Settings/Access/Password** | String | The password used for authentication with the supplier. |
| **Settings/Access/ApiKey** | String | The API key used for authentication or authorization. |
| **Settings/Access/Urls** | [Urls](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/urls) | The URLs associated with the access configuration. |
| **Settings/Access/Urls/Book** | String | The URL used for booking operations. |
| **Settings/Access/Urls/Search** | String | The URL used for Search operations. |
| **Settings/Access/Urls/Quote** | String | The URL used for Quote operations. |
| **Settings/Access/Urls/Generic** | String | A generic URL for additional operations. |
| **Settings/Access/Parameters** | [AccessParameters](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accessparameters) | Additional parameters related to the connection. |
| **Settings/BusinessRules** | [BusinessRules](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/businessrules) | Specifies the business rules to be applied during the operation. These rules define operational constraints and behavior, such as quota limits or prioritization criteria. |
| **Settings/BusinessRules/**<br />**OptionsQuota** | Integer | The maximum number of options returned for each board in the Search query. |
| **Settings/BusinessRules/**<br />**BusinessRuleType** | [BusinessRulesType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/businessrulestype) | The business rule type that determines how Search results are prioritized or filtered. |
| **Settings/Timeout** | String | Defines the timeout period for the operation as a string value.This indicates the maximum amount of time to wait for a supplier's response before timing out.The value must be provided in timestamp format (e.g., "00:05:00" for 5 minutes). |
| **Settings/TimeoutAsTimeSpan** | String | Converts the timeout value from the string representation (Timeout) into a TimeSpan for use in time-based operations. |
| **Settings/**<br />**IncludeProviderTransactions** | Boolean | Indicates whether detailed traces of provider transactions should be included in the operation's response.If enabled, the ProviderAudit field in responses will contain the transaction logs (e.g., requests and responses exchanged with the supplier). |
