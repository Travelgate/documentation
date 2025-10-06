# FromBookCriteria

Represents the criteria for creating a Quote from a book request. 
This is used internally by the framework when a booking operation requires a secondary Quote.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **BookPrice** | [BookPrice](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/bookprice) | Contains the price details associated with the booking. |
| **BookPrice/Price** | [Price](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/price) | The price of the booking. |
| **BookPrice/Price/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | The currency of the price, represented in ISO 4217 format (e.g., USD, EUR). |
| **BookPrice/Price/Binding** | Boolean | Indicates whether the price is binding. |
| **BookPrice/Price/Net** | Double | The net price paid by the Buyer to the Seller. |
| **BookPrice/Price/Gross** | Double | The gross price, which includes the net price and the Buyer's commission. |
| **BookPrice/Price/NetSpecified** | Boolean | Indicates whether the net price is explicitly specified. |
| **BookPrice/Price/**<br />**MinimumSellingPrice** | Double | The minimum selling price. |
| **BookPrice/DeltaPrice** | [DeltaPrice](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/deltaprice) | The delta price, representing any allowable price changes or adjustments. |
| **BookPrice/DeltaPrice/Amount** | Double | The fixed amount allowed for the delta price. |
| **BookPrice/DeltaPrice/**<br />**Percentage** | Double | The percentage allowed for the delta price. |
| **DateQuote** | String | Represents the date when the Quote is generated during the booking process. |
| **CancelPolicy** | [CancelPolicy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpolicy) | Specifies the cancellation policy associated with the booking. |
| **CancelPolicy/Refundable** | Boolean | Indicates whether the booking is refundable. |
| **CancelPolicy/CancelPenalties** | Array&lt;[CancelPenalty](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/cancelpenalty)&gt; | A collection of penalties that apply if the booking is canceled. |
| **CancelPolicy/CancelPenalties/**<br />**HoursBefore** | Integer | Indicates the number of hours before the check-in date when the penalty becomes applicable. |
| **CancelPolicy/CancelPenalties/**<br />**PenaltyType** | [PenaltyType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/penaltytype) | Specifies the type of penalty enforced upon cancellation. |
| **CancelPolicy/CancelPenalties/**<br />**Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/currency) | Specifies the currency in which the penalty value is expressed. |
| **CancelPolicy/CancelPenalties/**<br />**Value** | Double | Indicates the value of the penalty. |
| **CancelPolicy/CancelPenalties/**<br />**Deadline** | String | Specifies the absolute deadline for the penalty in UTC format. |
| **CancelPolicy/**<br />**CancelPolicyDescription** | String | Provides additional details or a textual summary of the cancellation policy. |
