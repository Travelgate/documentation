# BookRq

Represents a hotel booking request.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **BookCriteria** | [BookCriteria](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bookcriteria) | The booking criteria for the hotel reservation. |
| **BookCriteria/CheckIn** | String | The check-in date for the operation, represented as a string in ISO 8601 format (YYYY-MM-DD). |
| **BookCriteria/CheckOut** | String | The check-out date for the operation, represented as a string in ISO 8601 format (YYYY-MM-DD). |
| **BookCriteria/CheckInAsDateTime** | String | The check-in date parsed as a DateTime object. |
| **BookCriteria/**<br />**CheckOutAsDateTime** | String | The check-out date parsed as a DateTime object. |
| **BookCriteria/TotalNights** | Integer | The total number of nights for the stay, calculated as the difference between check-in and check-out dates. |
| **BookCriteria/Language** | String | The language code for the operation, represented as a 2-character ISO 639-1 code (e.g., "en", "es"). |
| **BookCriteria/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The preferred currency for the operation, defined as an optional Currency value. |
| **BookCriteria/Nationality** | String | The nationality code of the client, represented as a 2-character ISO 3166-1 alpha-2 country code (e.g., "US", "FR"). |
| **BookCriteria/Accommodation** | [AccommodationRQ](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accommodationrq) | Accommodation details for the Quote request, such as the hotel or rental being evaluated. |
| **BookCriteria/Accommodation/**<br />**Type** | [AccommodationType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accommodationtype) | Specifies the type of accommodation being requested, such as Hotel or Rental. |
| **BookCriteria/Accommodation/**<br />**Code** | String | Represents a unique code identifying the accommodation in the request. |
| **BookCriteria/BoardCode** | String | Gets the board code for the booking. |
| **BookCriteria/Occupancies** | Array&lt;[BookOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bookoccupancy)&gt; | Gets the occupancies for the booking. |
| **BookCriteria/Occupancies/**<br />**OccupancyId** | Integer | The unique identifier for the occupancy. |
| **BookCriteria/Occupancies/Paxes** | Array&lt;[BookPaxInput](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bookpaxinput)&gt; | The collection of passenger inputs (paxes) for the occupancy. |
| **BookCriteria/Occupancies/Paxes/**<br />**Age** | Integer | The age of the passenger. |
| **BookCriteria/Occupancies/Paxes/**<br />**Name** | String | The first name of the passenger. |
| **BookCriteria/Occupancies/Paxes/**<br />**SurName** | String | The surname (last name) of the passenger. |
| **BookCriteria/Occupancies/Paxes/**<br />**PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/personaltitletype) | The personal title type of the passenger. |
| **BookCriteria/Occupancies/Paxes/**<br />**IdentificationDocuments** | Array&lt;[IdentificationDocument](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/identification-document)&gt; | The collection of passenger identification documents. |
| **BookCriteria/Occupancies/Paxes/**<br />**IdentificationDocuments/Type** |   [DocumentType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/document-type) | Document type represented as an enum. <details><summary>Document Type Options</summary><div><div><table><thead><tr><th><strong>Document Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>NONE</td><td>No identification document type has been specified. This value can be used when no document is required.</td></tr><tr><td>DNI</td><td>National Identity Card (DNI). Used in Spain and some Latin American countries as the main national identification document issued to citizens.</td></tr><tr><td>NIE</td><td>Foreigner Identity Card (NIE). Used in Spain for non-citizens or foreign residents who have legal status in the country.</td></tr><tr><td>PAS</td><td>Passport. Official travel document issued by a government to certify the holder's identity and nationality for international travel.</td></tr><tr><td>DRIVER_LICENSE</td><td>Driver's License. Official document issued by a governmental authority authorizing the holder to operate motor vehicles.</td></tr><tr><td>CPF</td><td>CPF (Individual Taxpayer Registry). Personal taxpayer identification number used in Brazil for both tax and identity verification purposes.</td></tr><tr><td>PAN</td><td>PAN (Permanent Account Number). Tax identification number issued in India for financial and taxation purposes.</td></tr><tr><td>SSN</td><td>SSN (Social Security Number). Identification number used in the United States for social security, taxation, and general identity verification.</td></tr><tr><td>OTHER</td><td>Other identification document not covered by the predefined list. When this value is used, the <i>Type Other Description</i> field must specify the document's nature.</td></tr></tbody></table></div></div></details> |
| **BookCriteria/Occupancies/Paxes/**<br />**IdentificationDocuments/Number** | String | Represents the unique identification number on the document. |
| **BookCriteria/Occupancies/Paxes/**<br />**IdentificationDocuments/Issuer** | String | Represents the issuing authority or country that issued the identification document. Use the country code defined by the ISO 3166-1 alpha-2 standard. |
| **BookCriteria/Occupancies/Paxes/**<br />**IdentificationDocuments/IssueDate** | String | Represents the date when the identification document was issued. The date must be formatted according to the  ISO 8601 format (YYYY-MM-DD). |
| **BookCriteria/Occupancies/Paxes/**<br />**IdentificationDocuments/ExpiryDate** | String | Represents the expiration date of the identification document. The date must be formatted according to the  ISO 8601 format (YYYY-MM-DD). |
| **BookCriteria/Occupancies/Paxes/**<br />**IdentificationDocuments/Nationality** | String | Represents the nationality of the passenger associated with the identification document. Use the country code defined by the ISO 3166-1 alpha-2 standard. |
| **BookCriteria/Occupancies/Paxes/**<br />**IdentificationDocuments/TypeOtherDescription** | String | Provides an additional textual description of the identification document when the `Type` is set to `DocumentType.OTHER`. The description should clearly specify the document's purpose or nature. |
| **BookCriteria/Occupancies/Paxes/**<br />**DateOfBirth** | String | Date of birth of the passenger, represented as a string in ISO 8601 format (YYYY-MM-DD). |
| **BookCriteria/Market** | String | Gets or sets the market for the booking. |
| **BookCriteria/Rooms** | Array&lt;[Room](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/room)&gt; | Gets the rooms for the booking. |
| **BookCriteria/Rooms/**<br />**OccupancyRefId** | Integer | Numeric ID linking this room to its occupancy data in the Occupancy. |
| **BookCriteria/Rooms/Code** | String | Unique code assigned to this room. |
| **BookCriteria/Rooms/Description** | String | Description of the room's features or characteristics. |
| **BookCriteria/Rooms/RoomPrice** | [RoomPrice](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/roomprice) | Pricing information for the room, including total price and currency details. |
| **BookCriteria/Rooms/RoomPrice/**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The total price of the room. |
| **BookCriteria/Rooms/RoomPrice/**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **BookCriteria/Rooms/RoomPrice/**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **BookCriteria/Rooms/RoomPrice/**<br />**Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **BookCriteria/Rooms/RoomPrice/**<br />**Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **BookCriteria/Rooms/RoomPrice/**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **BookCriteria/Rooms/RoomPrice/**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **BookCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **BookCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The price for each day of the room during the specified period. |
| **BookCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **BookCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **BookCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **BookCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **BookCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **BookCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **BookCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/Start** | Integer | The starting day of the pricing period (inclusive). |
| **BookCriteria/Rooms/RoomPrice/**<br />**PriceBreakdown/End** | Integer | The ending day of the pricing period (inclusive). |
| **BookCriteria/Rooms/Refundable** | Boolean | Indicates if the room is refundable based on the cancellation policy. |
| **BookCriteria/Rooms/**<br />**RefundableSpecified** | Boolean | Indicates whether the refundable status has been explicitly specified. |
| **BookCriteria/Rooms/**<br />**LegacyRoomId** | String | Legacy identifier for internal tracking. Automatically generated using OccupancyRefId and Code. |
| **BookCriteria/Rooms/Units** | Integer | Number of units available for this room type. |
| **BookCriteria/Rooms/RatePlan** | [RatePlan](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/rateplan) | Rate plan associated with this room. |
| **BookCriteria/Rooms/RatePlan/**<br />**Code** | String | The unique code for the rate plan. |
| **BookCriteria/Rooms/RatePlan/**<br />**Name** | String | The name of the rate plan. |
| **BookCriteria/Rooms/Promotions** | Array&lt;[Promotion](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/promotion)&gt; | Promotions or discounts applicable to this room. |
| **BookCriteria/Rooms/Promotions/**<br />**Code** | String | The unique code identifying the promotion. |
| **BookCriteria/Rooms/Promotions/**<br />**Name** | String | The name of the promotion. |
| **BookCriteria/Rooms/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remark)&gt; | Additional remarks or notes about this room. |
| **BookCriteria/Rooms/Remarks/**<br />**RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **BookCriteria/Rooms/Remarks/**<br />**Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **BookCriteria/Rooms/Surcharges** | Array&lt;[Surcharge](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/surcharge)&gt; | Additional surcharges applied to this room. |
| **BookCriteria/Rooms/Surcharges/**<br />**ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **BookCriteria/Rooms/Surcharges/**<br />**Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **BookCriteria/Rooms/Surcharges/**<br />**Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **BookCriteria/Rooms/Surcharges/**<br />**Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **BookCriteria/Rooms/Surcharges/**<br />**Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **BookCriteria/Rooms/Surcharges/**<br />**Price/Binding** | Boolean | Indicates whether the price is binding. |
| **BookCriteria/Rooms/Surcharges/**<br />**Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **BookCriteria/Rooms/Surcharges/**<br />**Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **BookCriteria/Rooms/Surcharges/**<br />**Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **BookCriteria/Rooms/Surcharges/**<br />**Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **BookCriteria/Rooms/Surcharges/**<br />**Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
| **BookCriteria/Rooms/**<br />**CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpolicy) | Cancellation policy specific to this room. |
| **BookCriteria/Rooms/**<br />**CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **BookCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **BookCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties/**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **BookCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties/**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **BookCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **BookCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties/**<br />**Value** | Double | Indicates the value of the penalty. |
| **BookCriteria/Rooms/**<br />**CancelPolicy/CancelPenalties/**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **BookCriteria/Rooms/**<br />**CancelPolicy/**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
| **BookCriteria/Rooms/Beds** | Array&lt;[Bed](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bed)&gt; | List of beds available in the room, including types and configurations. |
| **BookCriteria/Rooms/Beds/Type** | String | The type of the bed. |
| **BookCriteria/Rooms/Beds/**<br />**Description** | String | A description of the bed. |
| **BookCriteria/Rooms/Beds/Count** | Integer | The number of beds of this type in the room. |
| **BookCriteria/Rooms/Beds/Shared** | Boolean | Indicates whether the bed is shared. |
| **BookCriteria/Rooms/Amenities** | Array&lt;[Amenity](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amenity)&gt; | Amenities included with this room, such as Wi-Fi or parking. |
| **BookCriteria/Rooms/Amenities/**<br />**Code** | String | A unique code that identifies the amenity. |
| **BookCriteria/Rooms/Amenities/**<br />**Type** | [AmenityType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/amenitytype) | The type of the amenity, defined by AmenityType. |
| **BookCriteria/Rooms/Amenities/**<br />**Value** | String | The value associated with the amenity. |
| **BookCriteria/Rooms/Amenities/**<br />**Texts** | String | Additional textual information or description for the amenity. |
| **BookCriteria/Rooms/**<br />**UnitsSpecified** | Boolean | Indicates whether the number of units has been explicitly specified. |
| **BookCriteria/Rooms/Features** | Array&lt;[Feature](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/feature)&gt; | Features or custom attributes of the room, used for specific integrations. |
| **BookCriteria/Rooms/Features/**<br />**Code** | String | The unique code identifying the feature of the room. |
| **BookCriteria/PaymentType** | [PaymentType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paymenttype) | Gets the payment type for the booking. |
| **BookCriteria/Remarks** | Array&lt;[Remark](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remark)&gt; | Gets the remarks for the booking. |
| **BookCriteria/Remarks/**<br />**RemarkType** | [RemarkType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/remarktype) | The type of the remark, categorized by RemarkType, specifies its nature or purpose. It may refer to the hotel as a whole, a specific room being booked, services provided by the accommodation, or general remarks not tied to any particular entity. |
| **BookCriteria/Remarks/Text** | String | The text content of the remark, providing details or additional notes.This can include supplier-specific instructions, conditions, or general information. |
| **BookCriteria/ClientReference** | String | Gets the client reference for the booking. |
| **BookCriteria/BookPrice** | [BookPrice](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bookprice) | Gets the book price for the booking. |
| **BookCriteria/BookPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The price of the booking. |
| **BookCriteria/BookPrice/Price/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **BookCriteria/BookPrice/Price/**<br />**Binding** | Boolean | Indicates whether the price is binding. |
| **BookCriteria/BookPrice/Price/**<br />**Net** | Double | The net price paid by the Buyer to the Seller. |
| **BookCriteria/BookPrice/Price/**<br />**Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **BookCriteria/BookPrice/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **BookCriteria/BookPrice/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **BookCriteria/BookPrice/**<br />**DeltaPrice** | [DeltaPrice](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/deltaprice) | The delta price, representing any allowable price changes or adjustments. |
| **BookCriteria/BookPrice/**<br />**DeltaPrice/Amount** | Double | The fixed amount allowed for the delta price. |
| **BookCriteria/BookPrice/**<br />**DeltaPrice/Percentage** | Double | The percentage allowed for the delta price. |
| **BookCriteria/Holder** | [Holder](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/holder) | Gets or sets the holder information for the booking. |
| **BookCriteria/Holder/Name** | String | The name of the holder. |
| **BookCriteria/Holder/SurName** | String | The surname of the holder. |
| **BookCriteria/Holder/**<br />**PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/personaltitletype) | The personal title type of the holder. |
| **BookCriteria/Holder/**<br />**IdentificationDocuments** | Array&lt;[IdentificationDocument](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/identification-document)&gt; | The collection of passenger identification documents. |
| **BookCriteria/Holder/**<br />**IdentificationDocuments/Type** | [DocumentType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/document-type) | Document type represented as an enum. <details><summary>Document Type Options</summary><div><div><table><thead><tr><th><strong>Document Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>NONE</td><td>No identification document type has been specified. This value can be used when no document is required.</td></tr><tr><td>DNI</td><td>National Identity Card (DNI). Used in Spain and some Latin American countries as the main national identification document issued to citizens.</td></tr><tr><td>NIE</td><td>Foreigner Identity Card (NIE). Used in Spain for non-citizens or foreign residents who have legal status in the country.</td></tr><tr><td>PAS</td><td>Passport. Official travel document issued by a government to certify the holder's identity and nationality for international travel.</td></tr><tr><td>DRIVER_LICENSE</td><td>Driver's License. Official document issued by a governmental authority authorizing the holder to operate motor vehicles.</td></tr><tr><td>CPF</td><td>CPF (Individual Taxpayer Registry). Personal taxpayer identification number used in Brazil for both tax and identity verification purposes.</td></tr><tr><td>PAN</td><td>PAN (Permanent Account Number). Tax identification number issued in India for financial and taxation purposes.</td></tr><tr><td>SSN</td><td>SSN (Social Security Number). Identification number used in the United States for social security, taxation, and general identity verification.</td></tr><tr><td>OTHER</td><td>Other identification document not covered by the predefined list. When this value is used, the <i>Type Other Description</i> field must specify the document's nature.</td></tr></tbody></table></div></div></details> |
| **BookCriteria/Holder/**<br />**IdentificationDocuments/Number** | String | Represents the unique identification number on the document. |
| **BookCriteria/Holder/**<br />**IdentificationDocuments/Issuer** | String | Represents the issuing authority or country that issued the identification document. Use the country code defined by the ISO 3166-1 alpha-2 standard. |
| **BookCriteria/Holder/**<br />**IdentificationDocuments/IssueDate** | String | Represents the date when the identification document was issued. The date must be formatted according to the  ISO 8601 format (YYYY-MM-DD). |
| **BookCriteria/Holder/**<br />**IdentificationDocuments/ExpiryDate** | String | Represents the expiration date of the identification document. The date must be formatted according to the  ISO 8601 format (YYYY-MM-DD). |
| **BookCriteria/Holder/**<br />**IdentificationDocuments/Nationality** | String | Represents the nationality of the passenger associated with the identification document. Use the country code defined by the ISO 3166-1 alpha-2 standard. |
| **BookCriteria/Holder/**<br />**IdentificationDocuments/TypeOtherDescription** | String | Provides an additional textual description of the identification document when the `Type` is set to `DocumentType.OTHER`. The description should clearly specify the document's purpose or nature. |
| **BookCriteria/Holder/**<br />**ContactInfo** | [ContactInfo](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/contactinfo) | The contact information of the holder. |
| **BookCriteria/Holder/**<br />**ContactInfo/Email** | String | The email address of the passenger. |
| **BookCriteria/Holder/**<br />**ContactInfo/Phone** | String | The phone number of the passenger. |
| **BookCriteria/Holder/**<br />**ContactInfo/DateOfBirth** | String | Date of birth of the passenger, represented as a string in ISO 8601 format (YYYY-MM-DD). |
| **BookCriteria/PaymentCardInput** | [CreditCardInput](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/creditcardinput) | Gets the payment card input for the booking. |
| **BookCriteria/PaymentCardInput/**<br />**Type** | [CreditCardType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/creditcardtype) | The type of the credit card. |
| **BookCriteria/PaymentCardInput/**<br />**Number** | String | The credit card number. |
| **BookCriteria/PaymentCardInput/**<br />**Cvc** | String | The Card Verification Code (CVC) of the credit card. |
| **BookCriteria/PaymentCardInput/**<br />**Expiration** | [CreditCardExpiration](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/creditcardexpiration) | The expiration date of the credit card. |
| **BookCriteria/PaymentCardInput/**<br />**Expiration/Month** | Integer | The expiration month of the credit card. |
| **BookCriteria/PaymentCardInput/**<br />**Expiration/Year** | Integer | The expiration year of the credit card (last two digits). |
| **BookCriteria/PaymentCardInput/**<br />**Expiration/YearFull** | Integer | Gets the full four-digit year of the credit card expiration. |
| **BookCriteria/PaymentCardInput/**<br />**IsVcc** | Boolean | Indicates whether the credit card is a Virtual Credit Card (VCC). |
| **BookCriteria/PaymentCardInput/**<br />**Holder** | [Holder](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/holder) | The holder information of the credit card. |
| **BookCriteria/PaymentCardInput/**<br />**Holder/Name** | String | The name of the holder. |
| **BookCriteria/PaymentCardInput/**<br />**Holder/SurName** | String | The surname of the holder. |
| **BookCriteria/PaymentCardInput/**<br />**Holder/PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/personaltitletype) | The personal title type of the holder. |
| **BookCriteria/PaymentCardInput/**<br />**Holder/ContactInfo** | [ContactInfo](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/contactinfo) | The contact information of the holder. |
| **BookCriteria/PaymentCardInput/**<br />**Holder/ContactInfo/Email** | String | The email address of the passenger. |
| **BookCriteria/PaymentCardInput/**<br />**Holder/ContactInfo/Phone** | String | The phone number of the passenger. |
| **BookCriteria/PaymentCardInput/**<br />**VirtualCreditCard** | [VirtualCreditCard](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/virtualcreditcard) | The virtual credit card information, if applicable. |
| **BookCriteria/PaymentCardInput/**<br />**VirtualCreditCard/**<br />**VCCActivationDate** | String | Gets or sets the activation date of the virtual credit card. |
| **BookCriteria/PaymentCardInput/**<br />**VirtualCreditCard/**<br />**VCCDeactivationDate** | String | Gets or sets the deactivation date of the virtual credit card. |
| **BookCriteria/PaymentCardInput/**<br />**VirtualCreditCard/**<br />**VCCCurrentBalance** | Double | Gets or sets the current balance of the virtual credit card. |
| **BookCriteria/PaymentCardInput/**<br />**VirtualCreditCard/**<br />**VCCCurrencyCode** | String | Gets or sets the currency code for the virtual credit card balance. |
| **BookCriteria/PaymentCardInput/**<br />**ThreeDomainSecurity** | [ThreeDomainSecurity](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/threedomainsecurity) | The 3-D Secure authentication information for the credit card transaction. |
| **BookCriteria/PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**ThreeDSVersion** | String | Gets or sets the version of 3-D Secure protocol used. |
| **BookCriteria/PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**DSTransactionID** | String | Gets or sets the Directory Server Transaction ID. |
| **BookCriteria/PaymentCardInput/**<br />**ThreeDomainSecurity/XID** | String | Gets or sets the transaction identifier for 3-D Secure. |
| **BookCriteria/PaymentCardInput/**<br />**ThreeDomainSecurity/ECI** | String | Gets or sets the Electronic Commerce Indicator. |
| **BookCriteria/PaymentCardInput/**<br />**ThreeDomainSecurity/CAVV** | String | Gets or sets the Cardholder Authentication Verification Value. |
| **BookCriteria/PaymentCardInput/**<br />**ThreeDomainSecurity/PARes** | String | Gets or sets the Payer Authentication Response. |
| **BookCriteria/PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**PAResStatus** | [PAResStatus](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paresstatus) | Gets or sets the status of the Payer Authentication Response. |
| **BookCriteria/PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**CardEnrolledStatus** | [EnrolledStatus](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/enrolledstatus) | Gets or sets the enrollment status of the card in 3-D Secure. |
| **BookCriteria/PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**MerchantName** | String | Gets or sets the name of the merchant. |
| **BookCriteria/PaymentCardInput/**<br />**ThreeDomainSecurity/**<br />**SignatureStatus** | [SignatureStatus](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/signaturestatus) | Gets or sets the status of the signature in the 3-D Secure process. |
| **BookCriteria/PaymentCardInput/**<br />**UrlPayment** | [UrlPayment](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/urlpayment) | The URL payment information for the credit card transaction. |
| **BookCriteria/PaymentCardInput/**<br />**UrlPayment/Url** | String | Gets or sets the URL for the payment. |
| **BookCriteria/Parameters** | Array&lt;[Parameter](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/parameter)&gt; | Gets or sets the additional parameters for the booking. |
| **BookCriteria/Parameters/Key** | Integer | Identifies the parameter with a numeric key. |
| **BookCriteria/Parameters/Value** | String | Defines the value associated with the parameter. |
| **BookCriteria/Parameters/**<br />**ParameterType** | [ParameterType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/parametertype) | Specifies the type of the parameter (ParameterType), whether it is internal or supplier-related. |
| **BookCriteria/Parameters/**<br />**Immutable** | Boolean | Indicates whether the parameter remains constant throughout operations (e.g., from Search to Quote and Book). In second searches or quotes, an immutable parameter is used to identify and match the same option. |
| **BookCriteria/Parameters/RoomId** | Integer | Associates the parameter with a specific room, identified by its ID. |
| **Settings** | [BookSettings](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/booksettings) | The settings for the hotel booking. |
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
| **Settings/BusinessRules/**<br />**OptionsQuota** | Integer | The maximum number of options returned for each board in the search query. |
| **Settings/BusinessRules/**<br />**BusinessRuleType** | [BusinessRulesType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/businessrulestype) | The business rule type that determines how Search results are prioritized or filtered. |
| **Settings/Timeout** | String | Defines the timeout period for the operation as a string value.This indicates the maximum amount of time to wait for a supplier's response before timing out.The value must be provided in timestamp format (e.g., "00:05:00" for 5 minutes). |
| **Settings/TimeoutAsTimeSpan** | String | Converts the timeout value from the string representation (Timeout) into a TimeSpan for use in time-based operations. |
| **Settings/**<br />**IncludeProviderTransactions** | Boolean | Indicates whether detailed traces of provider transactions should be included in the operation's response.If enabled, the ProviderAudit field in responses will contain the transaction logs (e.g., requests and responses exchanged with the supplier). |
| **Settings/CommitRequired** | Boolean | Indicates whether a commit is required for the booking. |
