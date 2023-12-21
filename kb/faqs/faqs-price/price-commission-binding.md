---
sidebar_position: 2
---

# All about price, commission and binding prices

### Overview: Price information in TravelgateX API response
As quick introduction, let’s consider that in each API Search response, we return the options available, detailing the following information, among other fields: 
```
"code": "5683",
"description": "Double Suite Deluxe",
"refundable": false,
"roomPrice": {
    "price": {
        “currency” : “USD”,
        “binding” : true,
        “net” : 150
        “gross” : 170,
        “exchange” : {
        “currency” : “USD”,
        “rate” : 1
        },
    “minimumSellingPrice” : 160,
    “markups” : null
    }
```

**What information can you receive in the "price" of an option?**  
Every option has a price and every price indicates:
1. Currency
1. Amount (net and gross in [Hotel-X Pull Buyers API](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart))
1. Binding
1. In the case of TravelgateX [Legacy Pull Buyers API](/docs/apis/for-buyers/legacy-pull-buyers-api/overview), we also provide the commission.
1. Markup applied over the supplier price, whenever provided.
### What is a Binding price?
When a price is tagged as "binding", it means it’s mandatory to sell over the amount indicated, gross or Minimum Selling Price if informed. It’s also called as mandatory price or PVP in Spain. 

**How does "binding" information work?**  
- If binding is set as **true**: it means that the Buyer must sell the hotel at least at the price provided by the Seller, not less.
- If binding is set as **false**: the Buyer can sell the product for a lower price than the one returned by them.
### How should I interpret the value in the field "minimumSellingPrice"?🔎
**What does minimumSellingPrice (MSP) mean?**  
The minimumSellingPrice (MSP) represents the *lowest price at which the Buyer can sell the Supplier's product* to their Customers. This feature was introduced in TravelgateX in 2022, as mentioned in the [implementation update](https://community.travelgatex.com/t/minor-update-notification-minimum-selling-price/2236). Previously, we relied on the binding tag to identify mandatory gross amounts that served as minimum selling prices.

**What Information does MSP return?**  
MSP field informs the *amount to be set as mandatory price* and allows Buyers to get a competitive pricing reference, especially valuable when we have have in place 3 different pricing amounts: 

- **Gross price:** gross amount to be subject to commission subtracting.
- **Net price:** net amount with no commission included, amount payable to the Seller.
- **Minimum Selling Price:** lowest price allowed to be marked up by the Buyer when selling to their own Customers.  

This parameter holds significant value since it helps us determine the exact amount we should use as a *reference for pricing*. Before, we could only use the gross amount as the minimum price and couldn't take other factors into account. But now, with this parameter, we have the awesome opportunity to set prices based on the exact amount needed to be competitive. It's a game-changer for making sure our prices are accurate and give us an edge in the market.  

Taking our previous example from Search:
```
“binding” : true,
“net” : 150
“gross” : 170,
“currency” : “USD”,
“minimumSellingPrice” : 160,
```
In this case, we cannot sell lower than 160; and if we had no MSP field, we would need to inform gross as the binding minimum amount and will not be so competitive.

### Could a Minimum Selling Price be lower than the gross amount? 
It's not something that happens often, but it's important to be aware that *it can occur*. When reselling hotel products, the final price is determined by the business rules agreed upon by all parties involved. So, if the Minimum Selling Price (MSP) is communicated and followed, a wholesaler might sell to a B2B Partner at a rate higher than the MSP in order to apply a larger markup. This strategy can still lead to sales due to is a high demand for the product.

For instance:

1. Hotel chain sells to a Bedbank with rates 10% commissionable:
    ```
    “binding” : true,
    “net” : 180,
    “gross” : 200,
    “currency” : “USD”,
    “minimumSellingPrice” : 200,
    ```
2. Bedbank sells to a B2B wholesaler and applies 9% markup, selling with net rates:
    ```
    “binding”: true,
    “net”: 196.2,
    “gross”: 196.2,
    “currency” : “USD”,
    “minimumSellingPrice” : 200,
    ```
3. B2B wholesaler sells to an OTA with 3% markup and net rates:
    ```
    “binding”: true,
    “net”: 202.08,
    “gross”: 202.08,
    “currency” : “USD”,
    “minimumSellingPrice” : 200,
    ```
As you can see, we always provide and maintain the minimum selling price as a reference. However, when multiple parties sell the same product, it's possible for the gross price to exceed the MSP initially set by the hotel chain.

**But does this mean the product is not competitive?** Not necessarily. While the rate may be higher than what the hotel chain offers on their website, there are situations where high demand and limited inventory make selling a room, even at a slightly higher price than the direct channel, a fantastic opportunity for our distributors.

### Can I obtain the Minimum Selling Price from all Sellers?
Since this field is relatively new, not all Sellers will have implemented this feature in their own API, which is integrated into our Marketplace. However, we will make sure to inform our Buyers about the Minimum Selling Price (MSP) whenever they utilize this field.

**Minimum Selling Price values:**

- “minimumSellingPrice” = amount: the lowest possible amount that can be sold commercially
- “minimumSellingPrice” = 0: no minimum selling price is provided.
- “minimumSellingPrice” = -1: we have no information about MSP from the Seller

### Should I ignore the binding field when using Minimum Selling Price?
Since we are handling highly sensitive information that can have a significant impact on your business, we strongly recommend that you always make *proper use of both fields.*
- **Binding field:** used in order to determine whether the amount is mandatory or not.
- **Minimum Selling Price field:** used in order to build your prices based on price restrictions and competitiveness.
### What should I do if I haven't implemented the Minimum Selling Price yet as a Buyer and I receive NET=Gross?
- If you receive **binding = true** and the Seller **returns** the Minimum Selling Price (MSP):
Minimum Selling Price = Gross
- If you receive **binding = false** and the Seller **does not return** the Minimum Selling Price (MSP):
There is pricing freedom
### How should I interpret the value in the field "commission" in Hotel Buyers API (Legacy)?
In Hotel-X, we provide both the "Net" and "Gross" prices for each rate to help with calculations. However, in our Legacy Pull Buyers API, we only provide the amount, commission, and binding information. For instance:
```
<Room id = "4145" roomCandidateRefId = "1" code = "DBL#STAND" description = "Doble Standard" nonRefundable = "false" numberOfUnits = "5">
<Price currency = "EUR" amount = "36.20" binding = "false" commission = "-1"/>
```
**Commission values:**
- Commission = 0: the price returned is a net price.
- Commission = -1: the Seller has not provided the Selling price nor the commission. In case it exists, commission has been agreed at a contractual level with the Seller and it is not traveling via TravelgateX. 
- Commission is greater than 0: X = % of the commission that is applied to the amount.

**How can I check the commission amount in Hotel-X Buyers API?**  
There is *no commission field in Hotel-X Pull Buyers API*, as we simplify the process by calculating net amount. If you need to know the specific amount deducted as commission, you just need to subtract the net from the gross amount: **Gross - net = commission**

 
:::warning Important:
Please keep in mind that if you don't follow these rules, you may put at risk your commercial agreement with the Seller.
:::

 