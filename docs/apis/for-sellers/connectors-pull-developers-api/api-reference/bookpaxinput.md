# BookPaxInput

Represents input data for a passenger (pax) in a hotel booking request.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Age** | Integer | The age of the passenger. |
| **Name** | String | The first name of the passenger. |
| **SurName** | String | The surname (last name) of the passenger. |
| **PersonalTitleType** | [PersonalTitleType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/personaltitletype) | The personal title type of the passenger. |
| **IdentificationDocuments** |  Array&lt;[IdentificationDocument](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/identification-document)&gt; | The collection of passenger identification documents. |
| **IdentificationDocuments/Type** | [DocumentType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/document-type) | Document type represented as an enum. <details><summary>Document Type Options</summary><div><div><table><thead><tr><th><strong>Document Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>NONE</td><td>No identification document type has been specified. This value can be used when no document is required.</td></tr><tr><td>DNI</td><td>National Identity Card (DNI). Used in Spain and some Latin American countries as the main national identification document issued to citizens.</td></tr><tr><td>NIE</td><td>Foreigner Identity Card (NIE). Used in Spain for non-citizens or foreign residents who have legal status in the country.</td></tr><tr><td>PAS</td><td>Passport. Official travel document issued by a government to certify the holder's identity and nationality for international travel.</td></tr><tr><td>DRIVER_LICENSE</td><td>Driver's License. Official document issued by a governmental authority authorizing the holder to operate motor vehicles.</td></tr><tr><td>CPF</td><td>CPF (Individual Taxpayer Registry). Personal taxpayer identification number used in Brazil for both tax and identity verification purposes.</td></tr><tr><td>PAN</td><td>PAN (Permanent Account Number). Tax identification number issued in India for financial and taxation purposes.</td></tr><tr><td>SSN</td><td>SSN (Social Security Number). Identification number used in the United States for social security, taxation, and general identity verification.</td></tr><tr><td>OTHER</td><td>Other identification document not covered by the predefined list. When this value is used, the <i>Type Other Description</i> field must specify the document's nature.</td></tr></tbody></table></div></div></details> |
| **IdentificationDocuments/Number** | String | Represents the unique identification number on the document. This property is optional when `Type` is set to `DocumentType.OTHER`. |
| **IdentificationDocuments/Issuer** | String | Represents the issuing authority or country that issued the identification document. Use the country code defined by the ISO 3166-1 alpha-2 standard. |
| **IdentificationDocuments/IssueDate** | String | Represents the date when the identification document was issued. The date must be formatted according to the  ISO 8601 format (YYYY-MM-DD). |
| **IdentificationDocuments/ExpiryDate** | String | Represents the expiration date of the identification document. The date must be formatted according to the  ISO 8601 format (YYYY-MM-DD). |
| **IdentificationDocuments/Nationality** | String | Represents the nationality of the passenger associated with the identification document. Use the country code defined by the ISO 3166-1 alpha-2 standard. |
| **IdentificationDocuments/TypeOtherDescription** | String | Provides an additional textual description of the identification document when the `Type` is set to `DocumentType.OTHER`. The description should clearly specify the document's purpose or nature. This property is mandatory when `Type` is set to `DocumentType.OTHER`. |
| **DateOfBirth** | String | Date of birth of the passenger, represented as a string in ISO 8601 format (YYYY-MM-DD). |
