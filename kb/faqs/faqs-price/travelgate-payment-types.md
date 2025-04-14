---
sidebar_position: 1
---

# Payment Types at Travelgate  

## Supported Payment Types 

Travelgate supports the following payment types:  

1. **MERCHANT** – The payment is handled by the Seller. **No credit card details** are required in the Book request.  
2. **DIRECT** – Payment is made directly to the payee (e.g., the hotel) without intermediaries. The payment is completed at check-in, and **credit card details must be included** in the Book request.  
3. **CARD_BOOKING** – The Seller manages the payment, which is processed at the time of booking. **Credit card details are required** in the Book request.  
4. **CARD_CHECK_IN** – The Seller manages the payment, which is processed at check-in. **Credit card details are required** in the Book request.  

## How to Check Which Payment Types a Seller Supports 

As a Buyer, you can run a **Metadata** query to check which payment options a Seller supports. Additionally, the specific payment types returned through the integration for your credentials depend on your account settings in the Seller’s system and the terms you’ve agreed upon.

Since payment terms are **established between Buyers and Sellers**, we recommend reaching out directly to the Seller for any commercial discussions.
