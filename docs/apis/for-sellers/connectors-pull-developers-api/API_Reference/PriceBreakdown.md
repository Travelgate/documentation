# PriceBreakdown

Represents a breakdown of daily prices for a specific room during a stay.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price for each day of the room during the specified period. |
| **Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Price/Net** | Double | The net price paid by the buyer to the seller. |
| **Price/Gross** | Double | The gross price, which includes the net price and the buyer's commission. |
| **Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **Start** | Integer | The starting day of the pricing period (inclusive). |
| **End** | Integer | The ending day of the pricing period (inclusive). |
