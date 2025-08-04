# BookCriteria

Represents the criteria for booking a hotel accommodation.
Inherits from Criteria.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **CheckIn** | String | The check-in date for the operation, represented as a string in ISO 8601 format (yyyy-MM-dd). |
| **CheckOut** | String | The check-out date for the operation, represented as a string in ISO 8601 format (yyyy-MM-dd). |
| **CheckInAsDateTime** | String | The check-in date parsed as a DateTime object. |
| **CheckOutAsDateTime** | String | The check-out date parsed as a DateTime object. |
| **TotalNights** | Integer | The total number of nights for the stay, calculated as the difference between check-in and check-out dates. |
| **Language** | String | The language code for the operation, represented as a 2-character ISO 639-1 code (e.g., "en", "es"). |
| **Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The preferred currency for the operation, defined as an optional Currency value. |
| **Nationality** | String | The nationality code of the client, represented as a 2-character ISO 3166-1 alpha-2 country code (e.g., "US", "FR"). |
| **Accommodation** | [AccommodationRQ](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accommodationrq) | Accommodation details for the Quote request, such as the hotel or rental being evaluated. |
| **Accommodation/Type** | [AccommodationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accommodationtype) | Specifies the type of accommodation being requested, such as Hotel or Rental. |
| **Accommodation/Code** | String | Represents a unique code identifying the accommodation in the request. |
| **BoardCode** | String | Gets the board code for the booking. |
| **Occupancies** | Array&lt;[BookOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookoccupancy)&gt; | Gets the occupancies for the booking. |
| **Occupancies/OccupancyId** | Integer | The unique identifier for the occupancy. |
| **Occupancies/Paxes** | Array&lt;[BookPaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookpaxinput)&gt; | The collection of passenger inputs (paxes) for the occupancy. |
| **Occupancies/Paxes/Age** | Integer | The age of the passenger. |
| **Occupancies/Paxes/Name** | String | The first name of the passenger. |
| **Occupancies/Paxes/SurName** | String | The surname (last name) of the passenger. |
| **Occupancies/Paxes/**<br />**PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the passenger. |
| **Market** | String | Gets or sets the market for the booking. |
| **Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/room)&gt; | Gets the rooms for the booking. |
| **Rooms/OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **Rooms/Code** | String | Unique code assigned to this room. |
| **Rooms/Description** | String | Description of the room's features or characteristics. |
| **Rooms/RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **Rooms/RoomPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the room. |
| **Rooms/RoomPrice/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Rooms/RoomPrice/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Rooms/RoomPrice/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Rooms/RoomPrice/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Rooms/RoomPrice/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Rooms/RoomPrice/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Rooms/RoomPrice/PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **Rooms/RoomPrice/PriceBreakdown/**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price for each day of the room during the specified period. |
| **Rooms/RoomPrice/PriceBreakdown/**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
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
| **Rooms/Surcharges/Price/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Rooms/Surcharges/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Rooms/Surcharges/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Rooms/Surcharges/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Rooms/Surcharges/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Rooms/Surcharges/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **Rooms/Surcharges/Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **Rooms/CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpolicy) | Cancellation policy specific to this room. |
| **Rooms/CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties/HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties/PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties/Value** | Double | Indicates the value of the penalty. |
| **Rooms/CancelPolicy/**<br />**CancelPenalties/Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **Rooms/CancelPolicy/**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
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
| **PaymentType** | [PaymentType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/paymenttype) | Gets the payment type for the booking. |
| **Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remark)&gt; | Gets the remarks for the booking. |
| **Remarks/RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **ClientReference** | String | Gets the client reference for the booking. |
| **BookPrice** | [BookPrice](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/bookprice) | Gets the book price for the booking. |
| **BookPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price of the booking. |
| **BookPrice/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **BookPrice/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **BookPrice/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **BookPrice/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **BookPrice/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **BookPrice/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **BookPrice/DeltaPrice** | [DeltaPrice](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/deltaprice) | The delta price, representing any allowable price changes or adjustments. |
| **BookPrice/DeltaPrice/Amount** | Double | The fixed amount allowed for the delta price. |
| **BookPrice/DeltaPrice/**<br />**Percentage** | Double | The percentage allowed for the delta price. |
| **Holder** | [Holder](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/holder) | Gets or sets the holder information for the booking. |
| **Holder/Name** | String | The name of the holder. |
| **Holder/SurName** | String | The surname of the holder. |
| **Holder/PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the holder. |
| **Holder/ContactInfo** | [ContactInfo](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/contactinfo) | The contact information of the holder. |
| **Holder/ContactInfo/Email** | String | The email address of the passenger. |
| **Holder/ContactInfo/Phone** | String | The phone number of the passenger. |
| **PaymentCardInput** | [CreditCardInput](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/creditcardinput) | Gets the payment card input for the booking. |
| **PaymentCardInput/Type** | [CreditCardType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/creditcardtype) | The type of the credit card. |
| **PaymentCardInput/Number** | String | The credit card number. |
| **PaymentCardInput/Cvc** | String | The Card Verification Code (CVC) of the credit card. |
| **PaymentCardInput/Expiration** | [CreditCardExpiration](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/creditcardexpiration) | The expiration date of the credit card. |
| **PaymentCardInput/Expiration/**<br />**Month** | Integer | The expiration month of the credit card. |
| **PaymentCardInput/Expiration/**<br />**Year** | Integer | The expiration year of the credit card (last two digits). |
| **PaymentCardInput/Expiration/**<br />**YearFull** | Integer | Gets the full four-digit year of the credit card expiration. |
| **PaymentCardInput/IsVcc** | Boolean | Indicates whether the credit card is a Virtual Credit Card (VCC). |
| **PaymentCardInput/Holder** | [Holder](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/holder) | The holder information of the credit card. |
| **PaymentCardInput/Holder/Name** | String | The name of the holder. |
| **PaymentCardInput/Holder/**<br />**SurName** | String | The surname of the holder. |
| **PaymentCardInput/Holder/**<br />**PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the holder. |
| **PaymentCardInput/Holder/**<br />**ContactInfo** | [ContactInfo](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/contactinfo) | The contact information of the holder. |
| **PaymentCardInput/Holder/**<br />**ContactInfo/Email** | String | The email address of the passenger. |
| **PaymentCardInput/Holder/**<br />**ContactInfo/Phone** | String | The phone number of the passenger. |
| **PaymentCardInput/**<br />**VirtualCreditCard** | [VirtualCreditCard](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/virtualcreditcard) | The virtual credit card information, if applicable. |
| **PaymentCardInput/**<br />**VirtualCreditCard/**<br />**VCCActivationDate** | String | Gets or sets the activation date of the virtual credit card. |
| **PaymentCardInput/**<br />**VirtualCreditCard/**<br />**VCCDeactivationDate** | String | Gets or sets the deactivation date of the virtual credit card. |
| **PaymentCardInput/**<br />**VirtualCreditCard/**<br />**VCCCurrentBalance** | Double | Gets or sets the current balance of the virtual credit card. |
| **PaymentCardInput/**<br />**VirtualCreditCard/**<br />**VCCCurrencyCode** | String | Gets or sets the currency code for the virtual credit card balance. |
| **PaymentCardInput/**<br />**ThreeDomainSecurity** | [ThreeDomainSecurity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/threedomainsecurity) | The 3-D Secure authentication information for the credit card transaction. |
| **PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**ThreeDSVersion** | String | Gets or sets the version of 3-D Secure protocol used. |
| **PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**DSTransactionID** | String | Gets or sets the Directory Server Transaction ID. |
| **PaymentCardInput/**<br />**ThreeDomainSecurity/XID** | String | Gets or sets the transaction identifier for 3-D Secure. |
| **PaymentCardInput/**<br />**ThreeDomainSecurity/ECI** | String | Gets or sets the Electronic Commerce Indicator. |
| **PaymentCardInput/**<br />**ThreeDomainSecurity/CAVV** | String | Gets or sets the Cardholder Authentication Verification Value. |
| **PaymentCardInput/**<br />**ThreeDomainSecurity/PARes** | String | Gets or sets the Payer Authentication Response. |
| **PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**PAResStatus** | [PAResStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/paresstatus) | Gets or sets the status of the Payer Authentication Response. |
| **PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**CardEnrolledStatus** | [EnrolledStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/enrolledstatus) | Gets or sets the enrollment status of the card in 3-D Secure. |
| **PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**MerchantName** | String | Gets or sets the name of the merchant. |
| **PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**SignatureStatus** | [SignatureStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/signaturestatus) | Gets or sets the status of the signature in the 3-D Secure process. |
| **PaymentCardInput/UrlPayment** | [UrlPayment](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/urlpayment) | The URL payment information for the credit card transaction. |
| **PaymentCardInput/UrlPayment/**<br />**Url** | String | Gets or sets the URL for the payment. |
| **Parameters** | Array&lt;[Parameter](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parameter)&gt; | Gets or sets the additional parameters for the booking. |
| **Parameters/Key** | Integer | Identifies the parameter with a numeric key. |
| **Parameters/Value** | String | Defines the value associated with the parameter. |
| **Parameters/ParameterType** | [ParameterType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/parametertype) | Specifies the type of the parameter (ParameterType), whether it is internal or supplier-related. |
| **Parameters/Immutable** | Boolean | Indicates whether the parameter remains constant throughout operations (e.g., from Search to Quote and Book). In second searches or quotes, an immutable parameter is used to identify and match the same option. |
| **Parameters/RoomId** | Integer | Associates the parameter with a specific room, identified by its ID. |
