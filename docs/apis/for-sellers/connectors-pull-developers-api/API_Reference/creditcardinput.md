# CreditCardInput

Represents credit card input information for a hotel booking request.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Type** | [CreditCardType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/creditcardtype) | The type of the credit card. |
| **Number** | String | The credit card number. |
| **Cvc** | String | The Card Verification Code (CVC) of the credit card. |
| **Expiration** | [CreditCardExpiration](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/creditcardexpiration) | The expiration date of the credit card. |
| **Expiration/Month** | Integer | The expiration month of the credit card. |
| **Expiration/Year** | Integer | The expiration year of the credit card (last two digits). |
| **Expiration/YearFull** | Integer | Gets the full four-digit year of the credit card expiration. |
| **IsVcc** | Boolean | Indicates whether the credit card is a Virtual Credit Card (VCC). |
| **Holder** | [Holder](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/holder) | The holder information of the credit card. |
| **Holder/Name** | String | The name of the holder. |
| **Holder/SurName** | String | The surname of the holder. |
| **Holder/PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/personaltitletype) | The personal title type of the holder. |
| **Holder/ContactInfo** | [ContactInfo](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/contactinfo) | The contact information of the holder. |
| **Holder/ContactInfo/Email** | String | The email address of the passenger. |
| **Holder/ContactInfo/Phone** | String | The phone number of the passenger. |
| **VirtualCreditCard** | [VirtualCreditCard](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/virtualcreditcard) | The virtual credit card information, if applicable. |
| **VirtualCreditCard**<br />**VCCActivationDate** | String | Gets or sets the activation date of the virtual credit card. |
| **VirtualCreditCard**<br />**VCCDeactivationDate** | String | Gets or sets the deactivation date of the virtual credit card. |
| **VirtualCreditCard**<br />**VCCCurrentBalance** | Double | Gets or sets the current balance of the virtual credit card. |
| **VirtualCreditCard**<br />**VCCCurrencyCode** | String | Gets or sets the currency code for the virtual credit card balance. |
| **ThreeDomainSecurity** | [ThreeDomainSecurity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/threedomainsecurity) | The 3-D Secure authentication information for the credit card transaction. |
| **ThreeDomainSecurity**<br />**ThreeDSVersion** | String | Gets or sets the version of 3-D Secure protocol used. |
| **ThreeDomainSecurity**<br />**DSTransactionID** | String | Gets or sets the Directory Server Transaction ID. |
| **ThreeDomainSecurity/XID** | String | Gets or sets the transaction identifier for 3-D Secure. |
| **ThreeDomainSecurity/ECI** | String | Gets or sets the Electronic Commerce Indicator. |
| **ThreeDomainSecurity/CAVV** | String | Gets or sets the Cardholder Authentication Verification Value. |
| **ThreeDomainSecurity/PARes** | String | Gets or sets the Payer Authentication Response. |
| **ThreeDomainSecurity**<br />**PAResStatus** | [PAResStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/paresstatus) | Gets or sets the status of the Payer Authentication Response. |
| **ThreeDomainSecurity**<br />**CardEnrolledStatus** | [EnrolledStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/enrolledstatus) | Gets or sets the enrollment status of the card in 3-D Secure. |
| **ThreeDomainSecurity**<br />**MerchantName** | String | Gets or sets the name of the merchant. |
| **ThreeDomainSecurity**<br />**SignatureStatus** | [SignatureStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/signaturestatus) | Gets or sets the status of the signature in the 3-D Secure process. |
| **UrlPayment** | [UrlPayment](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/urlpayment) | The URL payment information for the credit card transaction. |
| **UrlPayment/Url** | String | Gets or sets the URL for the payment. |
