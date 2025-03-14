# ThreeDomainSecurity

Represents the 3-D Secure authentication information for a hotel booking request.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **ThreeDSVersion** | String | Gets or sets the version of 3-D Secure protocol used. |
| **DSTransactionID** | String | Gets or sets the Directory Server Transaction ID. |
| **XID** | String | Gets or sets the transaction identifier for 3-D Secure. |
| **ECI** | String | Gets or sets the Electronic Commerce Indicator. |
| **CAVV** | String | Gets or sets the Cardholder Authentication Verification Value. |
| **PARes** | String | Gets or sets the Payer Authentication Response. |
| **PAResStatus** | [PAResStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/paresstatus) | Gets or sets the status of the Payer Authentication Response. |
| **CardEnrolledStatus** | [EnrolledStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/enrolledstatus) | Gets or sets the enrollment status of the card in 3-D Secure. |
| **MerchantName** | String | Gets or sets the name of the merchant. |
| **SignatureStatus** | [SignatureStatus](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/signaturestatus) | Gets or sets the status of the signature in the 3-D Secure process. |
