---
sidebar_position: 6
---

# VCC Payments

## Paying Bookings with Virtual Credit Cards (VCC)

Travelgate supports multiple payment methods depending on the [payment type](/kb/faqs/faqs-price/travelgate-payment-types) returned by the supplier. If a booking requires a credit card payment, you have two options:

- **Using Your Own Credit Card**: If you obtain or generate your own credit card, provide the card details in the book mutation card input [`paymentCard`](/api/types/inputs/hotel-book-input), including the card type, number, CVC, and other relevant details.
- **Using a Virtual Credit Card (VCC) Provider**: If you do not generate your own VCCs, Travelgate integrates with several VCC suppliers that can create a virtual credit card for each booking. When requesting a VCC for payment, the system connects with your VCC provider to generate and apply the virtual card automatically.

## VCC Supplier Features

Our **VCC Generation Plugin** offers key functionalities to streamline virtual card payments:

1. **VccGen - Generate a Virtual Credit Card**  
   The [VCC Generator Plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card) allows users to create VCCs with customizable activation and expiration dates. The system returns essential card details, including:
   - Cardholder name
   - Card number
   - CVC code
   - Expiration date
   - Card type (e.g., VI)

   Users can configure rules in the `genvcc.csv` file to determine when and how a VCC should be used. More details on the rules file can be found [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card#file-format-specification).

2. **VccCan - Cancel a Virtual Credit Card**  
   The [VCC Cancel Plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card) enables cancellation of a VCC using the ID returned in the Book response. The cancellation status appears in the `paymentInfo` field. Rules in the `genvcc.csv` file can be configured to determine which VCCs should be canceled. More details on this process can be found [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card#file-format-specification).

## Activating VCC Payments with Integrated VCC Suppliers

To enable VCC payments through Travelgate, follow these steps:

1. **Confirm an agreement** with your preferred VCC provider.
2. **Submit a case** via our [Support Portal](https://app.travelgate.com/support), including details about your VCC supplier, credentials, and the Sellers for whom you wish to activate VCC payments. Our team will notify you once activation is complete.
3. **Create and upload your VCC Rules file** to your SFTP.
4. **Complete the VCC setup**:
   - **For Hotel-X Pull Buyers API users**: Add the VCC Plugin to your Hotel-X Book and Cancel mutations.
   - **For Distribution Solution users**: Log into the **Distribution Extranet** and configure the "Allow VCC" rule at the agency level.
     
     ![vcc_activation_1](https://storage.travelgate.com/kbase/vcc_activation_1.jpg)

:::info
The VCC plugin is **optional** and depends on the Seller's acceptance of VCC payments for both bookings and cancellations.
:::

## Supported VCC Providers

Travelgate currently supports the following VCC providers:
- **Amadeus Virtual Account**
- **Ixaris (IXA)**
- **Ixaris - Voxel (VIXA)**
- **eNett (NET)**
- **WEX**
