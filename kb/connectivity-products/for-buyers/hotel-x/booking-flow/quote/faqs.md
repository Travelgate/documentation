---
sidebar_position: 2
---

# FAQs

## Quote Request Limitations

### Do options get blocked in Hotel-X Quote Query? ⚠️

Some Sellers may block options when performing a Quote query. It is strongly recommended to contact them directly to prevent potential issues.

### Are there any limitations on the number of Hotel-X Quote requests allowed per minute? 🔢

There are no limitations on Requests Per Minute (RPM) or Transactions Per Minute (TPM) from Travelgate's side. However, some Sellers may impose their own restrictions, so it is advisable to contact them directly to confirm.

### Do I have to perform a Quote query in order to book an option?

Yes, to confirm a reservation, you must complete all three booking flow methods: Search, Quote, and Book.

### Can I group a set of Quotes to make a single reservation?

No, each Quote obtained through the Hotel-X API is linked to a unique option and must be booked individually. If you have multiple quotes, each must be booked separately by completing the full booking flow.

## Optimizing Quote Performance

### What can I do if I have many Searches but no Quotes?

A high number of searches without resulting quotes can negatively impact your Look-to-Book (L2B) ratio. To address this, consider using [Traffic Optimizer](https://docs.travelgate.com/kb/apps/smart-traffic-apps/traffic-optimizer/traffic-optimizer-app/). This tool enhances your connections by analyzing transaction data, improving the L2B ratio, reducing search traffic, and cutting costs by blacklisting non-converting hotels.

## Additional Information

### In a reservation for 2 rooms, if both have the same cancellation policy, should the penalties be summed up in the option node?

Yes, an option represents a combination of rooms. Canceling the option implies canceling all rooms, and therefore, the total penalty charges (for all the rooms) apply.

### Is there any possibility to obtain RoomCodes in Quote?

If the Seller provides this information, you can obtain the room code by including the `rooms` node in the `HotelOptionQuote` node.

![quote_1](https://storage.travelgate.com/kbase/quote_1.jpg)

### Is the hotel name included in the Quote response?

The Quote response does not include the hotel name. However, it can be retrieved from the Search Query response if the Supplier provides this information.

:::tip
Don't forget to check our [Hotel-X Pull Buyers API Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote#requests-examples) for a complete example of a Hotel-X Quote Query! 🚀
:::

