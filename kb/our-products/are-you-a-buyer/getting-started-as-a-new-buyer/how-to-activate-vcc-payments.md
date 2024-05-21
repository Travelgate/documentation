---
sidebar_position: 4
title: "VCC Payments"
---
# VCC Payments

## How can I pay bookings using Virtual Credit Cards? 💳

To pay for bookings within the TravelgateX platform, you have various methods available depending on the [payment type](/kb/faqs/faqs-price/payment-types-at-tgx) returned by the supplier. Some of these methods require a credit card.

- **If you obtain or generate your own credit card**: Simply send the credit card information through our book mutation card input [`paymentCard`](/api/inputs/hotel-book-input), including the card type, number, CVC, and other relevant details.

- **If you cannot generate virtual credit cards (VCC)**: TravelgateX offers integration with several VCC suppliers who can create virtual credit cards for you at the time of reservation. For each hotel booking where you indicate in your request that a VCC is needed for payment, the system will connect with your VCC supplier to obtain the virtual credit card and use this information to complete the reservation with the hotel supplier. 

Check the following sections to see how our integrated VCC suppliers work in the TravelgateX Marketplace:

### Available actions with your VCC Supplier

Our VCC Generation plugin offers a range of features to enhance your payment experience:

1. **VccGen - Create a virtual credit card**: The [VCC Generator plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card) allows clients to create virtual credit cards with custom activation and expiration dates. This service provides all necessary card information, including cardholder name, card number, CVC, expiration date, and card type (e.g., VI). You can apply rules using the ‘genvcc.csv’ rules file to determine whether to use a specific VCC based on the rules and request parameters. More details about the rules file can be found [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card#file-format-specification).

2. **VccCan - Cancel a virtual credit card**: The [VCC Cancel plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card) cancels a virtual credit card identified by the ID returned in the Book response. The status of the card is returned in the `paymentInfo` field. Use rules in the 'genvcc.csv' file to specify the virtual credit card for cancellation. More details about the rules file can be found [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card#file-format-specification).


### Guide: Activating VCC Payments with Integrated VCC Suppliers

1. **Reach an agreement** with your chosen VCC payment provider to ensure seamless VCC transactions.
2. **Open a ticket with our [Customer Care team](https://app.travelgate.com/tickets)**, providing details about the VCC supplier, the credentials they provided, and the hotel Sellers for whom you wish to activate VCC payments. You will be notified once the activation is complete.
3. **Create your VCC Rules file and upload it to your FTP**.
4. **Finish the VCC Setup**:
    - **If you are using our Hotel-X Pull Buyers API**: Add the VCC Plugin to your Hotel-X Book and Cancel mutations.
    - **If you are using our Distribution Solution**: Access the Distribution Extranet and configure the "Allow VCC" rule in the configuration section at the agency level.  
      ![vcc_activation_1](https://storage.travelgate.com/kbase/vcc_activation_1.jpg)

:::note
The VCC plugin is **optional** and depends on the seller's willingness to accept VCC payments for both bookings and cancellations.
:::


### List of VCC Suppliers 📑

- Amadeus Virtual Account
- Ixaris (IXA)
- Ixaris - Voxel (VIXA)
- eNett (NET)
- WEX

<TipContactCustomerCare/>