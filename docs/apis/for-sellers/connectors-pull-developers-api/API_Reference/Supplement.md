# Supplement

Represents a supplementary service or feature in a hotel search response event access.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Code** | String | The unique code identifying the supplement. |
| **Name** | String | The descriptive name of the supplement. |
| **Description** | String | An optional textual description providing additional details about the supplement. |
| **Mandatory** | Boolean | Indicates whether the supplement is mandatory for the booking. |
| **Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The Price associated with the supplement, including details such as currency and net price. |
| **Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **SupplementType** | [SupplementType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/supplementtype) | The specific SupplementType of the supplement (e.g., meal plan, additional service). |
| **ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Defines how the supplement is charged using ChargeType (e.g., per person, per stay). |
| **DurationType** | [DurationType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/durationtype) | Specifies whether the supplement applies to a specific duration (Open or Range). |
| **Quantity** | Integer | The quantity of the supplement included in the booking. |
| **StartDate** | String | The start date for the supplement (if applicable). |
| **StartDateAsDateTime** | String | The start date as a DateTime object for easier manipulation. |
| **EndDate** | String | The end date for the supplement (if applicable). |
| **EndDateAsDateTime** | String | The end date as a DateTime object for easier manipulation. |
| **Resort** | [Resort](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/resort) | The associated Resort where the supplement applies. |
| **Resort/Code** | String | Unique code that identifies the resort in the system. |
| **Resort/Name** | String | Name of the resort. |
| **Resort/Description** | String | Optional description providing additional details about the resort. |
| **Unit** | [UnitTimeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/unittimetype) | Specifies the unit of time for the supplement (e.g., per day, per stay) using UnitTimeType. |
