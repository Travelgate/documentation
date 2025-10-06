# Price

Represents pricing details, including currency, net price, gross price, and additional pricing attributes.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Binding** | Boolean | Indicates whether the price is binding. |
| **Net** | Double | The net price paid by the Buyer to the Seller. |
| **Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **MinimumSellingPrice** | Double | The minimum selling price. |
