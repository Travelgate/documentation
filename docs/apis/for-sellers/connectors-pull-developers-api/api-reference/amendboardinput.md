# AmendBoardInput

Represents the input for amending a booking's board type.
Validation for this request is performed by verifying the metadata information.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Language** | String | Gets or sets the language code for the amendment request. |
| **AccommodationRq** | [AccommodationRQ](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accommodationrq) | Details of the accommodation associated with the amendment request, such as the accommodation type and code. |
| **AccommodationRq/Type** | [AccommodationType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accommodationtype) | Specifies the type of accommodation being requested, such as Hotel or Rental. |
| **AccommodationRq/Code** | String | Represents a unique code identifying the accommodation in the request. |
| **Reference** | [Reference](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/reference) | Reference information containing client, supplier, or hotel locators for the booking associated with the amendment request. Validation of these locators is performed based on the metadata restriction information. |
| **Reference/ClientLocator** | String | The booking locator provided by the client.This is typically used to match the booking in the client's internal systems. |
| **Reference/SupplierLocator** | String | The booking locator provided by the supplier.This identifier is used to reference the booking in the supplier's system. |
| **Reference/HotelLocator** | String | The booking locator specific to the hotel, provided by the supplier. (Optional)This may be required in cases where the hotel system uses its own unique identifiers. |
| **BoardCode** | String | Gets the code of the new board type. |
| **BoardName** | String | Gets or sets the name of the new board type. |
| **PaymentType** | [PaymentType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/paymenttype) | Gets or initializes the payment type for the amendment request. |
| **PaymentCardInput** | [CreditCardInput](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/creditcardinput) | Gets or initializes the credit card input for the amendment request. |
| **PaymentCardInput/Type** | [CreditCardType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/creditcardtype) | The type of the credit card. |
| **PaymentCardInput/Number** | String | The credit card number. |
| **PaymentCardInput/Cvc** | String | The Card Verification Code (CVC) of the credit card. |
| **PaymentCardInput/Expiration** | [CreditCardExpiration](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/creditcardexpiration) | The expiration date of the credit card. |
| **PaymentCardInput/Expiration/Month** | Integer | The expiration month of the credit card. |
| **PaymentCardInput/Expiration/Year** | Integer | The expiration year of the credit card (last two digits). |
| **PaymentCardInput/Expiration/YearFull** | Integer | Gets the full four-digit year of the credit card expiration. |
| **PaymentCardInput/IsVcc** | Boolean | Indicates whether the credit card is a Virtual Credit Card (VCC). |
| **PaymentCardInput/Holder** | [Holder](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/holder) | The holder information of the credit card. |
| **PaymentCardInput/Holder/Name** | String | The name of the holder. |
| **PaymentCardInput/Holder/SurName** | String | The surname of the holder. |
| **PaymentCardInput/Holder/PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/personaltitletype) | The personal title type of the holder. |
