# BookPrice

Represents the price information for a hotel booking request.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The price of the booking. |
| **Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **DeltaPrice** | [DeltaPrice](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/deltaprice) | The delta price, representing any allowable price changes or adjustments. |
| **DeltaPrice/Amount** | Double | The fixed amount allowed for the delta price. |
| **DeltaPrice/Percentage** | Double | The percentage allowed for the delta price. |
