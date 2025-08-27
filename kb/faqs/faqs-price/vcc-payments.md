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
2. **Submit a case** via our [Support Platform](https://app.travelgate.com/support), including details about your VCC supplier, credentials, and the Sellers for whom you wish to activate VCC payments. Our team will notify you once activation is complete.
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

| Name                  | Code  | Description                                                                                                   | Product Info |
|-----------------------|-------|---------------------------------------------------------------------------------------------------------------|--------------|
| Amadeus Virtual Account | AMV   | A secure and flexible virtual card solution for travel payments, powered by Amadeus.                         | [Official Link](https://amadeus.com/en/travel-sellers/products/b2b-wallet) |
| Ixaris (part of NIUM)         | IXA   | Virtual cards by Ixaris (a NIUM company), designed to optimize B2B travel payments and reduce costs. Allow you to create virtual cards, load them with money, monitor virtual card transactions and receive notifications of card activity.         | [Official Link](https://docs.nium.com/travel/docs/quick-start-guide) |
| Voxel       | VIXA  | Voxel offets B2B payment solution designed to orchestrate a fully digital, efficient, and frictionless payment process. It supports operations with 20+ payment providers and alternative payment methods, along with value-added services such as currency management and e-invoicing. | [Official Link](https://www.voxelgroup.net/bavel-pay-solution/) |
| Voxel                 | VOX   | It is the same payment solution of Voxel as the previous one, but this is a **legacy connection** version.        | [Official Link](https://www.voxelgroup.net/bavel-pay-solution/) |
| eNett (part of WEX)   | NET   | eNett (a WEX company) works with leading travel intermediaries to efficiently and securely pay travel suppliers anywhere in the world, helping its clients innovate at scale and win in a rapidly changing market. | [Official Link](https://www.wexinc.com/products/business-payments/virtual-cards/) |
| Citi                  | CITI  | Citi’s global virtual card solution helps businesses control spending, increase security, and improve reconciliation. | [Official Link](https://www.citibank.com/tts/solutions/commercial-cards/assets/docs/case-studies/1135896_GTS25543_VirtualCardAcct_SS_vF_27Sept2013.pdf) |
