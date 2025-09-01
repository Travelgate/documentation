# RoomPrice

Represents the price information for a room in a hotel Search response.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The total price of the room. |
| **Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **PriceBreakdown** | Array&lt;[PriceBreakdown](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/pricebreakdown)&gt; | Breakdown of the room price over specific periods, such as daily rates. |
| **PriceBreakdown/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | The price for each day of the room during the specified period. |
| **PriceBreakdown/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **PriceBreakdown/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **PriceBreakdown/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **PriceBreakdown/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **PriceBreakdown/Price/**<br />**NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **PriceBreakdown/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **PriceBreakdown/Start** | Integer | The starting day of the pricing period (inclusive). |
| **PriceBreakdown/End** | Integer | The ending day of the pricing period (inclusive). |
