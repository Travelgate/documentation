# Surcharge

Represents a surcharge associated with a hotel booking. 
Surcharges typically include additional costs such as local taxes, fees, or optional extras.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **ChargeType** | [ChargeType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/chargetype) | Specifies whether the surcharge is included in the room rate or must be paid separately at the property. See ChargeType for possible values. |
| **Mandatory** | Boolean | Indicates whether this surcharge is mandatory. Mandatory surcharges, such as government taxes, must always be paid, while optional surcharges may depend on the guest's preferences. |
| **Description** | String | Provides a description of the surcharge, giving context about the type of cost it represents.Examples: "Tourist Tax", "Resort Fee", or "Additional Bed Fee". |
| **Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/price) | Represents the price of this surcharge, including the amount and currency. See Price for details about the price structure. |
| **Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **Price/Binding** | Boolean | Indicates whether the price is binding. |
| **Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **Price/MinimumSellingPrice** | Double | The minimum selling price. |
| **Code** | String | An optional code that uniquely identifies this surcharge for internal or external reference. This can be useful for tracking specific fees or integrating with supplier systems. |
