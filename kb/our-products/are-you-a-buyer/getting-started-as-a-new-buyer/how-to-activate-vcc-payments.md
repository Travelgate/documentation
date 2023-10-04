---
sidebar_position: 4
---
# How to Activate VCC Payments

## VCC Payments Activation and Usage Guide

### How can I activate VCC payments with my Sellers?💡
1. **Reach an agreement** with the VCC Payment Provider of your choice. This crucial step sets the foundation for seamless VCC transactions.
1. Reach out to our dedicated **[Customer Care team](https://app.travelgatex.com/tickets)** in order to activate this payment type for your connection or connections.
1. **Add the VCC Plugin** to your Hotel-X Book and Cancel requests.

:::note
Keep in mind that the VCC plugin is **optional** and it depends on the Seller's willingness to accept VCC payments for both bookings and cancellations.
:::

### What is the goal of our VCC plugin?🚀
Our VCC Generation plugin is designed to revolutionize your payment experience. Here's what it brings to the table:

1. **VccGen - Create a virtual credit card**: Say goodbye to limitations. With [VccGen](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/vcc/#what-does-vccgen), you can effortlessly generate a virtual credit card during the booking process. This means you can pay for your reservation using this virtual card.
1. **VccCan - Cancel a virtual credit card**: Plans change, and we get it. That's why we've included [VccCan](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/vcc/#what-does-vcccan), a feature that allows you to cancel a virtual credit card as part of the cancellation process.

## VCC Generator✔️
The VCC Generator plugin allows clients to easily **create virtual credit cards** with customized activation and expiration dates. This service provides all the necessary information about the newly generated payment card, including the cardholder's name, credit card number, CVC, expiration date, and [card type](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/vcc/#list-of-available-card-types) (e.g., VI). It also reveals the source or Supplier responsible for creating the virtual credit card.

You can apply rules using the ‘genvcc.csv’ rules file to determine whether or not to utilize a specific VCC. This decision is based on the rules defined within the file and the parameters specified in the request. More details about rules’s file [here](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/vcc/#file-format).

### How to use the VCC Generator plugin:**  
Use this plugin by adding it to the settings in your Hotel-X Book Operation.

## VCC Cancel❌
The VCC Cancel plugin is responsible for **cancelling a virtual credit card** identified by the id returned in the Book response. The service will return the status of the payment card inside status field (in paymentInfo field). The utilization of this plugin is dependent on the successful completion of the booking cancellation.

To specify the virtual credit card to use for cancellation, you can set up a rule in the 'genvcc.csv' rule file. This rule will generate an access key, similar to the 'VCC generator' rule. You can establish rules within the ‘genvcc.csv’ rule file to determine the utilization of a particular VCC based on rules within the file and request parameters. More details about rule’s file [here](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/vcc/#file-format).

### How to use the VCC Cancel plugin**

Use this plugin by adding it to the settings in your Hotel-X Cancel Operation.

:::tip
Don't forget to check our [API Documentation](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/vcc/) for further details on the VCC Plugin File format and specifications🔎
:::

 
### List of VCC Suppliers📑
- Amadeus Virtual Account
- Ixaris
- eNett
- WEX

:::info 
Have any doubts or questions? Don't hesitate to get in touch with our amazing Customer Care team via [Tickets](https://app.travelgatex.com/tickets) and they'll be happy to assist you⭐
:::
 