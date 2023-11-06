---
sidebar_position: 4
---
# How to Activate VCC Payments

## VCC Payments Activation and Usage Guide

### How can I activate VCC payments with my Sellers?💡
1. **Reach an agreement** with the VCC Payment Provider of your choice. This crucial step sets the foundation for seamless VCC transactions.
1. **Open a ticket to our Customer Care team** and provide the required information regarding the VCC supplier, the credentials provided by them, and the Seller/s for whom you wish to activate VCC payments. They will notify you once the VCC activation is complete.
1. **Create your VCC Rules file and upload it to your FTP**.
1. **Finish the VCC Setup:**
    1. If you are connected to TravelgateX via our **Hotel-X Pull Buyers API**: Simply add the VCC Plugin to your Hotel-X Book and Cancel mutations.
    1. If you are connected to TravelgateX via **TravelgateX Distribution Solution**: Just access our Distribution Extranet and configure the "Allow VCC" Rule in the configuration section (at an Agency level).  
        ![vcc_activation_1](https://storage.travelgate.com/kbase/vcc_activation_1.jpg)


:::note
Keep in mind that the VCC plugin is **optional** and it depends on the Seller's willingness to accept VCC payments for both bookings and cancellations.
:::

### What is the goal of our VCC plugin?🚀
Our VCC Generation plugin is designed to revolutionize your payment experience. Here's what it brings to the table:

1. **VccGen - Create a virtual credit card**: Say goodbye to limitations. With [VccGen](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card), you can effortlessly generate a virtual credit card during the booking process. This means you can pay for your reservation using this virtual card.
1. **VccCan - Cancel a virtual credit card**: Plans change, and we get it. That's why we've included [VccCan](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card), a feature that allows you to cancel a virtual credit card as part of the cancellation process.

## VCC Generator✔️
The VCC Generator plugin allows clients to easily **create virtual credit cards** with customized activation and expiration dates. This service provides all the necessary information about the newly generated payment card, including the cardholder's name, credit card number, CVC, expiration date, and card type (e.g., VI). It also reveals the source or Supplier responsible for creating the virtual credit card.

You can apply rules using the ‘genvcc.csv’ rules file to determine whether or not to utilize a specific VCC. This decision is based on the rules defined within the file and the parameters specified in the request. More details about rules’s file [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card#file-format-specification).

### How to use the VCC Generator plugin:**  
Use this plugin by adding it to the settings in your Hotel-X Book Operation.

## VCC Cancel❌
The VCC Cancel plugin is responsible for **cancelling a virtual credit card** identified by the id returned in the Book response. The service will return the status of the payment card inside status field (in paymentInfo field). The utilization of this plugin is dependent on the successful completion of the booking cancellation.

To specify the virtual credit card to use for cancellation, you can set up a rule in the 'genvcc.csv' rule file. This rule will generate an access key, similar to the 'VCC generator' rule. You can establish rules within the ‘genvcc.csv’ rule file to determine the utilization of a particular VCC based on rules within the file and request parameters. More details about rule’s file [here](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card#file-format-specification).

### How to use the VCC Cancel plugin**

Use this plugin by adding it to the settings in your Hotel-X Cancel Operation.

:::tip
Don't forget to check our [API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card#file-format-specification) for further details on the VCC Plugin File format and specifications🔎
:::

### List of available card types💡

| Codes  | Names  |
| ---  |  --- |
| VI  |  Visa |
| AX  |  American Express |
| BC  |  BC Card |
| CA  |  MasterCard |
| CB  |  Carte Blanche |
| CU  |  China Union Pay |
| DS  |  Discover |
| DC  |  Diners Club |
| T  |  Carta Si |
| R	  |  Carte Bleue |
| N  |  Dankort |
| L  |  Delta |
| E  |  Electron |
| JC  |  Japan Credit Bureau |
| TO  |  Maestro |
| S	  |  Switch |
| EC  |  Electronic Cash |
| EU  |  EuroCard |
| TP  |  Universal Air Travel Card |
| OP  |  Optima |
| ER  |  Air Canada/RnRoute |
| XS  |  Access |
| O  |  Others |

 
### List of VCC Suppliers📑
- Amadeus Virtual Account
- Ixaris
- eNett
- WEX

<TipContactCustomerCare/>