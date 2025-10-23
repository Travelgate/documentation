# IdentificationDocuments

Represents the identification documents of a passenger in a hotel booking request.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Type** |  [DocumentType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/document-type) | Document type represented as an enum. |
| **Number** | String | Represents the unique identification number on the document. |
| **Issuer** | String | Represents the issuing authority or country that issued the identification document. Use the country code defined by the ISO 3166-1 alpha-2 standard. |
| **IssueDate** | String | Represents the date when the identification document was issued. The date must be formatted according to the  ISO 8601 format (YYYY-MM-DD). |
| **ExpiryDate** | String | Represents the expiration date of the identification document. The date must be formatted according to the  ISO 8601 format (YYYY-MM-DD). |
| **Nationality** | String | Represents the nationality of the passenger associated with the identification document. Use the country code defined by the ISO 3166-1 alpha-2 standard. |
| **TypeOtherDescription** | String | Provides an additional textual description of the identification document when the `Type` is set to `DocumentType.OTHER`. The description should clearly specify the document’s purpose or nature. |
